

import React from 'react';
import { useStoryContext } from '../context/StoryContext';

interface story_data{
    url:string
}

interface user_data{
    stories:story_data[],
    user_name:string
}

interface StoryProps{
    user_data:user_data,
    index:number
}


const Story =({user_data,index}:StoryProps)=>{
    const {user_name,stories}=user_data;
    const {setImage,setIsOpen,setCurrentIndex,setCurrentUser}=useStoryContext();
    const handleStoryClick=()=>{
        setImage(stories[0].url);
        setIsOpen(true);
        setCurrentIndex(index);
        setCurrentUser(user_data);
    }
    return (
        <div className="story">
            <img src={stories[0].url} className='story-image' alt="Story" onClick={handleStoryClick}/>
            <span>{user_name}</span>
        </div>
    )
}


export default Story;


