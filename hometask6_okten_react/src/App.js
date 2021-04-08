import React, {createContext, useContext, useState} from "react";
import {Switch, BrowserRouter as Router, Route, Link} from "react-router-dom";
import "./App.css"

let TodoContext =  createContext();

let TodoContextProvider = ({children}) => {
    let [todos, setTodos] = React.useState([]);
    let [doneTodo, setDoneTodo] = useState([])

    let todoCreate = (newTodo) => {
        if(!newTodo || !newTodo.title || !newTodo.description){
            console.error('Wrong');
            return
        }
        setTodos([newTodo, ...todos])
    }

    let todoRemove = (todoId) => {
        if(!todoId){
            console.error('Wrong', todoId)
            return
        }
        setTodos(todos.filter(el => el.id !== todoId))
    }

    let isDoneToggle =(todoId) => {
        let markTodoDone = doneTodo.includes(todoId);
        if(markTodoDone) {
           return  setDoneTodo(doneTodo.filter(id=>id !== todoId))
        }
        setDoneTodo([...doneTodo, todoId])
    }

    return(
        <TodoContext.Provider value={{
            todos,
            todoCreate,
            todoRemove,
            isDoneToggle,
            doneTodo
        }
        }>
        {children}
        </TodoContext.Provider>
    )
}

    let ItemTodo = ({todo,todoRemove,isDoneToggle,isDone}) => {
    let deleteTodo = () => {
        todoRemove(todo.id)
    }

    let todoElementToggle= () => isDoneToggle(todo.id)

    return(
        <div>
            <div style={{
                textDecoration: isDone ? 'line-through' : ''
            }}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            </div>
            <button onClick={deleteTodo}>Видалити елемент</button>
            <br/>
            <button onClick={todoElementToggle}>Елемент  {isDone ? 'active' : 'done'}</button>
        </div>
    )
}

let ListTodo = () => {
    let {
        todos,
        todoRemove,
        isDoneToggle,
        doneTodo
    } = useContext(TodoContext)
    console.log(doneTodo)

    return (
        <div>
            {todos.map(el => (<ItemTodo
                isDone={doneTodo.includes(el.id)}
                isDoneToggle={isDoneToggle}
                todoRemove={todoRemove}
                key={el.title + el.description}
                todo={el}/>))}
        </div>
)
}

let AddTodo = () => {
    let [todoValues, setTodoValues] = React.useState({
        title: '',
        description: '',
        id: null
    })

    let {
        todoCreate
    } = useContext(TodoContext)

    let todoChange = ({target: {name, value}}) => setTodoValues({...todoValues, [name]: value})
    let onCreate = () => {
        todoCreate({...todoValues, id: Math.random() })
        setTodoValues({
            title: '',
            description: '',
            id: null
        })
    }
    return(
        <div>
            <input className={"input"} value={todoValues.title} onChange={todoChange} type="text" name="title"/>
            <br/>
            <input className={"input"} value={todoValues.description} onChange={todoChange} type="text" name="description"/>
            <br/>
            <button className={"button"} onClick={onCreate}>Добавити елемент</button>
        </div>
    )
}

let Header = () => {
    let {
        todos,
        doneTodo
    } = useContext(TodoContext);
    return(
        <header>
            <Link to="/">Всі тодо</Link>
            <Link to="/create-todo">Добавити новий тодо</Link>
            <div className={"all_todos"}/>
                <h3 style={{marginRight: 13}}>Всі елементи - {todos.length}</h3>
                <h3 style={{marginRight: 13}}>Активні елементи - {todos.length -doneTodo.length}</h3>
                <h3 style={{marginRight: 13}}>Виконані елементи - {doneTodo.length}</h3>
        </header>
    )
}

export default function App(){
    return(
                <TodoContextProvider>
        <div>
        <Router>
            <Header/>
        <Switch>
            <Route path="/" exact>
                    <ListTodo/>
            </Route>

            <Route path="/create-todo" exact>
                <AddTodo/>
            </Route>

        </Switch>
        </Router>
        </div>
                </TodoContextProvider>
    )
}