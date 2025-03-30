import React, { createContext, useContext, useState } from 'react';
import storiesData from '../../../utils/StoryData.json';

type StoryContextType = {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    image: string;
    setImage: (value: string) => void;
    currentIndex: number;
    setCurrentIndex: (value: number) => void;
    totalStories: number;
    currentUser: any | null;
    setCurrentUser: (value: any | null) => void;
};

const StoryContext = createContext<StoryContextType | undefined>(undefined);

export const StoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [image, setImage] = useState('');
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [currentUser, setCurrentUser] = useState(null);
    return (
        <StoryContext.Provider value={{ isOpen,totalStories: storiesData.length, setIsOpen,currentUser, setCurrentUser, image, setImage, currentIndex, setCurrentIndex }}>
            {children}
        </StoryContext.Provider>
    );
};

export const useStoryContext = () => {
    const context = useContext(StoryContext);
    if (context === undefined) {
        throw new Error('useStoryContext must be used within a StoryProvider');
    }
    return context;
}; 