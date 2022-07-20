import * as MdIcons from "react-icons/md";
import { Link } from "react-router-dom";
import { SidebarDataOne } from "./SidebarData";

const Sidenav = () => {
  return (
    <div className="sidenav">
      <ul className="sidenav-items">
        {SidebarDataOne.map((item, index) => {
          return (
            <li key={index} className={item.class}>
              <Link to={item.path}>
                {item.icon}
                <span className="sidenav-text">{item.title}</span>
              </Link>
            </li>
          );
        })}
        <li className="sidenav-item">
          <Link to="/library">
            <MdIcons.MdOutlineLibraryAdd size={24} />
            <span className="sidenav-text">Library</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
