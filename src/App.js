import "./App.css";
import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const App = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [hideColumn, setHideColumn] = useState(false);

  const rowData = useMemo(
    () => [
      { type: "Ford", model: "Mondeo", price: 32000, name: "omri", id: 2 },
      { type: "Porsche", model: "Boxter", price: 72000, name: "yosi", id: 3 },
      { type: "Toyota", model: "Celica", price: 35000, name: "omer", id: 1 },
      { type: "Porsche", model: "Kadi", price: 72000, name: "golan", id: 4 },
      { type: "Porsche", model: "Wlkswagon", price: 72000, name: "nim", id: 5 },
      { type: "Porsche", model: "Hundai", price: 72000, name: "peter", id: 6 },
      { type: "Porsche", model: "Kaia", price: 72000, name: "yaakov", id: 7 },
      { type: "Porsche", model: "Mits", price: 72000, name: "fritz", id: 8 },
    ],
    []
  );

  const columns = useMemo(
    () => ({
      columnDefs: [
        {
          headerName: "User",
          width: 100,
          children: [
            { field: "id", width: 50 },
            { field: "name", width: 100 },
          ],
        },
        {
          headerName: "Car",
          children: [
            { field: "type", width: 100 },
            { field: "model", width: 200 },
          ],
        },
        {
          headerName: "Money",
          children: [{ field: "price", width: 100, hide: true }],
        },
      ],
      defaultColDef: {
        editable: true,
      },
    }),
    []
  );

  function onGridReady(params) {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  }

  const showColumn = () => {
    gridColumnApi.setColumnVisible("price", hideColumn);
    setHideColumn(!hideColumn);
    gridApi.sizeColumnsToFit();
  };

  return (
    <div
      className="ag-theme-alpine"
      style={{ height: 400, width: 550, margin: 50 }}
    >
      <h1>MY Grid</h1>
      <AgGridReact
        rowData={rowData}
        columnDefs={columns.columnDefs}
        defaultColDef={columns.defaultColDef}
        onGridReady={onGridReady}
      ></AgGridReact>
      <button onClick={showColumn}>show price</button>
    </div>
  );
};

export default App;
