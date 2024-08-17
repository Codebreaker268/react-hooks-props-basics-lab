import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";


// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
// import Links from "./links";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home name="Liza" city="New York" color="firebrick" />
      <About bio={user.bio} links1={user.links.github} links2={user.links.linkedin}/>
      {/* <Links /> */}
    </div>
  );
}

export default App;
