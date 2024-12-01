import FeedbackBox from "../components/FeedbackBox";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { useRef } from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate;
  const reffer = useRef();
  const collecteddata = collection(db, "Message");
  const a = sessionStorage.getItem("loggedin");
  const b = !!a;
  console.log(b);
  function handleadd() {
    addDoc(collecteddata, {
      feedback: reffer.current.value,
      name: auth.currentUser.displayName,
      id: auth.currentUser.uid,
    }).then((data) => console.log(data));
    reffer.current.value = "";
  }
  // console.log(auth.currentUser.uid);
  return (
    <div className="container mx-auto flex flex-col gap-5 py-24 px-5">
      <div className="w-[100%] border-2 p-5 rounded-xl border-blue-500 min-h-32 flex flex-col gap-3 dark:border-white">
        <p className="text-3xl font-semibold">Milton Vinciline V</p>
        <a href="/RESUME.pdf" download="RESUME.pdf">
          <button className="bg-blue-500 text-white p-2 px-3 rounded-lg">
            Download_CV
          </button>
        </a>
      </div>
      <div className="w-[100%] border-2 p-5 rounded-xl border-blue-500 min-h-32 flex flex-col gap-3 dark:border-white">
        <p className="font-semibold text-3xl">Ebook-Web</p>
        <p>
          Tools : HTML, Tailwind CSS, JavaScript ES6, React Js, Express Js, Json
        </p>
        <p>
          Link :{" "}
          <span>
            <a
              className="text-blue-500"
              href="https://codebook-ecommerece-platform.netlify.app/"
            >
              https://codebook-ecommerece-platform.netlify.app/
            </a>
          </span>
        </p>
      </div>
      <div className="w-[100%] border-2 p-5 rounded-xl border-blue-500 min-h-32 flex flex-col gap-3 dark:border-white">
        <p className="font-semibold text-3xl">Cine-Mate</p>
        <p>
          Tools : HTML, Tailwind CSS, JavaScript ES6, React Js, TMDB-Open Source
          Datebase
        </p>
        <p>
          Link :{" "}
          <span>
            <a href="https://cineinfoz.netlify.app/" className="text-blue-500">
              https://cineinfoz.netlify.app/
            </a>
          </span>
        </p>
      </div>
      <div className="w-[100%] border-2 p-5 rounded-xl border-blue-500 min-h-32 flex flex-col gap-3 dark:border-white">
        <p className="font-semibold text-3xl">
          UI/UX Case Study - Design of a Technology Consulting Website{" "}
        </p>
        <p>Tools : Framer, Figma, Spline and Blender </p>
        <p>
          Link :{" "}
          <span>
            <a
              className="text-blue-500"
              href="https://small-operation-516956.framer.app/"
            >
              https://small-operation-516956.framer.app/
            </a>
          </span>
        </p>
      </div>
      {/* <div className="w-[100%] border-2 p-5 rounded-xl border-blue-500 min-h-32 flex flex-col gap-3 dark:border-white">
        <p className="font-semibold text-3xl">Feedback</p>
        <textarea
          ref={reffer}
          className="border-2 bg-blue-100 rounded-2xl min-h-48 dark:border-none cursor-pointer p-5 dark:bg-gray-900  "
          name=""
          placeholder="you can leave the feedback here...."
          id=""
        ></textarea>
        <div>
          <button
            onClick={handleadd}
            disabled={b ? "" : "disabled"}
            className={`bg-blue-500 text-white p-2 px-3 rounded-lg ${
              b ? "cursor-pointer" : "cursor-not-allowed"
            }`}
          >
            Add
          </button>
          <FeedbackBox />
        </div>
      </div> */}
    </div>
  );
};

export default Home;
