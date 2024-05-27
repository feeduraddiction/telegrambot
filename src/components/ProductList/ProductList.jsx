import { useCallback, useState, useEffect } from "react";
import { ProductItem } from "../ProductItem/ProductItem";
import "./style.css";
import { useTelegram } from "../../hook/useTelegram";

const products = [
  {
    id: "1",
    title: "Ноутбук",
    price: 55000,
    description: "Мощный и легкий ноутбук для работы и развлечений",
  },
  {
    id: "2",
    title: "Смартфон",
    price: 30000,
    description:
      "Современный смартфон с высокой производительностью и отличной камерой",
  },
  {
    id: "3",
    title: "Беспроводные наушники",
    price: 8000,
    description: "Удобные и качественные наушники с шумоподавлением",
  },
  {
    id: "4",
    title: "Смарт-часы",
    price: 15000,
    description: "Многофункциональные смарт-часы с мониторингом здоровья",
  },
  {
    id: "5",
    title: "Планшет",
    price: 20000,
    description: "Компактный планшет для работы и развлечений",
  },
  {
    id: "6",
    title: "Игровая консоль",
    price: 45000,
    description: "Мощная игровая консоль нового поколения",
  },
  {
    id: "7",
    title: "Телевизор",
    price: 60000,
    description: "Ультра HD телевизор с большим экраном и отличным звуком",
  },
  {
    id: "8",
    title: "Электронная книга",
    price: 10000,
    description:
      "Удобная электронная книга с подсветкой и большим объемом памяти",
  },
  {
    id: "9",
    title: "Фитнес-трекер",
    price: 7000,
    description:
      "Легкий и функциональный фитнес-трекер с длительным временем работы",
  },
  {
    id: "10",
    title: "Умная колонка",
    price: 12000,
    description: "Умная колонка с голосовым управлением и качественным звуком",
  },
];

export const ProductList = () => {
  const getTotalPrice = (items) => {
    return items.reduce((acc, curr) => {
      return acc + curr.price;
    }, 0);
  };
  const [addedItems, setAddedItems] = useState([]);

  const { tg } = useTelegram();

  const onSendData = useCallback(() => {
    const data = {
      product: addedItems,
      totalPrice: getTotalPrice(addedItems),
    };
    fetch("http://localhost:8000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }, [addedItems]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData]);

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find((item) => item.id === product.id);

    let newItems = [];

    if (alreadyAdded) {
      newItems = addedItems.filter((item) => item.id !== product.id);
    } else {
      newItems = [...addedItems, product];
    }

    setAddedItems(newItems);

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Купить ${getTotalPrice(newItems)}`,
      });
    }
  };

  return (
    <div className="list">
      {products.map((product) => (
        <ProductItem product={product} onAdd={onAdd} />
      ))}
    </div>
  );
};
