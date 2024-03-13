import React, { useState, useEffect } from "react";

const LoadingWithMessages = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [key, setKey] = useState(0);

  const messages = [
    "Uploading images...",
    "Setting up the payment portal...",
    "Almost done, please wait...",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
      setKey((prevKey) => prevKey + 1); // Increment key to re-trigger the animation
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [messages.length]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Spinner */}
      <div className="animate-spin">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-loader-circle"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      </div>
      {/* Message */}
      <div key={key} className="mt-8 text-lg text-gray-700 animate-fade-in">
        {messages[currentMessageIndex]}
      </div>
    </div>
  );
};

export default LoadingWithMessages;
