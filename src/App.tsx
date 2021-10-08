import React, { useState,useEffect } from 'react'
import Header from './components/Header'

const App: React.FC = () => {

  
  const [data,SetCovidData] = useState<covidData>()

  return (
    <div className="w-full h-screen bg-gray-900 text-gray-200">
      <div className ='container grid grid-cols-12'>
          <Header/>
      </div>
    </div>
  )
}

export default App
