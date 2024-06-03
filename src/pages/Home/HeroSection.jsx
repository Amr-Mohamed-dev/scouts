import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <div className=" w-full h-[95vh] bgFirstSection flex justify-start items-center text-white">
      <div className="lg:w-[70%] h-[40%] ml-10 lg:ml-52 lg:pt-10">
        <h1 className="text-[55px] lg:text-[90px] font-bold lg:flex">
          Find Your
          <span className="text-primary ml-4 text-[52px] lg:text-[90px] tracking-wider">
            <Typewriter
              options={{
                strings: "Dream Home",
                autoStart: true,
                loop: true,
                delay: 400,
              }}
            />
          </span>
        </h1>
        <h1 className="text-[30px] lg:text-5xl font-bold pt-6">
          @Scouts Real estate
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
