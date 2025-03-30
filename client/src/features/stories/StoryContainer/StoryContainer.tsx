import React, { useState } from 'react';
import Story from '../Story/Story';

type storiesData = {
    url:string
}

const storiesData:storiesData[]= [
    {
        url: 'https://picsum.photos/200/300'
    },
    {
        url:'https://picsum.photos/200/400'
    },
    {
        url:'https://picsum.photos/200/500'
    },
    {
        url:'https://picsum.photos/200/600'
    },
    {
        url:'https://picsum.photos/200/700'
    }
]

const StoryContainer = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="story-container">
            <div 
                className="add-story-button" 
                onClick={() => setIsOpen(!isOpen)}
            >
                +
            </div>
            
                {storiesData.map((story,index)=><Story index={index}     key={index} url={story.url}/>)}
            
        </div>
    )
}

export default StoryContainer;