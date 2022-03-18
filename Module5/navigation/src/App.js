import React, {useContext, useEffect, useState} from "react";
import { BrowserRouter as Router,Routes,Route,Link, Outlet,useParams, useNavigate,useLocation } from "react-router-dom";
import {UserContext, PostsContext} from "./index"

export default function App() {
  return (
    <Router>
        <Routes>
              <Route excat path="/" element={<Home/>}/>
              <Route excat path="/main"  element={<Main />}>
                  <Route excat path="/main/users" element= {<Users/>} />
                  <Route excat path="/main/users/:userId" element= {<UserId/>} />
              </Route>
              <Route excat path="/main/post/:postId" element={<PostName/>}/> 
        </Routes>   
    </Router>
  );
}
function Home() {
  return(
    <div>
       <h1>Home component</h1>
      <Outlet/>     
    </div>
  )  
}
function Main() {
  return(
    <div>
      <h1>Main component</h1>
    <Outlet/>    
    </div>  
  )
}
function Users() {
  const users = useContext(UserContext)
  const navigate = useNavigate()
  
  return(
    <div>
      <h1>User Component</h1>
      <h3> There are multiple users</h3> 
      <h4>{}</h4>
      <div className="main"> 
      {users.map((ele, i) =>  <div key={i}  onClick={()=> {navigate(`/main/users/${ele.id}`)}}>     
      <div className="user">
        <h6>Name: {ele.name}</h6>
        <h6>Place: {ele.place}</h6>
        <h6> Age: {ele.age}</h6>
      </div>
       </div>)
}
</div>
      
      <Outlet/>
    </div>  
  )
}
function UserId() {
  const navigate=useNavigate();
  const {userId}=useParams();
  const posts = useContext(PostsContext)
  const user = useContext(UserContext)
  const [userInfo, setUserInfo] =useState([]) 
  const [result, setResult] =useState([]) 
  useEffect(()=>{
    setUserInfo(()=>user.filter((ele)=> ele.id == userId))
    setResult(()=> posts.filter((ele)=> ele.id == userId))

  },[navigate])
  return(
    <div>
      <button onClick={()=>navigate("/main/users")}>See Users </button>
      {result?.length > 1 && <h1>Post created by  - {userInfo[0]?.name}</h1> }
      <h1> {result?.length >1 && "Multiple Posts" } </h1>
      <h1> {result?.length <1 && "No Posts found" } </h1>
      {
        result.map((ele, i)=><div 
        onClick={()=>navigate(`/main/post/${ele.postId}`)}
        key={i} className="user"> 
        <h6> {ele.title}  </h6>
        </div>)
         }
      
      
    </div>  
  )
}
function PostName() {
  const posts = useContext(PostsContext)
  const users = useContext(UserContext)
  const {postId} = useParams()
  const [post, setpost] = useState([])
  const [user, setUser] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    setpost(()=> posts.filter((ele)=> ele.postId === postId))
  

  }, [navigate])
  const userID = post[0]?.id
  useEffect(() => {
    setUser(()=> users.filter((ele)=> ele.id === userID))
  

  }, [post])
  console.log(userID)
  return(
    <div className="PostCurrent">
     <div> Posted by : { user[0]?.name}  </div>
            <button onClick={()=>navigate(`/main/users/${userID}`)}>See User </button>
      {post.map((ele, i)=>  <div className="user" key={i}> 
          <h5> {ele.title} </h5>
          <h6> {ele.posts} </h6>
        </div>
      )}
    </div>
    
  )
}

    

