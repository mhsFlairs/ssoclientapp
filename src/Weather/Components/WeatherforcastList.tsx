import { useMsal } from "@azure/msal-react";
import { useState } from "react";
import { API_BASE_URL, loginRequest } from "../../auth.config";

function getWeatherList(token: string): Promise<Weather[]> {
  const headers = new Headers();

  const bearer = `Bearer ${token}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers,
  };

  return fetch(`${API_BASE_URL}/WeatherForecast`, options).then((response) =>
    response.json()
  );
}

export const WeatherforcastList = () => {
  const [weathers, setWeathers] = useState<Weather[]>([]);
  const { instance, accounts } = useMsal();

  function getData() {
    const request = {
      ...loginRequest,
      account: accounts[0],
    };

    instance
      .acquireTokenSilent(request)
      .then((response) => response.accessToken)
      .catch((error) => {
        alert("UnAuthorized!");
        throw error;
      })
      .then((token) => getWeatherList(token))
      .then((list) => {
        setWeathers(list);
      })
      .catch((error) => console.log(error));
  }

  const weitherListItems = weathers.map((w) => (
    <div key={w.date.toString()}>
      <b>{w.date.toLocaleString()}</b>
      <div>{w.temperatureC}</div>
      <div>{w.temperatureF}</div>
      <p>{w.summary}</p>
    </div>
  ));

  return (
    <>
      <div>
        <button onClick={() => getData()}>getWether</button>
        <div>{weitherListItems}</div>
      </div>
    </>
  );
};

class Weather {
  date: Date;
  temperatureC: string;
  temperatureF: string;
  summary: string;

  constructor(date: Date, tempC: string, tempF: string, summary: string) {
    this.date = date;
    this.temperatureC = tempC;
    this.temperatureF = tempF;
    this.summary = summary;
  }
}
