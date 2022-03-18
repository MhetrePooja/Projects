import React, {createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const usersList = [
  {id:1, name:"Steve", age:10, place:"Newyork"},
  {id:2, name:"Elon", age:12, place:"Newyork"},
  {id:3, name:"Mark", age:12, place:"California"},
  {id:4, name:"Jack", age:12, place:"Newyork"},
  {id:5, name:"Larry", age:12, place:"California"},
]
const postList = [
  {id:1, postId:1, title:"Some title 1", posts:" Lorem it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},
  {id:1, postId:2, title:"Some title 2", posts:"1 Lorem it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},
  {id:2, postId:3, title:"Some title 1", posts:"2 it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ipsum Blah"},
  {id:2, postId:4, title:"Some title 2", posts:"Lorem ipsum blah blah"},
  {id:2, postId:5, title:"Some title 3", posts:"Lorem ipsum blah blah blah"},
  {id:3, postId:6, title:"Some title 1", posts:"Lorem ipsum Blah:)"},
  {id:3, postId:7, title:"Some title 2", posts:"Lorem ipsum blah blah:)"},
  {id:3, postId:8, title:"Some title 3", posts:"Lorem ipsum blah blah blah:)"},
  {id:4, postId:9, title:"Some title 1", posts:"Test test test"},
]
const UserContext = createContext(usersList)
const PostsContext = createContext(postList)

ReactDOM.render(
  <React.StrictMode>
    <UserContext.Provider value={usersList} >
      <PostsContext.Provider value={postList}>
        <App  />
    </PostsContext.Provider>
    </UserContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
export  {UserContext, PostsContext};

reportWebVitals();
