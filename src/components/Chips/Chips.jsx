import { VideoData } from "../../Data/VideoData";
import "./Chips.css";

const Chips = () => {
  const item = ["All"];
  VideoData.forEach((items) => {
    items.tags.forEach((tag) => {
      if (!item.includes(tag)) item.push(tag);
    });
  });
  return (
    <>
      {item.map((deta) => {
        return <div className="chip">{deta}</div>;
      })}
    </>
  );
};

export default Chips;
