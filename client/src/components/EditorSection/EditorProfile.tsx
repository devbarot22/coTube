import * as Assets from '../assets/Assets'

const EditorProfile = () => {
  return (
    <div className="absolute flex items-center justify-center bg-[#B53131] rounded-r-full rounded-tl-full overflow-hidden mt-3 mr-2 top-0 right-0 pl-2 h-11">
    <p className='text-white'>tiktaktok</p>
    <img src={Assets.DarkModeLogo} alt="profile" className='h-10 w-10 rounded-full mr-[2px] ml-1' />
  </div>
  )
}

export default EditorProfile