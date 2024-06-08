import React from 'react';
import { useNavigate } from 'react-router-dom';

const books = [
  { id: 'out-of-this-world', title: 'Out of this world' },
  { id: 'at-your-command', title: 'At your command' },
  { id: 'your-faith-is-your-fortune', title: 'Your faith is your fortune' },
  { id: 'freedom-for-all', title: 'Freedom for All: A Practical Application of the Bible' },
  { id: 'feeling-is-the-secret', title: 'Feeling Is the Secret' },
  { id: 'prayer-the-art-of-believing', title: 'Prayer: The Art of Believing' },
  { id: 'the-power-of-awareness', title: 'The Power of Awareness' },
  { id: 'awakened-imagination', title: 'Awakened Imagination' },
  { id: 'the-law-and-the-promise', title: 'The Law and the Promise' },
];

const Books = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-1 justify-center py-5 lg:py-20 bg-[#2B2B2B]'>
            <div className='flex flex-col w-[60%] text-left items-center gap-y-10'>
                <p className='text-2xl lg:text-[60px] text-center font-medium lg:leading-[90px] text-white'>Neville Goddard Books</p>
                <ul className='flex flex-col text-left lg:w-[60%] text-md lg:text-xl gap-y-2 text-[18px] font-normal leading-[32px] text-white'>
                    {books.map((book) => (
                        <li key={book.id} className='list-disc'>
                            <a
                                className='cursor-pointer hover:opacity-70'
                                onClick={() => navigate(`/books/${book.id}`)}
                            >
                                {book.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Books;
