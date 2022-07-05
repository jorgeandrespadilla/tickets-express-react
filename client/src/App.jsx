import React, { useEffect, useState } from "react";
import People from "./components/People";
import FilterByDate from "./components/FilterByDate";
import { fetchApi } from "./hooks/fetchApi";

function App() {
  const [people, setPeople] = useState();
  const [filteredPeople, setFilteredPeople] = useState();
  const [status, setStatus] = useState(false);
  const [date, setDate] = useState();

  useEffect(() => {
    async function getStatus() {
      const response = await fetchApi("/health");
      setStatus(response.ok);
    }
    getStatus();
  }, []);

  async function fetchDate(e) {
    e.preventDefault();

    if (date == null) return;

    const response = await fetchApi("/", "POST", { date });

    if (!response.ok) return console.log(response.status);

    setPeople(response.data.data);
  }

  return status ? (
    <>
      <People props={people} />
      <form onSubmit={fetchDate}>
        <label>First Date</label>
        <input
          type="date"
          name="startDate"
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <FilterByDate props={filteredPeople} />
    </>
  ) : (
    "Api down"
  );
}

export default App;
