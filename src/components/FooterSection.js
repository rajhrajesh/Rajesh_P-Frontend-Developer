import React, { useState } from 'react'

const FooterSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGetStartedClick = () => {
    if (email) {
      setMessage('Congrats!');
    } else {
      setMessage('Please enter a valid email.');
    }
  };

  return (
    <div className='bg-[#001117] pt-6 sm:flex justify-between pb-6 pl-4 pr-4'>
      <div>
        <div className="flex justify-center sm:justify-start">
          <img src="/assets/logo.png" alt="Logo" className="h-6 w-6 md:h-8 md:w-8" />
          <span className="ml-2 text-white text-lg font-bold">EthAi</span>
        </div>
        <div className='flex justify-around mt-4 sm:justify-start space-x-3'>
          <div><img src='/assets/telegram.png' alt='Telegram' /></div>
          <div><img src='/assets/instagram.png' alt='Instagram' /></div>
          <div><img src='/assets/twitter.png' alt='Twitter' /></div>
          <div><img src='/assets/Facebook.png' alt='Facebook' /></div>
          <div><img src='/assets/discord.png' alt='Discord' /></div>
        </div>
      </div>

      <div className='hidden sm:block'>
        <h1 className='text-white font-bold w-2/3'>"Designed for traders of today, just like you."</h1>
        <div className='pt-3'>
          <input
            className='rounded-lg border-2 border-[#212D31] bg-transparent text-white px-6 py-2'
            type='email'
            name='email'
            placeholder="What's your work email?"
            value={email}
            onChange={handleEmailChange}
          />
          <button
            className='border-[#122C2F] bg-[#0D2428] rounded-lg text-white px-2 py-2 ml-2'
            onClick={handleGetStartedClick}
          >
            Get Started
          </button>
        </div>
        {message && (
          <div className='text-white mt-2'>
            {message}
          </div>
        )}
      </div>
    </div>
  )
}

export default FooterSection;
