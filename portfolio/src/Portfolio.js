import React from "react";
import "./Portfolio.css";
import { useGlobalColorContext } from "./GlobalContext";

const Portfolio = () => {
  const { colorState } = useGlobalColorContext();
  return (
    <div className="mb-64">
      <div className="flex justify-center ">
        <h1
          className={`text-center text-4xl before:content-[""] before:w-full before:h-px before:scale-150 before:absolute relative  inline-block before:bg-sky-400 before:top-1/2 px-3 before:-z-10 bg-black before:left-0`}
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
          <span className="text-sky-400 font-bold uppercase" id={colorState}>
            portfolio
          </span>
        </h1>
      </div>
      <div className="flex justify-center mt-8 ">
        <h1
          className={`text-center text-2xl uppercase before:content-[""] before:w-10 before:h-10 before:absolute relative before:bg-sky-400 before:rounded-full before:-right-10 before:bottom-0  before:animate-bounce`}
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
          yet to add projects......
        </h1>
      </div>
    </div>
  );
};

export default Portfolio;
