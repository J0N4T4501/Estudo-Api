import React, { useState } from "react";
import axios from "axios";
import './index.scss'

export default function Teste() {
  const [data, defDados] = useState({});
  const [cep, setCep] = useState("");

  const url = `https://viacep.com.br/ws/${cep}/json/`;




  const buscaLocalPorCEP = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        defDados(response.data);
        console.log(response.data);
      })
      setCep("");
    }
  }



  return (
    <main className="page-cep">
      <div className="d">
        <div className="d0">
        <div className="d1">

          <h1>Buscar Por CEP</h1>

          <input type="number" value={cep} onChange={e => setCep(e.target.value)} onKeyPress={buscaLocalPorCEP} placeholder="insira um cep" />
     
        

        </div>
      </div>
      <div className="d3">
      
            <div>Rua: {data.logradouro}</div>
            <div>CEP: {data.cep}</div>
            <div>Bairro:{data.bairro}</div>
            <div>Localidade: {data.localidade}</div>
            <div>UF: {data.uf}</div>
            
       </div>
      </div>
      

    </main>

  );
}