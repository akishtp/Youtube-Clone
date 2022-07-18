import Card from "../components/Card/Card";
import Chips from "../components/Chips/Chips";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Chips />
      <div className="cards">
        <Card title=" What's the weirdest place you've ever pooped? | AskReddit | Rexet #shorts" />
        <Card title=" What's the weirdest place you've ever pooped? | AskReddit | Rexet#shorts" />
        <Card title=" What's the weirdest place you've ever pooped? | AskReddit | Rexet#shorts" />
        <Card title=" What's the weirdest place you've ever pooped? | AskReddit | Rexet#shorts" />
        <Card title=" What's the weirdest place you've ever pooped? | AskReddit | Rexet#shorts" />
        <Card title=" W Rexet #shorts" />
      </div>
    </div>
  );
};

export default Home;
