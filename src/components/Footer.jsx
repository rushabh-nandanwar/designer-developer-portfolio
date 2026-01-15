import React from 'react';
import { portfolioData } from '../data/portfolio';

const Footer = () => {
    return (
        <footer className="py-8 bg-slate-950 border-t border-slate-800 text-center">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-slate-500 mb-2">
                    © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
                </p>
                <p className="text-slate-600 text-sm">
                    Built with React, Tailwind CSS & GSAP
                </p>
            </div>
        </footer>
    );
};

export default Footer;
