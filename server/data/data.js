import people from "../db/people.json" assert { type: "json" };
import tickets from "../db/tickets.json" assert { type: "json" };

export const getPeople = () => {
  return people;
};

export const getTickets = () => {
  return tickets;
};
