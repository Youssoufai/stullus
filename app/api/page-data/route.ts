import { NextResponse } from "next/server";

const experienceData = [
    {
        icon: "/images/icon/tailwind-icon.png",
        role: "Lead Developer — Livelens",
        location: "Remote",
        startYear: "2025",
        endYear: "Present",
        bulletPoints: [
            "Led the mobile and web development of Livelens across frontend and backend",
            "Collaborated with engineers and product managers to ship features 30% faster",
            "Coordinated devops team to streamline CI/CD pipelines"
        ]
    },
    {
        icon: "/images/icon/thriveagric-icon.svg",
        role: "Full-Stack Engineer — ThriveAgric",
        location: "Abuja, Nigeria",
        startYear: "2022",
        endYear: "2024",
        bulletPoints: [
            "Built and maintained farmer onboarding and investment platforms serving 200k+ users",
            "Integrated Paystack and Flutterwave for seamless payments across web and mobile",
            "Worked on data dashboards to help farmers track yields and investors monitor returns"
        ]
    },
    {
        icon: "/images/icon/localmarket-icon.svg",
        role: "Backend Developer — LocalMarket",
        location: "Remote",
        startYear: "2021",
        endYear: "2022",
        bulletPoints: [
            "Developed marketplace APIs using Node.js, Express, and PostgreSQL",
            "Implemented session-based authentication and Paystack payment integration",
            "Worked with Drizzle ORM and optimized queries for faster checkout performance"
        ]
    },
    {
        icon: "/images/icon/poppyai-icon.svg",
        role: "Backend Developer — AI Content Factory SaaS",
        location: "Remote",
        startYear: "2020",
        endYear: "2021",
        bulletPoints: [
            "Built core backend services for AI-driven customer support SaaS",
            "Designed scalable APIs and integrated OpenAI-based natural language models",
            "Collaborated with frontend engineers to ship AI dashboard features"
        ]
    },
    {
        icon: "/images/icon/oberra-icon.svg",
        role: "Frontend Developer — Oberra",
        location: "Remote",
        startYear: "2019",
        endYear: "2020",
        bulletPoints: [
            "Developed landing pages and dashboards with Next.js and Tailwind CSS",
            "Created reusable UI components with shadcn/ui and React",
            "Optimized frontend performance, reducing bundle size by 25%"
        ]
    }
];

const educationData = [
    {
        date: "Sep 2015 - May 2019",
        title: "B.Sc. in BioChemistry",
        subtitle: "Katsina State University — Katsina, Nigeria"
    },
];

const projectOverview = {
    caseStudies: [
        /*         { name: "Wellnest", url: "#" },
                { name: "ScoutHire", url: "#" }, */
        { name: "Capitlcars", url: "https://capitalcars.site/" },
    ],
    sideProjects: [
        { name: "Thrive Agric", url: "https://thriveagric.com/" },
        { name: "Gridsnap", comingSoon: true },
        { name: "OrbitPay Mobile App", comingSoon: true },
        { name: "Siteflow Page Builder", comingSoon: true },
        /*   { name: "Zenboard Productivity Tool", url: "#" }, */
    ]
};

export const GET = async () => {
    return NextResponse.json({
        experienceData,
        educationData,
        projectOverview
    });
};
