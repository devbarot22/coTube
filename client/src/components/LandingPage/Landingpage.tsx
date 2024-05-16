import { useState } from "react"
import Navbar from "./Navbar"
import LandingPageBody from "./LandingPageBody"
import Service from "./Services"
import OurWork from "./OurWork"
import LandingPageFooter from "./LandingPageFooter"
import Login from "./Login"
import Signup from "./SignUp"

const Landingpage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [ShowSignup, setShowSignup] = useState(false);

  const openLogin = () => {
    setShowLogin(true);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  const openSignup = () => {
    setShowSignup(true);
  }

  const closeSignup = () => {
    setShowSignup(false)
  }



  return (
    <>
      <Navbar openLogin={openLogin} openSignup={openSignup}/>
      <LandingPageBody />
      <Service />
      <OurWork />
      <LandingPageFooter />
      {showLogin && <Login closeLogin={closeLogin} />}
      {ShowSignup && <Signup closeSignup={closeSignup} />}
    </>
  )
}

export default Landingpage