import { getPeople, getTickets } from "../data/data.js";
import { filterExpirationByDate } from "../services/filters.js";

export const getPeopleData = (req, res) => {
  return res.json(getPeople());
};

export const filterPeople = (req, res) => {
  return res.json(
    filterExpirationByDate(getPeople(), getTickets(), new Date(req.body.date))
  );
};
