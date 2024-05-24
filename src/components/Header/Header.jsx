import { useTelegram } from "../../hook/useTelegram";
import { Button } from "../Button/Button";
import "./style.css";

export const Header = () => {
  const { user, onClose } = useTelegram();

  return (
    <div className="header">
      <Button onClick={onClose}>Закрыть</Button>
      <span className="username">{user?.username}</span>
    </div>
  );
};
