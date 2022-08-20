import './App.css';
import axios from 'axios';
import { useState } from 'react';




function App() {

  const [filtro, setFiltro] = useState ('');
  const [filtroId, setFiltroId] = useState('');
  const [data, setData] = useState({});

  const apibtn = (e) =>{
    e.preventDefault();
    const url = `https://swapi.dev/api/${filtro}/${filtroId}`
  
    axios.get(url)
    .then(response =>{
      setData(response.data);
    }).catch(error =>{
      console.log(error);
    })

  }

  return (
    <div className="App">
      <h1>Luke APIWALKER</h1>
      <div>
        <form onSubmit={apibtn}>
          <label>Elegir:</label> 
            <select onChange={(e)=> setFiltro(e.target.value)} >
                <option>SELECCIONAR</option>
                <option value="people">Personajes</option>
                <option value="planets">Planets</option>
                <option value="starships">Starships</option>
            </select>
          <label>ID:</label>
        <input onChange={(e)=>setFiltroId(e.target.value)} type={"number"}></input>
        <button>IR</button>
        </form>
        <ul className='listaDatos'>
          {Object.keys(data).map((llave)=>{
            return(
              <li>{llave}:{data[llave]}</li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}
export default App;
