import { useState } from "react";
import * as Assets from "../assets/Assets";
import { Link } from "react-router-dom";

const YoutuberSideNav = () => {
  const [activeLink, setActiveLink] = useState("DashBoard");
  const styles = {
    className: "text-gray-300 text-lg outline-none",
    activeClassName:
      " text-lg text-white transition-all ease-in-out duration-600 ",
  };

  const Navlinks = [
    {
      className: `${styles.className}`,
      to: "./dashboard",
      name: "DashBoard",
    },
    {
      className: `${styles.className}`,
      to: "./project-tiles",
      name: "Project Tiles",
    },
    {
      className: `${styles.className}`,
      to: "./video-review",
      name: "Video Review",
    },
    {
      className: `${styles.className}`,
      to: "#",
      name: "",
    },
  ];

  const handleClick = (name: string) => {
    setActiveLink(name);
  };

  return (
    <>
      <div className="h-screen w-1/6 relative bg-[#2F2F2F] flex justify-center">
        <div className="absolute">
          <img src={Assets.DarkYoutuberLogo} alt="" className="h-24 w-34" />
        </div>
        <hr className="absolute w-full top-24 " />
        <ul className="absolute top-40 flex flex-col gap-16 items-center m-auto">
          {Navlinks.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  className={
                    link.name === activeLink
                      ? styles.activeClassName
                      : styles.className
                  }
                  to={link.to}
                  onClick={() => handleClick(link.name)}>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default YoutuberSideNav;
