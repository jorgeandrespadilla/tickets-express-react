import people from "../db/people.json" assert { type: "json" };

export const getPeople = () => {
  return people;
};
