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
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4
        }
       ]
       },
       {
          name: "Node.js",
          id: 2,
          parts: [
            {
              name: "Routing",
              exercises: 3,
              id: 1
            },
            {
              name: "Middlewares",
              exercises: 7,
              id: 2
            }
          ]
        }
      ]  
        // Created function to iterate through array to retrieve various objects
      const partItems = parts.map((part) => 
        <li>{part.name} {part.exercises}</li>)

        // Will use higher order function Reduce to summarize array objects
      const total = parts.reduce(function(sum, part) {
        return sum + part.exercises
        console.log(total);
      }, 0); // starting point of Sum 
        

      return (
        <React.Fragment>
          <h1>{name}</h1>
          <ul>{partItems}</ul>
          <h3>Total of {total} exercises</h3>

        </React.Fragment>
       
      )
    }
    

export default Course;