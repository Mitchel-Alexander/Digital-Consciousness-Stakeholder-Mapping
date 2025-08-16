# PRISM - Stakeholder Mapping Knowledge Graph

This repository contains an Obsidian-compatible knowledge graph for mapping stakeholders in AI consciousness, digital minds, and related research areas.

## How to Use

### Setup in Obsidian

1. **Install Obsidian**: If you haven't already, download and install [Obsidian](https://obsidian.md/).

2. **Open as Vault**: 
   - Open Obsidian
   - Click "Open folder as vault"
   - Select the "PRISM - Stakeholder Mapping" folder

3. **Enable Graph View**:
   - Click on the graph icon in the left sidebar or use Ctrl+G (Cmd+G on Mac)
   - This will show you the connections between all stakeholders and research areas

### Navigation

- **Start at the Index**: Open `Stakeholders/00_Stakeholder_Index.md` for a central hub that links to all stakeholders
- **Explore by Category**: Check the sections in the index to browse stakeholders by category
- **Use the Graph**: The graph view shows visual connections between stakeholders, institutions, and research areas
- **Search**: Use Obsidian's search functionality (Ctrl+F or Cmd+F) to find specific stakeholders or topics

### Key Features

- **Individual Stakeholder Pages**: Each stakeholder has their own page with:
  - Basic information (name, institution, website)
  - Research focus
  - Connections to other stakeholders
  - Publications
  - Notes section for your personal observations
  - Tags for categorization

- **Research Area Pages**: Key research topics have dedicated pages:
  - AI Consciousness
  - Digital Minds
  - Moral Status
  - AI Ethics
  - Philosophy of Mind

- **Institution Pages**: Major institutions have their own pages:
  - University of Oxford
  - Anthropic
  - And more

### Customization

- **Add Notes**: Each stakeholder page has a Notes section where you can add your own observations
- **Add Connections**: You can manually add connections between stakeholders by editing their pages
- **Create New Pages**: As you discover new stakeholders or concepts, create new pages and link them to existing ones
- **Add Tags**: Use tags to create your own categorization system

## Expanding the Knowledge Graph

This knowledge graph is designed to be expanded and customized:

1. **Add New Stakeholders**: Create new markdown files for additional stakeholders using the template
2. **Update Information**: As you learn more about each stakeholder, update their pages
3. **Add Research Papers**: Link to or summarize important papers in the field
4. **Create Project Pages**: Add pages for specific projects or research initiatives
5. **Document Events**: Create pages for conferences, workshops, or other events

## Technical Details

The knowledge graph is created from:
- A CSV file containing basic stakeholder information
- A Python script (`generate_stakeholder_pages.py`) that generates individual markdown files
- Manually created index and category pages

The connections between stakeholders are generated based on:
- Shared institutions
- Common research interests
- Direct collaborations (where known)

## Tags Used

- Research areas: #consciousness #digital_minds #moral_status #ethics #philosophy_of_mind
- Sectors: #academia #industry #research_org
- Institutions: #oxford #anthropic #deepmind #sentience_institute

## Maintenance

To update the knowledge graph with new information:
1. Update the CSV file with new stakeholders or information
2. Run the Python script to regenerate individual pages
3. Manually update any category or index pages as needed
