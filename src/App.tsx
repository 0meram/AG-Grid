import "./App.css";
import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

let title: String;
title = "TypeScript Practice";

const App: React.FC = () => {
  const [hideColumn, setHideColumn] = useState(false);

  const cellRenderCurrencyFail = (params) => {
    return (
      <div style={{ color: "red" }}>{currencyFormatter(params.value)}</div>
    );
  };

  const cellRenderCurrencyPass = (params) => {
    return (
      <div style={{ color: "green" }}>{currencyFormatter(params.value)}</div>
    );
  };

  function currencyFormatter(num) {
    return formatNumber(num) + "$";
  }

  function formatNumber(number) {
    return Math.floor(number)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  const toggleColumns = () => {
    setHideColumn((prev) => !prev);
  };

  const rowData = useMemo(
    () => [
      { type: "Ford", model: "Mondeo", price: 300, name: "omri", id: 1 },
      { type: "Porsche", model: "Boxter", price: 72000, name: "yosi", id: 2 },
      { type: "Toyota", model: "Celica", price: 3500000, name: "omer", id: 3 },
      { type: "Porsche", model: "Kadi", price: 72000, name: "golan", id: 4 },
      { type: "Porsche", model: "Wlkswagon", price: 72000, name: "nim", id: 5 },
      { type: "Porsche", model: "Hundai", price: 720, name: "peter", id: 6 },
      { type: "Porsche", model: "Kaia", price: 980000, name: "yaakov", id: 7 },
      { type: "Porsche", model: "Mits", price: 2000, name: "fritz", id: 8 },
    ],
    []
  );

  const columns = useMemo(
    () => ({
      columnDefs: [
        {
          headerName: "User",
          width: 350,
          children: [
            { field: "id", width: 170 },
            { field: "name", width: 100 },
          ],
        },
        {
          headerName: "Car",
          children: [
            { field: "type", width: 100 },
            { field: "model", width: 200, hide: hideColumn },
          ],
        },
        {
          headerName: "Money",
          field: "price",
          width: 250,
          hide: hideColumn,
          onCellValueChanged: (e) => {
            console.log(e.newValue + "$");
          },
          editable: (p) => {
            if (p.data.price > 10000) return true;
            else return false;
          },
          cellRendererSelector: (p) => {
            if (p.value > 100000) {
              return { component: cellRenderCurrencyFail };
            }
            if (p.value < 10000000) {
              return { component: cellRenderCurrencyPass };
            }
          },
        },
      ],
      defaultColDef: {},
    }),
    [hideColumn]
  );

  return (
    <div
      className="ag-theme-alpine"
      style={{ height: 450, width: "60%", margin: 50 }}
    >
      <h1>MY Grid </h1>
      <h1>{title}</h1>
      <AgGridReact
        rowData={rowData}
        columnDefs={columns.columnDefs}
        defaultColDef={columns.defaultColDef}
      ></AgGridReact>
      <button onClick={toggleColumns} style={{ marginTop: 10 }}>
        {hideColumn ? "show price" : "hide price"}
      </button>
    </div>
  );
};

export default App;
