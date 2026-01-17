export const portfolioData = {
    personal: {
        name: "Rushabh Nandanwar",
        role: "Designer & Developer",
        tagline: "Crafting digital experiences with code and creativity",
        bio: "I'm a designer who codes, passionate about creating beautiful, functional interfaces that tell stories. With a keen eye for aesthetics and a love for clean code, I bridge the gap between design and development.",
        email: "rushabhnandanwar0510@gmail.com",
        location: "Nagpur",
    },

    social: [
        { name: "GitHub", url: "https://github.com/rushabh-nandanwar", icon: "github" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/rushabh-nandanwar-28b162321/", icon: "linkedin" },
    ],

    skills: [
        {
            category: "Design",
            items: [
                { name: "UI/UX Design", level: 95 },
                { name: "Figma", level: 90 },
                { name: "Canva", level: 85 },
                { name: "Prototyping", level: 88 },
            ]
        },
        {
            category: "Development",
            items: [
                { name: "HTML", level: 90 },
                { name: "CSS", level: 90 },
                { name: "JavaScript", level: 90 },
                { name: "React.js", level: 92 },
                { name: "Tailwind CSS", level: 95 },
                { name: "NodeJS", level: 80 },
                { name: "ExpressJS", level: 80 },
                { name: "MongoDB", level: 80 },
            ]
        },
        {
            category: "Tools",
            items: [
                { name: "Git", level: 85 },
                { name: "GitHub", level: 82 },
                { name: "Docker", level: 82 },
                { name: "VSCode", level: 82 },
            ]
        }
    ],

    projects: [
        {
            id: 1,
            title: "Portfolio Website",
            description: `Developed a modern, responsive personal portfolio website to showcase projects, skills, and experience, featuring a clean dark-themed UI and smooth user interactions for professional presentation.`,
            image: "/projects/portfolio.jpg",
            tags: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS", "Figma"],
            link: "https://testing-resume-tau.vercel.app/",
            featured: true,
            highlights: [
                "Implemented secure payment gateway integration",
                "Optimized page load speed by 40%",
                "Built responsive mobile-first UI"
            ]
        },
        {
            id: 2,
            title: "Digital Restaurant Menu",
            description: `Developed a mobile-first digital menu web application for a Saoji restaurant to simplify large order handling by enabling customers to save orders and view real-time total amounts. Implemented category filtering, cart management, and a responsive dark-themed UI using React and Tailwind CSS.`,
            image: "/projects/ecommerce.jpg",
            tags: ["React.js (Vite)", "Tailwind CSS", "React Router", "Context API", "Lucide Icons"],
            link: "https://nandu-saoji-bhojnalaya.vercel.app/",
            featured: true,
            highlights: [
                "Implemented secure payment gateway integration",
                "Optimized page load speed by 40%",
                "Built responsive mobile-first UI"
            ]
        },
        {
            id: 3,
            title: "CryptoTracker",
            description: `Developed a real-time cryptocurrency tracking web application using React and the CoinGecko API, providing live price updates, historical trend charts, and multi-currency support through a responsive glassmorphism-based UI.`,
            image: "/projects/ecommerce.jpg",
            tags: ["React.js", "Tailwind CSS", "CoinGecko API", "React Google Charts", "React Router DOM", "SVG Assets" ],
            link: "https://crypto-minning.vercel.app/",
            featured: true,
            highlights: [
                "Implemented secure payment gateway integration",
                "Optimized page load speed by 40%",
                "Built responsive mobile-first UI"
            ]
        },
    ],

    experience: [
        {
            id: 1,
            role: "Senior Product Designer",
            company: "Tech Startup Inc.",
            period: "2022 - Present",
            description: "Leading design initiatives for a fast-growing SaaS platform, focusing on user experience and interface design.",
            achievements: [
                "Redesigned core product, increasing user engagement by 40%",
                "Established design system used across 5+ products",
            ]
        },
        {
            id: 2,
            role: "UI/UX Designer & Developer",
            company: "Creative Agency",
            period: "2020 - 2022",
            description: "Designed and developed websites and applications for diverse clients, from startups to established brands.",
            achievements: [
                "Delivered 20+ client projects with 100% satisfaction rate",
                "Implemented design-to-code workflow reducing delivery time by 30%",
            ]
        },
        {
            id: 3,
            role: "Junior Designer",
            company: "Design Studio",
            period: "2018 - 2020",
            description: "Collaborated with senior designers on branding, web design, and digital marketing projects.",
            achievements: [
                "Contributed to award-winning campaign designs",
                "Developed proficiency in modern design tools and frameworks",
            ]
        },
    ],

    education: [
        {
            id: 1,
            degree: "Bachelor of Technology in Information Technology ",
            institution: "G. H. Raisoni College of Engineering, Nagpur",
            period: "2023 - 2027",
            description: "Currently pursuing B.Tech in IT. Focused on Web Development, Software Engineering, and emerging technologies. Actively building projects and strengthening problem-solving and technical skills.",
        },
        {
            id: 2,
            degree: "Sr. Secondary (State Board)",
            institution: "Ashok Vidyalaya & JR College Umred, Nagpur",
            period: "2021 - 2023",
            description: "Completed senior secondary education in the PCM group with Computer Science as a core subject. Built a strong foundation in mathematics, logic, and computing concepts.",
        },
        {
            id: 3,
            degree: "Secondary (CBSE Board)",
            institution: "Manosuman Public School Pauni, Bhandara",
            period: "2021",
            description: "Completed secondary education, gaining a well-rounded academic foundation and developing essential learning, discipline.",
        },
    ]
};
