import React from "react";
import PeopleItem from "./PeopleItem";

export default function People({ people, title }) {
  return (
    <>
      <h2>{title}</h2>
      {people.map((person) => (
        <div>
          <PeopleItem person={person} />
        </div>
      ))}
    </>
  );
}
