import React, { useState } from "react";
const ListInput = ({ onTaskCreate }) => {
  const [name, setName] = useState();

  const handleChange = (e) => setName(e.target.value);
  const handleClick = () => {
    onTaskCreate(name);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="type something"
        value={name}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};
export default ListInput;
