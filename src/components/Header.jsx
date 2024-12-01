import React, { useState, useEffect } from "react";
import Mailicon from "../assets/gicon4.png";
import dayy from "../assets/dayMode.png";
import night from "../assets/nightMode.png";
import { Link } from "react-router";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, povider } from "../firebase/config";

const Header = () => {
  const [log, setlog] = useState(
    JSON.parse(localStorage.getItem("log")) || false
  );
  const [day, setday] = useState(
    JSON.parse(localStorage.getItem("darkmode")) || false
  );
  useEffect(() => {
    localStorage.setItem("log", JSON.stringify(log));
  }, [log]);

  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(day));
    if (day) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [day]);

  function handlelogin() {
    if (log == true) {
      signOut(auth);
      setlog(false);
      sessionStorage.removeItem("loggedin");
    } else {
      signInWithPopup(auth, povider).then((result) => console.log(result));
      setlog(true);
      sessionStorage.setItem("loggedin", "true");
    }
  }
  return (
    <div className="w-full h-24 bg-blue-500 dark:bg-gray-900 px-11 flex justify-between items-center flex-wrap">
      <Link to="/" className="font-semibold text-3xl text-white">
        Document
      </Link>
      <div className="flex items-center gap-5">
        <button
          className="bg-white text-black size-12 rounded-full"
          onClick={() => setday(!day)}
        >
          <img className="rounded-full" src={day ? night : dayy} alt="" />
        </button>
        <button
          onClick={handlelogin}
          className=" relativeflex w-32 items-center"
        >
          <img className="absolute right-2 size-12 " src={Mailicon} alt="" />
          <span>
            <p className="bg-white py-3 rounded-lg">
              {log ? "Logged in" : "Logged out"}
            </p>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
