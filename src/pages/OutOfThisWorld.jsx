import React ,{useState}from 'react'
import Categories from '../components/Categories'

const Excerpts =()=>{
  return(
    <div></div>
  )
}
const Techniques =()=>{
  return(
    <div></div>
  )
}
const SuccessStories =()=>{
  return(
    <div></div>
  )
}
const FAQs =()=>{
  return(
    <div></div>
  )
}


const OutOfThisWorld = () => {
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
    <div className='flex flex-1 justify-center py-5 lg:py-10 bg-[#2B2B2B]'>
      <div className='flex flex-col w-[90%] md:w-full text-center items-center'>
        <p className='text-lg md:text-2xl lg:text-[40px] font-medium text-white'>
         Out Of This World
        </p>
        <Categories setActiveCategory={setActiveCategory} activeCategory={activeCategory}/>
        <div className='w-full'>
          {renderActiveComponent()}
        </div>
      </div>
    </div>
  );
};

export default OutOfThisWorld