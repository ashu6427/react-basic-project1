import React from "react";
import "./data";

const List = (props) => {
  return (
    <>
      {props.people.map((person) => {
        return (
          <article className="person">
            <img src={person.image} alt={person.name} />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
              <p>{person.desc}</p>
              <hr></hr>
              {/* <button className="btn">Delete</button> */}
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
