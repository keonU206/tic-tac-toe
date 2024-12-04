import React, { useState } from "react";

const Player = ({ initiaName, symbol, isActive }) => {
  const [userName, setUserName] = useState(initiaName);
  const [isEditing, setIsEditing] = useState(false);

  const handlerNameChange = () => {
    setIsEditing((editing) => !editing);
  };

  function handleChanged(e) {
    setUserName(e.target.value);
  }

  let playerNameTag = <span className="player-name">{userName}</span>;

  if (isEditing) {
    playerNameTag = (
      <input
        id="playerNameSettingTextFeild"
        type="text"
        required
        defaultValue={userName}
        onChange={() => handleChanged(event)}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player-name">
        {playerNameTag}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handlerNameChange}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
