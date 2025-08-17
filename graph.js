// D3.js Force-directed graph visualization
let graph = {};

// Node color mapping
function getNodeColor(d) {
    if (d.type === 'research_area') return '#88bab5';
    if (d.type === 'institution') return '#159ed4';
    if (d.type === 'stakeholder') return '#97b0ba';
    return '#ccc';
}

// Node size mapping
function getNodeSize(d, links) {
    if (d.type === 'research_area') return 12;
    if (d.type === 'institution') return 10;
    if (d.type === 'stakeholder') return 5;
    return 5;
}

// Get connection count for a node
function getConnectionCount(nodeId, links) {
    return links.filter(link => {
        const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
        const targetId = typeof link.target === 'object' ? link.target.id : link.target;
        return sourceId === nodeId || targetId === nodeId;
    }).length;
}

// Generate links between nodes based on tags and institutions
function generateLinks() {
    const links = [];
    const stakeholders = stakeholderData.filter(s => s.type === "stakeholder");

    // Connect stakeholders to research areas
    stakeholders.forEach(stakeholder => {
        if (stakeholder.tags && stakeholder.tags.length > 0) {
            stakeholder.tags.forEach(tag => {
                if (stakeholderData.some(n => n.id === tag.replace(/_/g, '-') && n.type === 'research_area')) {
                    links.push({ source: stakeholder.id, target: tag.replace(/_/g, '-'), value: 1 });
                }
            });
        }
        
        // Connect to institutions
        if (stakeholder.institution) {
            const institutions = stakeholder.institution.split(' / ');
            institutions.forEach(instName => {
                const institutionNode = stakeholderData.find(d => d.type === 'institution' && instName.trim().includes(d.name));
                if (institutionNode) {
                    links.push({ source: stakeholder.id, target: institutionNode.id, value: 1 });
                }
            });
        }
    });
    
    // Add connections between stakeholders based on shared research and institutions
    for (let i = 0; i < stakeholders.length; i++) {
        for (let j = i + 1; j < stakeholders.length; j++) {
            const stakeholder1 = stakeholders[i];
            const stakeholder2 = stakeholders[j];
            
            let connectionType = null;
            
            if (stakeholder1.institution && stakeholder2.institution && 
                stakeholder1.institution === stakeholder2.institution && 
                stakeholder1.institution !== "") {
                connectionType = "institution";
            }
            
            if (stakeholder1.relevantResearch && stakeholder2.relevantResearch) {
                const sharedResearch = stakeholder1.relevantResearch.filter(r1 => 
                    stakeholder2.relevantResearch.some(r2 => r2.title === r1.title)
                );
                if (sharedResearch.length > 0) {
                    connectionType = "collaboration";
                }
            }
            
            if (connectionType) {
                const linkExists = links.some(link => 
                    (link.source === stakeholder1.id && link.target === stakeholder2.id) ||
                    (link.source === stakeholder2.id && link.target === stakeholder1.id)
                );
                
                if (!linkExists) {
                    links.push({
                        source: stakeholder1.id,
                        target: stakeholder2.id,
                        value: connectionType === "collaboration" ? 3 : 1,
                        type: connectionType
                    });
                }
            }
        }
    }
    
    return links;
}

// Initialize the force simulation
function initializeGraph() {
    const container = document.getElementById('graph-container');
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    d3.select("#graph-container svg").remove();
    
    const svg = d3.select("#graph-container")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .on("click", () => {
            if (graph.link && graph.node) {
                resetHighlight(graph.link, graph.node);
            }
        });

    const g = svg.append("g");
    
    const links = generateLinks();
    const nodes = stakeholderData;
    
    const centerX = width / 2;
    const centerY = height / 2;

    const researchAreaNodes = nodes.filter(d => d.type === 'research_area');
    const numResearchAreas = researchAreaNodes.length;
    const radius = Math.min(width, height) / 3.5;
    researchAreaNodes.forEach((node, i) => {
        const angle = (i / numResearchAreas) * 2 * Math.PI - Math.PI / 2;
        node.fx = centerX + radius * Math.cos(angle);
        node.fy = centerY + radius * Math.sin(angle);
    });

    const institutionNodes = nodes.filter(d => d.type === 'institution');
    const numInstitutions = institutionNodes.length;
    const institutionRadius = Math.min(width, height) / 2.2;
    institutionNodes.forEach((node, i) => {
        const angle = (i / numInstitutions) * 2 * Math.PI;
        node.fx = centerX + institutionRadius * Math.cos(angle);
        node.fy = centerY + institutionRadius * Math.sin(angle);
    });
    
    const tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);
    
    const simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(d => d.id).distance(150))
        .force("charge", d3.forceManyBody().strength(d => -300 - getConnectionCount(d.id, links) * 50))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("x", d3.forceX(width / 2).strength(d => d.type === 'stakeholder' ? 0.05 + getConnectionCount(d.id, links) * 0.01 : 0))
        .force("y", d3.forceY(height / 2).strength(d => d.type === 'stakeholder' ? 0.05 + getConnectionCount(d.id, links) * 0.01 : 0))
        .force("collide", d3.forceCollide().radius(d => getNodeSize(d, links) * 3));
    
    const link = g.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(links)
        .enter().append("line")
        .attr("class", "link")
        .attr("stroke-width", d => Math.sqrt(d.value));
    
    const node = g.append("g")
        .attr("class", "nodes")
        .selectAll("g")
        .data(nodes)
        .enter().append("g")
        .attr("class", "node")
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));
    
    node.append("circle")
        .attr("r", d => getNodeSize(d, links))
        .attr("fill", d => getNodeColor(d))
        .attr("stroke", "#fff")
        .attr("stroke-width", 1.5);
    
    node.append("text")
        .text(d => d.name)
        .attr("x", d => getNodeSize(d, links) + 5)
        .attr("y", 3)
        .style("font-size", "10px")
        .style("fill", "#333");
    
    node.append("title")
        .text(d => d.name);
    
    simulation.on("tick", () => {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);
        
        node
            .attr("transform", d => `translate(${d.x},${d.y})`);
    });
    
    node.on("click", function(event, d) {
        showStakeholderInfo(d, links);
        highlightConnections(d, links, link, node);
        event.stopPropagation();
    });
    
    node.on("mouseover", function(event, d) {
        tooltip.transition()
            .duration(200)
            .style("opacity", .9);
        
        let tooltipContent = `<strong>${d.name}</strong>`;
        if (d.type === "stakeholder" && d.institution) {
            tooltipContent += `<br>${d.institution}`;
        } else if (d.type !== "stakeholder") {
            tooltipContent += `<br>${d.type.replace(/_/g, " ")}`;
        }
        
        tooltip.html(tooltipContent)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", function() {
        tooltip.transition()
            .duration(500)
            .style("opacity", 0);
    });
    
    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }
    
    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }
    
    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        if (d.type === 'stakeholder') {
            d.fx = null;
            d.fy = null;
        }
    }
    
    const zoom = d3.zoom()
        .scaleExtent([0.1, 4])
        .on("zoom", (event) => {
            g.attr("transform", event.transform);
        });
    
    svg.call(zoom);
    
    document.getElementById("zoom-in").addEventListener("click", () => {
        zoom.scaleBy(svg.transition().duration(750), 1.2);
    });
    
    document.getElementById("zoom-out").addEventListener("click", () => {
        zoom.scaleBy(svg.transition().duration(750), 0.8);
    });
    
    document.getElementById("reset-zoom").addEventListener("click", () => {
        svg.transition().duration(750).call(zoom.transform, d3.zoomIdentity);
    });

    const sidebar = document.querySelector(".sidebar");
    const toggleSidebar = document.getElementById("toggle-sidebar");
    toggleSidebar.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
        toggleSidebar.innerHTML = sidebar.classList.contains("collapsed") ? "»" : "«";
    });

    const darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        updateNodeTextColors();
        localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
    });

    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }
    
    updateNodeTextColors();

    return { svg, nodes, links, simulation, node, link };
}

function updateNodeTextColors() {
    const isDarkMode = document.body.classList.contains("dark-mode");
    d3.selectAll(".node text").style("fill", isDarkMode ? "#ecf0f1" : "#333");
}

function showStakeholderInfo(stakeholder, links) {
    const infoDiv = document.getElementById('stakeholder-info');
    let content = `<h2>${stakeholder.name}</h2>`;

    if (stakeholder.type === 'stakeholder') {
        if (stakeholder.position) {
            content += `<p><strong>Position:</strong> ${stakeholder.position}</p>`;
        }
        if (stakeholder.department) {
            content += `<p><strong>Department:</strong> ${stakeholder.department}</p>`;
        }
        if (stakeholder.institution) {
            content += `<p><strong>Institution:</strong> ${stakeholder.institution}</p>`;
        }
        if (stakeholder.webpage) {
            content += `<p><strong>Website:</strong> <a href="${stakeholder.webpage}" target="_blank">${stakeholder.webpage}</a></p>`;
        }
        if (stakeholder.tags) {
            content += '<div><strong>Tags:</strong> ';
            stakeholder.tags.forEach(tag => {
                content += `<span class="tag tag-${tag}">${tag.replace(/_/g, ' ')}</span>`;
            });
            content += '</div>';
        }
        if (stakeholder.relevantResearch && stakeholder.relevantResearch.length > 0) {
            const researchByCat = stakeholder.relevantResearch.reduce((acc, res) => {
                const cat = res.category || 'Selected Research';
                if (!acc[cat]) {
                    acc[cat] = [];
                }
                acc[cat].push(res);
                return acc;
            }, {});

            for (const category in researchByCat) {
                content += `<h4>${category}</h4><ul>`;
                researchByCat[category].forEach(item => {
                    content += `<li><a href="${item.url}" target="_blank">${item.title}</a></li>`;
                });
                content += '</ul>';
            }
        }
    } else {
        content += `<p><strong>Type:</strong> ${stakeholder.type.replace(/_/g, ' ')}</p>`;
    }
    
    infoDiv.innerHTML = content;
}

function highlightConnections(d, links, linkElements, nodeElements) {
    const connectedNodeIds = new Set();
    connectedNodeIds.add(d.id);

    links.forEach(link => {
        const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
        const targetId = typeof link.target === 'object' ? link.target.id : link.target;
        if (sourceId === d.id) connectedNodeIds.add(targetId);
        if (targetId === d.id) connectedNodeIds.add(sourceId);
    });

    nodeElements.style("opacity", n => connectedNodeIds.has(n.id) ? 1 : 0.1);
    linkElements.style("opacity", l => {
        const sourceId = typeof l.source === 'object' ? l.source.id : l.source;
        const targetId = typeof l.target === 'object' ? l.target.id : l.target;
        return sourceId === d.id || targetId === d.id ? 1 : 0.1;
    });
}

function resetHighlight(linkElements, nodeElements) {
    nodeElements.style("opacity", 1);
    linkElements.style("opacity", 0.6);
}

// Initialize search functionality
function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        if (!searchTerm) {
            graph.node.style('opacity', 1);
            graph.link.style('opacity', 0.6);
            return;
        }
        
        const matchedNodeIds = new Set();
        stakeholderData.forEach(node => {
            let isMatch = false;
            if (node.name.toLowerCase().includes(searchTerm)) isMatch = true;
            if (node.institution && node.institution.toLowerCase().includes(searchTerm)) isMatch = true;
            if (node.relevantResearch && node.relevantResearch.some(r => r.title.toLowerCase().includes(searchTerm))) isMatch = true;
            
            if (isMatch) {
                matchedNodeIds.add(node.id);
            }
        });
        
        graph.node.style('opacity', d => matchedNodeIds.has(d.id) ? 1 : 0.1);
        
        graph.link.style('opacity', d => {
            const sourceId = typeof d.source === 'object' ? d.source.id : d.source;
            const targetId = typeof d.target === 'object' ? d.target.id : d.target;
            return matchedNodeIds.has(sourceId) && matchedNodeIds.has(targetId) ? 0.6 : 0.1;
        });
    });
}

// Initialize filter functionality
function initializeFilters() {
    const filterCheckboxes = document.querySelectorAll('.filter');
    
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
}

// Apply filters to the graph
function applyFilters() {
    const selectedResearchAreas = new Set(Array.from(document.querySelectorAll('.filter[data-type="research"]:checked')).map(cb => cb.value));
    const selectedSectors = new Set(Array.from(document.querySelectorAll('.filter[data-type="sector"]:checked')).map(cb => cb.value));

    const matchedStakeholderIds = new Set();
    stakeholderData.forEach(node => {
        if (node.type !== 'stakeholder') return;

        const researchFilterActive = selectedResearchAreas.size > 0 && selectedResearchAreas.size < 5;
        const sectorFilterActive = selectedSectors.size > 0 && selectedSectors.size < 3;

        let hasResearchMatch = !researchFilterActive;
        let hasSectorMatch = !sectorFilterActive;

        if (researchFilterActive) {
            hasResearchMatch = node.tags && node.tags.some(tag => selectedResearchAreas.has(tag.replace(/_/g, '-')));
        }
        if (sectorFilterActive) {
            hasSectorMatch = node.tags && node.tags.some(tag => selectedSectors.has(tag));
        }

        let isMatch = false;
        if (researchFilterActive && sectorFilterActive) {
            isMatch = hasResearchMatch || hasSectorMatch;
        } else if (researchFilterActive) {
            isMatch = hasResearchMatch;
        } else if (sectorFilterActive) {
            isMatch = hasSectorMatch;
        } else {
            isMatch = true; 
        }

        if (isMatch) {
            matchedStakeholderIds.add(node.id);
        }
    });

    graph.node
        .style('display', d => {
            if (d.type === 'research_area') {
                return selectedResearchAreas.has(d.id) ? 'block' : 'none';
            }
            return 'block';
        })
        .style('opacity', d => {
            if (d.type === 'stakeholder') {
                return matchedStakeholderIds.has(d.id) ? 1 : 0.1;
            }
            return 1;
        });

    graph.link
        .style('display', d => {
            const sourceId = typeof d.source === 'object' ? d.source.id : d.source;
            const targetId = typeof d.target === 'object' ? d.target.id : d.target;
            if (stakeholderData.find(n => n.id === sourceId)?.type === 'research_area' && !selectedResearchAreas.has(sourceId)) {
                return 'none';
            }
            if (stakeholderData.find(n => n.id === targetId)?.type === 'research_area' && !selectedResearchAreas.has(targetId)) {
                return 'none';
            }
            return 'block';
        })
        .style('opacity', d => {
            const sourceId = typeof d.source === 'object' ? d.source.id : d.source;
            const targetId = typeof d.target === 'object' ? d.target.id : d.target;
            
            const sourceIsVisible = (stakeholderData.find(n => n.id === sourceId)?.type !== 'stakeholder') || matchedStakeholderIds.has(sourceId);
            const targetIsVisible = (stakeholderData.find(n => n.id === targetId)?.type !== 'stakeholder') || matchedStakeholderIds.has(targetId);
            
            return sourceIsVisible && targetIsVisible ? 0.6 : 0.1;
        });
}


// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    graph = initializeGraph();
    initializeSearch();
    // initializeFilters();
});
