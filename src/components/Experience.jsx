import React from 'react';
import { useStaggerFadeIn } from '../hooks/useScrollAnimation';
import { portfolioData } from '../data/portfolio';

const Experience = () => {
    const staggerRef = useStaggerFadeIn({ delay: 0.1 });

    return (
        <section id="experience" className="section-padding relative bg-background border-t border-zinc-900">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16">
                    <span className="text-zinc-500 text-sm tracking-widest uppercase block mb-2">Career Path</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white uppercase">Experience</h2>
                </div>

                <div ref={staggerRef} className="space-y-12 md:space-y-16 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 top-4 bottom-4 w-px bg-zinc-900 hidden md:block"></div>

                    {portfolioData.experience.map((job, index) => (
                        <div key={job.id} className="relative flex flex-col md:flex-row gap-6 md:gap-10 md:ml-8">

                            {/* Timeline Dot */}
                            <div className="absolute -left-[37px] top-2 w-3 h-3 bg-zinc-950 border border-zinc-700 hidden md:block z-10"></div>

                            {/* Content */}
                            <div className="flex-1 group">
                                <span className="text-zinc-500 text-xs font-bold tracking-wider mb-2 block uppercase">{job.period}</span>
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-zinc-300 transition-colors">{job.role}</h3>
                                <p className="text-zinc-400 mb-6 text-sm flex items-center gap-2">
                                    {job.company}
                                    <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
                                    <span className="text-zinc-600">Full-time</span>
                                </p>
                                <p className="text-zinc-500 text-base mb-6 leading-relaxed max-w-2xl">
                                    {job.description}
                                </p>
                                <ul className="space-y-3">
                                    {job.achievements.map((achievement, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                                            <span className="text-zinc-600 mt-[2px]">-</span>
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
