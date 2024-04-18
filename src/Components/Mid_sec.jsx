import React from 'react'
import midsecphone from '../assets/midsecphone.svg'
// import number from '../assets/number.svg'
// import playstoreimg from '../assets/playstoreimg.svg'
const content =[
    {
        number: "1",
        title: "Upload your Notes",
    },
    {
        number: "2",
        title: "Ask your Doubts",
    },
    {
        number: "3",
        title: "Upload lectures",
    },
    {
        number: "4",
        title: "Create Task",
    },
]

const Mid_sec = () => {
  return (
    <div className='w-full bg-blue-100'>
        <div className='flex flex-row items-center'>
            <div className='w-1/2 flex justify-center'>
            <div className='flex flex-col'>
                {content.map((item, index)=>(
                    <div className='flex flex-row mt-5 items-center' key={index}>
                        <div className='border-4 border-blue-50 border-opacity-50 mr-2 bg-blue-700 rounded-full w-8 flex justify-center h-8'><p className='text-white font-semibold'>{item.number}</p></div>
                        <p className='font-bold'>{item.title}</p>
                    </div>
                ))}
            </div>
            </div>
            <div className='w-1/2'>
                <a href="https://play.google.com/store/apps/details?id=com.easyed&pcampaignid=web_share" target='_blank'>
                    <img src={midsecphone} alt="" className='h-1/6'/>
                </a>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Mid_sec