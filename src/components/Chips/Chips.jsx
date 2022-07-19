import { VideoData } from "../../Data/VideoData";
import "./Chips.css";

const Chips = ({ setSelectChip }) => {
  const item = ["All"];
  VideoData.forEach((items) => {
    items.tags.forEach((tag) => {
      if (!item.includes(tag)) item.push(tag);
    });
  });
  return (
    <div className="chips">
      {item.map((deta, index) => {
        return (
          <div className="chip" key={index} onClick={() => setSelectChip(deta)}>
            {deta}
          </div>
        );
      })}
    </div>
  );
};

export default Chips;
