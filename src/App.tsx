import React, { useState,useEffect } from 'react'
import Header from './components/Header'
import Today from './components/Today-Board'
import Total from './components/Total-Board'

const App: React.FC = () => {

  
  const [data,SetCovidData] = useState<covidData>()

  return (
    <div className="w-full h-screen bg-gray-900 text-gray-200">
      <div className ='container mx-auto grid grid-cols-12 gap-4'>
          <Header/>
          <Today/>
          <Total/>
      </div>
    </div>
  )
}

export default App
