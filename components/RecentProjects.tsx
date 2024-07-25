import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A Small Selection of{" "}
        <span className="text-purple">Recent Projects</span>
      </h1>

      {/* projects container */}
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] sm:h-[41rem] h-[32rem] flex justify-center items-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              {/* project image container */}
              <div className="relative flex justify-center items-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative w-full h-full lg:rounded-3xl overflow-hidden bg-[#13162D]">
                  <img src="bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>

              {/* project title and description */}
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:font-normal lg:text-xl text-sm font-light line-clamp-2">
                {des}
              </p>

              {/* icons and button */}
              <div className="flex justify-between items-center mb-3 mt-7">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-lg md:text-sm text-xs text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
