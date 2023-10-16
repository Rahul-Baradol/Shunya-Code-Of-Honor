import { useState, useEffect } from 'react';

const Timer = ({ type }) => {
  const futureTime = new Date('2023-04-09T14:00:00');
  const [seconds, setSeconds] = useState(
    Math.floor((futureTime.getTime() - Date.now()) / 1000)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => {
        const newSeconds = seconds - 1;
        if (newSeconds <= 0) {
          clearInterval(interval);
        }
        return newSeconds;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return (
    <span className="w-full text-center my-8">
      {!type && (
        <div className="text-6xl md:text-8xl font-semibold text-white">
          <p className="font-light text-4xl md:text-7xl">Hackathon ends in</p>
          {hours}:{minutes}:{remainingSeconds}
        </div>
      )}
      {type && (
        <div className="bg-white px-8 py-4 rounded-lg text-6xl md:text-6xl font-semibold text-black">
          <p className="font-light text-4xl md:text-5xl">Hackathon ends in</p>
          {hours}:{minutes}:{remainingSeconds}
        </div>
      )}
    </span>
  );
};

export default Timer;
