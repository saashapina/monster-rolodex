import "./card.css";

export const Card = ({ monster }) => {
  return (
    <div className="Card">
      <img alt="monster" src={`https://robohash.org/${monster.id}?set=set3`} />
      <h2>{monster.name}</h2>
      <h2>{monster.email}</h2>
    </div>
  );
};
