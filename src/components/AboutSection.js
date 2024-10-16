import React from 'react'

const AboutSection = () => {
    return (
        <div id="aboutsection" className='bg-gray-800 py-6'>
            <div className='container sm:flex flex-col items-center justify-center mx-auto sm:w-2/4'>
                <div className='text-center py-6 px-6'>
                    <p className='text-lg text-white  font-semibold sm:text-3xl py-4'>About EthAi </p>
                    <p className='text-sm text-insidecolor sm:text-xl'>At Eth Ai, we're all about making crypto trading easier and more intuitive. We provide tools that help traders keep up with all new market trends, track top traders' movements.</p>
                    <div className='flex justify-center m-3'>
                        <button className='bg-lightblue rounded-lg text-black font-thin px-2 py-1'>Read more</button>
                    </div>
                </div>
            </div>
            {/* tech points  */}
            <div className='rounded-lg mx-atuo flex justify-center items-center'>
                <div className='bg-insidecolor1 rounded-lg flex flex-col justify-start mx-4 px-4 sm:flex sm:w-3/4'>
                    <div className='sm:flex justify-around'>
                        <div className='py-4 sm:w-2/4'>
                            <img src='assets/graph.png' alt=''/>
                            <p className='text-lg text-white my-2 sm:text-xl' >Stay Ahead </p>
                            <p className='text-sm text-insidecolor sm:text-base'>No more guesswork-get clear, trustable insights.</p>
                        </div>
                        <div className='py-4 sm:w-2/4' >
                            <img src='assets/wallet.png' alt=''/>
                            <p className='text-lg my-2 text-white sm:text-xl'>Know Your Assets </p>
                            <p className='text-sm text-insidecolor sm:text-base'>Always stay on top of how your Investments are performing.</p>
                        </div>
                    </div>

                    <div className='sm:flex justify-around'>
                        <div className='py-4 sm:w-2/4'>
                            <img src='assets/Vector.png' alt=''/>
                            <p className='text-lg my-2 text-white sm:text-xl'>Simple, Not Overwhelming </p>
                            <p className='text-sm text-insidecolor sm:text-base'>Our tools are designed to make complex market analysis easy to understand and act on.</p>
                        </div>
                        <div className='py-4 sm:w-2/4'>
                            <img src='assets/Future Technology.png' alt=''/>
                            <p className='text-lg my-2 text-white sm:text-xl'>Future-Proof</p>
                            <p className='text-sm text-insidecolor sm:text-base'> We're constantly improving, adding new features to help you make the most informed decisions possible.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutSection