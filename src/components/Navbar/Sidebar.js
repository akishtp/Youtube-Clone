import { Link } from "react-router-dom";
import {
  SidebarDataOne,
  SidebarDataTwo,
  SidebarDataThree,
  SidebarDataFour,
  SidebarDataFive,
} from "./SidebarData";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar-items">
        {SidebarDataOne.map((item, index) => {
          return (
            <li key={index} className="sidebar-item">
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
        <li className="sidebar-item">
          <div className="line" />
        </li>
      </ul>
      <ul className="sidebar-items">
        {SidebarDataTwo.map((item, index) => {
          return (
            <li key={index} className="sidebar-item">
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
        <li className="sidebar-item">
          <div className="line" />
        </li>
      </ul>
      <ul className="sidebar-items">
        <span className="item-text">SUBSCRIPTIONS</span>
        {SidebarDataThree.map((item, index) => {
          return (
            <li key={index} className="sidebar-item">
              <Link to={item.path}>
                <div className="icon-bg">{item.icon}</div>
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
        <li className="sidebar-item">
          <div className="line" />
        </li>
      </ul>
      <ul className="sidebar-items">
        <span className="item-text">MORE FROM YOUTUBE</span>
        {SidebarDataFour.map((item, index) => {
          return (
            <li key={index} className="sidebar-item">
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
        <li className="sidebar-item">
          <div className="line" />
        </li>
      </ul>
      <ul className="sidebar-items">
        {SidebarDataFive.map((item, index) => {
          return (
            <li key={index} className="sidebar-item">
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
