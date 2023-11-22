import React from "react";
import "./Homc.css";
import { useGlobalColorContext } from "./GlobalContext";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const { colorState } = useGlobalColorContext();
  const navigate = useNavigate();
  console.log(colorState);
  return (
    <div className="flex justify-center items-center mb-8" id="home">
      <div className="flex flex-col md:flex-row space-y-4 flex-wrap items-center">
        <div className="md:w-1/2 max-w-lg md:max-w-2xl">
          <div
            className={`w-full  mx-auto max-w-sm md:max-w-md overflow-hidden bg-white `}
            id="animation"
          >
            <img className="object-cover" src="./profile.jpg" alt="profile" />
          </div>
        </div>
        <div className="flex flex-col md:flex-col   space-y-3 md:w-1/2 md:pl-3">
          <h1 className="text-3xl  uppercase text-center md:text-start ">
            Hi There !
          </h1>
          <div>
            <h1 className="text-2xl  uppercase text-center md:text-start">
              I'm{" "}
              <span id={`${colorState}`}>
                <ExampleComponent />
              </span>
            </h1>
          </div>
          <p className=" text-justify max-w-sm md:max-w-lg mx-auto md:mx-0">
            A passionate Front-end React Developer based in Bangalore, India.I
            strive to build immersive and beautiful web applications through
            carefully crafted code.
          </p>
          <div className="flex flex-col md:flex-row flex-start  gap-y-4  w-full max-w-sm mx-auto md:mx-0 mb-4 md:space-x-2 ">
            <Button1 colorState={colorState} navigate={navigate} />
            <Button2 colorState={colorState} navigate={navigate} />
          </div>
        </div>
      </div>
    </div>
  );
};

function Button1({ colorState, navigate }) {
  return (
    <div>
      <button
        onClick={() => navigate("/portfolio")}
        className={`px-5 py-2 border border-white rounded-full uppercase  relative  before:content-[""] before:w-full before:h-full before:absolute  before:bg-sky-400 before:-z-10  before:top-0 before:left-0 before:translate-x-full hover:before:translate-x-0 btn-primary before:transition-all before:duration-500 before:skew-x-6 overflow-hidden  flex items-center space-x-2 font-bold `}
        id={
          colorState === "one"
            ? "oone"
            : colorState === "two"
            ? "ttwo"
            : colorState === "three"
            ? "tthree"
            : colorState === "four"
            ? "ffour"
            : colorState === "five"
            ? "ffive"
            : colorState === "six"
            ? "ssix"
            : colorState === "seven"
            ? "sseven"
            : "eeight"
        }
      >
        <span className="inline-block pr-2">
          <svg
            fill="#fff"
            width="16px"
            height="16px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>suitcase1</title>
            <path d="M27 29h-23c-1.105 0-2-0.896-2-2v-12c0 0 5.221 2.685 10 3.784v1.216c0 0.553 0.447 1 1 1h5c0.552 0 1-0.447 1-1v-1.216c4.778-1.099 10-3.784 10-3.784v12c0 1.104-0.896 2-2 2zM17 17c0.552 0 1 0.447 1 1v1c0 0.553-0.448 1-1 1h-3c-0.553 0-1-0.447-1-1v-1c0-0.553 0.447-1 1-1h3zM19 17c0-0.553-0.448-1-1-1h-5c-0.553 0-1 0.447-1 1v0.896c-4.779-1.132-10-3.896-10-3.896v-4c0-1.104 0.895-2 2-2h6v-2c0-1.104 0.896-2 2-2h7c1.104 0 2 0.896 2 2v2h6c1.104 0 2 0.896 2 2v4c0 0-5.222 2.764-10 3.896v-0.896zM19 7c0-0.553-0.448-1-1-1h-5c-0.553 0-1 0.447-1 1 0 0.552 0 1 0 1h7c0 0 0-0.448 0-1z"></path>
          </svg>
        </span>
        PORTFOLIO
      </button>
    </div>
  );
}

export function Button2({ colorState, navigate }) {
  return (
    <div>
      <button
        onClick={() => navigate("/about")}
        className={`px-5 py-2 border border-white  font-bold hover:bg-transparent transition-colors rounded-full uppercase  relative  before:content-[""] before:w-full before:h-full before:absolute  before:bg-sky-500 before:-z-10  before:top-0 before:left-0 before:translate-x-0 hover:before:-translate-x-full btn-primary before:transition-all before:duration-500 before:skew-x-6 overflow-hidden  flex items-center space-x-2 hover:border-white`}
        id={
          colorState === "one"
            ? "oone"
            : colorState === "two"
            ? "ttwo"
            : colorState === "three"
            ? "tthree"
            : colorState === "four"
            ? "ffour"
            : colorState === "five"
            ? "ffive"
            : colorState === "six"
            ? "ssix"
            : colorState === "seven"
            ? "sseven"
            : "eeight"
        }
      >
        <span className="inline-block pr-2">
          <svg
            fill="#fff"
            width="16px"
            height="16px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>suitcase1</title>
            <path d="M27 29h-23c-1.105 0-2-0.896-2-2v-12c0 0 5.221 2.685 10 3.784v1.216c0 0.553 0.447 1 1 1h5c0.552 0 1-0.447 1-1v-1.216c4.778-1.099 10-3.784 10-3.784v12c0 1.104-0.896 2-2 2zM17 17c0.552 0 1 0.447 1 1v1c0 0.553-0.448 1-1 1h-3c-0.553 0-1-0.447-1-1v-1c0-0.553 0.447-1 1-1h3zM19 17c0-0.553-0.448-1-1-1h-5c-0.553 0-1 0.447-1 1v0.896c-4.779-1.132-10-3.896-10-3.896v-4c0-1.104 0.895-2 2-2h6v-2c0-1.104 0.896-2 2-2h7c1.104 0 2 0.896 2 2v2h6c1.104 0 2 0.896 2 2v4c0 0-5.222 2.764-10 3.896v-0.896zM19 7c0-0.553-0.448-1-1-1h-5c-0.553 0-1 0.447-1 1 0 0.552 0 1 0 1h7c0 0 0-0.448 0-1z"></path>
          </svg>
        </span>
        More About Me
      </button>
    </div>
  );
}
const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "C Hari Babu",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Web Developer",
        1000,
        "Front-End Developer",
        1000,
        "React Js Developer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "24px", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default Home;
