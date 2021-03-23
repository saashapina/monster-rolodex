import "./search-box.css";

export const SearchBox = ({ handleChange, placeholder }) => {
  return (
    <input onChange={handleChange} placeholder={placeholder} type="search" />
  );
};
