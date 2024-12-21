"use client"

import React, { useEffect, useState, useRef } from 'react';

interface AppearingBoxProps {
    children: React.ReactNode;
    marginTop?: string
    marginBottom?: string;
}

export default function AppearingBox({ children, marginBottom = '20px', marginTop = '20px' }: AppearingBoxProps) {
    const [isVisible, setIsVisible] = useState(false);
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (boxRef.current) {
            observer.observe(boxRef.current);
        }

        return () => {
            if (boxRef.current) {
                observer.unobserve(boxRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={boxRef}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'opacity 0.5s, transform 0.5s',
                marginTop: marginTop,
                marginBottom: marginBottom,
            }}
        >
            {children}
        </div>
    );
}
