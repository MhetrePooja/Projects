import React from "react";
import { BrowserRouter as Router,Routes,Route,Link, Outlet,useParams , NavLink ,useNavigate,useLocation } from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/main"  element={<Main />}>
                  <Route path="/main/users" element= {<Users/>}>
                      <Route path=":userId" element={<UserId/>}/>    
                  </Route>    
              </Route>
              <Route path="/postname" element={<PostName/>}/> 
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
      <h1>Main component</h1> ||
      <Link to ="/main/users">  Users  </Link> | |
    <Outlet/>    
    </div>  
  )
}
function Users() {
  const userInfo=["Pooja","Rahul","Prasad","Geeta"];
  const randomUserinfo= userInfo[Math.floor(Math.random() * userInfo.length)]; 
  const info=userInfo.map((data)=><li>{data}</li>)
  
  return(
    <div>
      <h1>User Component</h1>
      <h3> There are multiple users</h3> 
      <h4>{info}</h4>
      
      <NavLink to={`/main/users/${randomUserinfo}`}> {randomUserinfo } </NavLink>
      
      <Outlet/>
    </div>  
  )
}
function UserId() {
  const postInfo=["youtube","yahoo","google","Netflix"];
  const randompostinfo= postInfo[Math.floor(Math.random() * postInfo.length)];
  const navigate=useNavigate();
  const {userId}=useParams();
  return(
    <div>
      <h1>username is  - {userId}</h1> 
      <h1>Multiple posts </h1>
      {
        postInfo.map((data)=><li>{data}</li>)
         }
      <button onClick={()=>navigate("/postname",{state:randompostinfo})}>Posts</button>
      
    </div>  
  )
}
function PostName() {
  const location=useLocation();
  return(
    <div>
      <h1>which posts user gone through ?  {location.state}</h1>  
    </div>
    
  )
}

    
