import React from "react";

import { useGlobalColorContext } from "./GlobalContext";
import "./About.css";
const About = () => {
  const { colorState } = useGlobalColorContext();
  return (
    <div>
      <div className="flex justify-center ">
        <h1
          className={`text-center text-4xl before:content-[""] before:w-full before:h-px before:scale-150 before:absolute relative  inline-block before:bg-sky-400 before:top-1/2 px-3 before:-z-10 bg-black before:left-0 uppercase`}
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
          About{" "}
          <span className="text-sky-400 font-bold" id={colorState}>
            Me
          </span>
        </h1>
      </div>
      <p
        className="max-w-sm md:max-w-screen-lg text-justify mx-auto my-5 text-stone-300"
        style={{ color: colorState }}
      >
        As a Front-End Developer, I possess an impressive arsenal of skills in
        HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing
        and maintaining responsive websites that offer a smooth user experience.
        My expertise lies in crafting dynamic, engaging interfaces through
        writing clean and optimized code and utilizing cutting-edge development
        tools and techniques. I am also a team player who thrives in
        collaborating with cross-functional teams to produce outstanding web
        applications.
      </p>
      <div className="w-full flex flex-col md:flex-row items-center mt-12">
        <div
          className={`w-full max-w-xs mx-auto md:w-full md:max-w-md before:content-["hari"] before:w-full before:h-full  before:absolute relative before:border-8 before:border-sky-400 before:top-8 before:left-8 before:-z-10 mb-8 before:hidden md:before:block`}
          id={
            colorState === "one"
              ? "oonee"
              : colorState === "two"
              ? "ttwoe"
              : colorState === "three"
              ? "tthreee"
              : colorState === "four"
              ? "ffoure"
              : colorState === "five"
              ? "ffivee"
              : colorState === "six"
              ? "ssixe"
              : colorState === "seven"
              ? "ssevene"
              : "eeighte"
          }
        >
          <img
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:cursor-pointer"
            src="./profile.jpg"
            alt="phot"
          />
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-4 max-w-sm md:max-xl: w-full mx-auto md:mx-0 mt-6 md:w-1/2 flex-wrap md:pl-4">
          <div className="flex flex-col space-y-1 w-1/2">
            <p className="text-stone-300">Full Name</p>
            <p>C Hari Babu</p>
          </div>

          <div className="flex flex-col space-y-1  md:-translate-y-4  w-1/2">
            <p className="text-stone-300">Date of Birth</p>
            <p>31/07/2000</p>
          </div>
          <div className="flex flex-col space-y-1 md:-translate-y-4 w-1/2">
            <p className="text-stone-300">Father Name</p>
            <p>C Chengal Rayulu</p>
          </div>
          <div className="flex flex-col space-y-1 w-1/2 md:-translate-y-4">
            <p className="text-stone-300">Nationality</p>
            <p>Indian</p>
          </div>
          <div className="flex flex-col space-y-1 w-1/2 md:-translate-y-4">
            <p className="text-stone-300">Experience</p>
            <p>2 years</p>
          </div>
          <div className="flex flex-col space-y-1 w-1/2 md:-translate-y-4">
            <p className="text-stone-300">Phone</p>
            <a href="tel:+917036393892" className="hover:cursor-pointer block">
              +91 7036393892
            </a>
          </div>
          <div className="flex flex-col space-y-1 w-1/2 md:-translate-y-4">
            <p className="text-stone-300">Email</p>
            <a
              href="mailto:haribabu.c535@gmail.com"
              className="hover:cursor-pointer block"
            >
              haribabu.c535@gmail.com
            </a>
          </div>
          <div>
            <button
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
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Interface / Download">
                    <path
                      id="Vector"
                      d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                      stroke="#fff"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </span>
              Download CV
            </button>
          </div>
        </div>
      </div>
      <div className="h-1 bg-gray-500 my-8"></div>
      <div className="flex justify-center">
        <h1
          className={`text-3xl uppercase my-9 before:content-[""] relative before:absolute before:w-8 before:h-8 before:rounded-full  before:-top-2  before:-left-2 before:animate-bounce before:-z-10 before:bg-sky-400`}
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
          Skills
        </h1>
      </div>
      <div className="max-w-sm mx-auto md:max-w-screen-md md:flex md:flex-wrap ">
        <div className="flex justify-between my-4 md:w-1/2">
          <div className="w-20 ">
            <img
              className="grayscale hover:grayscale-0 hover:transition-all duration-1000 object-cover hover:cursor-pointer  "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png"
              alt="html"
            />
          </div>
          <div className="w-20 ">
            <img
              className="grayscale hover:grayscale-0 hover:transition-all duration-1000  hover:cursor-pointer object-cover "
              src="https://diziglobalsolution.com/wp-content/uploads/2023/04/logo-css-3-1536.png"
              alt="css"
            />
          </div>
          <div className="w-20">
            <img
              className="grayscale hover:grayscale-0 hover:transition-all duration-1000 object-cover hover:cursor-pointer "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
              alt="javascript"
            />
          </div>
        </div>
        <div className="flex justify-between items-center md:w-1/2 md:pl-16">
          <div className="w-20">
            <img
              className="grayscale hover:grayscale-0 hover:transition-all duration-1000 object-cover hover:cursor-pointer"
              src="https://bilginc.com/editorFiles/3147aa77.png"
              alt="react"
            />
          </div>
          <div className="w-20">
            <img
              className="grayscale hover:grayscale-0 hover:transition-all duration-1000 object-cover hover:cursor-pointer "
              src="https://miro.medium.com/v2/resize:fit:500/1*tOI6UC5EaS2fPItCesI-AQ.png"
              alt="redux"
            />
          </div>
          <div className="w-20">
            <img
              className="grayscale hover:grayscale-0 hover:transition-all duration-1000  hover:cursor-pointer  "
              src="https://avatars.githubusercontent.com/u/67109815?s=280&v=4"
              alt="tailwind"
            />
          </div>
        </div>
      </div>

      <div className="h-1 bg-gray-500 my-8"></div>
      <div className="text-center ">
        <div className="flex justify-center">
          <h1
            className={`text-3xl uppercase my-9 before:content-[""] relative before:absolute before:w-8 before:h-8 before:rounded-full  before:-top-2  before:-left-2 before:animate-bounce before:-z-10 before:bg-sky-400`}
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
            What Do I do?
          </h1>
        </div>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 mx-auto">
          <div
            className={` md:w-1/3 max-w-sm md:max-w-lg: mx-auto before:content-[""] before:w-full before:h-full relative before:absolute  before:-top-1/2 before:-left-1/2  hover:before:scale-100 before:rounded-3xl hover:before:top-0 hover:before:left-0 before:-z-20 before:bg-sky-400  rounded-md  before:transition-all  hover:cursor-pointer after:content-[""] after:w-1/2 after:h-1/2  after:bg-black after:absolute after:-top-10 after:-left-20 hover:after:-top-5 hover:after:-left-5 hover:after:scale-150 hover:after:transition  duration-1000 after:rounded-full hover:after:duration-500 hover:before:duration-500 after:-z-10 overflow-hidden before:duration-500 after:duration-500 before:ease-linear hover:before:rounded-md`}
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
            <div>
              <svg
                fill="#fff"
                width="40px"
                height="40px"
                viewBox="0 -1 26 26"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m22.313 17.295c-1.008-1.345-2.437-2.327-4.089-2.754l-.051-.011-1.179 1.99c-.002.552-.448.998-1 1-.55 0-1-.45-1.525-1.774 0-.009 0-.021 0-.032 0-.691-.56-1.25-1.25-1.25s-1.25.56-1.25 1.25v.033-.002c-.56 1.325-1.014 1.774-1.563 1.774-.552-.002-.998-.448-1-1l-1.142-1.994c-1.702.44-3.13 1.421-4.126 2.746l-.014.019c-.388.629-.628 1.386-.655 2.197v.007c.005.15 0 .325 0 .5v2c0 1.105.895 2 2 2h15.5c1.105 0 2-.895 2-2v-2c0-.174-.005-.35 0-.5-.028-.817-.268-1.573-.666-2.221l.011.02zm-14.345-12.005c0 2.92 1.82 7.21 5.25 7.21 3.37 0 5.25-4.29 5.25-7.21 0-.019 0-.042 0-.065 0-2.9-2.351-5.25-5.25-5.25s-5.25 2.351-5.25 5.25v.068z" />
                <path d="m19.202 7.01c0 1.902 1.186 4.698 3.42 4.698 2.195 0 3.42-2.795 3.42-4.698 0-.016 0-.034 0-.052 0-1.889-1.532-3.421-3.421-3.421s-3.421 1.532-3.421 3.421v.055-.003z" />
                <path d="m.002 8.61c0 1.902 1.186 4.698 3.42 4.698 2.195 0 3.42-2.795 3.42-4.698 0-.016 0-.034 0-.052 0-1.889-1.532-3.421-3.421-3.421s-3.421 1.532-3.421 3.421v.055-.003z" />
              </svg>
            </div>
            <h1 className="text-start max-w-sm mx-auto my-3 md:my-4 text-stone-300">
              Understanding Client Requirements
            </h1>
            <p className="text-start max-w-sm mx-auto ">
              In-depth discussions and analysis to grasp the client's
              objectives, target audience, design preferences, and functional
              specifications, forming the foundation for the development
              process.
            </p>
          </div>
          <div className="md:w-1/3 md:pl-4">
            <div
              className={` w-full max-w-sm md:max-w-xl mx-auto before:content-[""] before:w-full before:h-full relative before:absolute  before:-top-1/2 before:-left-1/2  hover:before:scale-100 before:rounded-3xl hover:before:top-0 hover:before:left-0 before:-z-20 before:bg-sky-400  rounded-md before:transition-all  hover:cursor-pointer after:content-[""] after:w-1/2 after:h-1/2  after:bg-black after:absolute after:-top-10 after:-left-20 hover:after:-top-5 hover:after:-left-5 hover:after:scale-150 hover:after:transition  duration-1000 after:rounded-full hover:after:duration-500 hover:before:duration-500 after:-z-10 overflow-hidden before:duration-500 after:duration-500 before:ease-linear hover:before:rounded-md `}
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
              <div className="md:pl-0 max-w-sm mx-auto">
                <svg
                  fill="#fff"
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.7,5.2a1.024,1.024,0,0,1,0,1.448L18.074,9.276l-3.35-3.35L17.35,3.3a1.024,1.024,0,0,1,1.448,0Zm-4.166,5.614-3.35-3.35L4.675,15.975,3,21l5.025-1.675Z" />
                </svg>
              </div>
              <h1 className="text-start max-w-sm mx-auto md:pl-0 my-3 md:my-4 text-stone-300">
                Planning and Design
              </h1>
              <p className="text-start max-w-sm mx-auto md:pl-0">
                collaborating closely with clients and designers to
                conceptualize the site's layout, structure, and overall user
                experience, ensuring alignment with the client's vision and
                goals.
              </p>
            </div>
          </div>
          <div className="md-w-1/3 md:pl-4">
            <div
              className={` w-full max-w-sm md:max-w-xl mx-auto before:content-[""] before:w-full before:h-full relative before:absolute  before:-top-1/2 before:-left-1/2  hover:before:scale-100 before:rounded-3xl hover:before:top-0 hover:before:left-0 before:-z-20 before:bg-sky-400  rounded-md  before:transition-all  hover:cursor-pointer after:content-[""] after:w-1/2 after:h-1/2  after:bg-black after:absolute after:-top-10 after:-left-20 hover:after:-top-5 hover:after:-left-5 hover:after:scale-150 hover:after:transition  duration-1000 after:rounded-full hover:after:duration-500 hover:before:duration-500 after:-z-10 overflow-hidden before:duration-500 after:duration-500 before:ease-linear hover:before:rounded-md  `}
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
              <div className="">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V15C22 16.6569 20.6569 18 19 18H13V19H15C15.5523 19 16 19.4477 16 20C16 20.5523 15.5523 21 15 21H9C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19H11V18H5C3.34315 18 2 16.6569 2 15V6ZM5 5C4.44772 5 4 5.44772 4 6V15C4 15.5523 4.44772 16 5 16H19C19.5523 16 20 15.5523 20 15V6C20 5.44772 19.5523 5 19 5H5Z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <h1 className="text-start max-w-sm mx-auto  my-3 md:my-4 text-stone-300">
                front-end development
              </h1>
              <p className="text-start max-w-sm mx-auto ">
                creating visually appealing and interactive user interfaces by
                using languages like HTML, CSS, and JavaScript,react js, redux,
                tailwind css, ensuring seamless user experiences across various
                devices and browsers
              </p>
            </div>
          </div>{" "}
        </div>
      </div>

      <div className="h-1 bg-gray-500 my-8"></div>

      <div className="flex justify-center">
        <h1
          className={`uppercase text-xl my-7  text-center font-bold tracking-widest before:content-[""] before:w-full before:h-px before:scale-150 before:absolute relative  inline-block before:bg-sky-400 before:top-1/2 px-3 before:-z-10 bg-black before:left-0`}
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
          Education
        </h1>
      </div>
      <div className="max-w-sm md:max-w-screen-md mx-auto">
        <div className="leading-7 border-2 border-r-0 border-dashed border-white rounded-lg p-3 ">
          <p className="text-stone-300">&#8211;&gt; 2018 - 2022</p>
          <h1>
            B.tech- Aeronautical Engineering |
            <span className="text-sky-500" id={colorState}>
              {" "}
              Kalsalingam University
            </span>
          </h1>
          <p className="text-stone-300">CGPA - 8.87</p>
        </div>
        <div className="leading-7 border-2 border-y-0 border-l-0 border-dashed border-swhite rounded-lg p-3 text-end">
          <p className="text-stone-300">&#8211;&gt; 2016 - 2018</p>
          <h1>
            Intermediate |
            <span className="text-sky-500" id={colorState}>
              {" "}
              Vijayam Junior College
            </span>
          </h1>
          <p className="text-stone-300">Percentage - 96.8%</p>
        </div>
        <div className="leading-7 mb-8 border-2 border-r-0 border-dashed border-white rounded-lg p-3 ">
          <p className="text-stone-300">&#8211;&gt; 2015 - 2016</p>
          <h1>
            SSC |
            <span className="text-sky-500" id={colorState}>
              {" "}
              Narayana EM High School
            </span>
          </h1>
          <p className="text-stone-300">GPA - 9.5</p>
        </div>
      </div>
    </div>
  );
};

export default About;
