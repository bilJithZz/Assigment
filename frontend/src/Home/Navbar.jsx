import React, { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Navbar.css";

const Navbar = () => {
  const [timer, setTimer] = useState(60);
  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer === 1) {
          window.location.reload();
          return 60; 
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleDropdown = (dropdownNumber) => {
    if (dropdownNumber === 1) {
      setIsDropdown1Open(prev => !prev);
      setIsDropdown2Open(false);
    } else if (dropdownNumber === 2) {
      setIsDropdown2Open(prev => !prev);
      setIsDropdown1Open(false);
    }
  };

  return (
    <div className="navbar p-4">
      <div>
        <img src="HODLINFO.png" alt="Logo" className="h-12" />
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => toggleDropdown(1)}
          className="text-white "
        >
          INR
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>

        {isDropdown1Open && (
          <div className="drop">
            <ul >
              {['INR'].map(currency => (
                <li key={currency}>
                  <a
                    href="#"
                    className="text-white"
                  >
                    {currency}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={() => toggleDropdown(2)}
          className=" items-center"
        >
          BTC
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>

        {isDropdown2Open && (
          <div >
            <ul >
              {['WAX'].map(currency => (
                <li key={currency}>
                  <a
                    href="#"
                  >
                    {currency}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button >
          BUY BTC
        </button>
      </div>
      <div className="nav-element">
        <div className="mt-4">
          <div style={{ width: "6vh" }}>
            <CircularProgressbar value={timer} maxValue={60} />
          </div>
          <div
            className="text-info"
            style={{
              position: "relative",
              top: "-32px",
              left: "11px",
              fontSize: "18px",
              fontWeight: "100%",
            }}
          >
            <b>{timer}</b>
          </div>
        </div>
        <button className="telegram ">
          <img className="h-5" src="path/to/telegram-icon.png" alt="Telegram Icon" />
          Connect Telegram
        </button>
      </div>
    </div>
  );
};

export default Navbar;
