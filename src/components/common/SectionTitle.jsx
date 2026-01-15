import React from 'react';
import { useFadeIn } from '../../hooks/useScrollAnimation';

const SectionTitle = ({ title, subtitle, align = 'center' }) => {
    const ref = useFadeIn({ delay: 0.2 });

    const alignmentClasses = {
        center: 'text-center',
        left: 'text-left',
        right: 'text-right',
    };

    return (
        <div ref={ref} className={`mb-16 ${alignmentClasses[align]}`}>
            {subtitle && (
                <p className="text-accent-primary text-sm font-medium tracking-wider uppercase mb-3">
                    {subtitle}
                </p>
            )}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-neutral-100">
                {title}
            </h2>
        </div>
    );
};

export default SectionTitle;
