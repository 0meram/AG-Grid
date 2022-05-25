import "./App.css";
import React, { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const App = () => {

  const rowData = useMemo(
    () => ([
      { type: "Ford", model: "Mondeo", price: 32000, name: "omri", id: 2 },
      { type: "Porsche", model: "Boxter", price: 72000, name: "yosi", id: 3 },
      { type: "Toyota", model: "Celica", price: 35000, name: "omer", id: 1 },
      { type: "Porsche", model: "Kadi", price: 72000, name: "golan", id: 4 },
      { type: "Porsche", model: "Wlkswagon", price: 72000, name: "nim", id: 5 },
      { type: "Porsche", model: "Hundai", price: 72000, name: "peter", id: 6 },
      { type: "Porsche", model: "Kaia", price: 72000, name: "yaakov", id: 7 },
      { type: "Porsche", model: "Mits", price: 72000, name: "fritz", id: 8 },
    ]),
    []
  );

  const columns = useMemo(
    () => ({
      columnDefs: [
        {
          headerName: "User",
          children: [{ field: "id" }, { field: "name" }],
        },
        {
          headerName: "Car",
          children: [{ field: "type" }, { field: "model" }],
        },
        {
          headerName: "Money",
          children: [{ field: "price" }],
        },
      ],
      defaultColDef: {
        editable: true,
      },
    }),
    []
  );

  return (
    <div
      className="ag-theme-alpine"
      style={{ height: 400, width: "80%", margin: 50 }}
    >
      <h1>MY Grid</h1>
      <AgGridReact
        rowData={rowData}
        columnDefs={columns.columnDefs}
        defaultColDef={columns.defaultColDef}
      ></AgGridReact>
    </div>
  );
};

export default App;
