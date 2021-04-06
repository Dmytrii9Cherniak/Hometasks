import React from "react";

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
        <div>
          <nav>
            <button>
                <Link to="/">Home</Link>
            </button>
            <button>
                <Link to="/posts">Posts</Link>
            </button>

              <button>
                  <Link to="comments">Comments</Link>
              </button>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
    <div className={'posts'}>
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