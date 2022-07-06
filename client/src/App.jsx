import React, { useEffect, useState } from "react";
import People from "./components/People";
import { fetchApi } from "./hooks/fetchApi";

function App() {
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);
  const [status, setStatus] = useState(false);
  const [date, setDate] = useState();

  useEffect(() => {
    async function getStatus() {
      const response = await fetchApi("/health");
      setStatus(response.ok);
    }
    getStatus();

    async function getPeople() {
      const response = await fetchApi("/people");
      setPeople(response.data);
    }
    getPeople();
  }, []);

  async function fetchDate(e) {
    e.preventDefault();

    if (date == null) return;

    const response = await fetchApi("/", "POST", { date });

    if (!response.ok) return console.log(response.status);

    setFilteredPeople(response.data);
  }

  return status ? (
    <section>
      <People people={people} title={"DB People"} />
      <form onSubmit={fetchDate}>
        <label>First Date</label>
        <input
          type="date"
          name="date"
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <People people={filteredPeople} title={"Filtered people"} />
    </section>
  ) : (
    "Api down"
  );
}

export default App;
