import React from 'react'

const Today:React.FC<today> = ({todayCases,todayDeaths,todayRecovered}) => {
    return (
        <div className='bg-gray-400 bg-opacity-70 font-primary col-start-2 col-span-2 w-max p-5 space-y-1 rounded-3xl text-lg'>
            <h3 className='font-secondary text-center text-xl'>TODAY</h3>
            <p>Cases: {todayCases}</p>
            <p>Deaths: {todayDeaths}</p>
            <p>Recovered: {todayRecovered}</p>
        </div>
    )
}

export default Today
