import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Today from './components/Today-Board';
import Total from './components/Total-Board';
import Footer from './components/Footer';
import LineGraph from './components/LineGraph';



const App: React.FC = () => {
  const [data, SetCovidData] = useState<covidData>();
  const [historicalData, setHistoricalData] = useState<any|null>({});

  const getData = () => {
    axios
      .get('https://disease.sh/v3/covid-19/countries/philippines?strict=true')
      .then((response) => {
        SetCovidData(response.data);
      })
      .catch((err) => {
        console.log('error');
      });
  };

  const getHistorical = async () => {
    const res = await axios.get(
      'https://disease.sh/v3/covid-19/historical/phl?lastdays=30'
    );
    setHistoricalData(res.data);
  };

  useEffect(() => {
    getData();
    getHistorical();
  }, []);

  const format = (num?: number) => {
    if (num === 0) {
      return 'N/A Data';
    } else {
      return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  };

  let days:string[]
  let active = []

  console.log(historicalData?.timeline)

 /*  Object.entries(historicalData?.timeline.cases).forEach(
    ([key, value]) => {
      days.push(key)
      active.push(value)
    }
  )
   */


  return (
    <div className="w-full h-screen bg-gray-900 text-gray-200">
      <div className="container mx-auto px-20 sm:flex sm:flex-col grid grid-cols-12 gap-x-4">
        <Header />
        <Today
          todayCases={format(data?.todayCases)}
          todayDeaths={format(data?.todayDeaths)}
          todayRecovered={format(data?.todayRecovered)}
        />
        <Total
          active={format(data?.active)}
          critical={format(data?.critical)}
          deaths={format(data?.deaths)}
        />
      </div>
      <LineGraph/>
      <Footer />
    </div>
  );
};

export default App;
