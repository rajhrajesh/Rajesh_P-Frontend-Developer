import React from 'react';
import FeatureSection from './FeatureSection';

const Home = () => {
    return (
        <>
            <div className="relative flex items-center justify-center min-h-screen bg-[#00161D] text-white">
                <div className="absolute inset-0 hidden sm:block">
                    <video className="w-full h-full object-cover" autoPlay loop muted>
                        <source src="/assets/HomePreview.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="relative z-10 text-center p-4 w-88">
                    <h1 className="text-3xl sm:text-5xl font-thin">
                        When Innovation Meets <span className="bg-lightblue rounded-xl text-gray-900 px-3 leading-normal font-extralight">Innovation</span>
                    </h1>
                    <p className="mt-4 text-md sm:text-2xl font-thin">Empowering Trading Through Advanced Technology</p>
                    <button className="mt-6 bg-lightblue text-gray-900 px-4 py-2 rounded-xl  hover:transition duration-300 sm:text-2xl  font-extralight">
                        Open dApp
                    </button>
                </div>
            </div>
           {/* Features Section */}
            <div className='bg-gray-800'>
                <FeatureSection/>
            </div>
        </>
    );
};

export default Home;
