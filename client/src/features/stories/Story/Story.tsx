

import React from 'react';
import { useStoryContext } from '../context/StoryContext';


interface StoryProps {
    url: string,
    index:number
}

const Story =({url,index}:StoryProps)=>{
    const {setImage,setIsOpen,setCurrentIndex}=useStoryContext();
    const handleStoryClick=()=>{
        setImage(url);
        setIsOpen(true);
        setCurrentIndex(index);
    }
    return (
        <div className="story">
            <img src={url} className='story-image' alt="Story" onClick={handleStoryClick}/>
        </div>
    )
}


export default Story;


