import React from 'react'
import { useNavigate } from 'react-router-dom'
import Lectures from './Lectures';
import Books from './Books';

const Introduction = () => {
    const navigate = useNavigate();
    return (
            <div className='flex flex-1 justify-center py-5 lg:py-20 bg-[#2B2B2B]'>
                <div className='flex flex-col w-[85%] md:w-[80%] lg:w-[60%]  text-center items-center gap-y-5 md:gap-y-10'>
                    <img src='https://i0.wp.com/www.harvbishop.com/wp-content/uploads/2016/06/Neville-cosmic-1.jpg' width={200} />
                    <ul className='flex flex-col text-left lg:w-[60%] text-md lg:text-2xl gap-y-2'>
                        <li className='list-disc text-sm md:text-[18px] font-normal leading-[32px] text-white opacity-70'>Neville Goddard (1905-1972) was a prominent teacher and author known for his works on mysticism, spirituality, and the power of imagination.</li>  <br />
                        <li className='list-disc text-sm md:text-[18px] font-normal leading-[32px] text-white opacity-70'>Neville Goddard's teachings have influenced many modern self-help and New Thought movements, and his works continue to inspire those interested in personal development, spirituality, and the art of manifestation.</li>
                    </ul>
                    <div className='flex flex-col w-full md:w-fit lg:w-fit  md:flex-row lg:flex-row gap-4 lg:gap-10 mt-5'>
                        <button
                            className='md:text-lg font-normal text-black bg-[#F8D57E] rounded-xl w-full py-2 md:px-10 md:py-2'
                            onClick={() => navigate("/books")}
                        >Books</button>
                        <button
                            className='md:text-lg font-normal text-black bg-[#F8D57E] rounded-xl px-10 py-2 md:px-10 md:py-2'
                            onClick={() => navigate("/lectures")}
                        >Lectures</button>
                    </div>
                </div>
            </div>
    )
}

export default Introduction