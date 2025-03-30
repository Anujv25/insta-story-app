import React, { useState } from 'react';
import Story from '../Story/Story';
import storiesData from '../../../utils/StoryData.json';
type storiesData = {
    url:string,
    user_name:string
}

const StoryContainer = () => {

    return (
        <div className="story-container">
                {storiesData.map((story,index)=><Story index={index} user_data={story}/>)}
            
        </div>
    )
}

export default StoryContainer;