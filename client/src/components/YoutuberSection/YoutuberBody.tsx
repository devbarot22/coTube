import YoutuberProfile from './YoutuberProfile'
import YoutuberRoomCreation from './YoutuberRoomCreation'

const YoutuberBody = () => {
  return (
    <div className="h-screen flex items-center justify-center w-5/6 bg-[#1e1e1e] overflow-auto">
      <YoutuberProfile />
      <YoutuberRoomCreation />
    </div>
  )
}

export default YoutuberBody