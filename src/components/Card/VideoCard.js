import "./VideoCard.css";
import * as FaIcons from "react-icons/fa";

const VideoCard = ({ img, title, channel_title, views, time }) => {
  if (title.length >= 56) {
    title = title.substring(0, 56) + "...";
  }
  return (
    <div className="card">
      <div className="img-wrapper">
        <img src={img} alt="thumbnail not available" className="thumbnail" />
        <img
          src="https://c.tenor.com/AqbFEjoxOPYAAAAC/writing-writer.gif"
          alt="playback not available"
          className="playback"
        />
      </div>
      <div className="bottom-half">
        <div className="channel-pfp">
          <FaIcons.FaUserCircle size={36} color="#696969" />
        </div>
        <div className="text-stuff">
          <div className="title">{title}</div>
          <div className="channel-title">{channel_title}</div>
          <div className="views-n-time">
            {views} views · {time} ago
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
