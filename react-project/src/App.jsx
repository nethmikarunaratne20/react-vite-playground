import {useState} from "react";
import "./App.css";
import img1 from "./images/img1.jpg";


// Here the Prop is destructured in the function parameter list, 
// so we can directly access the 'name' and 'year' props without 
// needing to reference a 'props' object.
function Header({ name, year }) {
  return (
    <header>
      {/* if the props object was called  here, 
      it should be called as props.name */}
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

// Here we are using the map function to create a new array of objects, 
// where each object has an 'id' and a 'title' property. 
// The 'id' is the index of the dish in the original array, 
// and the 'title' is the name of the dish.
const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}));

// The Main component is responsible for rendering the main content of 
// the application. It receives an array of dish objects as a prop and 
// maps over them to create a list of dishes. Each dish is displayed as 
// a list item, and the 'key' prop is set to the 'id' of the dish to help 
// React identify which items have changed, are added, or are removed.
function Main({ dishes }) {
  return (
    // Here '<>' is a React Fragment, which allows you to group multiple 
    // elements without adding extra nodes to the DOM.
    // this can also be written as <React.Fragment>...</React.Fragment>
    // this method requires importing React at the top of the file, 
    // which is not necessary in React 17 and later.
    <>
      <div>
        <h2>
          Welcome to our restaurant! We offer a variety of delicious Italian
          dishes.
        </h2>
      </div>
      <main>        
        <img src={img1} height={200} alt="An image of the restaurant" />
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

// The App component is the main component of the application. It renders the Header and Main components, passing the necessary props to each. The Header component receives the name of the restaurant and the current year, while the Main component receives an array of dish objects to display.
function App() {
  // const what = useState();
  // console.log(what);  ---> this returns an array with 2 elements.
  
  const [status, setStatus] = useState("Open");
  console.log(status);

  return (
    <div>
      {/* displays the current state of the restaurant */}
      <h1>The Restaurant is currently {status}</h1>
      <button onClick={() => setStatus("Closed")}>Close Restaurant</button>

      <Header name="Italian" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} />
    </div>
  );
}

export default App;
