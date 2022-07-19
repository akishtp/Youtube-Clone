import VideoCard from "../components/Card/VideoCard";
import Chips from "../components/Chips/Chips";
import { VideoData } from "../Data/VideoData";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="chips">
        <Chips />
      </div>
      <div className="cards">
        {VideoData.map((item, index) => {
          return (
            <VideoCard
              key={index}
              img={item.img}
              title={item.title}
              channel_title={item.channel_title}
              views={item.views}
              time={item.views}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
