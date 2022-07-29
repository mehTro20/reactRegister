import React, { useState } from "react";
import "./App.css";

function App() {
  const [person, setPerson] = useState("");
  const [surname, setSurname] = useState("");
  const [list, setList] = useState([]);

  const addPerson = () => {
    setList([...list, { result: person, result1: surname }]);
    // setPerson("");
    // setSurname("");
  };

  const deleteItem = (index) => {

    setList((list) => list.filter((_, i) => i !== index));
  }

  return (
    <div className="App">
      <h1>Register</h1>
      <div class="input">
        <label>
          Name:
          <input
            type="text"
            id="name"
            onChange={(e) => {
              setPerson(e.target.value);
            }}
          />
        </label>
        <label>
          Surname:
          <input
            type="text"
            id="surname"
            onChange={(e) => {
              setSurname(e.target.value);
            }}
          />
        </label>
        <button type="submit" onClick={addPerson}>
          Submit
        </button>
      </div>

      <div className="table">
        <table>
          <thead>
            <th>Name</th>
            <th>Surname</th>
            <th>Delete</th>
          </thead>
          {list.map((result , result1, key) => {
            return (
              <tbody>
                <tr key={key}>
                  <td>{result.result}</td>
                  <td>{result.result1}</td>
                  <td><button onClick={deleteItem}>Delete</button></td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default App;
