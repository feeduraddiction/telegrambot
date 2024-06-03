import { useTelegram } from "../../hook/useTelegram";
import { Button } from "../Button/Button";
import "./style.css";

export const Header = () => {
  const { user, onClose, chatId } = useTelegram();

  return (
    <div className="header">
      <Button onClick={onClose}>Закрыть</Button>
      <div className="user">
        <div className="img">
          <img src={user?.photo_url} alt="user-photo" />
          <a href={user?.photo_url}>{user?.photo_url}</a>
        </div>
        <div>{chatId}</div>
        <div className="name">
          <span className="username">{user?.username || "username"}</span>
          <span className="name">
            {user?.first_name || "John"} {user?.last_name || "Doe"}
          </span>
        </div>
      </div>
    </div>
  );
};
