import React from "react";



function About(props) {
  const github=<a href="https://github.com/liza"></a>
  const linkedin=<a href="https://www.linkedin.com/in/liza/"></a>
  
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && props.bio.trim() !== "" && <p>{props.bio}</p>}
      {/* <p>{props.bio}</p> */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
       
      
     
      <a href="https://github.com/liza">{props.links1}</a>
      <a href="https://www.linkedin.com/in/liza/">{props.links2}</a>

    </div>
  );
}


export default About;
