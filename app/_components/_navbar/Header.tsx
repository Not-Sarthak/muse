import React from 'react';

interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <div className="flex justify-center py-10 text-black text-2xl italic font-bold">
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={index % 2 === 0 ? 'font-playfair' : 'font-dmSans'}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default Header;