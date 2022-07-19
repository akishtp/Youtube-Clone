import "./Navbar.css";

import * as ImIcons from "react-icons/im";
import * as GiIcons from "react-icons/gi";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";

import Sidebar from "./Sidebar";
import Sidenav from "./Sidenav";

const Navbar = ({ sidebar, showSidebar }) => {
  return (
    <>
      <nav className="navbar">
        <div className="left-side">
          <div className="button-wrapper">
            <button className="hamburgesa" onClick={showSidebar}>
              <GiIcons.GiHamburgerMenu size={20} color="#696969" />
            </button>
          </div>
          <div className="logo">
            <ImIcons.ImYoutube2 size={84} color="#ff0000" />
          </div>
        </div>
        <div className="middle-side">
          <input className="search-box" type="text" placeholder="Search" />
          <button className="search-button">
            <ImIcons.ImSearch size={18} color="#d9d9d9" />
          </button>
          <button className="voice-button" onClick={showSidebar}>
            <BsIcons.BsFillMicFill size={18} color="#696969" />
          </button>
        </div>
        <div className="right-side">
          <button className="right-icon" onClick={showSidebar}>
            <RiIcons.RiVideoUploadLine size={24} color="#696969" />
          </button>
          <button className="right-icon" onClick={showSidebar}>
            <BiIcons.BiBell size={24} color="#696969" />
          </button>
          <button className="right-icon" onClick={showSidebar}>
            <FaIcons.FaUserCircle size={28} color="#696969" />
          </button>
        </div>
      </nav>
      {sidebar ? <Sidebar /> : <Sidenav />}
    </>
  );
};

export default Navbar;
