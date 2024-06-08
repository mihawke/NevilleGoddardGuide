import React, { useState } from 'react';
import Categories from './Categories';
import Excerpts from './Excerpts';
import Techniques from './Techniques';
import SuccessStories from './SuccessStories';
import FAQs from './FAQs';

const Lectures = () => {
  const [activeCategory, setActiveCategory] = useState('Excerpts');

  const renderActiveComponent = () => {
    switch (activeCategory) {
      case 'Excerpts':
        return <Excerpts />;
      case 'Techniques':
        return <Techniques />;
      case 'Success Stories':
        return <SuccessStories />;
      case 'FAQs':
        return <FAQs />;
      default:
        return <Excerpts />;
    }
  };

  return (
    <div className='flex flex-1 justify-center py-5  lg:py-10 bg-[#2B2B2B]'>
                <div className='flex flex-col w-[90%] md:w-[80%] lg:w-[60%] text-center items-center'>
        {/* <p className='text-2xl font-medium text-white'>
          I have divided the summaries of Neville Goddard's lectures into five categories to help save time for readers.
        </p> */}
        <Categories setActiveCategory={setActiveCategory} activeCategory={activeCategory}/>
        <div className='w-full'>
          {renderActiveComponent()}
        </div>
      </div>
    </div>
  );
};

export default Lectures;
