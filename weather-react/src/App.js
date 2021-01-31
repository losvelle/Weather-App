import React, {useState} from 'react';
// the Api credentials will hide later
const api = {
    key: '87f7e61c2926de6031aea7aa4a8c9e4d',
    base: 'https://api.openweathermap.org/data/2.5/'
};
// start of the App
function App() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

{/* creating the search function to get the weather from the api */}

const search = evt => {
    {/*if an event where the enter key is pressed run the following code */}
  if (evt.key === "Enter") {
      {/*this fetches the content inside the api variable base then key in essense you end up with a url which then searches a JSON fileand provides you the result*/}
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
  }
}




    {/* Creating my dateBuilder function passing the variable d which here would be the date. the function will have all months and days as an array */}
    const dateBuilder = (d) => {
        {/* creating the variable months to hold all the months of the year in a array */}
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        {/* creating the variable days to hold all the days of the week in a array*/}
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        {/* this allows us to get a number between 0-6 which correspond to the index of the days array above */}
        let day = days[d.getDay()];

        {/* get the day of the month from 1-31*/}
        let date = d.getDate();

        {/* this will return a number between 0-11 which will represent our months */}
        let month = months[d.getMonth()];

        {/* This will allow us to get the full year*/}
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`

    }
{/* if the weather.main is NOT undefined. Check to see if weather is greater than 16 degrees. if true this will change the className "App warm" which will change the background image based on the css. */}
  return (
      <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'App warm' : 'App') : 'App'}>

<main>
    { /*creating the searchbar container*/}
    <div className="search-box">
        {/* creating the searchbar input box */}
        <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            />
        </div>
            {(typeof weather.main != "undefined") ? (
            <div>
              <div className="location-box">
                <div className="location">{weather.name}, {weather.sys.country}</div>
                <div className="date">{dateBuilder(new Date())}</div>
              </div>
              <div className="weather-box">
                <div className="temp">
                  {Math.round(weather.main.temp)}°c

                </div>
                <div className="weather">{weather.weather[0].main}</div>
              </div>
            </div>
            ) : ('')}
          </main>
        </div>
      );
    }

export default App;
