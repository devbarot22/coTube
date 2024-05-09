import * as Assets from '../assets/Assets'
import './LandCss.css'

const LandingPageBody = () => {
  return (
    <div className="h-screen w-screen flex items-center bg-[#222831]">
      <div className="h-10 w-1/2 ml-20">
        <h1 className="text-6xl mb-4 text-white">Streamline Your Video Workflow</h1>
        <button className="bg-white border-none transition text-xl duration-500 ease-in-out text-black  py-2 px-3 rounded mr-4">
            Get Started
          </button>
      </div>
      <aside className="w-1/2 relative h-[86vh] flex "> 
        <img src={Assets.YoutuberRecording} alt="Youtuber Image" className='ml-72 absolute'/>
        <div className="box absolute mt-[48%]"></div>
        <img src={Assets.MP4Icon} alt="" className='h-16 w-16 ml-[50%] -rotate-12 mt-[32%] absolute'/>
        <div className="box1 absolute mt-[48%]"></div>
        <img src={Assets.EditorWorking} alt="Editor Image" className='mr-52 bottom-0 absolute' />
      </aside>
    </div>
  )
}

export default LandingPageBody