import React from "react";
import axios from "axios";

const JoinBlock = ({ onLogin }) => {
  const [roomId, setRoomId] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);

  const onEnterRoomId = (e) => {
    setRoomId(e.target.value);
  };

  const onEnterUserName = (e) => {
    setUserName(e.target.value);
  };

  const onSubmitForm = async () => {
    if (!roomId || !userName) {
      return alert("Неверные данные!");
    }
    const obj = {
      roomId,
      userName,
    };
    setLoading(true);
    await axios.post("/rooms", obj);
    onLogin(obj);
  };

  return (
    <div className="join-block">
      <input
        type="text"
        placeholder="Идентификатор комнаты"
        value={roomId}
        onChange={onEnterRoomId}
      />
      <input
        type="text"
        placeholder="Ваше имя"
        value={userName}
        onChange={onEnterUserName}
      />
      <button
        disabled={isLoading}
        onClick={onSubmitForm}
        className="btn btn-success"
      >
        {isLoading ? "Вход..." : "Войти"}
      </button>
    </div>
  );
};

export default JoinBlock;
