import React from 'react'

export  const About = (props) => {
  let ans = props.isLoggedIn ? "About" : "You are not allowed to view this page";
  
  return (
    <p>{ans}</p>   
  )
}

