// Stakeholder data extracted from CSV
const stakeholderData = [
    {
        id: "derek-shiller",
        name: "Derek Shiller",
        institution: "Rethink Priorities",
        webpage: "https://derekshiller.com/",
        contact: "",
        notableResearch: "",
        tags: ["ai_safety_alignment", "digital_consciousness"],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "nick-bostrom",
        name: "Nick Bostrom",
        institution: "",
        webpage: "",
        contact: "",
        notableResearch: "",
        tags: ["research_org", "ai_safety_alignment"],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "carl-shulman",
        name: "Carl Shulman",
        institution: "",
        webpage: "",
        contact: "",
        notableResearch: "",
        tags: ["academia", "industry", "digital_consciousness"],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "murray-shanahan",
        name: "Murray Shanahan",
        institution: "Imperial College London / Google DeepMind",
        webpage: "",
        contact: "",
        notableResearch: "",
        tags: ["academia", "industry", "digital_consciousness"],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "david-gunkel",
        name: "David Gunkel",
        institution: "",
        webpage: "",
        contact: "",
        notableResearch: "",
        tags: ["ai_safety_alignment"],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "josha-bach",
        name: "Josha Bach",
        institution: "",
        webpage: "",
        contact: "",
        notableResearch: "",
        tags: ["digital_consciousness", "philosophy_of_mind"],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "eric-schwitzgebel",
        name: "Eric Schwitzgebel",
        institution: "",
        webpage: "",
        contact: "",
        notableResearch: "",
        tags: ["philosophy_of_mind", "digital_consciousness"],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "michael-gratziano",
        name: "Michael Gratziano",
        institution: "",
        webpage: "",
        contact: "",
        notableResearch: "",
        tags: ["digital_consciousness"],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "rose-guingrich",
        name: "Rose Guingrich",
        institution: "Princeton University",
        department: "Psychology & Social Policy",
        position: "Doctoral Researcher",
        webpage: "https://roseguingrich.com/",
        contact: "",
        notableResearch: "",
        tags: ["academia", "digital_consciousness", "moral_status"],
        type: "stakeholder",
        relevantResearch: [
            {
                title: "Chatbots as Social Companions: How People Perceive Consciousness, Human Likeness, and Social Health Benefits in Machines (2025)",
                url: "https://roseguingrich.com/wp-content/uploads/2025/03/guingrich-graziano-chatbots-as-social-companions.pdf",
                category: "Selected Research"
            },
            {
                title: "Ascribing Consciousness to Artificial Intelligence: Human-AI Interaction and its Carry-Over Effects on Human-Human Interaction (2024)",
                url: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2024.1322781/full",
                category: "Selected Research"
            }
        ]
    },
    {
        id: "peter-godfrey-smith",
        name: "Peter Godfrey-Smith",
        institution: "University of Sydney",
        webpage: "https://petergodfreysmith.com/",
        contact: "",
        notableResearch: "",
        tags: ["academia", "philosophy_of_mind", "digital_consciousness"],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "clara-columbatto",
        name: "Clara Colombatto",
        institution: "University of Waterloo (Department of Psychology)",
        position: "Assistant Professor",
        webpage: "https://claracolombatto.com/index.html",
        contact: "",
        notableResearch: "",
        tags: ["academia", "cognitive_science"],
        type: "stakeholder",
        relevantResearch: [
            {
                title: "The influence of mental state attributions on trust in large language models (2025)",
                url: "https://www.nature.com/articles/s44271-025-00262-1",
                category: "Selected Research"
            },
            {
                title: "Folk psychological attributions of consciousness to large language models (2024)",
                url: "https://academic.oup.com/nc/article/2024/1/niae013/7644104",
                category: "Selected Research"
            }
        ]
    },
    {
        id: "jaan-aru",
        name: "Jaan Aru",
        institution: "University of Tartu",
        position: "Associate Professor",
        webpage: "https://sites.google.com/view/jaanaru",
        contact: "",
        notableResearch: "",
        tags: ["academia", "digital_consciousness", "cognitive_science"],
        type: "stakeholder",
        relevantResearch: [
            {
                title: "Does neural computation feel like something? (2025)",
                url: "https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2025.1511972/full",
                category: "Selected Research"
            },
            {
                title: "The feasibility of artificial consciousness through the lens of neuroscience (2023)",
                url: "https://www.sciencedirect.com/science/article/abs/pii/S0166223623002278",
                category: "Selected Research"
            }
        ]
    },
    {
        id: "philip-ball",
        name: "Philip Ball",
        institution: "",
        webpage: "",
        contact: "",
        notableResearch: "",
        tags: ["academia", "digital_consciousness"],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "toni-sims",
        name: "Toni Sims",
        institution: "New York University (Center for Mind, Ethics, and Policy)",
        position: "Researcher",
        webpage: "",
        contact: "",
        notableResearch: "",
        tags: ["academia", "digital_consciousness", "moral_status"],
        type: "stakeholder",
        relevantResearch: [
            {
                title: "Is there a tension between AI safety and AI welfare? (2025)",
                url: "https://link.springer.com/article/10.1007/s11098-025-02302-2",
                category: "Selected Research"
            }
        ]
    },
    {
        id: "mara-gaza",
        name: "Mara Gaza",
        institution: "University of California Riverside",
        webpage: "",
        contact: "",
        notableResearch: "https://philpeople.org/profiles/mara-garza",
        tags: ["academia", "philosophy_of_mind", "digital_consciousness"],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "peter-salib",
        name: "Peter Salib",
        institution: "University of Houston",
        department: "University of Houston Law Center",
        position: "Assistant Professor of Law",
        webpage: "https://www.peternsalib.com/",
        contact: "",
        notableResearch: "",
        tags: ["academia", "moral_status"],
        type: "stakeholder",
        relevantResearch: [
            {
                title: "AI Rights for Human Flourishing (Forthcoming)",
                url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5353214",
                category: "Selected Research"
            },
            {
                title: "AI Rights for Human Safety (2025)",
                url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4913167",
                category: "Selected Research"
            }
        ]
    },
    {
        id: "kristin-andrews",
        name: "Kristin Andrews",
        institution: "York University",
        webpage: "",
        contact: "",
        notableResearch: "https://www.kristinandrews.org/publications",
        tags: ["academia", "ai_safety_alignment", "philosophy_of_mind"],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "paul-christiano",
        name: "Paul Christiano",
        institution: "",
        webpage: "",
        contact: "",
        notableResearch: "https://ai-alignment.com/sympathizing-with-ai-e11a4bf5ef6e",
        tags: ["ai_safety_alignment", "digital_consciousness"],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "matteo-colombo",
        name: "Matteo Colombo",
        institution: "Tilburg University",
        webpage: "https://mteocolphi.wordpress.com/",
        contact: "",
        notableResearch: "",
        tags: ["academia", "philosophy_of_mind", "digital_consciousness"],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "leonard-dung",
        name: "Leonard Dung",
        institution: "Ruhr-University Bochum",
        position: "Postdoctoral Researcher",
        webpage: "https://sites.google.com/view/leonard-dung/home",
        contact: "",
        notableResearch: "",
        tags: ["academia", "digital_consciousness", "moral_status", "ai_safety_alignment"],
        type: "stakeholder",
        relevantResearch: [
            {
                title: "Saving Artificial Minds: Understanding and Preventing AI Suffering (2026)",
                url: "https://www.routledge.com/Saving-Artificial-Minds-Understanding-and-Preventing-AI-Suffering/Dung/p/book/9781041144663?srsltid=AfmBOoqqmngMvn8ucEqmEFsoK-2eOJ_WMB3CDPy7qQQMyBrU5iOAl6Tm",
                category: "Selected Research"
            },
            {
                title: "Implementing Artificial Consciousness (2024)",
                url: "https://onlinelibrary.wiley.com/doi/10.1111/mila.12532",
                category: "Selected Research"
            },
            {
                title: "Tests of animal consciousness are tests of machine consciousness (2023)",
                url: "https://link.springer.com/article/10.1007/s10670-023-00753-9",
                category: "Selected Research"
            },
            {
                title: "How to deal with risks of AI suffering (2023)",
                url: "https://www.tandfonline.com/doi/full/10.1080/0020174X.2023.2238287",
                category: "Selected Research"
            }
        ]
    },
    {
        id: "aida-elamrani",
        name: "Aïda Elamrani",
        institution: "",
        webpage: "https://www.linkedin.com/in/a%C3%AFda-elamrani-a0b943237/",
        contact: "",
        notableResearch: "",
        tags: ["academia", "ai_safety_alignment"],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "kathinka-evers",
        name: "Kathinka Evers",
        institution: "",
        webpage: "https://www.uu.se/en/centre/crb/about-us/kathinka-evers",
        contact: "",
        notableResearch: "",
        tags: ["consciousness", "philosophy_of_mind"],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "johannes-kleiner",
        name: "Johannes Kleiner",
        institution: "",
        webpage: "https://jkleiner.de/",
        contact: "",
        notableResearch: "",
        tags: ["philosophy_of_mind", "digital_consciousness"],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "gaspard-fougea",
        name: "Gaspard Fougea",
        institution: "",
        webpage: "https://lmf.cnrs.fr/Perso/GaspardFougea",
        contact: "",
        notableResearch: "",
        tags: ["academia", "ai_safety_alignment"],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "ljubisa-bojic",
        name: "Ljubiša Bojić",
        institution: "Institute for Artificial Intelligence Research and Development of Serbia",
        position: "Senior Research Fellow",
        webpage: "https://ljubisabojic.com/",
        contact: "",
        notableResearch: "",
        tags: ["research_org", "ai_safety_alignment"],
        type: "stakeholder",
        relevantResearch: [
            {
                title: "Signs of consciousness in AI: Can GPT-3 tell how smart it really is? (2024)",
                url: "https://www.nature.com/articles/s41599-024-04154-3",
                category: "Selected Research"
            }
        ]
    },
    {
        id: "leonore-blum",
        name: "Leonore Blum",
        institution: "Carnegie Mellon University",
        webpage: "",
        contact: "",
        notableResearch: "https://www.pnas.org/doi/full/10.1073/pnas.2115934119",
        tags: ["academia"],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "eric-elmozino",
        name: "Eric Elmozino",
        institution: "Mila",
        webpage: "https://ericelmoznino.github.io/",
        contact: "",
        notableResearch: "",
        tags: ["academia", "research_org"],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "rob-long",
        name: "Rob Long",
        institution: "Eleos AI",
        position: "Executive Director",
        webpage: "",
        contact: "",
        notableResearch: "",
        tags: ["research_org", "digital_consciousness", "philosophy_of_mind", "moral_status"],
        type: "stakeholder",
        relevantResearch: [
            {
                title: "Is there a tension between AI safety and AI welfare? (2025)",
                url: "https://philpapers.org/rec/LONITA-6"
            },
            {
                title: "Taking AI welfare seriously (2024)",
                url: "https://arxiv.org/pdf/2411.00986"
            },
            {
                title: "Moral consideration for AI systems by 2030 (2023)",
                url: "https://link.springer.com/article/10.1007/s43681-023-00379-1"
            },
            {
                title: "Towards Evaluating AI Systems for Moral Status Using Self-Reports (2023)",
                url: "https://arxiv.org/pdf/2311.08576"
            },
            {
                title: "Consciousness in artificial intelligence: Insights from the science of consciousness (2023)",
                url: "https://arxiv.org/pdf/2308.08708"
            }
        ]
    },
    {
        id: "kyle-fish",
        name: "Kyle Fish",
        institution: "Anthropic",
        position: "Researcher Alignment Science",
        webpage: "",
        contact: "",
        notableResearch: "",
        tags: ["industry", "moral_status", "ai_safety_alignment", "digital_consciousness"],
        type: "stakeholder",
        relevantResearch: [
            {
                title: "Could AI models be conscious? (2025)",
                url: "https://www.youtube.com/watch?v=pyXouxa0WnY",
                category: "Public Engagement"
            },
            {
                title: "Taking AI Welfare Seriously (2024)",
                url: "https://arxiv.org/abs/2411.00986",
                category: "Selected Research"
            },
            {
                title: "Why I’m Working on AI Welfare (2024)",
                url: "https://forum.effectivealtruism.org/posts/bvcbdnsJ9rEvmcZXn/why-i-m-working-on-ai-welfare",
                category: "Selected Research"
            }
        ]
    },
    {
        id: "patrick-butlin",
        name: "Patrick Butlin",
        institution: "Eleos AI",
        position: "Senior Research Lead",
        webpage: "",
        contact: "",
        notableResearch: "",
        tags: ["research_org", "digital_consciousness", "moral_status"],
        type: "stakeholder",
        relevantResearch: [
            {
                title: "Principles for Responsible AI Consciousness Research (2024)",
                url: "https://dl.acm.org/doi/pdf/10.1613/jair.1.17310"
            },
            {
                title: "Taking AI Welfare Seriously (2024)",
                url: "https://arxiv.org/pdf/2411.00986"
            },
            {
                title: "Consciousness in Artificial Intelligence: Insights from the Science of Consciousness (2023)",
                url: "https://arxiv.org/pdf/2308.08708"
            }
        ]
    },
    {
        id: "rosie-campbell",
        name: "Rosie Campbell",
        institution: "Eleos AI",
        position: "Managing Director",
        webpage: "",
        contact: "",
        notableResearch: "",
        tags: ["research_org", "ai_safety_alignment", "digital_consciousness"],
        type: "stakeholder",
        relevantResearch: [
            {
                title: "Moral circle calibration: Why it's not always good to care more about an AI (2025)",
                url: "https://experiencemachines.substack.com/cp/166205017"
            }
        ]
    },
    {
        id: "arvo-munoz-moran",
        name: "Arvo Muñoz Morán",
        institution: "Rethink Priorities",
        position: "Senior Researcher",
        webpage: "",
        contact: "",
        notableResearch: "",
        tags: ["research_org", "ai_safety_alignment", "moral_status", "digital_consciousness"],
        type: "stakeholder",
        relevantResearch: [
            {
                title: "Strategic Directions for a Digital Consciousness Model (2024)",
                url: "https://rethinkpriorities.org/research-area/strategic-directions-for-a-digital-consciousness-model/"
            },
            {
                title: "The Welfare of Digital Minds (2024)",
                url: "https://rethinkpriorities.org/research-area/the-welfare-of-digital-minds/"
            }
        ]
    },
    {
        id: "geoff-keeling",
        name: "Geoff Keeling",
        institution: "Google DeepMind",
        position: "Staff Researcher",
        webpage: "",
        contact: "",
        notableResearch: "",
        tags: ["industry", "ai_safety_alignment", "digital_consciousness"],
        type: "stakeholder",
        relevantResearch: [
            {
                title: "Can LLMs make trade-offs involving stipulated pain and pleasure states? (2024)",
                url: "https://arxiv.org/pdf/2411.02432"
            }
        ]
    },
    {
        id: "jeff-sebo",
        name: "Jeff Sebo",
        institution: "New York University (Center for Mind, Ethics, and Policy)",
        position: "Director",
        webpage: "https://as.nyu.edu/faculty/jeff-sebo.html",
        contact: "",
        notableResearch: "",
        tags: ["academia", "moral_status", "digital_consciousness"],
        type: "stakeholder",
        relevantResearch: [
            {
                title: "Is there a tension between AI safety and AI welfare? (2025)",
                url: "https://link.springer.com/article/10.1007/s11098-025-02302-2"
            },
            {
                title: "Taking AI Welfare Seriously (2024)",
                url: "https://arxiv.org/pdf/2411.00986"
            },
            {
                title: "Moral Consideration for AI Systems by 2030 (2023)",
                url: "https://jeffsebo.net/wp-content/uploads/2023/06/moral-consideration-for-ai-systems-by-2030-5.pdf"
            }
        ]
    },
    {
        id: "winnie-street",
        name: "Winnie Street",
        institution: "Google Research",
        position: "Senior Researcher",
        webpage: "",
        contact: "",
        notableResearch: "",
        tags: ["industry", "ai_safety_alignment", "moral_status", "cognitive_science"],
        type: "stakeholder",
        relevantResearch: [
            {
                title: "Can LLMs make trade-offs involving stipulated pain and pleasure states? (2024)",
                url: "https://arxiv.org/pdf/2411.02432"
            },
            {
                title: "LLM Theory of Mind and Alignment: Opportunities and Risks (2024)",
                url: "https://arxiv.org/pdf/2405.08154"
            }
        ]
    },
    {
        id: "david-chalmers",
        name: "David Chalmers",
        institution: "New York University (Center for Mind, Brain, and Consciousness)",
        position: "Director",
        webpage: "http://consc.net/",
        contact: "",
        notableResearch: "",
        tags: ["philosophy_of_mind", "digital_consciousness"],
        type: "stakeholder",
        relevantResearch: [
            {
                title: "Could a large language model be conscious? (2023)",
                url: "https://philarchive.org/rec/CHACAL-3"
            },
            {
                title: "Taking AI Welfare Seriously (2024) as contributing author",
                url: "https://arxiv.org/pdf/2411.00986"
            }
        ]
    },
    {
        id: "george-deane",
        name: "George Deane",
        institution: "University of Montreal",
        department: "Department of Philosophy",
        position: "Assistant Professor",
        webpage: "",
        contact: "",
        notableResearch: "",
        tags: ["academia", "digital_consciousness", "philosophy_of_mind", "cognitive_science"],
        type: "stakeholder",
        relevantResearch: [
            {
                title: "Consciousness in Artificial Intelligence: Insights from the Science of Consciousness (2023)",
                url: "https://arxiv.org/abs/2308.08708",
                category: "Selected Research"
            },
            {
                title: "Machines That Feel and Think: The Role of Affective Feelings and Mental Action in (Artificial) General Intelligence (2022)",
                url: "https://ieeexplore.ieee.org/abstract/document/10301935",
                category: "Selected Research"
            }
        ]
    },
    {
        id: "joe-carlsmith",
        name: "Joe Carlsmith",
        institution: "Open Philanthropy",
        webpage: "https://joecarlsmith.com/",
        contact: "",
        notableResearch: "The Stakes of AI Moral Status (2025)",
        tags: ["research_org", "moral_status", "digital_consciousness"],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "jacy-anthis",
        name: "Jacy Reece Anthis",
        institution: "Sentience Institute",
        position: "Co-Founder",
        webpage: "https://jacyanthis.com/",
        contact: "",
        notableResearch: "",
        tags: ["research_org", "digital_consciousness", "moral_status", "ai_safety_alignment"],
        type: "stakeholder",
        relevantResearch: [
            {
                title: "Perceptions of Sentient AI and Other Digital Minds: Evidence from the AI, Morality, and Sentience (AIMS) Survey (2025)",
                url: "https://dl.acm.org/doi/10.1145/3706598.3713329",
                category: "Selected Research"
            },
            {
                title: "Robots, Chatbots, Self-Driving Cars: Perceptions of Mind and Morality Across Artificial Intelligences (2025)",
                url: "https://dl.acm.org/doi/10.1145/3706598.3713130",
                category: "Selected Research"
            },
            {
                title: "Which Artificial Intelligences do People Care Most About? A Conjoint Experiment on Moral Consideration (2024)",
                url: "https://dl.acm.org/doi/10.1145/3613904.3642403",
                category: "Selected Research"
            },
            {
                title: "Predicting the Moral Consideration of Artificial Intelligences (2022)",
                url: "https://www.sciencedirect.com/science/article/abs/pii/S0747563222001947?via%3Dihub",
                category: "Selected Research"
            },
            {
                title: "The Moral Inclusion of Artificial Entities: A Literature Review (2021)",
                url: "https://link.springer.com/article/10.1007/s11948-021-00331-8",
                category: "Selected Research"
            }
        ]
    },
    {
        id: "janet-pauketat",
        name: "Janet Pauketat",
        institution: "Sentience Institute",
        webpage: "https://www.sentienceinstitute.org/janet-pauketat",
        contact: "",
        notableResearch: "https://osf.io/aryjt/",
        tags: ["research_org", "moral_status", "digital_consciousness"],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "justin-bullock",
        name: "Justin Bullock",
        institution: "University of Washington",
        webpage: "https://justinbullock.org/",
        contact: "",
        notableResearch: "https://www.researchgate.net/publication/391536784_Public_Opinion_and_the_Rise_of_Digital_Minds_Perceived_Risk_Trust_and_Regulation_Support",
        tags: ["academia", "digital_consciousness", "ai_safety_alignment"],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "ali-ladak",
        name: "Ali Ladak",
        institution: "Sentience Institute",
        position: "Researcher",
        webpage: "https://www.sentienceinstitute.org/ali-ladak",
        contact: "",
        notableResearch: "",
        tags: ["research_org", "digital_consciousness", "moral_status"],
        type: "stakeholder",
        relevantResearch: [
            {
                title: "Perceptions of Sentient AI and Other Digital Minds: Evidence from the AI, Morality, and Sentience (AIMS) Survey (2025)",
                url: "https://dl.acm.org/doi/pdf/10.1145/3706598.3713329",
                category: "Selected Research"
            },
            {
                title: "Digital sentience skepticism (2025)",
                url: "https://sciety.org/articles/activity/10.31234/osf.io/wvbya_v1",
                category: "Selected Research"
            },
            {
                title: "Robots, Chatbots, Self-Driving Cars: Perceptions of Mind and Morality Across Artificial Intelligences (2025)",
                url: "https://dl.acm.org/doi/pdf/10.1145/3706598.3713130",
                category: "Selected Research"
            },
            {
                title: "What would qualify an artificial intelligence for moral standing? (2024)",
                url: "https://link.springer.com/article/10.1007/s43681-023-00260-1",
                category: "Selected Research"
            }
        ]
    },
    {
        id: "lucius-caviola",
        name: "Lucius Caviola",
        institution: "University of Oxford",
        webpage: "https://luciuscaviola.com/",
        contact: "",
        notableResearch: "The Societal Response to Potentially Sentient AI (2025)",
        tags: ["academia", "research_org", "moral_status", "digital_consciousness"],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "bradford-saad",
        name: "Bradford Saad",
        institution: "University of Oxford",
        webpage: "https://www.philosophy.ox.ac.uk/people/brad-saad#tab-4482496",
        contact: "",
        notableResearch: "Forecasting Digital Minds Takeoff Scenarios: Expert Survey (2025)",
        tags: ["academia", "research_org", "digital_consciousness"],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "adam-bradley",
        name: "Adam Bradley",
        institution: "Hong Kong Centre for Catastrophic Risk",
        webpage: "https://sites.google.com/view/adambradley/home",
        contact: "",
        notableResearch: "Digital Suffering: Why It's a Problem and How to Prevent It (2022)",
        tags: ["research_org", "moral_status", "digital_consciousness"],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "luke-kersten",
        name: "Luke Kersten",
        institution: "University of Alberta",
        department: "Department of Philosophy",
        position: "Assistant Professor",
        webpage: "https://lukekersten.weebly.com/",
        contact: "",
        notableResearch: "",
        tags: ["academia", "digital_consciousness", "cognitive_science"],
        type: "stakeholder",
        relevantResearch: [
            {
                title: "Implementing artificial consciousness (2025)",
                url: "https://philpapers.org/archive/DUNIAC-3.pdf",
                category: "Selected Research"
            }
        ]
    },
    {
        id: "jonathan-simon",
        name: "Jonathan Simon",
        institution: "University of Montreal",
        department: "Department of Philosophy",
        position: "Associate Professor",
        webpage: "https://jonsimon.net/",
        contact: "",
        notableResearch: "",
        tags: ["academia", "philosophy_of_mind", "digital_consciousness"],
        type: "stakeholder",
        relevantResearch: [
            {
                title: "Consciousness in Artificial Intelligence: Insights from the Science of Consciousness (2023)",
                url: "https://arxiv.org/pdf/2308.08708",
                category: "Selected Research"
            },
            {
                title: "What is it like to be AlphaGo? (2021)",
                url: "https://jonsimon.net/papers/AlphaGo.pdf",
                category: "Selected Research"
            }
        ]
    },
    {
        id: "marc-anderson",
        name: "Marc Anderson",
        institution: "",
        webpage: "",
        contact: "",
        notableResearch: "How We Will Discover Sentience in AI (2023)",
        tags: ["digital_consciousness"],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "cody-fenwick",
        name: "Cody Fenwick",
        institution: "80,000 Hours",
        webpage: "",
        contact: "",
        notableResearch: "Moral Status of Digital Minds (2024)",
        tags: ["research_org", "moral_status", "digital_consciousness"],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "andreas-morgensen",
        name: "Andreas Morgensen",
        institution: "University of Oxford",
        webpage: "",
        contact: "",
        notableResearch: "Digital Minds: Importance and Key Research Questions (2024)",
        tags: ["academia", "research_org", "digital_consciousness"],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "ethan-perez",
        name: "Ethan Perez",
        institution: "Anthropic",
        webpage: "",
        contact: "",
        notableResearch: "Towards Evaluating AI Systems for Moral Status Using Self-Reports (2023)",
        tags: ["industry", "moral_status", "digital_consciousness"],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "ted-lappas",
        name: "Ted Lappas",
        institution: "",
        webpage: "",
        contact: "",
        notableResearch: "",
        tags: [],
        type: "stakeholder",
        relevantResearch: []
    },
    {
        id: "daria-zakharova",
        name: "Daria Zakharova",
        institution: "London School of Economics",
        position: "Doctoral Researcher",
        webpage: "",
        contact: "",
        notableResearch: "",
        tags: ["academia", "digital_consciousness"],
        type: "stakeholder",
        relevantResearch: [
            {
                title: "Can LLMs make trade-offs involving stipulated pain and pleasure states? (2024)",
                url: "https://arxiv.org/abs/2411.02432",
                category: "Selected Research"
            }
        ]
    },
    {
        id: "anil-seth",
        name: "Anil Seth",
        institution: "University of Sussex",
        position: "Professor of Cognitive and Computational Neuroscience",
        webpage: "https://www.anilseth.com/",
        contact: "",
        notableResearch: "",
        tags: ["academia", "cognitive_science", "digital_consciousness"],
        type: "stakeholder",
        relevantResearch: [
            {
                title: "Conscious artificial intelligence and biological naturalism (Forthcoming)",
                url: "https://osf.io/preprints/psyarxiv/tz6an_v2",
                category: "Selected Research"
            },
            {
                title: "Tests for consciousness in humans and beyond (2024)",
                url: "https://www.cell.com/trends/cognitive-sciences/fulltext/S1364-6613(24)00010-X",
                category: "Selected Research"
            },
            {
                title: "Consciousness beyond the human case (2023)",
                url: "https://www.cell.com/current-biology/pdf/S0960-9822(23)00852-7.pdf",
                category: "Selected Research"
            },
            {
                title: "The perception of time in humans, brains, and machines (2023)",
                url: "https://osf.io/preprints/psyarxiv/c7vzx_v1",
                category: "Selected Research"
            }
        ]
    },
    {
        id: "tim-bayne",
        name: "Tim Bayne",
        institution: "Monash University",
        position: "Professor",
        webpage: "https://research.monash.edu/en/persons/timothy-bayne",
        contact: "",
        notableResearch: "",
        tags: ["academia", "digital_consciousness", "philosophy_of_mind"],
        type: "stakeholder",
        relevantResearch: [
            {
                title: "Tests for consciousness in humans and beyond (2024)",
                url: "https://www.cell.com/trends/cognitive-sciences/fulltext/S1364-6613(24)00010-X",
                category: "Selected Research"
            }
        ]
    },
    {
        id: "steve-fleming",
        name: "Steve Fleming",
        institution: "University College London",
        position: "Professor of Cognitive Neuroscience",
        department: "Experimental Psychology and Institute of Cognitive Neuroscience",
        webpage: "https://profiles.ucl.ac.uk/28069-steve-fleming/about",
        contact: "",
        notableResearch: "",
        tags: ["academia", "cognitive_science"],
        type: "stakeholder",
        relevantResearch: [
            {
                title: "The influence of mental state attributions on trust in large language models (2025)",
                url: "https://pubmed.ncbi.nlm.nih.gov/40415069/",
                category: "Selected Research"
            },
            {
                title: "Tests for consciousness in humans and beyond (2024)",
                url: "https://pubmed.ncbi.nlm.nih.gov/38485576/",
                category: "Selected Research"
            },
            {
                title: "Folk psychological attributions of consciousness to large language models (2024)",
                url: "https://academic.oup.com/nc/article/2024/1/niae013/7644104",
                category: "Selected Research"
            },
            {
                title: "Metacognitive Psychophysics in Humans, Animals, and AI (2023)",
                url: "https://static1.squarespace.com/static/5616b377e4b0670f148ff742/t/6582969775277e4dc16f9765/1703057048454/s8.pdf",
                category: "Selected Research"
            }
        ]
    },
    {
        id: "adria-moret",
        name: "Adrià Moret",
        institution: "University of Barcelona, Board Member UPF (Center for Animal Ethics)",
        position: "Researcher",
        webpage: "https://sites.google.com/view/adriamoret",
        contact: "",
        notableResearch: "",
        tags: ["academia", "digital_consciousness", "moral_status"],
        type: "stakeholder",
        relevantResearch: [
            {
                title: "AI Welfare Risks (2025)",
                url: "https://link.springer.com/article/10.1007/s11098-025-02343-7",
                category: "Selected Research"
            },
            {
                title: "Taking into Account Sentient Non-Humans in AI Ambitious Value Learning: Sentientist Coherent Extrapolated Volition (2023)",
                url: "https://www.worldscientific.com/doi/abs/1142/S2705078523500042?srsltid=AfmBOooQ4IAyGnel03KquZbRpGONUmZA15lx1PC8CjHw222_g3jx6jgI",
                category: "Selected Research"
            }
        ]
    },
    {
        id: "blaise-aguera-y-arcas",
        name: "Blaise Aguera y Arcas",
        institution: "Google Research",
        position: "CTO of Technology & Society",
        webpage: "",
        contact: "",
        notableResearch: "",
        tags: ["industry", "digital_consciousness", "ai_safety_alignment"],
        type: "stakeholder",
        relevantResearch: [
            {
                title: "What Is Intelligence (2025)",
                url: "https://whatisintelligence.antikythera.org/chapter-05/",
                category: "Selected Research"
            },
            {
                title: "Can LLMs make trade-offs involving stipulated pain and pleasure states? (2024)",
                url: "https://arxiv.org/pdf/2411.02432",
                category: "Selected Research"
            }
        ]
    },
    // Research areas as nodes
    {
        id: "digital-consciousness",
        name: "Digital Consciousness",
        type: "research_area",
        description: "Research on whether artificial systems can or will possess subjective experiences similar to human consciousness."
    },
    {
        id: "philosophy-of-mind",
        name: "Philosophy of Mind",
        type: "research_area",
        description: "The branch of philosophy concerned with the nature of mind, consciousness, and the relationship between mental and physical phenomena."
    },
    {
        id: "cognitive-science",
        name: "Cognitive Science",
        type: "research_area",
        description: "The interdisciplinary, scientific study of the mind and its processes."
    },
    {
        id: "ai-safety-alignment",
        name: "AI Safety and Alignment",
        type: "research_area",
        description: "Research on the ethical implications, challenges, and guidelines for artificial intelligence development and deployment."
    },
    {
        id: "moral-status",
        name: "Moral Status",
        type: "research_area",
        description: "Research on what entities deserve moral consideration, how much consideration they deserve, and why."
    },
    // Institutions as nodes
    {
        id: "university-of-oxford",
        name: "University of Oxford",
        type: "institution",
        description: "A key institution in research on AI ethics, consciousness, and digital minds, particularly through the Global Priorities Institute."
    },
    {
        id: "anthropic",
        name: "Anthropic",
        type: "institution",
        description: "AI safety company focused on developing reliable, interpretable, and steerable AI systems."
    },
    {
        id: "sentience-institute",
        name: "Sentience Institute",
        type: "institution",
        description: "Research organization focused on the moral consideration of all sentient beings, including potential digital minds."
    },
    {
        id: "google-deepmind",
        name: "Google DeepMind",
        type: "institution",
        description: "AI research lab that aims to build safe and beneficial AGI."
    },
    {
        id: "eleos-ai",
        name: "Eleos AI",
        type: "institution",
        description: "Organization focused on the intersection of AI, ethics, and animal welfare."
    },
    {
        id: "rethink-priorities",
        name: "Rethink Priorities",
        type: "institution",
        description: "Research organization that explores pressing questions to inform policymakers and foundations about how to best help people and nonhuman animals in the present and the long-term future."
    },
    {
        id: "sentient-futures",
        name: "Sentient Futures",
        type: "institution",
        description: "Organization that explores the ethical implications of creating sentient artificial beings."
    },
    {
        id: "nyu-mbc",
        name: "New York University (Center for Mind, Brain, and Consciousness)",
        type: "institution",
        description: "Research center at NYU that promotes research and discussion on the nature of the mind, brain, and consciousness."
    },
    {
        id: "nyu-mep",
        name: "New York University (Center for Mind, Ethics, and Policy)",
        type: "institution",
        description: "Research center at NYU that explores the ethical and policy dimensions of advances in the mind and brain sciences."
    },
    {
        id: "lse",
        name: "London School of Economics",
        type: "institution",
        description: "A leading social science university, with research on the societal implications of AI."
    },
    {
        id: "imperial-college-london",
        name: "Imperial College London",
        type: "institution",
        description: "A public research university in London, specializing in science, engineering, medicine, and business."
    },
    {
        id: "google-research",
        name: "Google Research",
        type: "institution",
        description: "Google's division for conducting research in a variety of computer science fields, including machine intelligence."
    },
    {
        id: "university-college-london",
        name: "University College London",
        type: "institution",
        description: "A public research university in London, a member institution of the federal University of London, and the second-largest university in the United Kingdom by total enrolment."
    },
    {
        id: "monash-university",
        name: "Monash University",
        type: "institution",
        description: "A public research university based in Melbourne, Victoria, Australia."
    },
    {
        id: "university-of-alberta",
        name: "University of Alberta",
        type: "institution",
        description: "A public research university located in Edmonton, Alberta, Canada."
    },
    {
        id: "university-of-montreal",
        name: "University of Montreal",
        type: "institution",
        description: "A French-language public research university in Montreal, Quebec, Canada."
    },
    {
        id: "university-of-houston",
        name: "University of Houston",
        type: "institution",
        description: "A public research university in Houston, Texas."
    }
];

