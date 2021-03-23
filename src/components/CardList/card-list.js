import "./card-list.css";
import { Card } from "../Card/card";

export const CardList = (props) => {
  return (
    <div className="Card_List">
      {props.monsterData.map((monster) => (
        <Card monster={monster} key={monster.id} />
      ))}
    </div>
  );
};
