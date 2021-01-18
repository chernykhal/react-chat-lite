import io from "socket.io-client";

function App() {
  const connectSocket = () => {
    const socket = io("http://localhost:9999");
  };

  return (
    <div className="App">
      <button onClick={connectSocket}>Подключиться</button>
    </div>
  );
}

export default App;
