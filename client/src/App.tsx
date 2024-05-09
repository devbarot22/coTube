import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from "./components/LandingPage/Landingpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
