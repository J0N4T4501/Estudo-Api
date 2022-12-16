import React, {useState} from "react";
import axios from "axios";

function App() {
  const [data, defDados] = useState({});
  const [localidade, defLocalidade] = useState("");
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${localidade}&units=metric&appid=f7721fbb2c447bed137d7db7aeed57fd`;
  
  const buscaLocal = (evento) => {
    if(evento.key === "Enter") {
      axios.get(url).then( (response) =>{
        defDados(response.data);
        console.log(response.data);
      })
      defLocalidade("");
    }
  }

  return (
    <div className="app">
      <div className="busca">
        <input
          value={localidade}
          onChange={evento => defLocalidade(evento.target.value)}
          onKeyPress={buscaLocal}
          placeholder="Insira a Localidade"
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
          {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null }
          </div>
        </div>
        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? 
                <p className="bold">
                {data.main.feels_like.toFixed()}°C
                </p>
              : null }
              <p>Sensação</p>
            </div>
            <div className="humidity">
            {data.main ?
                <p className="bold">
                {data.main.humidity}%
                </p>
              : null }
              <p>Umidade</p>
            </div>
            <div className="wind">
              {data.wind ?
                <p className="bold">
                {data.wind.speed.toFixed()} km/h
                </p>
                : null}
              <p>Vento</p>
            </div>
  
          </div>
        }
      </div>
    </div>
  );
}