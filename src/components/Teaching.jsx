import React from 'react';

const Teaching = ({ title, content }) => {


    const teachings = [
        {
            title: "",
            content: " "
        },
        {
            title: "Biblical Interpretations",
            content: "Neville often used biblical texts as metaphors and allegories to explain his teachings. He believed that the Bible is a psychological, not historical, document that describes the journey of the human mind and its creative power."
        },
        {
            title: "",
            content: " "
        }
    ];
    return (
        <div>
            <h1 className='text-[34px]'>Neville Goddard's Key Teachings</h1>
            <div>
                <ul className='text-left'>
                    <li className='list-disc text-lg font-bold'>Power of Imagination:</li>
                    <ul className='list-disc text-md ml-10'>
                        <li>Neville emphasized that imagination is a powerful creative force.</li>
                        <li>He taught that by vividly imagining a desired outcome, one could bring it into reality.</li>
                        <li>He believed that imagination is the true essence of human experience and that by aligning it with one's desires, one could manifest those desires in the physical world.</li>
                    </ul>
                </ul>
                <ul className='text-left'>
                    <li className='list-disc text-lg font-bold'>Consciousness Creates Reality:</li>
                    <ul className='list-disc text-md ml-10'>
                        <li>Central to Neville's teachings is the idea that consciousness is the only reality.</li>
                        <li>He posited that one's inner state of being and beliefs directly influence and create the external circumstances of one's life.</li>
                        <li>By changing one's inner state, one can change their external reality.</li>
                    </ul>
                </ul>
                <ul className='text-left'>
                    <li className='list-disc text-lg font-bold'>Living in the End:</li>
                    <ul className='list-disc text-md ml-10'>
                        <li>Neville taught the practice of 'living in the end,' which involves assuming the feeling of the wish fulfilled.</li>
                        <li>This means living and acting as if the desired outcome has already been achieved.</li>
                        <li>By doing so, individuals align their subconscious mind with their desires, making manifestation more likely.</li>
                    </ul>
                </ul>
                <ul className='text-left'>
                    <li className='list-disc text-lg font-bold'>The Law of Assumption:</li>
                    <ul className='list-disc text-md ml-10'>
                        <li>This principle states that whatever you assume to be true becomes your reality.</li>
                        <li>By assuming a state of mind or a belief, you effectively create it in your world. </li>
                        <li>Neville emphasized the importance of assuming positive and empowering beliefs to shape one's reality.</li>
                    </ul>
                </ul>
                <ul className='text-left'>
                    <li className='list-disc text-lg font-bold'>Self-Identity with God:</li>
                    <ul className='list-disc text-md ml-10'>
                        <li>Neville asserted that every individual is a manifestation of God and possesses the divine power to create their reality.</li>
                        <li>He encouraged people to recognize their own divinity and to use their creative power responsibly.</li>
                    </ul>
                </ul>
            </div>
        </div>
    );
};

export default Teaching;
