import  {Route, Routes} from "react-router-dom";
import YoutuberSideNav from "./YoutuberSideNav";
import ProjectTiles from "./ProjectTiles";
import VideoReview from "./VideoReview";
import YoutuberProfile from "./YoutuberProfile";
import YoutuberRoomCreation from "./YoutuberRoomCreation";
import { IntrinsicAttributes } from "react";


const YoutuberMain = ({ user: YoutuberMainProps }) => {
  type YoutuberMainProps = IntrinsicAttributes & {
    user: any;
  };
  return (
    <>
      <div className="flex">
        <YoutuberSideNav />
        <div className="h-screen flex items-center justify-center w-5/6 bg-[#1e1e1e] overflow-auto">
          {/* <YoutuberProfile user={user.username} /> */}
          <Routes>
          <Route path="/dashboard/" element={<YoutuberRoomCreation />} />
            <Route path="/project-tiles" element={<ProjectTiles />} />
            <Route path="/video-review" element={<VideoReview />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default YoutuberMain;
