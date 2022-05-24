import "./App.css";
import React, { useState } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const App = () => {
  const [rowData] = useState([
    { car: "Toyota", model: "Celica", price: 35000, name: "omer", id: 1 },
    { car: "Ford", model: "Mondeo", price: 32000, name: "omer", id: 2 },
    { car: "Porsche", model: "Boxter", price: 72000, name: "omer", id: 3 },
    { car: "Porsche", model: "Boxter", price: 72000, name: "omer", id: 3 },
    { car: "Porsche", model: "Boxter", price: 72000, name: "omer", id: 3 },
    { car: "Porsche", model: "Boxter", price: 72000, name: "omer", id: 3 },
    { car: "Porsche", model: "Boxter", price: 72000, name: "omer", id: 3 },
    { car: "Porsche", model: "Boxter", price: 72000, name: "omer", id: 3 },
  ]);

  const [columnDefs] = useState({
    columnDefs: [
      { field: "id" },
      { field: "name" },
      { field: "car" },
      { field: "model" },
      { field: "price" },
    ],
    defaultColDef: {
      editable: true,
    },
  });

  return (
    <div
      className="ag-theme-alpine"
      style={{ height: 400, width: "90%", margin: 50 }}
    >
      <h1>MY Grid</h1>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs.columnDefs}
        defaultColDef={columnDefs.defaultColDef}
      ></AgGridReact>
    </div>
  );
};

export default App;
