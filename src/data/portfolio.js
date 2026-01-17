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
            title: "CryptoTracker",
            description: `A cryptocurrency tracking web app that displays real-time market data of various coins.
            Built using React, Tailwind CSS, and integrated with the CoinGecko API for fetching live crypto prices and info.`,
            image: "/projects/ecommerce.jpg",
            tags: ["React", "API", "Tailwind CSS", "Stripe", "CoinGecko API"],
            link: "https://project1.com",
            featured: true,
            highlights: [
                "Implemented secure payment gateway integration",
                "Optimized page load speed by 40%",
                "Built responsive mobile-first UI"
            ]
        },
        {
            id: 2,
            title: "Portfolio Website",
            description: `A portfolio website that displays my work and skills.
            Built using React, Tailwind CSS, and integrated with the CoinGecko API for fetching live crypto prices and info.`,
            image: "/projects/portfolio.jpg",
            tags: ["React", "API", "Tailwind CSS", "Stripe", "CoinGecko API"],
            link: "https://project1.com",
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
