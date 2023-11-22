import React from "react";
import "./contact.css";
import { useGlobalColorContext } from "./GlobalContext";

const Contact = () => {
  const { colorState } = useGlobalColorContext();
  return (
    <div className="mb-8">
      <div className="max-w-sm md:max-w-screen-md w-full mx-auto">
        <div className="flex justify-center">
          <h1 className={`text-center text-4xl uppercase`}>
            Get{" "}
            <span className="text-sky-400 font-bold" id={colorState}>
              In Touch
            </span>
          </h1>
        </div>
        <div className="flex justify-center mt-8">
          <h1
            className={`text-center text-sm md:before:content-[""] md:before:w-full md:before:h-px md:before:scale-125 md:before:absolute relative  inline-block md:before:bg-sky-400 md:before:top-1/2 px-3 md:before:-z-10 bg-black md:before:left-0`}
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
            I’M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS.
          </h1>
        </div>
        <div className="mt-8 md:mt-16 md:max-w-screen-lg flex flex-col md:flex-row md:items-center">
          <div className="flex flex-col space-y-3 md:w-1/2">
            <div className="flex flex-col space-y-1 w-1/2">
              <p className="text-stone-300 md:text-xl">Phone</p>
              <a className="md:text-xl" href="tel:+917036393892">
                +91 7036393892
              </a>
            </div>

            <div className="flex flex-col space-y-1 w-1/2 ">
              <p className="text-stone-300 md:text-xl">Email</p>
              <a className="md:text-xl" href="mailto:haribabu.c535@gmail.com">
                haribabu.c535@gmail.com
              </a>
            </div>
            <div className="flex flex-col space-y-1 w-1/2 ">
              <p className="text-stone-300 md:text-xl">Instagram</p>
              <p className="md:text-xl">haribabu_849</p>
            </div>
            <div className="flex flex-col space-y-3 w-1/2 ">
              <p className="text-stone-300 md:text-xl">Social Profiles</p>
              <div className="flex space-x-5 flex-start">
                <a
                  href="https://www.facebook.com/profile.php?id=61553066067797"
                  target="_blank"
                  rel="noreferrer"
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
                    width="25px"
                    height="25px"
                    viewBox="0 0 1920 1920"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-animate"
                  >
                    <path
                      d="M1168.737 487.897c44.672-41.401 113.824-36.889 118.9-36.663l289.354-.113 6.317-417.504L1539.65 22.9C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l62.045-451.233H1126.66v-69.152c0-54.937 14.214-96.112 42.078-122.058"
                      fill-rule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/haribabu_849/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-animate"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
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
                      d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
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
                </a>
                <a
                  href="https://twitter.com/HariBabu_849"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-animate"
                  >
                    <path
                      d="M19.83 8.00001C19.83 8.17001 19.83 8.35001 19.83 8.52001C19.8393 10.0302 19.5487 11.5272 18.9751 12.9242C18.4014 14.3212 17.5562 15.5904 16.4883 16.6583C15.4204 17.7262 14.1512 18.5714 12.7542 19.1451C11.3572 19.7187 9.86017 20.0093 8.34999 20C6.15213 20.0064 3.9992 19.3779 2.14999 18.19C2.47999 18.19 2.78999 18.19 3.14999 18.19C4.96345 18.19 6.72433 17.5808 8.14999 16.46C7.30493 16.4524 6.48397 16.1774 5.80489 15.6744C5.12581 15.1714 4.62349 14.4662 4.36999 13.66C4.62464 13.7006 4.88213 13.7207 5.13999 13.72C5.49714 13.7174 5.85281 13.6738 6.19999 13.59C5.2965 13.4056 4.48448 12.9147 3.90135 12.2003C3.31822 11.486 2.99981 10.5921 2.99999 9.67001C3.55908 9.97841 4.18206 10.153 4.81999 10.18C4.25711 9.80767 3.79593 9.30089 3.47815 8.7055C3.16038 8.11011 2.99604 7.44489 2.99999 6.77001C3.00124 6.06749 3.18749 5.37769 3.53999 4.77001C4.55172 6.01766 5.81423 7.03889 7.24575 7.76757C8.67727 8.49625 10.2459 8.91613 11.85 9.00001C11.7865 8.69737 11.753 8.38922 11.75 8.08001C11.7239 7.25689 11.9526 6.44578 12.4047 5.75746C12.8569 5.06913 13.5104 4.53714 14.2762 4.23411C15.0419 3.93109 15.8826 3.87181 16.6833 4.06437C17.484 4.25693 18.2057 4.69195 18.75 5.31001C19.655 5.12822 20.5214 4.78981 21.31 4.31001C21.0088 5.24317 20.3754 6.0332 19.53 6.53001C20.3337 6.44316 21.1194 6.23408 21.86 5.91001C21.3116 6.71097 20.6361 7.41694 19.86 8.00001H19.83Z"
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
                </a>
                <a
                  href="https://www.youtube.com/@haribabu5463"
                  target="_blank"
                  rel="noreferrer"
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
                    width="25px"
                    height="25px"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-animate"
                  >
                    <path d="M24.325 8.309s-2.655-.334-8.357-.334c-5.517 0-8.294.334-8.294.334A2.675 2.675 0 0 0 5 10.984v10.034a2.675 2.675 0 0 0 2.674 2.676s2.582.332 8.294.332c5.709 0 8.357-.332 8.357-.332A2.673 2.673 0 0 0 27 21.018V10.982a2.673 2.673 0 0 0-2.675-2.673zM13.061 19.975V12.03L20.195 16l-7.134 3.975z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-20 md:mt-0 relative">
            <h1
              className="absolute left-1/2 -translate-x-1/2 -top-6 border p-4 rounded-3xl bg-sky-400  px-10  uppercase font-bold text-black shadow-md shadow-gray-300 text-center"
              id={
                colorState === "one"
                  ? "ooone"
                  : colorState === "two"
                  ? "ottwo"
                  : colorState === "three"
                  ? "otthree"
                  : colorState === "four"
                  ? "offour"
                  : colorState === "five"
                  ? "offive"
                  : colorState === "six"
                  ? "ossix"
                  : colorState === "seven"
                  ? "osseven"
                  : "oeeight"
              }
            >
              Contact Us
            </h1>
            <form>
              <div className="flex flex-col space-y-5 p-4 pt-12 border-4  rounded-3xl border-white">
                <div className="flex flex-col space-y-5 md:flex-row md:items-end md:mb-4">
                  <div
                    className={`relative md:w-1/2 before-content-[""]  before:absolute before:w-full before:h-0.5 before:scale-0 before:origin-center hover:before:scale-100 before:transition-transform before:duration-500 before:bottom-0 before:z-10  before:bg-sky-500`}
                    placeholder=" "
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
                    <input
                      type="text"
                      id="firstName"
                      className={`outline-0 block bg-transparent border-b-2 border-white p-2 w-full input `}
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="firstName"
                      className="absolute top-2 left-0 "
                    >
                      First Name
                    </label>
                  </div>

                  <div
                    className={`relative md:w-1/2 md:pl-2 before-content-[""]  before:absolute before:w-full before:h-0.5 before:scale-0 before:origin-center hover:before:scale-100 before:transition-transform before:duration-500 before:bottom-0 before:z-10  before:bg-sky-500`}
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
                    <input
                      type="text"
                      id="lastname"
                      className="outline-0 bg-transparent border-b-2 border-white p-2 w-full input"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="lastname"
                      className="absolute top-2 left-0 md:left-2 "
                    >
                      Last Name
                    </label>
                  </div>
                </div>
                <div
                  className={`relative  before-content-[""]  before:absolute before:w-full before:h-0.5 before:scale-0 before:origin-center hover:before:scale-100 before:transition-transform before:duration-500 before:bottom-0 before:z-10  before:bg-sky-500`}
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
                  <input
                    type="email"
                    id="email"
                    className="outline-0 bg-transparent border-b-2 border-white w-full p-2 input"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="email" className="absolute top-2 left-0 ">
                    Email
                  </label>
                </div>
                <div
                  className={`relative before-content-[""]  before:absolute before:w-full before:h-0.5 before:scale-0 before:origin-center hover:before:scale-100 before:transition-transform before:duration-500 before:bottom-1.5 before:z-10  before:bg-sky-500`}
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
                  <textarea
                    rows="8"
                    className="bg-transparent border-b-2 outline-0 border-white w-full input"
                    id="textarea"
                    placeholder=" "
                  ></textarea>
                  <label htmlFor="textarea" className="absolute top-2  left-0">
                    Message
                  </label>
                </div>
                <div className="flex justify-center">
                  <button
                    className="border-white border-2 inline-block px-4 py-2 bg-sky-400 text-black uppercase font-semibold  scale-105 button-active active:scale-100"
                    type="submit"
                    id={
                      colorState === "one"
                        ? "ooone"
                        : colorState === "two"
                        ? "ottwo"
                        : colorState === "three"
                        ? "otthree"
                        : colorState === "four"
                        ? "offour"
                        : colorState === "five"
                        ? "offive"
                        : colorState === "six"
                        ? "ossix"
                        : colorState === "seven"
                        ? "osseven"
                        : "oeeight"
                    }
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
