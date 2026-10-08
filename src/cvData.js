export const cvData = {
    personalInfo: {
        name: "Jack Uzell",
        tagline: "4th Year Computer Science and Software Engineering Student",
        subTagline: "First Class Academic Track Record | Desktop and Systems Engineering Placement Alumni",
        location: "Clonee, Co. Dublin, Ireland",
        email: "jackuzell05@gmail.com",
        github: "https://github.com/JackUzell",
        linkedin: "https://www.linkedin.com/in/jack-uzell-962b68380/?isSelfProfile=true",
        summary: "Final-year Computer Science & Software Engineering student at Maynooth University holding a First-Class Honours standard (77.4% 3rd Year mark, 95% in Software Design). Combining strong software engineering principles (Java, React, Node.js, SQL, Software Testing) with hands-on corporate IT enablement from a 6-month placement at Workhuman, resolving 600+ tickets and earning 35+ peer awards. Proven leadership and communication skills as a treble-winning football captain, certified LIFT facilitator and retail keyholder."
    },

    stats: [
        { value: "77.4%", label: "3rd Year annual mark (First Class)" },
        { value: "95%", label: "Software Design module mark" },
        { value: "600+", label: "User tickets closed at Workhuman" },
        { value: "35+", label: "Peer recognition awards" }
    ],

    education: [
        {
            id: "mu",
            institution: "Maynooth University",
            degree: "BSc in Computer Science and Software Engineering",
            period: "2023 - Present",
            status: "Final Year",
            annualMark: "77.4% (3rd Year - First Class Honours Standard)",
            topModules: [
                { code: "CS264", name: "Software Design", grade: "95%" },
                { code: "CS362", name: "Work Placement Documentation", grade: "87%" },
                { code: "CS162", name: "Intro to Computer Science II", grade: "87%" },
                { code: "CS353", name: "Team Project", grade: "83%" },
                { code: "CS130", name: "Databases", grade: "81%" },
                { code: "CS310", name: "Programming Languages & Compilers", grade: "72%" },
                { code: "CS335", name: "Software Engineering & Process", grade: "70%" },
                { code: "CS357", name: "Software Verification", grade: "70%" },
                { code: "CS230", name: "Web Information Processing", grade: "69%" },
                { code: "CS320", name: "Computer Networks", grade: "68%" }
            ] 
        },
        {
            id: "setanta",
            institution: "Coláiste Pobail Setanta",
            degree: "Leaving Certificate",
            period: "2017 - 2023",
            status: "Completed",
            annualMark: "420 CAO Points (2023)",
            creditsEarned: "Honours in English, Geography, Biology, Physical Education and Spanish"
        }
    ],

    experience: [
        {
            id: "workhuman",
            title: "Software Support Engineer and Desktop Engineer Intern",
            company: "Workhuman",
            location: "Dublin, Ireland",
            period: "February 2026 - August 2026",
            placementType: "6-Month Internship",
            highlights: [
                "Served as primary point of contact for customer and staff technical enablement across Ireland and European operations, closing 600+ user tickets with outstanding satisfaction ratings.",
                "Conducted live, interactive onboarding walkthroughs for new corporate hires, demonstrating technical workflows with patience and clear communication.",
                "Managed cataloging, hardware stock audits, and device lifecycles using enterprise management tools with strict attention to inventory accuracy and compliance.",
                "Earned 35+ internal peer recognition awards for exceptional interpersonal support, proactive problem-solving, and positive workplace culture."
            ]
        },
        {
            id: "flannels",
            title: "Retail Sales Assistant",
            company: "Flannels",
            location: "Dublin, Ireland",
            period: "September 2023 - January 2026",
            placementType: "Part-Time Employment",
            highlights: [
                "Delivered consultative 1-on-1 customer service in a luxury designer retail environment, assisting clients with fit, styling, and high-end brand selection.",
                "Selected as the only non-managerial employee entrusted with keyholder duties, managing store opening, closing, floor security, and cash handling.",
                "Maintained pristine visual merchandising layouts according to strict head-office specifications.",
                "Led receipt of high-volume stock deliveries, organizing back-of-house inventory and executing rapid floor replenishments.",
                "Consistently ranked on internal sales leaderboards during high-demand promotional and seasonal campaigns."
            ]
        },
        {
            id: 'clearlift',
            title: "Warehouse Assistant",
            company: "Clearlift",
            location: "Dublin, Ireland",
            period: "June 2023 - August 2023",
            placementType: "Warehouse and Commercial Operations",
            highlights: [
                "Coordinated efficient stock staging, dispatch orders, and fast-paced warehouse workflows under tight client deadlines.",
                "Shadowed company owner on client sales calls, gaining direct insight into commercial relationship management and day-to-day business operations."
            ]
        }
    ],

    skills: {
        languages: ["JavaScript (ES6+)", "Java", "Python", "SQL", "HTML5", "CSS3"],
        frameworks: ["React 19", "Node.js", "Express.js", "Vite"],
        systemsAndIT: [
            "Jamf Pro (macOS MDM)",
            "Microsoft Intune",
            "Lansweeper",
            "macOS & Windows Administration",
            "Active Directory / Identity",
            "Hardware Asset Management"
            ],
        engineeringPractices: [
            "Software Design Patterns (95% at MU)",
            "Software Testing & Verification",
            "Git & GitHub Version Control",
            "Agile & Team Project Collaboration (83% at MU)",
            "RESTful API Integration",
            "UX / UI Principles"
            ]
    },

    projects: [
        {
            id: 1,
            title: "StudyApp – AI Study Assistant",
            subtitle: "Full-Stack AI-Powered Learning & Revision Platform",
            description:
                "Full-stack web application that transforms lecture notes and documents into concise study summaries and interactive quizzes using Google Gemini AI, featuring secure JWT authentication and document processing pipelines.",
            techStack: ["React", "Node.js", "Express", "MongoDB", "Google Gemini API", "JWT", "REST APIs"],
            highlights: [
                "Integrated Google Gemini API with structured JSON output schemas to automatically generate interactive 5-question multiple-choice quizzes and key-concept summaries.",
                "Engineered server-side document parsing with Multer and pdf-parse to extract and process text from uploaded PDF and TXT study materials.",
                "Implemented secure user authentication with JWT and bcrypt, providing user-isolated document storage and revision workflows in MongoDB."
            ],
            githubLink: "https://github.com/jackuzell/StudyApp",
            liveLink: "https://study-app-mauve-beta.vercel.app/"
        },
        {
            id:2,
             title: "CS353 Full-Stack Team Project",
            subtitle: "Maynooth University 3rd Year Capstone (Grade: 83%)",
            description:
                "Collaborative full-stack team project developed following agile practices, encompassing requirements analysis, system architecture, API design, testing, and deployment.",
            techStack: ["JavaScript", "React", "Node.js", "Git", "Agile/Scrum"],
            highlights: [
                "Designed modular UI components with responsive layouts and seamless REST communication.",
                "Collaborated via Git pull requests, code reviews, and weekly agile sprints.",
                "Achieved a First-Class Honours grade of 83% for the project deliverable."
            ],
            liveLink: "No Longer Active"
        },
        {
            id: 3,
            title: "Interactive Web CV & Portfolio",
            subtitle: "React 19 & Vite Portfolio",
            description:
                "Modern, component-driven portfolio site built to present academic credentials, engineering placements, and project work in a clean, responsive interface.",
            techStack: ["React 19", "Vite", "Modern CSS", "Semantic HTML"],
            highlights: [
                "Architected with modular components and a centralized, reusable data model.",
                "Designed with accessible semantic HTML, ready for custom styling and theme switching."
            ],
            githubLink: "https://github.com/JackUzell/Web-CV"
        }
    ],

    achievements: [
        {
            id: 1,
            title: "Sporting Leadership: Historic Treble Captain",
            category: "Sports & Leadership",
            description:
                "Captained school football team to a historic treble (3 school titles in one single season). Competitive multi-sport background fostering dedication, grit, and team communication."
        },
        {
            id: 2,
            title: "Bronze Gaisce (The President's Award)",
            category: "National Award",
            description:
                "Earned the prestigious Irish President's Award in recognition of personal challenge, community contribution, and outdoor adventure."
        },
        {
            id: 3,
            title: "Certified LIFT Facilitator",
            category: "Leadership Development",
            description:
                "Accredited facilitator with Leading Ireland's Future Together (LIFT), leading values-based leadership discussions centered on empathy, competence, and integrity."
        },
        {
            id: 4,
            title: "35+ Workhuman Peer Recognition Awards",
            category: "Corporate Excellence",
            description:
                "Received €2,000+ equivalent in peer-voted recognition awards during a 6-month placement for proactive IT support, patience, and cross-team enablement."
        }
    ]
};