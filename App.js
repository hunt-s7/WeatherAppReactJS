import React , { useState } from 'react';


const api={
  key : "731bc6c8903f03a0401aa451952eeafe",
  base : "https://api.openweathermap.org/data/2.5/"
}




function App() {

  const [query, setQuery] = useState('')
  const [weather, setWeather] =useState({}) 

  const search = evt => {
    if(evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result =>{
        setWeather(result);
        setQuery('');
        console.log(result)
      })
    }
  }
  
  function dateTrack(d){
  
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];

    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let day=days[d.getDay()];
    let month=months[d.getMonth()];
    let year=d.getFullYear();
    let date=d.getDate();

    return `${day}, ${date} ${month} ${year}`;
  }

  return (
    
    
    <div className=
    {(typeof weather.main != "undefined")  ?( (weather.main.temp > 20) ? ("app") : ("app-cold") ) : ("app-cold")}>
      <main>
        
        <div className="search-bar">
          <input 
            className="search-box" 
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query} 
            onKeyPress={search}
          />
        </div>
        <footer>
              Copyright © 2020-2021 Satyam'sWeatherApp . All rights reserved.
        </footer>
        {( typeof weather.main != "undefined" ) ? (
          <div>
            <div className="location-box">
              <div className="location-city">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateTrack(new Date())}</div>
            </div>

            <div className="weather-box">
              <div className="weather-temp">{Math.round(weather.main.temp)}°C</div>  
              <div className="weather-cond">{weather.weather[0].main}</div>
            </div> 
          </div>
        ) : (
          <>
            <div className="default-screen">
              <div className="default-text">Weather App</div>
              <div className="default-hint">Search Any Location</div>
            </div>
            
          </>
        )}
         

      </main>
    </div>
  );
}

export default App;
