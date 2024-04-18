import React from 'react'
import Achievementimg1 from '../assets/Achievement1.svg'

const content = [
    {
        para: "Excited to share that we've joined forces with@amityincubator🚀 This partnership opens up endless opportunities for collaboration, growth, and impact in the education sector. Together, we're shaping the future of learning.",
        image: Achievementimg1
    },
    {
        para: "Excited to share that we've joined forces with@amityincubator🚀 This partnership opens up endless opportunities for collaboration, growth, and impact in the education sector. Together, we're shaping the future of learning.",
        image: Achievementimg1
    },
    {
        para: "Excited to share that we've joined forces with@amityincubator🚀 This partnership opens up endless opportunities for collaboration, growth, and impact in the education sector. Together, we're shaping the future of learning.",
        image: Achievementimg1
    },
]

const Achievements = () => {
    return (
        <div>
            <div className='w-full flex justify-center'>
                <div className='flex text-4xl font-bold'>Latest<p style={{ color: '#446EEB' }} className='ml-2'>Achievements</p></div>
            </div>
            <div className='flex flex-row w-full h-[485px] mt-10 mb-5'>
                {content.map((item, index) => (
                    <div className='flex w-1/3 justify-center' key={index}>
                        <div className='w-10/12 h-[475px] rounded-xl' style={{backgroundColor: "#f0f7ff"}}>
                            <div>
                                <div className='flex justify-center mt-4'><img src={item.image} alt="" className='' /></div>
                                <div className='mt-4 font-medium text-center overflow-hidden'>
                                    {/* Apply ellipsis for overflowed text */}
                                    <p className='h-24 overflow-ellipsis text-sm font-normal mx-1'>{item.para}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Achievements