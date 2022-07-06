import people from "../models/people.json" assert { type: "json" };
import tickets from "../models/tickets.json" assert { type: "json" };

export const getPeople = () => {
  return people;
};

export const getTickets = () => {
  return tickets;
};
