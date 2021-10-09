import React from 'react'

const Today = () => {
    return (
        <div className='bg-gray-400 bg-opacity-70 font-primary col-span-3 w-max p-4 space-y-1 rounded-3xl text-lg'>
            <h3 className='font-secondary text-center text-xl'>TODAY</h3>
            <p>Cases: 123,456</p>
            <p>Deaths: 1,234</p>
            <p>Recovered: 5,234</p>
        </div>
    )
}

export default Today
