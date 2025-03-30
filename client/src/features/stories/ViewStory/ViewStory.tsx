import React, { useEffect, useState } from 'react';
import { useStoryContext } from '../context/StoryContext';
import storiesData from '../../../utils/StoryData.json';

const ViewStory: React.FC = () => {
    const { image, setImage, isOpen, currentIndex, setCurrentIndex } = useStoryContext();
    const [progress, setProgress] = useState(0);
    const [nextImage, setNextImage] = useState('');

   //use preload image

   useEffect(()=>{
    if(currentIndex<storiesData.length-1){
        const nextImageUrl=storiesData[currentIndex+1].url;
        const img=new Image();
        img.src=nextImageUrl;
        img.onload=()=>{
            setNextImage(nextImageUrl);
        }
    }
   })
    useEffect(() => {
        if (!image) return;

        const duration = 3000; // 3 seconds
        const interval = 10; // Update every 10ms
        const steps = duration / interval;
        const increment = 100/steps;

        const progressTimer = setInterval(() => {
            setProgress(prev => {
                if(prev >= 100) {
                    clearInterval(progressTimer);
                    return 100;
                }
                return prev + increment;
            });
        }, interval);

        const closeTimer = setTimeout(() => {
            setProgress(0);
            setImage('');
            if(currentIndex < storiesData.length - 1) {
                const nextIndex = currentIndex + 1;
                setCurrentIndex(nextIndex);
                // Use preloaded image if available
                setImage(nextImage || storiesData[nextIndex].url);
            }
        }, duration);

        return () => {
            clearTimeout(closeTimer);
            clearInterval(progressTimer);
        };
    }, [image, setImage, currentIndex, setCurrentIndex, nextImage]);

    if (!image) return null;

    return (
        <div className="view-story">
            <div className="progress-bar">
                <div 
                    className="progress-bar-fill"
                    style={{ width: `${progress}%`, height: '10px' }}
                />
            </div>
            <img 
                src={image} 
                className="story-image-main" 
                alt="story" 
                loading="eager"
            />
        </div>
    );
};

export default ViewStory;