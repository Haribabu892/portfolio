import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useGlobalColorContext } from "./GlobalContext";

const Navbar = () => {
  const { colorState, setSomeState, someState } = useGlobalColorContext();
  const [isOpen, setIsOpen] = useState(false);

  const color = useGlobalColorContext();
  console.log(someState);

  function handletoggleMenu() {
    setIsOpen((x) => !x);
  }
  return (
    <div>
      <div className="fixed top-0 md:left-7 left-0 md:top-5 md:p-0 w-full bg-black z-50 md:w-auto pt-1">
        <div className="rounded-full bg-black p-2  hover:cursor-pointer z-50 uppercase w-14">
          {!isOpen ? (
            <MenuIcon handletoggleMenu={handletoggleMenu} />
          ) : (
            <div className="flex flex-col gap-y-4">
              <CloseIcon
                handletoggleMenu={handletoggleMenu}
                colorState={colorState}
              />
              <NavLink to="/">
                <HomeIcon
                  handletoggleMenu={handletoggleMenu}
                  colorState={colorState}
                />
              </NavLink>
              <NavLink to="/about">
                <AboutIcon
                  handletoggleMenu={handletoggleMenu}
                  colorState={colorState}
                />
              </NavLink>
              <NavLink to="/portfolio">
                <PortfolioIcon
                  handletoggleMenu={handletoggleMenu}
                  colorState={colorState}
                />
              </NavLink>
              <NavLink to="/contact">
                <ContactIcon
                  handletoggleMenu={handletoggleMenu}
                  colorState={colorState}
                />
              </NavLink>
            </div>
          )}
        </div>
      </div>

      <div>
        <div
          className="fixed right-2 md:right-14 top-2 md:top-4 z-50 hover:cursor-pointer"
          id="colorpic"
          onClick={() => setSomeState((x) => !x)}
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="3" stroke="#fff" stroke-width="1.5" />
            <path
              opacity="0.5"
              d="M13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74457 2.35523 9.35522 2.74458 9.15223 3.23463C9.05957 3.45834 9.0233 3.7185 9.00911 4.09799C8.98826 4.65568 8.70226 5.17189 8.21894 5.45093C7.73564 5.72996 7.14559 5.71954 6.65219 5.45876C6.31645 5.2813 6.07301 5.18262 5.83294 5.15102C5.30704 5.08178 4.77518 5.22429 4.35436 5.5472C4.03874 5.78938 3.80577 6.1929 3.33983 6.99993C2.87389 7.80697 2.64092 8.21048 2.58899 8.60491C2.51976 9.1308 2.66227 9.66266 2.98518 10.0835C3.13256 10.2756 3.3397 10.437 3.66119 10.639C4.1338 10.936 4.43789 11.4419 4.43786 12C4.43783 12.5581 4.13375 13.0639 3.66118 13.3608C3.33965 13.5629 3.13248 13.7244 2.98508 13.9165C2.66217 14.3373 2.51966 14.8691 2.5889 15.395C2.64082 15.7894 2.87379 16.193 3.33973 17C3.80568 17.807 4.03865 18.2106 4.35426 18.4527C4.77508 18.7756 5.30694 18.9181 5.83284 18.8489C6.07289 18.8173 6.31632 18.7186 6.65204 18.5412C7.14547 18.2804 7.73556 18.27 8.2189 18.549C8.70224 18.8281 8.98826 19.3443 9.00911 19.9021C9.02331 20.2815 9.05957 20.5417 9.15223 20.7654C9.35522 21.2554 9.74457 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8477 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.902C15.0117 19.3443 15.2977 18.8281 15.781 18.549C16.2643 18.2699 16.8544 18.2804 17.3479 18.5412C17.6836 18.7186 17.927 18.8172 18.167 18.8488C18.6929 18.9181 19.2248 18.7756 19.6456 18.4527C19.9612 18.2105 20.1942 17.807 20.6601 16.9999C21.1261 16.1929 21.3591 15.7894 21.411 15.395C21.4802 14.8691 21.3377 14.3372 21.0148 13.9164C20.8674 13.7243 20.6602 13.5628 20.3387 13.3608C19.8662 13.0639 19.5621 12.558 19.5621 11.9999C19.5621 11.4418 19.8662 10.9361 20.3387 10.6392C20.6603 10.4371 20.8675 10.2757 21.0149 10.0835C21.3378 9.66273 21.4803 9.13087 21.4111 8.60497C21.3592 8.21055 21.1262 7.80703 20.6602 7C20.1943 6.19297 19.9613 5.78945 19.6457 5.54727C19.2249 5.22436 18.693 5.08185 18.1671 5.15109C17.9271 5.18269 17.6837 5.28136 17.3479 5.4588C16.8545 5.71959 16.2644 5.73002 15.7811 5.45096C15.2977 5.17191 15.0117 4.65566 14.9909 4.09794C14.9767 3.71848 14.9404 3.45833 14.8477 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224Z"
              stroke="#fff"
              stroke-width="1.5"
            />
          </svg>
        </div>
        <div className="fixed right-4 top-16 md:top-20 z-50 hover:cursor-pointer md:right-16">
          {someState && (
            <div className="flex flex-col space-y-3">
              <div className="flex space-x-3">
                <span
                  className={`w-8 h-8 md:w-12 md:h-12  bg-[#007bff] `}
                  onClick={() => {
                    color.setColorState("one");
                    setSomeState((x) => !x);
                  }}
                ></span>

                <span
                  className={`w-8 h-8 md:w-12 md:h-12  bg-[#ff5d56]`}
                  onClick={() => {
                    color.setColorState("two");
                    setSomeState((x) => !x);
                  }}
                ></span>
                <span
                  className={`w-8 h-8 md:w-12 md:h-12  bg-[#daa520] `}
                  onClick={() => {
                    color.setColorState("three");
                    setSomeState((x) => !x);
                  }}
                ></span>
                <span
                  className={`w-8 h-8 md:w-12 md:h-12  bg-[#ff00ff] `}
                  onClick={() => {
                    color.setColorState("four");
                    setSomeState((x) => !x);
                  }}
                ></span>
              </div>

              <div className="flex space-x-3">
                <span
                  className={`w-8 h-8 md:w-12 md:h-12  bg-[#9acd32] `}
                  onClick={() => {
                    color.setColorState("five");
                    setSomeState((x) => !x);
                  }}
                ></span>
                <span
                  className={`w-8 h-8 md:w-12 md:h-12  bg-[#fa5b0f]`}
                  onClick={() => {
                    color.setColorState("six");
                    setSomeState((x) => !x);
                  }}
                ></span>
                <span
                  className={`w-8 h-8 md:w-12 md:h-12  bg-[#72b626] `}
                  onClick={() => {
                    color.setColorState("seven");
                    setSomeState((x) => !x);
                  }}
                ></span>
                <span
                  className={`w-8 h-8 md:w-12 md:h-12  bg-[#ffb400] `}
                  onClick={() => {
                    color.setColorState("eight");
                    setSomeState((x) => !x);
                  }}
                ></span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

function MenuIcon({ handletoggleMenu }) {
  return (
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      onClick={handletoggleMenu}
    >
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
      />
    </svg>
  );
}

function CloseIcon({ handletoggleMenu, colorState }) {
  return (
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handletoggleMenu}
    >
      <path
        fill="#fff"
        d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
      />
    </svg>
  );
}

function HomeIcon({ handletoggleMenu, colorState }) {
  return (
    <div
      onClick={handletoggleMenu}
      className={`relative after:content-["Home"] after:absolute after:top-2 after:-right-[64px] after:hover:border-l-4 after:hover:border-red-500 after:hover:text-red-500  after:pl-1 `}
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
      <svg
        fill={
          colorState === "one"
            ? "#007bff"
            : colorState === "two"
            ? "#ff5d56"
            : colorState === "three"
            ? "#daa520"
            : colorState === "four"
            ? "#ff00ff"
            : colorState === "five"
            ? "#9acd32"
            : colorState === "six"
            ? "#fa5b0f"
            : colorState === "seven"
            ? "#72b626"
            : "#ffb400"
        }
        width="40px"
        height="40px"
        viewBox="0 -32 576 576"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
      </svg>
    </div>
  );
}

function AboutIcon({ handletoggleMenu, colorState }) {
  return (
    <div
      className={`relative after:content-["About"] after:absolute after:top-2 after:-right-[69px] after:hover:border-l-4 after:hover:border-red-500 after:hover:text-red-500  after:pl-1 `}
      onClick={handletoggleMenu}
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
      <svg
        fill={
          colorState === "one"
            ? "#007bff"
            : colorState === "two"
            ? "#ff5d56"
            : colorState === "three"
            ? "#daa520"
            : colorState === "four"
            ? "#ff00ff"
            : colorState === "five"
            ? "#9acd32"
            : colorState === "six"
            ? "#fa5b0f"
            : colorState === "seven"
            ? "#72b626"
            : "#ffb400"
        }
        width="40px"
        height="40px"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
      </svg>
    </div>
  );
}

function PortfolioIcon({ handletoggleMenu, colorState }) {
  return (
    <div
      className={`relative after:content-["Portfolio"] after:absolute after:top-2 after:-right-[100px] after:hover:border-l-4 border-white  after:hover:border-red-500 after:hover:text-red-500  after:pl-1 `}
      onClick={handletoggleMenu}
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
      <svg
        fill={
          colorState === "one"
            ? "#007bff"
            : colorState === "two"
            ? "#ff5d56"
            : colorState === "three"
            ? "#daa520"
            : colorState === "four"
            ? "#ff00ff"
            : colorState === "five"
            ? "#9acd32"
            : colorState === "six"
            ? "#fa5b0f"
            : colorState === "seven"
            ? "#72b626"
            : "#ffb400"
        }
        width="40px"
        height="40px"
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M27 29h-23c-1.105 0-2-0.896-2-2v-12c0 0 5.221 2.685 10 3.784v1.216c0 0.553 0.447 1 1 1h5c0.552 0 1-0.447 1-1v-1.216c4.778-1.099 10-3.784 10-3.784v12c0 1.104-0.896 2-2 2zM17 17c0.552 0 1 0.447 1 1v1c0 0.553-0.448 1-1 1h-3c-0.553 0-1-0.447-1-1v-1c0-0.553 0.447-1 1-1h3zM19 17c0-0.553-0.448-1-1-1h-5c-0.553 0-1 0.447-1 1v0.896c-4.779-1.132-10-3.896-10-3.896v-4c0-1.104 0.895-2 2-2h6v-2c0-1.104 0.896-2 2-2h7c1.104 0 2 0.896 2 2v2h6c1.104 0 2 0.896 2 2v4c0 0-5.222 2.764-10 3.896v-0.896zM19 7c0-0.553-0.448-1-1-1h-5c-0.553 0-1 0.447-1 1 0 0.552 0 1 0 1h7c0 0 0-0.448 0-1z"></path>
      </svg>
    </div>
  );
}

function ContactIcon({ handletoggleMenu, colorState }) {
  return (
    <div
      className={`relative after:content-["Contact"] after:absolute after:top-2 after:-right-[88px] after:hover:border-l-4 border-white  after:hover:border-red-500 after:hover:text-red-500  after:pl-1 `}
      onClick={handletoggleMenu}
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
      <svg
        width="40px"
        height="40px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-2"
      >
        <path
          d="M17 12C19.7614 12 22 9.76142 22 7C22 4.23858 19.7614 2 17 2C14.2386 2 12 4.23858 12 7C12 7.79984 12.1878 8.55582 12.5217 9.22624C12.6105 9.4044 12.64 9.60803 12.5886 9.80031L12.2908 10.9133C12.1615 11.3965 12.6035 11.8385 13.0867 11.7092L14.1997 11.4114C14.392 11.36 14.5956 11.3895 14.7738 11.4783C15.4442 11.8122 16.2002 12 17 12Z"
          fill={
            colorState === "one"
              ? "#007bff"
              : colorState === "two"
              ? "#ff5d56"
              : colorState === "three"
              ? "#daa520"
              : colorState === "four"
              ? "#ff00ff"
              : colorState === "five"
              ? "#9acd32"
              : colorState === "six"
              ? "#fa5b0f"
              : colorState === "seven"
              ? "#72b626"
              : "#ffb400"
          }
        />
        <path
          d="M8.03759 7.31617L8.6866 8.4791C9.2723 9.52858 9.03718 10.9053 8.11471 11.8278C8.11471 11.8278 8.11471 11.8278 8.11471 11.8278C8.11459 11.8279 6.99588 12.9468 9.02451 14.9755C11.0525 17.0035 12.1714 15.8861 12.1722 15.8853C12.1722 15.8853 12.1722 15.8853 12.1722 15.8853C13.0947 14.9628 14.4714 14.7277 15.5209 15.3134L16.6838 15.9624C18.2686 16.8468 18.4557 19.0692 17.0628 20.4622C16.2258 21.2992 15.2004 21.9505 14.0669 21.9934C12.1588 22.0658 8.91828 21.5829 5.6677 18.3323C2.41713 15.0817 1.93421 11.8412 2.00655 9.93309C2.04952 8.7996 2.7008 7.77423 3.53781 6.93723C4.93076 5.54428 7.15317 5.73144 8.03759 7.31617Z"
          fill={
            colorState === "one"
              ? "#007bff"
              : colorState === "two"
              ? "#ff5d56"
              : colorState === "three"
              ? "#daa520"
              : colorState === "four"
              ? "#ff00ff"
              : colorState === "five"
              ? "#9acd32"
              : colorState === "six"
              ? "#fa5b0f"
              : colorState === "seven"
              ? "#72b626"
              : "#ffb400"
          }
        />
      </svg>
    </div>
  );
}

export default Navbar;
