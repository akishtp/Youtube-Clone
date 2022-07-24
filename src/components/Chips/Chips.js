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
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            className="chip"
            key={index}
            onClick={() => setSelectChip(deta)}
            onKeyDown={() => setSelectChip(deta)}
          >
            {deta}
          </div>
        );
      })}
    </div>
  );
};

export default Chips;
