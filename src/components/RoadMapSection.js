import React from 'react';

const RoadMapSection = () => {
    return (
        <div id="RoadmapSection" className='bg-[#00161D] h-full pt-6'>
            <h1 className='text-center text-white text-xl sm:text-2xl'>Roadmap</h1>

            <div className='flex flex-col sm:flex-row justify-center items-start sm:gap-10 sm:mt-6'>
                
                <div className='m-2 mt-4 flex flex-col justify-start'>
                    <div className='flex justify-start'>
                        <button className='bg-white rounded-lg px-2 py-1 uppercase text-sm'>Phase 1</button>
                    </div>
                    <p className='text-white text-base sm:text-lg lg:text-xl mt-2 mb-2 font-extralight'>
                        Kicking Off
                    </p>

                    <div className='mt-2 text-white'>
                        {/* First item */}
                        <div className='flex items-start mb-2'>
                            <img src='/assets/tick.png' alt='tick icon' className='w-6 h-6'/>
                            <div className='ml-4'>
                                <p className='text-base sm:text-lg lg:text-xl'>Launch of EthAi: Officially</p>
                            </div>
                        </div>
                        
                        {/* Second item */}
                        <div className='flex items-start mb-2'>
                            <img src='/assets/tick.png' alt='tick icon' className='w-6 h-6'/>
                            <div className='ml-4'>
                                <p className='text-base sm:text-lg lg:text-xl'>Development: Smart Contract Creation</p>
                            </div>
                        </div>
                        
                        {/* Third item */}
                        <div className='flex items-start mb-2'>
                            <img src='/assets/tick.png' alt='tick icon' className='w-6 h-6'/>
                            <div className='ml-4'>
                                <p className='text-base sm:text-lg lg:text-xl'>Partnership Announcements</p>
                            </div>
                        </div>
                        
                        {/* Fourth item */}
                        <div className='flex items-start mb-2'>
                            <img src='/assets/tick.png' alt='tick icon' className='w-6 h-6'/>
                            <div className='ml-4'>
                                <p className='text-base sm:text-lg lg:text-xl'>Community Engagement</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Preview Section */}
                <div className=' m-2 mt-6 sm:mt-0 flex justify-center'>
                    <video
                        className='w-full sm:w-96 rounded shadow-lg'
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster='/assets/video-thumbnail.png'
                    >
                        <source src='/assets/Preview1.mp4' type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            {/* Second preview */}
            <div className='flex flex-col sm:flex-row-reverse justify-center items-start sm:gap-10 sm:mt-6'>
                
                <div className='m-2 mt-4 flex flex-col justify-start sm:order-1'>
                    <div className='flex justify-start'>
                        <button className='bg-white rounded-lg px-2 py-1 uppercase text-sm'>Phase 2</button>
                    </div>
                    <p className='text-white text-base sm:text-lg lg:text-xl mt-2 mb-2 font-extralight'>
                        Bigger Insights
                    </p>

                    <div className='mt-2 text-white'>
                        {/* First item */}
                        <div className='flex items-start mb-2'>
                            <img src='/assets/tick.png' alt='tick icon' className='w-6 h-6'/>
                            <div className='ml-4'>
                                <p className='text-base sm:text-lg lg:text-xl'>Introduction of Advanced Al Agents</p>
                            </div>
                        </div>
                        
                        {/* Second item */}
                        <div className='flex items-start mb-2'>
                            <img src='/assets/tick.png' alt='tick icon' className='w-6 h-6'/>
                            <div className='ml-4'>
                                <p className='text-base sm:text-lg lg:text-xl'>Strategic Partnerships</p>
                            </div>
                        </div>
                        
                        {/* Third item */}
                        <div className='flex items-start mb-2'>
                            <img src='/assets/tick.png' alt='tick icon' className='w-6 h-6'/>
                            <div className='ml-4'>
                                <p className='text-base sm:text-lg lg:text-xl'>User Interface Optimization</p>
                            </div>
                        </div>
                        
                        {/* Fourth item */}
                        <div className='flex items-start mb-2'>
                            <img src='/assets/tick.png' alt='tick icon' className='w-6 h-6'/>
                            <div className='ml-4'>
                                <p className='text-base sm:text-lg lg:text-xl'>Comprehensive Marketing Campaign</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Preview Section */}
                <div className=' m-2 mt-6 sm:mt-0 flex justify-center sm:order-1'>
                    <video
                        className='w-full sm:w-96 rounded shadow-lg'
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster='/assets/video-thumbnail.png'
                    >
                        <source src='/assets/Preview2.mp4' type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            {/* Third preview */}
            <div className='flex flex-col sm:flex-row justify-center items-start sm:gap-10 sm:mt-6'>
                
                <div className='m-2 mt-4 flex flex-col justify-start'>
                    <div className='flex justify-start'>
                        <button className='bg-white rounded-lg px-2 py-1 uppercase text-sm'>Phase 3</button>
                    </div>
                    <p className='text-white text-base sm:text-lg lg:text-xl mt-2 mb-2 font-extralight'>
                        Full Power
                    </p>

                    <div className='mt-2 text-white'>
                        {/* First item */}
                        <div className='flex items-start mb-2'>
                            <img src='/assets/tick.png' alt='tick icon' className='w-6 h-6'/>
                            <div className='ml-4'>
                                <p className='text-base sm:text-lg lg:text-xl'>Introduction of Enhanced Features</p>
                            </div>
                        </div>
                        
                        {/* Second item */}
                        <div className='flex items-start mb-2'>
                            <img src='/assets/tick.png' alt='tick icon' className='w-6 h-6'/>
                            <div className='ml-4'>
                                <p className='text-base sm:text-lg lg:text-xl'>API Integration for Data Access</p>
                            </div>
                        </div>
                        
                        {/* Third item */}
                        <div className='flex items-start mb-2'>
                            <img src='/assets/tick.png' alt='tick icon' className='w-6 h-6'/>
                            <div className='ml-4'>
                                <p className='text-base sm:text-lg lg:text-xl'>Launch of Community-Driven Initiatives</p>
                            </div>
                        </div>
                        
                        {/* Fourth item */}
                        <div className='flex items-start mb-2'>
                            <img src='/assets/tick.png' alt='tick icon' className='w-6 h-6'/>
                            <div className='ml-4'>
                                <p className='text-base sm:text-lg lg:text-xl'>Continuous Improvement and Updates</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Preview Section */}
                <div className='m-2 mt-6 sm:mt-0 flex justify-center'>
                    <video
                        className='w-full sm:w-96 rounded shadow-lg'
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster='/assets/video-thumbnail.png'
                    >
                        <source src='/assets/Preview3.mp4' type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
}

export default RoadMapSection;
