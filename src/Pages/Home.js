import { useState } from "react";
import VideoCard from "../components/Card/VideoCard";
import Chips from "../components/Chips/Chips";
import { VideoData } from "../Data/VideoData";
import "./Home.css";

const Home = () => {
  const [selectChip, setSelectChip] = useState("All");
  let VideosData;
  if (selectChip !== "All") {
    VideosData = VideoData.filter((data) => data.tags.includes(selectChip));
  } else {
    VideosData = VideoData;
  }
  return (
    <div className="home">
      <Chips setSelectChip={setSelectChip} />
      <div className="cards">
        {VideosData.map((item, index) => {
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
