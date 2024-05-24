import { Button } from "../Button/Button";
import './style.css';

export const Header = () => {
  const tg = window.Telegram.WebApp;

  const handleClose = () => {
    tg.close();
  };

  return (
    <div className="header">
      <Button onClick={handleClose}>Закрыть</Button>
      <span className="username">{tg.initDataUnsafe?.user?.username}</span>
    </div>
  );
};
