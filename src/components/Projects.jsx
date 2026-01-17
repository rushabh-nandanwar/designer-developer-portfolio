import React, { useState } from 'react';
import { useFadeIn } from '../hooks/useScrollAnimation';
import { portfolioData } from '../data/portfolio';

const Projects = () => {
    const [selectedId, setSelectedId] = useState(portfolioData.projects[0].id);
    const fadeInRef = useFadeIn({ delay: 0.1 });

    const selectedProject = portfolioData.projects.find(p => p.id === selectedId);

    return (
        <section id="projects" className="section-padding bg-background border-t border-zinc-900 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto w-full">
                <div className="mb-16">
                    <span className="text-zinc-500 text-sm tracking-widest uppercase block mb-2">Selected Works</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white uppercase">Featured Projects</h2>
                </div>

                <div ref={fadeInRef} className="grid lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column - Project List */}
                    <div className="lg:col-span-4 flex lg:flex-col overflow-x-auto lg:overflow-visible space-x-4 lg:space-x-0 space-y-0 lg:space-y-2 pb-4 lg:pb-0 scrollbar-hide">
                        {portfolioData.projects.map((project) => (
                            <button
                                key={project.id}
                                onClick={() => setSelectedId(project.id)}
                                className={`text-left py-3 px-4 lg:py-4 lg:px-6 whitespace-nowrap lg:whitespace-normal border-b-2 lg:border-b-0 lg:border-l-2 transition-all duration-300 group shrink-0 ${selectedId === project.id
                                    ? 'border-white text-white bg-zinc-900/50 lg:bg-transparent'
                                    : 'border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-600'
                                    }`}
                            >
                                <h3 className={`text-base lg:text-xl font-bold uppercase tracking-wider ${selectedId === project.id ? 'lg:translate-x-2' : ''
                                    } transition-transform duration-300`}>
                                    {project.title}
                                </h3>
                                <p className={`text-[10px] lg:text-xs mt-1 uppercase tracking-widest ${selectedId === project.id ? 'text-zinc-400' : 'text-zinc-600'
                                    }`}>
                                    {project.tags[0]}
                                </p>
                            </button>
                        ))}
                    </div>

                    {/* Right Column - Project Details */}
                    <div className="lg:col-span-8 flex flex-col justify-center">
                        <div key={selectedProject.id} className="animate-fade-in-up">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase leading-tight">
                                {selectedProject.title}
                            </h2>

                            <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-2xl">
                                {selectedProject.description}
                            </p>

                            <div className="mb-10">
                                {/* <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6 border-b border-zinc-800 pb-2 inline-block">
                                    Key Highlights
                                </h4>
                                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                                    {selectedProject.highlights.map((highlight, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <span className="text-white mt-1.5">→</span>
                                            <p className="text-zinc-400 text-sm leading-relaxed">{highlight}</p>
                                        </div>
                                    ))}
                                </div> */}
                            </div>

                            <div className="mb-12">
                                <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
                                    Technologies
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tags.map((tag, i) => (
                                        <span key={i} className="px-4 py-2 border border-zinc-800 text-zinc-400 text-xs uppercase tracking-wider hover:border-zinc-600 hover:text-white transition-colors cursor-default">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <a
                                href={selectedProject.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:opacity-75 transition-opacity uppercase text-sm font-bold tracking-widest"
                            >
                                View Project
                                <svg className="w-4 h-4 transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.5s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default Projects;
