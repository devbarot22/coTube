import * as Assets from '../assets/Assets'

const OurWork = () => {
  return (
    <div className='h-screen w-screen relative bg-[#222831]' id='About Us'>
      <div className='w-screen flex flex-col justify-center pt-20'>
        <img src={Assets.ShieldLogo} alt="Logo" className='h-40 w-screen' />
        <div className='flex flex-col px-10 justify-center'>
          <h2 className='text-white mt-10 text-center text-4xl'>CoTuber empowers both YouTubers and editors to achieve their creative goals. We're passionate about simplifying the video creation process and fostering a collaborative environment for amazing content to thrive.</h2>
          <h3 className='text-white mt-4 text-center text-4xl'>But primarily, Securing your data and fostering trust is our foremost mission. Prioritizing your security, we then equip you with worry-free functionalities for creative freedom.</h3>
          <h6 className='mt-10 ml-7 text-white absolute bottom-52 right-20'>- CoTuber</h6>
        </div>
      </div>
    </div>
  )
}

export default OurWork