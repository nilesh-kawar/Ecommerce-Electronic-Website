import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "../Data/NavbarData";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link, i) => (
        <div key={i}>
          <div className="text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center font-semibold md:pr-0 pr-5 group hover:text-primary duration-300"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              {/* Mobile View Arrows  */}
              <span
                className={`text-xl md:hidden inline ${link.sublinks.length > 0 ? "block" : "hidden"
                  }`}
              >
                {heading === link.name ? <FiChevronUp /> : <FiChevronDown />}
              </span>
              {/* Web View Arrows  */}
              <span
                className={`text-xl md:mt-1 md:ml-2  ${link.sublinks.length > 0 ? "md:block" : "md:hidden"
                  } hidden group-hover:rotate-180 group-hover:-mt-2`}
              >
                <FiChevronDown />
              </span>
            </h1>
            {link.submenu && (
              <div key={Math.random()}>
                <div className="absolute top-30 hidden group-hover:md:block hover:md:block ">
                  <div className="bg-white p-5 grid grid-cols-3 gap-10 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none capitalize">
                    {link.sublinks.map(mysublinks => (
                      <div key={Math.random()}>
                        <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink, i) => (
                          <li key={i} className="text-sm text-gray-600 my-2.5">
                            <Link
                              to={slink.link}
                              className="hover:text-primary"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            key={Math.random()}
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map(slinks => (
              <div key={Math.random()}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      {subHeading === slinks.Head ? (
                        <FiChevronUp />
                      ) : (
                        <FiChevronDown />
                      )}
                    </span>
                  </h1>
                  <div
                    className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"
                      }`}
                  >
                    {slinks.sublink.map((slink, i) => (
                      <li key={i} className="py-3 pl-14">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
