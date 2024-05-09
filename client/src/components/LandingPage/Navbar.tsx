import * as Assets from '../assets/Assets'

const Navbar = ({openLogin, openSignup}: {openLogin: React.MouseEventHandler, openSignup: React.MouseEventHandler}) => {

  const styles = {
    className: 'text-white block px-4 py-4 hover:text-gray-500 cursor-pointer  transition duration-500 ease-in-out',
  };

  const Navlinks = [
    {
      className: `${styles.className}`,
      to: '#Services',
      name: 'Services'
    },
    {
      className: `${styles.className}`,
      to: '',
      name: 'How It Works'
    },
    {
      className: `${styles.className}`,
      to: '#About Us',
      name: 'About Us'
    },
    {
      className: `${styles.className}`,
      to: '#Contact',
      name: 'Contact'
    },

  ];

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  

  return (
    <>
      <div className="flex flex-row items-center justify-between absolute bg-transparent h-[9vh] w-screen">
        <img src={Assets.DarkModeLogo} alt="Logo" className="h-12 w-12 ml-5" />
        <ul className="flex flex-row items-center">
          {Navlinks.map((link, index) => {
            return (
              <li key={index}>
                <a
                  className={link.className}
                  href={link.to}
                  onClick={(e) => handleClick(e, link.name)}
                >{link.name}</a>
              </li>
            );
          })}
        </ul>
        <div>
          <button className="bg-transparent hover:text-gray-500 transition text-xl duration-500 ease-in-out text-white py-2 px-3" onClick={openLogin}>
            Login
          </button>
          <button className="bg-transparent hover:text-gray-500 transition text-xl duration-500 ease-in-out text-white py-2 px-3 rounded mr-4" onClick={openSignup}>
            Get Started
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar