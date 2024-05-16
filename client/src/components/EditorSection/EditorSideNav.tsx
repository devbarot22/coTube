import * as Assets from '../assets/Assets'

const EditorSideBar = () => {

  const styles = {
    className: "text-white text-lg",
  };
  
  const Navlinks = [
    {
      className: `${styles.className}`,
      to: "#",
      name: "DashBoard",
    },
    {
      className: `${styles.className}`,
      to: "#",
      name: "Project Submission",
    },
    {
      className: `${styles.className}`,
      to: "#",
      name: "Tweaked Video",
    },
    {
      className: `${styles.className}`,
      to: "#",
      name: "Project Status",
    },
    {
      className: `${styles.className}`,
      to: "#",
      name: "Clients",
    },
  ];
  
    return (
      <>
        <div className="h-screen w-1/6 relative bg-[#2F2F2F] flex justify-center">
          <div className="absolute">
            <img src={Assets.DarkEditorLogo} alt="" className="h-24 w-34" />
          </div>
          <hr className="absolute w-full top-24"/>
          <ul className="absolute top-40 flex flex-col gap-16 items-center m-auto">
            {Navlinks.map((link, index) => {
              return (
                <li key={index}>
                  <a
                    className={link.className}
                    href={link.to}
                    // onClick={(e) => handleClick(e, link.name)}
                    >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
}

export default EditorSideBar