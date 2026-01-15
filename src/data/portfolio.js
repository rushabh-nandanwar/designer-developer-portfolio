export const portfolioData = {
    personal: {
        name: "Rushabh Nandanwar",
        role: "Designer & Developer",
        tagline: "Crafting digital experiences with code and creativity",
        bio: "I'm a designer who codes, passionate about creating beautiful, functional interfaces that tell stories. With a keen eye for aesthetics and a love for clean code, I bridge the gap between design and development.",
        email: "rushabhnandanwar2005@gmail.com",
        location: "Nagpur",
    },

    social: [
        { name: "GitHub", url: "https://github.com/rushabh-nandanwar", icon: "github" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/rushabh-nandanwar-28b162321/", icon: "linkedin" },
        { name: "Dribbble", url: "https://dribbble.com/yourusername", icon: "dribbble" },
        { name: "Twitter", url: "https://x.com/Rushunandanwar", icon: "twitter" },
    ],

    skills: [
        {
            category: "Design",
            items: [
                { name: "UI/UX Design", level: 95 },
                { name: "Figma", level: 90 },
                { name: "Dribble", level: 85 },
                { name: "Prototyping", level: 88 },
            ]
        },
        {
            category: "Development",
            items: [
                { name: "React.js", level: 92 },
                { name: "JavaScript", level: 90 },
                { name: "Tailwind CSS", level: 95 },
                { name: "GSAP", level: 80 },
            ]
        },
        {
            category: "Tools",
            items: [
                { name: "Git", level: 85 },
                { name: "GitHub", level: 82 },
                { name: "Three.js", level: 75 },
                { name: "Webflow", level: 78 },
            ]
        }
    ],

    projects: [
        {
            id: 1,
            title: "E-commerce Platform",
            description: "A modern e-commerce platform with seamless user experience and elegant design",
            image: "/projects/ecommerce.jpg",
            tags: ["React", "Node.js", "Tailwind CSS", "Stripe"],
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
            description: "Creative portfolio showcasing design work with smooth animations",
            image: "/projects/portfolio.jpg",
            tags: ["React", "GSAP", "Three.js"],
            link: "https://project2.com",
            featured: true,
            highlights: [
                "Integrated complex 3D WebGL scenes",
                "Custom stagger animations with GSAP",
                "Dark mode toggle with local storage"
            ]
        },
        {
            id: 3,
            title: "Mobile Banking App",
            description: "Intuitive mobile banking interface with focus on accessibility",
            image: "/projects/banking.jpg",
            tags: ["Figma", "React Native", "UI Design"],
            link: "https://project3.com",
            featured: false,
            highlights: [
                "Designed comprehensive design system",
                "Conducted user testing with 50+ participants",
                "Achieved WCAG 2.1 AA accessibility compliance"
            ]
        },
        {
            id: 4,
            title: "SaaS Dashboard",
            description: "Analytics dashboard with data visualization and real-time updates",
            image: "/projects/dashboard.jpg",
            tags: ["React", "D3.js", "TypeScript"],
            link: "https://project4.com",
            featured: true,
            highlights: [
                "Real-time data processing with WebSockets",
                "Custom interactive charts and graphs",
                "Role-based access control system"
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
