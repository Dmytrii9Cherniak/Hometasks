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

              <Route path="/posts/:id">
                  <PostsInformation/>
              </Route>

          </Switch>
        </div>
      </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

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
                {post && (<><h3>post.title</h3><p>{post.body}</p></>)}
            </ol>
        </div>);
}
