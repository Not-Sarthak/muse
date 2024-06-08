interface ButtonProps {
  text: string;
}

const BlackButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="bg-black text-white px-8 py-5 rounded-lg hover:scale-110 transition-transform duration-300">
      {text}
    </button>
  );
};

export default BlackButton;
