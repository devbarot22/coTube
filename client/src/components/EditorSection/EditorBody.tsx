import EditorProfile from './EditorProfile'
import EditorRoom from './EditorRoom'

const YoutuberBody = () => {
  return (
    <div className="h-screen flex items-center justify-center w-5/6 bg-[#1e1e1e] overflow-auto">
      <EditorProfile />
      <EditorRoom />
    </div>
  )
}

export default YoutuberBody