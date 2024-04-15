import { projectsData } from "../../db";

const ProjectsSection = () => {
  return (
    <section className="bg-gray-100 pb-10 pt-20 lg:pb-20 lg:pt-[80px]">
      <div className=" flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-[60px] text-center lg:mb-20">
            <span className="mb-2 block text-lg font-semibold text-primary">
              FEATURED PROJECTS
            </span>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
              Our Recent News
            </h2>
            <p className="text-base text-body-color dark:text-dark-6">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-10 lg:mx-32">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => {
            return (
              <div
                key={project.image}
                className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] mb-2 h-[80%] w-[95%] overflow-hidden rounded-lg bg-projectCard hover:scale-105 duration-300"
              >
                <img src={project.image} alt="" className="w-full lg:h-[50%]" />
                <div className="p-8 text-center lg:h-[50%] text-white sm:p-9 md:p-7 xl:p-9">
                  <h3>
                    <a
                      // href={titleHref ? titleHref : "/#"}
                      className="mb-4 block text-xl font-semibold hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                      {project.CardTitle}
                    </a>
                  </h3>
                  <p className="mb-7 text-base leading-relaxed">
                    {project.CardDescription}
                  </p>

                  <button className="inline-block rounded-xl border border-gray-3 px-7 py-2 text-base font-medium  transition hover:border-primary hover:bg-primary text-white">
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
