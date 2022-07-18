import Card from "../components/Card/Card";
import Chips from "../components/Chips/Chips";
import { VideoSetOne } from "../Data/VideoData";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Chips />
      <div className="cards">
        {VideoSetOne.map((item, index) => {
          return (
            <Card
              key={index}
              img={item.img}
              gif={item.gif}
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
