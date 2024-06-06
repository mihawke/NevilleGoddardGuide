import React from 'react'

const Introduction = () => {
    return (
        <div className='flex flex-col items-center gap-y-2'>
            <img src='src/assets/neville.jpeg' width={200} />
            <ul className='flex flex-col text-left text-md'>
                <li className='list-disc'>Neville Goddard (1905-1972) was a prominent teacher and author known for his works on mysticism, spirituality, and the power of imagination.</li>  <br />
                <li className='list-disc'>Neville Goddard's teachings have influenced many modern self-help and New Thought movements, and his works continue to inspire those interested in personal development, spirituality, and the art of manifestation.</li>
            </ul>
        </div>
    )
}

export default Introduction