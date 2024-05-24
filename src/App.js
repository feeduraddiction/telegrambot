import { useEffect } from "react";
import "./App.css";

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  const handleClose = () => {
    tg.close();
  };

  return (
    <div className="App">
      <button onClose={handleClose}>Закрыть</button>
    </div>
  );
}

export default App;
