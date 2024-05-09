import { useState } from 'react';
import * as Assets from '../assets/Assets'
import './LandCss.css'
import { FaInstagram, FaLinkedin, FaRegCopyright, FaTwitter, FaYoutube } from "react-icons/fa";

const LandingPageFooter = () => {

  const [isClicked, setIsClicked] = useState(false);


  const handleClick = () => {
    setIsClicked(true);
    
    setTimeout(() => {
      setIsClicked(false);
    }, 800);
  };


  return (
    <div className="h-[50vh] w-screen bg-[#00ADB5] relative" id='Contact'>
      <div className='pt-5 ml-5 '>
        <img src={Assets.LightModeLogo} alt="Logo" className='h-10' />
      </div>
      <div className="h-20 w-1/2 mt-20 text-center">
        <h1 className='text-xl'>We also Make Emails</h1>
        <h4 className='text-sm'>Receive emails about latest features, mega launches and events.</h4>
        <h4 className='text-sm'> No Spams, No Scams. if so anytime unsubscribe.</h4>
        <div className='flex items-center h-14 mx-20 mt-2 border-black border-y-[1px] border-x relative rounded-md shadow-md'>
          <input type="text" className='bg-transparent absolute left-0 border-none h-10 outline-none w-full pr-14 pl-2 placeholder-black' placeholder='Your Email' />
          <button className='h-10 w-10 absolute right-0 mr-2 rotate-180' onClick={handleClick}>
            <img key={isClicked ? Date.now() : ''} src={isClicked ? Assets.ArrowForEmailGif : Assets.ArrowForEmailImg} alt="" />
          </button>
        </div>
      </div>
      <div className="w-1/2 h-[50vh] flex absolute right-0 top-0">
        <div className='h-20 w-52 flex flex-col text-center mt-20 ml-10'>
          <h1 className='text-lg mb-5'>Contact</h1>
          <p className='mb-2'>+915663435200024</p>
          <p className='mb-2'>support@CoTuber.com</p>
        </div>
        <div className='h-20 w-52 flex flex-col text-center mt-20 ml-10'>
          <h1 className='text-lg mb-5'>About Us</h1>
          <p className='mb-2'>Our Team</p>
          <p className='mb-2'>Our Work</p>
          <p className='mb-2'>Our Appreciation</p>
          <p className='mb-2'>Career</p>
        </div>
        <div className='h-20 w-52 flex flex-col text-center mt-20 ml-10'>
          <h1 className='text-lg mb-5'>Help</h1>
          <p className='mb-2'>Help & FAQ</p>
          <p className='mb-2'>Privacy Ploicy</p>
          <p className='mb-2'>Terms and Condition</p>
        </div>
      </div>
      <div className='absolute bottom-0 right-0 flex gap-1 mb-5'>
        <h4 className='text-lg mr-2'>Follow Us:</h4>
        <a href="https://www.instagram.com/your_username" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="https://twitter.com/your_username" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} />
        </a>
        <a href="https://www.linkedin.com/in/your_username" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.youtube.com/channel/your_channel_id" className='mr-4' target="_blank" rel="noopener noreferrer">
          <FaYoutube size={24} />
        </a>
      </div>
      <div className="ml-5 absolute bottom-3 flex mb-3">
        <div className='h-5 flex items-center'>
          <FaRegCopyright className='mt-px' />
          <span className='ml-1'>{new Date().getFullYear()} CoTuber. All Right Reserved.</span>
        </div>
      </div>
    </div>
  )
}

export default LandingPageFooter