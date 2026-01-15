import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

export const useScrollAnimation = (options = {}) => {
    const { threshold = 0.1, triggerOnce = true } = options;
    const elementRef = useRef(null);
    const { ref: inViewRef, inView } = useInView({
        threshold,
        triggerOnce,
    });

    // Combine refs
    const setRefs = (element) => {
        elementRef.current = element;
        inViewRef(element);
    };

    return { ref: setRefs, inView, elementRef };
};

export const useFadeIn = (options = {}) => {
    const { delay = 0, duration = 0.8 } = options;
    const { ref, inView, elementRef } = useScrollAnimation(options);

    useEffect(() => {
        if (inView && elementRef.current) {
            gsap.fromTo(
                elementRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration, delay, ease: 'power3.out' }
            );
        }
    }, [inView, delay, duration, elementRef]);

    return ref;
};

export const useStaggerFadeIn = (options = {}) => {
    const { delay = 0, duration = 0.6, stagger = 0.1 } = options;
    const { ref, inView, elementRef } = useScrollAnimation(options);

    useEffect(() => {
        if (inView && elementRef.current) {
            const children = elementRef.current.children;
            gsap.fromTo(
                children,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration,
                    delay,
                    stagger,
                    ease: 'power3.out'
                }
            );
        }
    }, [inView, delay, duration, stagger, elementRef]);

    return ref;
};
