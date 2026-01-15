import React from 'react';
import { useStaggerFadeIn } from '../hooks/useScrollAnimation';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
    const containerRef = useStaggerFadeIn({ delay: 0.1, stagger: 0.1 });

    return (
        <section id="skills" className="section-padding relative bg-background border-t border-zinc-900">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <span className="text-zinc-500 text-sm tracking-widest uppercase block mb-2">Expertise</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white uppercase">Technical Skills</h2>
                </div>

                <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {portfolioData.skills.map((category, index) => (
                        <div key={index} className="bg-zinc-900/30 p-6 border border-zinc-800 hover:border-zinc-700 transition-colors duration-300 h-full">
                            <h3 className="text-sm font-bold mb-6 text-zinc-400 uppercase tracking-widest">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-x-4 gap-y-3">
                                {category.items.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="text-white font-medium text-sm hover:text-zinc-400 transition-colors cursor-default">
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-zinc-900 pt-10">
                    <div className="mb-6 md:mb-0">
                        <h4 className="text-white font-bold text-lg mb-1">Ready to collaborate?</h4>
                        <p className="text-zinc-500 text-sm">Let's discuss how my skills can help your project.</p>
                    </div>
                    <a
                        href="#contact"
                        className="px-6 py-3 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-colors"
                    >
                        Get in Touch →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Skills;
