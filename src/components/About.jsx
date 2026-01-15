import React from 'react';
import { useFadeIn } from '../hooks/useScrollAnimation';
import { portfolioData } from '../data/portfolio';

const About = () => {
    const fadeInRef = useFadeIn({ delay: 0.2 });

    return (
        <section id="about" className="section-padding relative bg-background">
            <div className="max-w-7xl mx-auto">
                <div ref={fadeInRef} className="text-left mb-16">
                    <span className="text-zinc-500 text-sm tracking-widest uppercase block mb-2">My Story</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white uppercase">About Me</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8 text-zinc-400 text-lg leading-relaxed font-light">
                        <p>
                            I am a passionate developer and designer with a focus on creating intuitive and visually stunning digital experiences. My journey started with a curiosity for how things work, leading me to master the art of code and design.
                        </p>
                        <p>
                            When I'm not coding, I'm exploring new design trends, contributing to open source, or learning new technologies to stay ahead of the curve.
                        </p>
                        <div className="grid grid-cols-2 gap-8 mt-8 border-t border-zinc-900 pt-8">
                            <div>
                                <span className="block text-4xl font-bold text-white mb-2">2+</span>
                                <span className="text-xs text-zinc-600 uppercase tracking-widest">Years Experience</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-bold text-white mb-2">10+</span>
                                <span className="text-xs text-zinc-600 uppercase tracking-widest">Projects Done</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="border border-zinc-800 p-8 md:p-12 hover:border-zinc-700 transition-colors duration-500">
                            <h3 className="text-xs font-bold mb-8 text-zinc-500 uppercase tracking-widest">Technical Arsenal</h3>
                            <div className="flex flex-wrap gap-3">
                                {portfolioData.skills.flatMap(cat => cat.items).slice(0, 10).map((skill, index) => (
                                    <span key={index} className="px-5 py-3 bg-zinc-900 text-zinc-300 text-sm border border-zinc-800 hover:text-white hover:border-zinc-600 transition-colors cursor-default">
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
