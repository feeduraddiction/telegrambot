import { useEffect, useState } from "react";
import "./style.css";
import { Button } from "../Button/Button";
import { useTelegram } from "../../hook/useTelegram";

export const Form = () => {
  const [data, setData] = useState({
    country: "",
    city: "",
    subject: "individual",
  });
  const { tg } = useTelegram();

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Отправить данные",
    });
  }, []);

  useEffect(() => {
    if (!data.city || !data.country) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [data.country, data.city]);

  const handleChangeData = (type) => (event) => {
    const { value } = event.currentTarget;

    setData((prevState) => ({
      ...prevState,
      [type]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="form">
      <h3>Введите Ваши данные</h3>
      <input
        onChange={handleChangeData("country")}
        value={data.country}
        className="input"
        type="text"
        placeholder="Страна"
      />
      <input
        value={data.city}
        className="input"
        type="text"
        placeholder="Город"
        onChange={handleChangeData("city")}
      />
      <select
        value={data.subject}
        onChange={handleChangeData("subject")}
        className="select"
      >
        <option value="legal">Юр лицо</option>
        <option value="individual">Физ лицо</option>
      </select>
    </div>
  );
};
