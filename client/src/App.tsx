import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Landingpage from "./components/LandingPage/Landingpage";
import YoutuberMain from "./components/YoutuberSection/YoutuberMain";
import EditorMain from "./components/EditorSection/EditorMain";
// import axios from "axios";

function App() { 
  
  const [user, setUser] = useState(null);

  // Fetch the user data when the component mounts
  useEffect(() => {
    fetch('/api/user', { // replace with your API endpoint
      credentials: 'include', // this will include the cookies in the request
    })
      .then(response => response.json())
      .then(data => setUser(data.data.user)); // access the user data from the response
  }, []);
  
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/Youtuber/*" element={<YoutuberMain user={user}/>} />
          <Route path="/Editor/*" element={<EditorMain />} />
        </Routes>
      </Router>
  );
}

export default App;
