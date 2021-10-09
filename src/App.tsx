import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Today from './components/Today-Board'
import Total from './components/Total-Board'
import Footer from './components/Footer'
/* 
remove reactchartjs2 and reactchart from dependencies */

const App: React.FC = () => {
  const [data,SetCovidData] = useState<covidData>()
  const getData = () => {
    axios.get('https://disease.sh/v3/covid-19/countries/philippines?strict=true')
    .then((response)=>{
      SetCovidData(response.data)
    })
    axios.get('https://disease.sh/v3/covid-19/historical/phl?lastdays=30')
    .then((response)=> {
      console.log(response.data)
    })
  }

  useEffect(()=> {
    getData()
  },[])


  const format = (num?: number) => {
    if(num===0) {
      return 'N/A Data'
    }
    else {
      return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
  };

  return (
    <div className="w-full h-screen bg-gray-900 text-gray-200">
      <div className ='container mx-auto px-20 grid grid-cols-12 gap-4'>
          <Header/>
          <Today todayCases = {format(data?.todayCases)} todayDeaths ={format(data?.todayDeaths)}
          todayRecovered = {format(data?.todayRecovered)}/>
          <Total active ={format(data?.active)} critical = {format(data?.critical)} deaths ={format(data?.deaths)}/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
