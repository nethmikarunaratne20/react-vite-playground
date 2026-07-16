import "./App.css";
import img1 from "./images/img1.jpg";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name} Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

const items = [
  "Pizza Margherita",
  "Spaghetti Bolognese",
  "Lasagna Al Forno",
  "Risotto ai Funghi",
  "Tiramisu",
  "Gelato",
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}));

function Main({ dishes }) {
  return (
    <>
    <div>
      <h2>Welcome to our restaurant! We offer a variety of delicious Italian dishes.</h2>
    </div>
    <main>
      <img src={img1} height={200} alt="An image of the restaurant"/>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id} style={{ listStyleType: "none" }}>
            {" "}
            {dish.title}{" "}
          </li>
        ))}
      </ul>
    </main>
    </>
  );
}

function App() {
  return (
    <div>
      <Header name="Italian" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} />
    </div>
  );
}

export default App;
