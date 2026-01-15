import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => {
    const baseStyles = 'font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center';

    const variants = {
        primary: 'bg-accent-primary hover:bg-accent-secondary text-white shadow-lg hover:shadow-accent-primary/50',
        outline: 'border-2 border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white',
        ghost: 'text-neutral-100 hover:text-accent-primary hover:bg-dark-700',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
