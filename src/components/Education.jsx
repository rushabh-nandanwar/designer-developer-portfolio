import React from 'react';
import { useFadeIn } from '../hooks/useScrollAnimation';
import { portfolioData } from '../data/portfolio';

const Education = () => {
    const fadeInRef = useFadeIn({ delay: 0.1 });

    return (
        <section id="education" className="section-padding relative bg-background border-t border-zinc-900">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16">
                    <span className="text-zinc-500 text-sm tracking-widest uppercase block mb-2">Learning Path</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white uppercase">Education</h2>
                </div>

                <div ref={fadeInRef} className="space-y-12">
                    {portfolioData.education.map((edu) => (
                        <div key={edu.id} className="flex flex-col md:flex-row gap-6 md:gap-10 border-l border-zinc-800 pl-6 md:pl-8 relative">
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-zinc-600 rounded-full"></div>

                            <div className="flex-1">
                                <span className="text-zinc-500 text-xs font-bold tracking-wider mb-2 block uppercase">{edu.period}</span>
                                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                                <p className="text-zinc-400 text-sm mb-4">{edu.institution}</p>
                                <p className="text-zinc-500 text-base leading-relaxed">
                                    {edu.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
