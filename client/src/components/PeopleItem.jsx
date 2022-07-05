import React from "react";

export default function PeopleItem({ person }) {
  console.log(person);
  return (
    <li>
      {"ID: " +
        person.id +
        " - Name: " +
        person.name +
        " - Date: " +
        new Date(person.buy_date).toDateString() +
        " - Type: " +
        (person.ticket_type === 1
          ? "mensual"
          : person.ticket_type === 2
          ? "semestral"
          : "anual")}
      {person.expiry_date != null
        ? " - Expiration: " +
          new Date(person.expiry_date).toDateString() +
          " - Tickets: " +
          person.remaining_tickets
        : ""}
    </li>
  );
}
