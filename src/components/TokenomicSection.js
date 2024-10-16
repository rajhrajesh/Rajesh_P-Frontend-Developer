import React from 'react';
import BieChart from './BieChart';

const TokenomicSection = () => {
    return (
        <div id='TokenomicsSection' className='h-full py-6 bg-[#00161D]'>
            <h1 className='text-white text-center text-xl sm:text-4xl'>Tokenomics</h1>
            <div className='flex flex-col items-center sm:flex-row sm:justify-around'>
                <BieChart />

                <div className='mt-6 flex flex-col w-3/4 gap-2 sm:flex justify-center sm:mr-20'>
                    <div className='bg-insidecolor1  rounded-lg py-6 px-6'>
                        <table className='text-white w-50'>
                            <tbody>
                                <tr>
                                    <td className='text-lg sm:text-xl text-left pr-4'>Name</td>
                                    <td className='text-lg sm:text-xl text-left'>: EthAi</td>
                                </tr>
                                <tr>
                                    <td className='text-lg sm:text-xl text-left pr-4'>Token Name</td>
                                    <td className='text-lg sm:text-xl text-left'>: $EthAi</td>
                                </tr>
                                <tr>
                                    <td className='text-lg sm:text-xl text-left pr-4'>Token Standard</td>
                                    <td className='text-lg sm:text-xl text-left'>: ERC20</td>
                                </tr>
                                <tr>
                                    <td className='text-lg sm:text-xl text-left pr-4'>Blockchain</td>
                                    <td className='text-lg sm:text-xl text-left'>: Ethereum</td>
                                </tr>
                                <tr>
                                    <td className='text-lg sm:text-xl text-left pr-4'>Total Supply</td>
                                    <td className='text-lg sm:text-xl text-left'>: 100 Million</td>
                                </tr>
                                <tr>
                                    <td className='text-lg sm:text-xl text-left pr-4'>Tax</td>
                                    <td className='text-lg sm:text-xl text-left'>: 5%/5%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='bg-insidecolor1  rounded-lg py-6 px-6'>
                        <table className='text-white w-50'>
                            <tbody>
                                <tr>
                                    <td className='text-lg sm:text-xl text-left pr-7'>Team</td>
                                    <td className='text-lg sm:text-xl text-left'>: 35%</td>
                                </tr>
                                <tr>
                                    <td className='text-lg sm:text-xl text-left pr-7'>Marketing</td>
                                    <td className='text-lg sm:text-xl text-left'>: 5%</td>
                                </tr>
                                <tr>
                                    <td className='text-lg sm:text-xl text-left pr-7'>Liquidity Pool</td>
                                    <td className='text-lg sm:text-xl text-left'>: 90%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TokenomicSection;
