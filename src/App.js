import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  let [people, setPeople] = useState(data);

  return (
    <main>
      <section class="container">
        <h3>{people.length} birthday today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
