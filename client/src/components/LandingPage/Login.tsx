import { useEffect, useState } from "react";
import * as Assets from "../assets/Assets";
import axios from "axios";
import { FiEyeOff, FiEye } from "react-icons/fi";

const Login = ({ closeLogin }: { closeLogin: any }) => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const identifier = formData?.get("identifier");
    const password = formData?.get("password");

    const isEmail = /@gmail\.com$/.test(String(identifier));
    const data = isEmail
      ? { email: identifier, password }
      : { username: identifier, password };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/login",
        data
      );

      if (response.status === 200) {
        console.log("Login successful!");
        console.log("Server response:", response.data);
      } else {
        console.log("Unexpected status code:", response.status);
      }
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  let showstyle = {
    type: "password",
  };

  if (showPassword) {
    showstyle = {
      type: "text",
    };
  }

  let eyevisiblity = password === "" ? "hidden" : "visible";

  return (
    <div className="fixed top-0 z-50 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded p-10 relative w-[28vw]">
        <button onClick={closeLogin} className="absolute top-0 right-2">
          <img src={Assets.CancelIcon} alt="" className="h-4 w-5 mt-2 mr-1" />
        </button>
        <h2 className="text-2xl mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">Username or Email</label>
          <input
            type="text"
            name="identifier"
            onChange={(e) => setIdentifier(e.target.value)}
            className="border-b-2 border-gray-400 p-2 text-lg mb-4 w-full focus:border-black outline-none"
          />
          <div className="relative">
            <label className="block mb-2">Password</label>
            <input
              type={showstyle.type}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="border-b-2 border-gray-400 focus:border-black p-2 mb-4 w-full outline-none"
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className={`absolute right-5 top-1/2 cursor-pointer ${eyevisiblity}`}>
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 w-full text-white p-2 mt-4 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
