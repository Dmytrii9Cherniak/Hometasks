import logo from './logo.svg';
import React, {useState, useRef} from 'react';
import './App.css';
import {keys} from "@material-ui/core/styles/createBreakpoints";


function App() {


    //Завдання 1 та 2
    // Cтворюю масив яким буду користуватися

    let [array, changedArray] = useState([
        {
            id: 1,
            title: 'title 1',
            price: 1
        },
        {
            id: 2,
            title: 'title 2',
            price: 2
        },
        {
            id: 3,
            title: 'title 3',
            price: 3
        }
    ])

    // Функція відновлення всіх елементів масиву
    let initialValue = useRef(array);
    function onRestore () {
        changedArray(initialValue.current)
    }

    // Функція видалення першого елементу масиву
    function removeFirstElement () {
        let newArray = [...array];
        newArray.shift();
        changedArray(newArray);
    }

    // Функція видалення останього елементу масиву
    function removeLastElement() {
        let newArray = [...array];
        newArray.pop();
        changedArray(newArray)
    }
    // Завдання 3


  return (
      <div>
            <ul>{array.map(el =><li>{el.title} {el.price}</li>)}</ul>
          <button onClick={removeFirstElement}>Delete first element</button>
          <button onClick={removeLastElement}>Delete last element</button>
          <button onClick={onRestore}>Відновити</button>
      </div>
  );
}

export default App;