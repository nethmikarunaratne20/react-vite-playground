import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Here we are using array destructuring to extract the third element from an array of animals.
// There are a couple ways to destructure an array, eg:-
//      const animals = ...
//      const [one, two, three] = ....
//      const [, , , third] = ...

// Example of destructuring an array to get the third element
// const [, , , third] = ['Dog', 'Cat', 'Elephant', 'Giraffe', 'Lion', 'Tiger'];
// console.log(third);


createRoot(document.getElementById('root')).render(<App />)
