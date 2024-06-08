import Header from "../_navbar/Header";
import Content from "./Content";

const Hero = () => {
  return (
    <div className="flex flex-col md:min-h-screen">
      <Header text="Muse" />
      <div className="flex flex-1 flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2 min-h-full px-4 md:px-48 my-20 flex justify-center items-center">
          <Content
            title="The future of retail."
            subtitle="where you see only what you want"
          />
        </div>
        <div className="w-full md:w-1/2 min-h-full px-4 md:px-48 my-20 flex justify-center items-center">
          Right
        </div>
      </div>
    </div>
  );
};

export default Hero;