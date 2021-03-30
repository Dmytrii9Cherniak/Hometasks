import logo from './logo.svg';
import React, {useState, useRef} from 'react';
import './App.css';
import {keys} from "@material-ui/core/styles/createBreakpoints";


function App() {


    //Завдання 1 та 2
    // Cтворюю масив яким буду користуватися

    // let [array, changedArray] = useState([
    //     {
    //         id: 1,
    //         title: 'title 1',
    //         price: 1
    //     },
    //     {
    //         id: 2,
    //         title: 'title 2',
    //         price: 2
    //     },
    //     {
    //         id: 3,
    //         title: 'title 3',
    //         price: 3
    //     }
    // ])
    //
    // // Функція відновлення всіх елементів масиву
    // let initialValue = useRef(array);
    // function onRestore () {
    //     changedArray(initialValue.current)
    // }
    //
    // // Функція видалення першого елементу масиву
    // function removeFirstElement () {
    //     let newArray = [...array];
    //     newArray.shift();
    //     changedArray(newArray);
    // }
    //
    // // Функція видалення останього елементу масиву
    // function removeLastElement() {
    //     let newArray = [...array];
    //     newArray.pop();
    //     changedArray(newArray)
    // }
    // Завдання 3

    let [deletedTasks, setDeletedTasks] = useState([]);
    let [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Task2 title 1'
        },
        {
            id: 2,
            title: 'Task2 title 2'
        },
        {
            id: 3,
            title: 'Task2 title 3'
        },
    ])

   let deleteElements = (id) => {
       const task = tasks.find((e) => e.id === id);
       setDeletedTasks((p) => [...p, task]);
       setTasks((p) => p.filter((e) => e.id !== id));
   }

   let onRevert = () => {
       setTasks((p) => [...p, ...deletedTasks]);
       setDeletedTasks([]);
   }

  return (
      <div>
          {/*<div>*/}
          {/*  <ul>{array.map(el =><li>{el.title} {el.price}{el.title}*/}
          {/*  </li>)}</ul>*/}
          {/*<button onClick={removeFirstElement}>Delete first element</button>*/}
          {/*<button onClick={removeLastElement}>Delete last element</button>*/}
          {/*<button onClick={onRestore}>Відновлення елементів</button>*/}
          {/*</div>*/}

        <div>
        <ul>{tasks.map(el =><li>{el.title}
<button onClick={() => deleteElements(el.id)}>Delete elements</button>
        </li>)}</ul>
            <button onClick={onRevert}>Restore</button>
        </div>

      </div>
  );
}

export default App;