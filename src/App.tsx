import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Today from './components/Today-Board';
import Total from './components/Total-Board';
import Footer from './components/Footer';
import LineGraph from './components/LineGraph';
import Loaders from './components/Loaders';





const App: React.FC = () => {
  const [data, SetCovidData] = useState<covidData>()
  const [loading,setLoading] = useState<boolean>(true)

  const getData = async() => {
    await axios.get('https://disease.sh/v3/covid-19/countries/philippines?strict=true')
    .then((response) => {
        SetCovidData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  useEffect(() => {
    getData();
    setTimeout(() => {
      setLoading(false)
    },900)
  }, []);

  const format = (num?: number) => {
    if (num === 0) {
      return 'N/A Data';
    } else {
      return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  };



 /*  Object.entries(historicalData?.timeline.cases).forEach(
    ([key, value]) => {
      days.push(key)
      active.push(value)

      Doesn't work in storing key from api request :<
    }
  )
   */


  return (
    <div className="relative w-full bg-gray-900 text-gray-200 min-h-screen space-y-3 sm:pb-11">
      <Header />
    { loading?(<Loaders loading={loading}/>)
    :(<><div className="container mx-auto px-20 grid grid-cols-12 gap-x-4 sm:flex sm:flex-col sm:px-6 sm: gap-y-5">
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
      <LineGraph/></>)}
      <Footer />
    </div>
    )
};

export default App;
