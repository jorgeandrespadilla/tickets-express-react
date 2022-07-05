import React from "react";
import PeopleItem from "./PeopleItem";

export default function People({ people }) {
  return (
    <>
      <h2>Title</h2>
      {people.map((person) => (
        <div>
          <PeopleItem person={person} />
        </div>
      ))}
    </>
  );
}
