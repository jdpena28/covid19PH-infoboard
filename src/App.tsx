import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Today from './components/Today-Board'
import Total from './components/Total-Board'

const App: React.FC = () => {
  const [data,SetCovidData] = useState<covidData>()

  const getData = () => {
    axios.get('https://disease.sh/v3/covid-19/countries/philippines?strict=true')
    .then((response)=>{
      SetCovidData(response.data)
    })
  }

  useEffect(()=> {
    getData()
  },[])

  return (
    <div className="w-full h-screen bg-gray-900 text-gray-200">
      <div className ='container mx-auto grid grid-cols-12 gap-4'>
          <Header/>
          <Today todayCases = {data?.todayCases} todayDeaths ={data?.todayDeaths}
          todayRecovered = {data?.todayRecovered}/>
          <Total active ={data?.active} critical = {data?.critical} deaths ={data?.deaths}/>
      </div>
    </div>
  )
}

export default App
