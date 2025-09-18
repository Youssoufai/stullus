import { NextResponse } from "next/server";

const featureWork = [
    {
        title: "Web Developer for Automobile Companies",
        description: "Developed a modern brand identity and a responsive web experience tailored for a professional cleaning company, focused on clarity and usability.",
        roles: ["Backend Developer", "Devops Engineer"],
        image: "/images/feature-work/feature-img-1.png"
        /* Image */
    },
    /*     {
            title: "Lead Developer at HelthCloud",
            description: "Created a distinctive visual identity and design language to build trust and empathy for a forward-thinking health care provider.",
            roles: ["Backend Developer", "Mobile Developer"],
            image: "/images/feature-work/feature-img-2.png"
        }, */
    {
        title: "Fullstack Developer at Kids World",
        description: "Created a distinctive visual identity and design language to build trust and empathy for a forward-thinking health care provider.",
        roles: ["Backend Developer", "Devops Engineer"],
        image: "/images/feature-work/feature-img-3.png"

    },
    {
        title: "Fullstack Developer at Thrive Agric",
        description: "Thrive Agric is an agritech company based in Nigeria. Its mission is to build a network of profitable smallholder farmers by giving them access to inputs, finance, best practices, and markets.",
        roles: ["Backend Developer", "Devops Engineer"],
        image: "/images/feature-work/skupi.png"

    }
]

export const GET = async () => {
    return NextResponse.json({
        featureWork
    });
};