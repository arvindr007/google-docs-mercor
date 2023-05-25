import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <svg>
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
      </svg>
      <img src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png" />
      <h2>Docs</h2>
      <div className="search-bar">
        <form>
          <button aria-label="Close search" type="button">
            <svg height="24px" width="24px">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
            </svg>
          </button>
          <input type="search-box" placeholder="Search" ></input>
          <button aria-label="Clear search"  type="button">
            <svg focusable="false" viewBox="0 0 24 24" width="24px" height="24px">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                <path d="M0 0h24v24H0z" fill="none"></path>
              </path>
            </svg>
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
