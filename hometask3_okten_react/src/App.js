import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'


let Tabs = ( {tabs , selectedTab} ) => {
  return (
      <div className={'header'}>
        {tabs.map(tab => <button className={'buttons'} key={tab.title} onClick={tab.click}>{tab.title}</button>)}
      </div>
  )
}

function App() {

   let PostList = ({posts}) => {
       return (
           <>
               {posts.map(post => (
                   <>
                   <h3>{post.title}</h3>
                       <p>{post.body}</p>
                   </>
               ))}
           </>
       )
   }

    let CommentsList = ({comments}) => {
        return (
            <>
                {comments.map(comment => (
                    <>
                        <h3>{comment.id}</h3>
                        <p>{comment.name} -- {comment.email} -- {comment.body}</p>
                    </>
                ))}
            </>
        )
    }

    let AlbumsList = ({album}) => {
        return (
            <>
                {album.map(alb => (
                    <>
                        <h3>{alb.id}</h3>
                        <p>{alb.title}</p>
                    </>
                ))}
            </>
        )
    }

    let PhotostList = ({photos}) => {
        return (
            <>
                {photos.map(photo => (
                    <>
                        <h3>{photo.id}</h3>
                        <p>{photo.title} -- {photo.url}</p>
                        <img src={photo.thumbnailUrl}/>
                    </>
                ))}
            </>
        )
    }

    let TodosList = ({todos}) => {
        return (
            <>
                {todos.map(todo => (
                    <>
                        <h3>{todo.id}</h3>
                        <p>{todo.body} -- {todo.title} -- {todo.completed}</p>
                    </>
                ))}
            </>
        )
    }

    let UserList = ({users}) => {
        return (
            <>
                {users.map(user => (
                    <>
                        <p>{user.name} -- {user.username} -- {user.email}</p>
                    </>
                ))}
            </>
        )
    }

let url = (resourse) => `https://jsonplaceholder.typicode.com/${resourse}`

let tabs = [
    {title: 'posts', click: () => setSelectedTab('posts')},
    {title: 'comments', click: () => setSelectedTab('comments')},
    {title: 'albums', click: () => setSelectedTab('albums')},
    {title: 'photos', click: () => setSelectedTab('photos')},
    {title: 'todos', click: () => setSelectedTab('todos')},
    {title: 'users', click: () => setSelectedTab('users')},
]
    let [selectedTab, setSelectedTab] = useState(tabs[0].title)
    let [list, setList] = useState([])

    let fetchData = async () => {
    let response = await fetch(url(selectedTab))
        let data = await response.json()
        setList(data)
    }
    useEffect( () =>{
        fetchData()
    } , [selectedTab])


  return (
    <div>
<Tabs tabs={tabs} selectedTab={selectedTab}/>
        {selectedTab === 'posts' && <PostList posts={list}/> }
        {selectedTab === 'comments' && <CommentsList comments={list}/> }
        {selectedTab === 'albums' && <AlbumsList album={list}/> }
        {selectedTab === 'photos' && <PhotostList photos={list}/> }
        {selectedTab === 'todos' && <TodosList todos={list}/> }
        {selectedTab === 'users' && <UserList users={list}/> }
    </div>
  );
}

export default App;