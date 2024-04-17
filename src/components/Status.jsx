export const Statistic = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold text-white uppercase pb-6">
          We gorw every day
        </h1>
        <p>Here is the numbers of our success partners</p>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
          <div className="text-center">
            <h6 className="text-3xl font-bold text-white">2,000+</h6>
            <p className="font-bold">Employees</p>
          </div>
          <div className="text-center">
            <h6 className="text-3xl font-bold text-white">10,000+</h6>
            <p className="font-bold">Happy Clients</p>
          </div>
          <div className="text-center">
            <h6 className="text-3xl font-bold text-white">300+</h6>
            <p className="font-bold">Developers</p>
          </div>
          <div className="text-center">
            <h6 className="text-3xl font-bold text-white">55+</h6>
            <p className="font-bold">Franchises</p>
          </div>
        </div>
      </div>
    </>
  );
};
