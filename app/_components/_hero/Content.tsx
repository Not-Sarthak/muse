import BlackButton from "../_buttons/BlackButton";

interface ContentProps {
  title: string;
  subtitle: string;
}

const Content: React.FC<ContentProps> = ({ title, subtitle }) => {
  return (
    <div className="md:w-[332px] flex flex-col gap-16">
      <div className="flex flex-col gap-1 text-center">
        <div className="text-[36px] md:text-[64px] leading-tight font-playfair font-medium">
          {title.split(" ").map((word, index) =>
            word.toLowerCase() === "future" ? (
              <span key={index} className="italic">
                {" " + word + " "}
              </span>
            ) : (
              <span key={index}>{" " + word + " "}</span>
            )
          )}
        </div>
        <div className="text-black text-[16px] md:text-[25px]">{subtitle}</div>
      </div>
      <BlackButton text="Start smart buying" />
    </div>
  );
};

export default Content;
