import { useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { useTelegram } from "./hook/useTelegram";
import { Button } from "./components/Button/Button";

function App() {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      <Button onClick={onToggleButton}>toggle</Button>
    </div>
  );
}

export default App;
