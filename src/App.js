import { useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { useTelegram } from "./hook/useTelegram";
import { Button } from "./components/Button/Button";
import { Route, Routes } from "react-router-dom";
import { Form } from "./components/Form/Form";
import { ProductList } from "./components/ProductList/ProductList";

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
    tg.expand();
    console.log(tg.initDataUnsafe?.chat, tg.initDataUnsafe);
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
