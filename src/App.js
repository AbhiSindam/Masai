import React, { useState, useEffect } from "react";
import ButtonComponent from "./components/ButtonComponent";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([{}]);

  const fetchURL = "https://json-server-mocker-masai.herokuapp.com/cities";

  const getData = () => {
    const response = fetch(fetchURL);
    response.then((data) => data.json()).then((d) => setData(d));
  };

  const handleSort = () => {
    return data
      .sort((a, b) => (a.population > b.population ? 1 : -1))
      .map((d) => {
        console.log(d);
        return (
          <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.name}</td>
            <td>{d.country}</td>
            <td>{d.population}</td>
          </tr>
        );
      });
  };

  useEffect(() => {
    getData();
  }, [data]);

  return (
    <div className='App'>
      {/* <div id="loading-container"></div> */}
      <table>
        <tr>
          <th>ID</th>
          <th>CITY NAME</th>
          <th>COUNTRY NAME</th>
          <th>POPULATION</th>
        </tr>
        {/* 
            create rows for countries
          */}

        {data.map((d) => (
          <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.name}</td>
            <td>{d.country}</td>
            <td>{d.population}</td>
          </tr>
        ))}
      </table>

      <div>
        <button onClick={handleSort}>
          <ButtonComponent
            id='SORT_BUTTON'
            title={`Sort by Increasing Population`}
          />
        </button>
        <ButtonComponent title='PREV' id='PREV' />

        <ButtonComponent id='NEXT' title='NEXT' />
      </div>
    </div>
  );
}
