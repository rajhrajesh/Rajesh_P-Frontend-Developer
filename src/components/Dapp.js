import React from 'react'

const Dapp = () => {
  return (
    <div className='bg-[#00161D] pt-12 pb-12'>
        <div className='border-2 border-[#09353E] p-4 rounded-lg ml-4 mr-4 text-center sm:w-2/4 sm:m-auto'>
            <h1 className='text-white text-xl sm:text-3xl'>Explore Our <span className='text-xl sm:text-3xl font-bold text-[#19505A]'>dApp</span></h1>
            <p className='text-white pt-4 text-center'>
            Ethai is an Al-powered dApp designed to help traders make smarter, data-driven decisions. By tracking smart money flows, monitoring key wallets, and providing real-time market insights, EthAi empowers users to stay ahead of trends. The platform offers intuitive Al Features for asset recommendations, market analysis, and personalized crypto Q&A, making it the ultimate tool for both novice and experienced traders.
            </p>
            <div className='pt-4'>
                <button className='bg-lightblue px-2 py-2 rounded-lg text-basic'>Open dApp</button>
            </div>
        </div>
    </div>
  )
}

export default Dapp