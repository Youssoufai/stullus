
const AboutMe = () => {
    const servicesBedge = ["User Experience", "Mobile App Development", "Backend Development", "Responsive Design", "Prototyping", "Devops", "Motion Graphics", "UI Development", "Web Development"];
    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10 bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
                    <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
                        <div className="flex flex-col gap-4">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">About Me</p>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">Hey there. I'm Ibrahim — Fullstack Engineer based in Abuja, currently <span className="bg-[linear-gradient(90deg,_rgba(243,202,77,0.4)_0%,_rgba(243,202,77,0.05)_100%)]">crafting digital products</span> at <span className="border-b-2">WrapPixel</span>, a SaaS startup focused on productivity tools.</h2>
                            <h5 className="text-secondary font-normal">Previously at livelens, and Co-Creator of HelthCloud and Livelens.</h5>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-primary uppercase font-medium">Services</p>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {servicesBedge?.map((value, index) => {
                                    return (
                                        <div key={index} className="w-fit py-1.5 px-3 border border-primary/10 rounded-lg">
                                            <p className="text-xs sm:text-sm font-medium text-primary">{value}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe