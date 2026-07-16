import './App.css';

function Header({name,year}){
  return (
    <header>
      <h1>{name} Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  )
};


const items = [
  "Pizza Margherita",
  "Spaghetti Bolognese",
  "Lasagna Al Forno",
  "Risotto ai Funghi",
  "Tiramisu",
  "Gelato"
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}));


function Main({dishes}){
  return (
    <ul>
      {dishes.map((dish) => 
        <li key={dish.id} style = {{listStyleType: "none"}}> {dish.title} </li>)}
    </ul>
  )
};

function App() {
  return ( 
    <div>
      <Header name="Italian" year={new Date().getFullYear()} />
      <Main dishes = {dishObjects} />
    </div>
  )
};

export default App;
