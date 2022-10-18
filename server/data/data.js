import { readFile } from 'fs/promises';

const people = JSON.parse(
  await readFile(
    new URL('../models/people.json', import.meta.url)
  )
);
const tickets = JSON.parse(
  await readFile(
    new URL('../models/tickets.json', import.meta.url)
  )
);

export const getPeople = () => {
  return people;
};

export const getTickets = () => {
  return tickets;
};
