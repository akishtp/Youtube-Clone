import "./Card.css";
import * as FaIcons from "react-icons/fa";

const Card = ({ title }) => {
  if (title.length >= 56) {
    title = title.substring(0, 56) + "...";
  }
  return (
    <div className="card">
      <img
        src="https://i.ytimg.com/vi/xbDvMI6QfPc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqWPJxgpUGb3KqDN_uMqmej7T_Pw"
        alt="thumbnail"
        className="thumbnail"
      />
      <div className="bottom-half">
        <div className="channel-pfp">
          <FaIcons.FaUserCircle size={36} color="#696969" />
        </div>
        <div className="text-stuff">
          <div className="title">{title}</div>
          <div className="channel-title">Rexet</div>
          <div className="views-n-time">10b views · 1 hour ago</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
