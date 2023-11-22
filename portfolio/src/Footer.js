import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";
import { useGlobalColorContext } from "./GlobalContext";

const Footer = () => {
  const { colorState } = useGlobalColorContext();
  return (
    <div className="my-8">
      <div className="h-px bg-stone-400 mx-4"></div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:justify-between  mx-8 my-8 md:items-start">
        <div className="flex flex-col space-y-3">
          <h1
            className="text-stone-400 text-xl font-bold tracking-widest "
            id={colorState}
          >
            Contact
          </h1>
          <div className="flex flex-col space-y-1 ">
            <p className="uppercase ">Phone</p>
            <a
              href="tel:+917036393892"
              className="hover:text-stone-400 text-stone-300"
            >
              +91 7036393892
            </a>
          </div>
          <div className="flex flex-col space-y-1 ">
            <p className="uppercase ">Email</p>
            <a
              href="mailto:haribabu.c535@gmail.com"
              className="hover:text-stone-400 text-stone-300"
            >
              haribabu.c535@gmail.com
            </a>
          </div>
          <div className="flex flex-col space-y-1 ">
            <p className="uppercase ">Location</p>
            <p className="text-stone-300">Tirupati, Andhra Pradesh, India</p>
          </div>
        </div>

        <div className="flex flex-col space-y-4 uppercase">
          <h1
            className="text-stone-400 text-xl font-bold tracking-widest"
            id={colorState}
          >
            Quick Links
          </h1>
          <div id="div">
            <NavLink
              to="/"
              className={`before:content-[""] before:w-full before:h-px before:absolute relative before:bg-white before:scale-0 hover:before:scale-100 transition-transform before:origin-left before:duration-500 before:-bottom-1 m-1 text-center`}
            >
              Home
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/about"
              className={`before:content-[""] before:w-full before:h-px before:absolute relative before:bg-white before:scale-0 hover:before:scale-100 transition-transform before:origin-left before:duration-500 before:-bottom-1 m-1 text-center`}
            >
              About
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/portfolio"
              className={`before:content-[""] before:w-full before:h-px before:absolute relative before:bg-white before:scale-0 hover:before:scale-100 transition-transform before:origin-left before:duration-500 before:-bottom-1 m-1 text-center`}
            >
              Portfolio
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/contact"
              className={`before:content-[""] before:w-full before:h-px before:absolute relative before:bg-white before:scale-0 hover:before:scale-100 transition-transform before:origin-left before:duration-500 before:-bottom-1 m-1 text-center`}
            >
              Contact
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <h1
            className="text-stone-400 text-xl md:text-center text-start max-w-sm w-64 uppercase font-bold tracking-widest"
            id={colorState}
          >
            Subscribe
          </h1>
          <input
            type="email"
            placeholder="Enter your Email "
            className="max-w-sm w-64 p-2 bg-transparent border-white border"
          />
          <button className="max-w-sm w-64 p-2 border-white border text-center uppercase rounded-md ">
            Send
          </button>
        </div>
      </div>
      <div className="h-px bg-stone-400 mx-4"></div>
      <h1 className="text-center m-4">
        &copy; 2023 All rights reserved | Design & Develop by{" "}
        <span className="text-stone-400" id={colorState}>
          C Hari Babu
        </span>
      </h1>
    </div>
  );
};

export default Footer;
