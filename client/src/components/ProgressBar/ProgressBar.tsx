import React, { useRef, useEffect } from 'react';

interface ProgressBarProps {
    duration: number;
    toggleProgressBar: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ duration, toggleProgressBar }) => {
    const progressBarRef = useRef<HTMLDivElement>(null);
    const startTimeRef = useRef<number>(0);
    const animationFrameRef = useRef<number>();

    useEffect(() => {
        if (!progressBarRef.current) return;

        const progressBar = progressBarRef.current;
        progressBar.style.width = '0%';
        startTimeRef.current = Date.now();
        console.log('Starting animation with duration:', duration);

        const animate = () => {
            const currentTime = Date.now();
            const elapsed = currentTime - startTimeRef.current;
            const progress = Math.min((elapsed / duration) * 100, 100);
            
            progressBar.style.width = `${progress}%`;
            console.log('Current progress:', progress);
            
            if (progress < 100) {
                animationFrameRef.current = requestAnimationFrame(animate);
            } else {
                console.log('Animation completed');
                // Reset after completion
                setTimeout(() => {
                    progressBar.style.width = '0%';
                }, 100);
            }
        };

        // Start the animation immediately
        animate();

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [toggleProgressBar, duration]);

    return (
        <div className="progress-bar" style={{ width: '100%', height: '4px', backgroundColor: '#e0e0e0' }}>
            <div 
                ref={progressBarRef}
                className="progress-bar-fill"
                style={{ 
                    height: '100%',
                    backgroundColor: '#1a73e8',
                    width: '0%'
                }}
            />
        </div>
    );
};

export default React.memo(ProgressBar);
