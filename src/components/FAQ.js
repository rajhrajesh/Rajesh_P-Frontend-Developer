import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleVisibility = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: "What is EthAi?",
      answer: "EthAi is a platform that leverages artificial intelligence to improve Ethereum-based applications.",
    },
    {
      question: "How can EthAi help me as a Trader?",
      answer: "EthAi provides insights and analytics to optimize trading strategies and improve decision-making.",
    },
    {
      question: "Who can use EthAi?",
      answer: "EthAi is designed for both novice and experienced traders looking to enhance their trading capabilities.",
    },
    {
      question: "How does EthAi track smart money flow?",
      answer: "EthAi analyzes transaction patterns and market trends to identify smart money movements.",
    },
    {
      question: "How does EthAi ensure data security?",
      answer: "EthAi uses advanced encryption methods and secure protocols to protect user data and transactions.",
    },
  ];

  return (
    <div className='flex flex-col items-center w-full h-screen pt-6 bg-gray-900'>
      <h1 className='text-white text-xl font-semibold mb-4 sm:text-2xl'>Frequently Asked Questions</h1>

      <div className='flex flex-col w-full max-w-3xl'>
        {questions.map((item, index) => (
          <div key={index} className='p-4 mb-4'>
            <button
              onClick={() => toggleVisibility(index)}
              className='flex items-center justify-between w-full text-left'
            >
              <div className='flex items-center'>
                <img
                  src='/assets/plus.png'
                  alt='toggle'
                  className={`transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}
                />
                <p className='text-white text-lg sm:text-xl ml-2'>{item.question}</p>
              </div>
              <span className='text-white text-lg sm:text-xl'>
                {openIndex === index ? '-' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <p className='text-white mt-2'>{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
