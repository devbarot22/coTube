import EditorSideBar from './EditorSideNav'
import EditorBody from './EditorBody'

const EditorMain = () => {
  return (
    <div className='flex'>
      <EditorSideBar />
      <EditorBody />
    </div>
  )
}

export default EditorMain