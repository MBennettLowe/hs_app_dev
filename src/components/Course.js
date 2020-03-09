import React, { Component } from 'react';
import ReactDom from 'react-dom';

// Functional Component consisting of Objects with embedded Arrays - Multidemensional Object
const Course = () => {
      const name = "Half Stack application development"
      const parts = [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2  
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3
        }
        ]

      const partItems = parts.map((part) => 
        <li>{part.name} {part.exercises}</li>)
        

      return (
        <React.Fragment>
          <h1>{name}</h1>
          <ul>{partItems}</ul>
        </React.Fragment>
       
      )
    }
    

export default Course;