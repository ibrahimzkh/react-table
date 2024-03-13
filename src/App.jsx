import Header from "./components/Header";
import Main from "./components/Main"
const products = [
  {
    id: 1,
    name: "MacBook",
    price: 100000,
    left: 31,
    image: "https://img.mvideo.ru/Pdb/30064273b.jpg",
  },
  {
    id: 2,
    name: "Galaxy",
    price: 35999,
    left: 11,
    image: "https://img.mvideo.ru/Big/30067380bb.jpg",
  },
  {
    id: 3,
    name: "Скутер",
    price: 65500,
    left: 0,
    image: "https://img.mvideo.ru/Big/400276840bb.jpg",
  },
  {
    id: 4,
    name: "Монитор Samsung",
    price: 12000,
    left: 7,
    image: "https://img.mvideo.ru/Big/400155883bb.jpg",
  },
  {
    id: 5,
    name: "Респераторная маска",
    price: 500,
    left: 24,
    image: "https://img.mvideo.ru/Pdb/50135563b.jpg",
  },
  {
    id: 6,
    name: "Стиральная машина",
    price: 100000,
    left: 0,
    image: "https://img.mvideo.ru/Big/20083490bb.jpg",
  },
  {
    id: 7,
    name: "Белый холодильник",
    price: 43100,
    left: 18,
    image: "https://img.mvideo.ru/Big/20062328bb.jpg",
  },
  {
    id: 8,
    name: "Колонка",
    price: 3000,
    left: 1,
    image: "https://img.mvideo.ru/Pdb/400099577b.jpg",
  },
  {
    id: 9,
    name: "Наушники",
    price: 1500,
    left: 5,
    image: "https://img.mvideo.ru/Pdb/50172845b.jpg",
  },
];

function App() {
  return (
    <div className="App">
      <Header/>
      <tr className="menu">
             <td>Название</td>
              <td>Имя</td>
              <td>Цена</td>
              <td>осталось</td>
      </tr>
      {products.map(item => <Main id={item.id} name={item.name} price={item.price} left={item.left} img={item.image}/>)}
    </div>
  );
}

export default App;
