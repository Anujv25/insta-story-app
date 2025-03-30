import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import Container from './components/Container';
import StoryContainer from './features/stories/StoryContainer';
import ViewStory from './features/stories/ViewStory';
import { StoryProvider } from './features/stories/context/StoryContext';
import storiesData from './utils/StoryData.json';
const App: React.FC = () => {
  return (
    <StoryProvider>
      <Container>
        
        <StoryContainer/>
        <span>Vibegram</span>
        <ViewStory />
        <div>
          {storiesData.map((item)=>(
            
            <div>
              <img className='feed-images'
               src={item.url}  key={item.url} alt={item.url} />
            </div>
          ))}
        </div>
      </Container>
    </StoryProvider>
  );
};

const element = document.getElementById('root');
const root = createRoot(element!);
root.render(<App />);
