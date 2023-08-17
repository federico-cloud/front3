import { useState } from "react";
import { Formulario } from "./components/Formulario";
import "./styles/index.css"
import { Card } from "./components/Card";

function App() {

  
  const [data, setData] = useState({
    categoria: "fede",
    nombre: ""
  });
  
  const [error, setError] = useState(false);
  const [send, setSend] = useState(false)
  console.log(data.nombre)

  return (

    <>
      <h1>Dime tu juego favorito</h1>
      <Formulario
        data={data}
        setData={setData}
        error={error}
        setError={setError}
        send={send}
        setSend={setSend}
      />
    </>
  );
}

export default App;