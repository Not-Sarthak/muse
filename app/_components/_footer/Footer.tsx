import Header from "../_navbar/Header";

const Footer = () => {
  const text = "Muse";

  return (
    <footer className="bg-black text-white flex flex-col p-8">
      <div className="flex justify-between p-32 py-16">
        <div className="flex flex-col gap-8">
          <div className="text-white text-lg font-semibold font-playfair leading-snug hover:underline cursor-pointer">
            Where we’re today
          </div>
          <div className="text-white text-lg font-semibold font-playfair leading-snug hover:underline cursor-pointer">
            Where we see ourselves in 5 years
          </div>
        </div>
        <div>
          <div className="flex mr-20 justify-center text-white text-2xl italic font-bold cursor-pointer">
            {text.split("").map((char, index) => (
              <span
                key={index}
                className={index % 2 === 0 ? "font-playfair" : "font-dmSans"}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="text-white text-lg font-semibold font-playfair leading-snug hover:underline cursor-pointer">
            Create your account
          </div>
          <div className="text-white text-lg font-semibold font-playfair leading-snug hover:underline cursor-pointer">
            Tag us on our socials
          </div>
        </div>
      </div>
      <div className="text-white text-lg font-semibold font-playfair leading-snug text-center">© Copr. Muse 2024</div>
    </footer>
  );
};

export default Footer;
