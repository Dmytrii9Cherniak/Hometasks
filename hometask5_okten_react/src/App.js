import React from "react";
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
    useRouteMatch,
    useParams,
    useLocation
}
from "react-router-dom";

export default function App() {
  return (
      <Router>
        <div className={'header'}>
            <button>
                <Link to="/">Home</Link>
            </button>
            <button>
                <Link to="/posts">Posts</Link>
            </button>

              <button>
                  <Link to="/comments">Comments</Link>
              </button>

              <button>
                  <Link to="/albums">Albums</Link>
              </button>

              <button>
                  <Link to ="/photos">Photos</Link>
              </button>

              <button>
                  <Link to="/todos">Todos</Link>
              </button>
        </div>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

            <div>
          <Switch>

            <Route path="/" exact>
              <Home />
            </Route>

              <Route path="/posts" exact>
                  <Posts/>
              </Route>

              <Route path="/posts/:id" exact>
                  <PostsInformation/>
              </Route>

              <Route path="/comments" exact>
                  <Comments/>
              </Route>

              <Route path="/comments/:id" exact>
                  <DifferentCommentar/>
              </Route>

              <Route path="/albums" exact>
                  <Albums/>
              </Route>

              <Route path="/albums/:id" exact>
                  <DifferentElementOfAlbums/>
              </Route>

              <Route path="/photos" exact>
                  <Photos/>
              </Route>

              <Route path="/photos/:id" exact>
                    <DifferentPhotos/>
              </Route>

              <Route path="/todos" exact>
                  <Todos/>
              </Route>

              <Route path='/todos/:id' exact>
                  <DiifferentTodos/>
              </Route>

          </Switch>
        </div>
      </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

// Добавляю пости

function Posts(){
    let [posts, setPosts] = React.useState([]);

    let dataFetch = async () => {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let json = await response.json();
        setPosts(json);
    }

    React.useEffect(()=>{
       dataFetch()
    },[])
return (
    <div>
        <h2>Posts</h2>
        <ol>
            {posts.map(el => <Link to={`/posts/${el.id}`}><li>{el.title} - {el.id}</li></Link>)}
        </ol>
        </div>);
}

// Перехід на кожен окремий пост

function PostsInformation(){
    let [post, setPost] = React.useState([]);

    let match = useRouteMatch();
    let {id} = useParams();
    let location = useLocation();

    console.log(match, id,location)
    let dataFetch = async () => {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        let json = await response.json();
        setPost(json);
    }

    React.useEffect(()=>{
        dataFetch()
    },[])

    return (
        <div>
            <h2>Post Information</h2>
            <ol>
                {post && (<><h3>{post.title}</h3><p>{post.body}</p></>)}
            </ol>
        </div>);
}

// Добавляю комментарі

function Comments () {
    let [comment, setComments] = React.useState([])

    let myFetchComments = async () => {
        let response = await fetch('https://jsonplaceholder.typicode.com/comments');
        let json = await response.json()
        setComments(json);
    }

    React.useEffect(() => {
        myFetchComments()
    }, [])

    return (
        <div>
            <h2>Comments</h2>
            <ol>
                {comment.map(el => <Link to={`/comments/${el.id}`}><li>{el.name} - {el.body}</li></Link>)}
            </ol>
        </div>
    )
}

// Добавляю перехід на кожен окремий коментар

function DifferentCommentar() {
    let [commentar, setCommentar] = React.useState([]);

    let {id} = useParams();

    let fetchComments = async () => {
        let response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
        let json = await response.json()
        setCommentar(json);
    }
    React.useEffect(()=>{
        fetchComments();
    },[]);

    return(
        <div>
            <h2>Все про коментар</h2>
            <ol>
                {commentar && (<><h3>{commentar.name}</h3><p>{commentar.body}</p></>)}
            </ol>
        </div>
    )
}

// Добавляю альбоми

function Albums () {
    let [album, setAlbums] = React.useState([]);

    let {id} = useParams();

    let fetchAlbums = async () => {
        let response = await fetch('https://jsonplaceholder.typicode.com/albums');
        let json = await response.json();
        setAlbums(json);
    }
    React.useEffect(()=>{
        fetchAlbums()
    },[]);
    return (
        <div>
            <h2>Albums</h2>
            <ol>
                {album.map(el => <Link to={`/albums/${el.id}`}><li>{el.title}</li></Link>)}
            </ol>
        </div>
    )
}

// Добавляю перехід на різні елементи альбомів

function DifferentElementOfAlbums(){
    let [albumElement, setAlbumElement] = React.useState([]);

    let {id} = useParams();

    let fetchAlbumElement = async () => {
        let response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
        let json = await response.json();
        setAlbumElement(json);
    }
    React.useEffect(()=> {
        fetchAlbumElement()
    },[])
    return (
        <ol>
            {albumElement && (<p>{albumElement.title}</p>)}
        </ol>
    )
}

// Добавляю фото

function Photos() {
    let [photos, setPhotos] = React.useState([]);

    let myFetchPhotos = async () => {
        let response = await fetch('https://jsonplaceholder.typicode.com/photos');
        let json = await response.json();
        setPhotos(json);
    }
    React.useEffect(()=>{
        myFetchPhotos();
    },[])
    return (
        <div>
        <h2>Фотографії</h2>
        <ol>
            {photos.map(el => <Link to={`/photos/${el.id}`}><li>{el.title} - {el.url}</li></Link>)}
        </ol>
        </div>
    );
}

// Добавляю перехід на окремі фото

function DifferentPhotos(){
        let [differentphoto, setdifferentphoto] = React.useState([]);

        let {id} = useParams();

        let differentFetchPhoto = async () => {
            let response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
            let json = await response.json()
            setdifferentphoto(json);
        }

            React.useEffect(()=>{
                differentFetchPhoto();
            },[]);

        return (
            <div>
            <h2>Дані про фотографію</h2>
            <ol>
                {differentphoto && <p>{differentphoto.title}</p>}
            </ol>
            </div>
        )
}

// Добавляю то-до

    function Todos(){
    let [todos, setTodos] = React.useState([]);

    let myTodosComments = async () =>{
        let response = await fetch('https://jsonplaceholder.typicode.com/todos');
        let json = await response.json();
        setTodos(json);
    }
    React.useEffect(()=>{
        myTodosComments();
    },[]);
    return (
        <div>
            <h2>Тодос</h2>
            <ol>
                {todos.map(el => <Link to={`/todos/${el.id}`}><li>{el.title}</li></Link>)}
            </ol>
        </div>
    )
}

// Добавляю перехід до кожного окремого то-до

    function DiifferentTodos () {
        let [differentElement, setDifferentElement] = React.useState([]);

        let {id} = useParams();

        let fetchTodos = async () => {
            let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
            let json = await response.json();
            setDifferentElement(json);
        }
        React.useEffect(()=>{
            fetchTodos();
        },[]);
        return(
            <div>
                <h2>Все про тодос</h2>
                <ol>
                    {differentElement && (<h3>{differentElement.title} - {differentElement.completed}</h3>)}
                </ol>
            </div>
        )
    }