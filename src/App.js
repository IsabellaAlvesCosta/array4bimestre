import { useState } from 'react';
import './App.css';

function App() {
  const [numero, setNumero] = useState();
  const [numeros, setNumeros] = useState([]);

  function adicionar() {
    let atual = [...numeros, numero];
    setNumeros(atual);
  }

  function inverta() {
    let agora = Inverter(numeros);
    setNumeros(agora);
  }

   function Inverter(array) {
    let agora = [];
    let cont = 0
    for (let i = array.length-1; i >= 0; i--){
        agora[cont] = array[i];
        cont++;
    }
    return agora;
}


  return (
    <div className="App">
      <header>
          <h2> Função Adicionar Números </h2>
        
          <input type='number' value={numero} onChange={ e => setNumero(e.target.value) } />
          <button onClick={adicionar}> Adicione aqui </button>

            <button onClick={inverta}> Inverter </button>

        <div>
          {
            numeros.map(item =>
              <p> {item} </p>
              )
          }
        </div>

        <h2> Troca de Figurinhas </h2>

      </header>
    </div>
  );
}

export default App;