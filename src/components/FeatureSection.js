import React from 'react';

const FeatureSection = () => {
    return (
        <div id="FeatureSection" className=" px-4 bg-gray-800 md:flex justify-center items-center mt-5">
            <h1 className="text-center text-white text-xl sm:text-2xl font-semibold p-4 sm:hidden">Our Features</h1>
            <div className="md:grid grid-cols-4 grid-rows-3 md:gap-2">
                {/* Feature 1: Trade Optimizer */}
                <div className="flex flex-col items-center p-4 bg-container rounded-lg md:row-span-2 col-span-1">
                    <img
                        src="/assets/TradeOptimizer.png"
                        alt="Trade Optimizer"
                        className="w-auto h-auto"
                    />
                    <p className="text-center text-lg sm:text-xl font-normal text-white p-4">Trade Optimizer</p>
                    <p className="text-center text-sm sm:text-base text-insidecolor">
                        Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity.
                    </p>
                </div>

                {/* Feature 2: Market Insight */}
                <div className="mt-2 p-4 flex bg-container rounded-lg md:col-span-2 row-span-1 md:relative">
                    <div className='mt-2'>
                        <p className="font-semibold text-lg sm:text-xl text-white">Market Insight</p>
                        <p className='text-sm sm:text-base text-insidecolor'>
                            Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers.
                        </p>
                    </div>
                    <img src='/assets/MarketInsight.png' alt='Market Insight' className="object-cover w-2/4 h-48 md:w-20 md: h-15" />
                </div>

                {/* Feature 3: Risk Guard */}
                <div className="mt-2 flex flex-col text-lg sm:text-xl items-center p-4 bg-container rounded-lg md:row-span-2 col-span-1">
                    <div className='order-1 md:order-last'>
                        <p className="font-semibold text-center text-white">Risk Guard</p>
                        <p className="text-sm sm:text-base text-insidecolor text-center">
                            Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything.
                        </p>
                    </div>
                    <img src='/assets/RiskGuard.png' alt='Risk Guard' className="order-2 mt-3 self-center w-3/4 h-auto p-2 md:order-1" />
                </div>

                {/* Empty Container */}
                <div className="p-4 relative bg-container rounded-lg mb-3 md:col-span-2 row-span-1">
                    <p className='hidden text-lg sm:text-xl text-white mb-2'>Portfolio Sync</p>
                    <p className='hidden text-sm sm:text-base text-insidecolor pb-3'>
                        Easily manage your portfolio. You'll always know what you own, how it's performing, and where it's headed.
                    </p>
                    <img src='/assets/ProtfoliioSync.png' alt='Portfolio Sync' className="hidden absolute mt-2 bottom-0 right-0 w-1/4 rounded-br-lg" />
                </div>

                {/* Feature 4: Portfolio Sync */}
                <div className="p-4 relative bg-container rounded-lg mb-3 md:col-span-2 row-span-1 md:flex flex-col items-start justify-center">
                    <p className='text-lg sm:text-xl text-white mb-2'>Portfolio Sync</p>
                    <p className='text-sm sm:text-base text-insidecolor pb-3 md:w-2/4'>
                        Easily manage your portfolio. You'll always know what you own, how it's performing, and where it's headed.
                    </p>
                    <img src='/assets/ProtfoliioSync.png' alt='Portfolio Sync' className="absolute mt-2 bottom-0 right-0 w-1/4 rounded-br-lg md:hidden" />
                </div>

                {/* Feature 5: Opportunity Scout */}
                <div className="p-4 relative bg-container rounded-lg mb-3 md:col-span-2 row-span-1 md:relative md:flex flex-col items-between justify-center">
                    <p className='text-lg sm:text-xl text-white mb-2'>Opportunity Scout</p>
                    <p className='text-sm sm:text-base text-insidecolor mb-3 md:w-2/4'>
                        Find exciting new projects, events, and tokens that others might be missing. Identifying promising opportunities early, so you never miss out on the next big thing.
                    </p>
                    <img src='/assets/OpportunityScout.png' alt='Opportunity Scout' className="absolute bottom-0 right-0 w-1/4 md:absolute top-4 md:right-0 bottom-2" />
                </div>
            </div>
        </div>
    );
}

export default FeatureSection;
