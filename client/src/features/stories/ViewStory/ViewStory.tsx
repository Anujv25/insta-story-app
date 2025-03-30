import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useStoryContext } from '../context/StoryContext';
import ProgressBar from '../../../components/ProgressBar/ProgressBar';
import storiesData from '../../../utils/StoryData.json';
const ViewStory: React.FC = () => {
    const { image,isOpen, setImage, currentUser,setCurrentUser,currentIndex,setCurrentIndex} = useStoryContext();
    const [innerIndex, setInnerIndex] = useState(0);
   const [user_stories, setUser_stories] = useState<any[]>([]);
    useEffect(()=>{
       if(currentUser?.stories){
        console.log(currentUser.stories)
        setUser_stories(currentUser.stories);
        setImage(currentUser.stories[0].url);
        setInnerIndex(0);
       }
    },[currentUser])


    useEffect(()=>{
        if(!isOpen) return;
        const timer = setTimeout(()=>{
            if(innerIndex < user_stories.length-1){
                setImage(user_stories[innerIndex+1].url);
                setInnerIndex(prev=>prev+1);
                console.log(innerIndex)
            }
            else{
                if(currentIndex<storiesData.length){
                    setCurrentUser(storiesData[currentIndex+1])
                    console.log("YYYYE")
                }
                else{
                   setCurrentUser(null)
                }

            }
        },3000)

        return ()=>{clearTimeout(timer)};
        
    },[user_stories,innerIndex])



    if (!currentUser || !isOpen) return null;

    return (
        <div className="view-story">
            <ProgressBar duration={3000} toggleProgressBar={innerIndex==0} />
            <img 
                src={image} 
                className="story-image-main" 
                alt="story" 
                loading="eager"
            />
        </div>
    );
};

export default React.memo(ViewStory);