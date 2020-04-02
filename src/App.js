import React from "react";
import "./styles.css";

function calcolaEta(dataNascita) {
  console.log("sto chiamando la funzione calcola età");
  console.log(dataNascita);
  return 2020 - dataNascita;
}

console.log(calcolaEta(1993));

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
