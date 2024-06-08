import React, { useState } from 'react';

const Categories = ({setActiveCategory,activeCategory}) => {

    const categories = [
        { name: 'Excerpts'},
        { name: 'Success Stories'},
        { name: 'Techniques'},
        { name: 'FAQs'},
    ];

    const handleCategoryClick = (category) => {
        setActiveCategory(category.name);
    };

    return (
        <div className='flex flex-col w-full md:w-fit lg:w-fit md:flex-row lg:flex-row gap-4 mb-4 lg:gap-10'>
            {categories.map((category) => (
                <button
                    key={category.name}
                    className={`border-[1px] lg:border-2 w-full md:w-fit lg:text-lg lg:w-fit py-2 md:px-5 lg:px-10 rounded-xl ${
                        activeCategory === category.name ? 'bg-[#F8D57E] text-black border-yellow-400' : 'bg-transparent text-white'
                    }`}
                    onClick={() => handleCategoryClick(category)}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
};

export default Categories;
