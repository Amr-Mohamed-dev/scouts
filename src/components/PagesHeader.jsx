// eslint-disable-next-line react/prop-types
const PagesHeader = ({ header, title, bg }) => {
  return (
    <div
      className={`relative bgAboutUs ${bg} h-[30vh] text-center flex flex-col justify-center items-center`}
    >
      <div className="absolute w-full h-full bg-black/50"></div>
      <div className="text-center absolute mb-3">
        <div className=" uppercase text-[40px] tracking-[13px] font-semibold text-gray-300 ">
          {header}
        </div>
        <span className="uppercase text-[20px] tracking-[13px] text-gray-400">
          {title}
        </span>
      </div>
    </div>
  );
};

export default PagesHeader;
