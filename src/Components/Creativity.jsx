import React from 'react';

const Creativity = () => {
  return (
    <>
    <div className='flex flex-col h-screen ml-96'>
        <div className='flex flex-col mt-20 mb-10'>
            <h1 className='text-3xl font-semibold'>PROMOTE READING AND DISCUSSION CULTURE</h1>
        </div>
        <div className='text-xl font-normal rounded-lg border-2 w-96 h-10 items-center justify-center'> <h1 className='ml-2'>Activity 1: Changing Homework Culture</h1></div>
        <div className='flex flex-col mt-10 items-center justify-center w-8/12 ml-10 rounded-lg border-2 text-base'>
            <h1 className='mb-2 mt-2'>Step 1: Replace traditional homework by asking to read next topic as homework.</h1>
            <h1 className='mb-2'>Step 2: Ask to come with doubts to discuss or ask on EasyEd app.</h1>
            <h1 className='mb-2'>Step 3: Ask students to explain topic with example.</h1>
            <h1 className='mb-2'>Step 4: Any student with doubt will first explain his understanding then ask his doubt.</h1>
            <h1 className='mb-2'>Step 5: Teachers should have questions to solve which students should implement topic knowledge.</h1>
        </div>
        <div className='text-xl font-normal rounded-lg border-2 w-36 h-10 mt-10'> <h1 className='ml-2'>Reference</h1></div>
        <a href="https://www.youtube.com/watch?v=uzu9RY4tP-A" target='_blank' className='mt-3 ml-10 font-semibold hover:text-blue-600'>Watch the video</a>
    </div>
    </>
  );
};

export default Creativity;
