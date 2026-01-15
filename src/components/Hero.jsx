import React from 'react';
import { useFadeIn } from '../hooks/useScrollAnimation';
import { portfolioData } from '../data/portfolio';
import linkedIn from '../assets/LinkedIn Profile.png';

const Hero = () => {
    const fadeInRef = useFadeIn({ delay: 0.2 });

    return (
        <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-background pt-32 pb-16 md:py-0">
            {/* Subtle Background Grid - Optional, keep it very faint */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-8 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center">
                <div ref={fadeInRef} className="flex flex-col justify-center space-y-8 md:space-y-8 pt-20 md:pt-0">

                    {/* Eyebrow / Top Label */}
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-px bg-zinc-500"></div>
                        <span className="text-zinc-400 tracking-[0.2em] text-sm uppercase">Portfolio</span>
                    </div>

                    <div className="space-y-4 md:space-y-2">
                        <h2 className="text-zinc-400 text-lg md:text-xl font-medium tracking-wide">HELLO, I'M</h2>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white uppercase leading-[1.1] break-words">
                            {portfolioData.personal.name}
                        </h1>
                        <h3 className="text-2xl md:text-4xl font-bold text-zinc-500 uppercase leading-none">
                            {portfolioData.personal.role}
                        </h3>
                    </div>

                    <p className="text-zinc-400 text-sm md:text-lg max-w-lg leading-relaxed">
                        {portfolioData.personal.bio}
                    </p>

                    {/* Social Links Row */}
                    <div className="flex flex-wrap gap-x-6 gap-y-4 py-2">
                        {portfolioData.social.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-white uppercase tracking-wider transition-colors"
                            >
                                <span className="text-sm md:text-lg">
                                    {social.icon === 'github' && 'GitHub'}
                                    {social.icon === 'linkedin' && 'LinkedIn'}
                                    {social.icon === 'twitter' && 'Twitter'}
                                    {social.icon === 'dribbble' && 'Dribbble'}
                                    {!['github', 'linkedin', 'twitter', 'dribbble'].includes(social.icon) && social.name}
                                </span>
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </a>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 pt-4">
                        <a href="#projects" className="group flex items-center gap-2 text-white border-b border-white pb-1 hover:text-zinc-300 hover:border-zinc-300 transition-all uppercase text-sm font-bold tracking-widest w-fit">
                            View Projects
                            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </a>

                        <a href="/resume.pdf" className="px-6 py-3 border border-zinc-700 text-zinc-300 hover:text-white hover:border-white rounded-sm text-sm font-medium uppercase tracking-wider transition-all w-fit">
                            Resume <span className="text-zinc-500 ml-2">↓</span>
                        </a>
                    </div>
                </div>

                {/* Right Content - Abstract Shape or Image */}
                <div className="hidden md:flex justify-end relative">
                    <div className="relative w-[400px] h-[500px] bg-zinc-900 rounded-sm overflow-hidden border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-700">
                        {/* Placeholder for user image */}
                        <div className="absolute inset-0 bg-zinc-950">
                            <img
                                src={linkedIn}
                                alt="profile image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
