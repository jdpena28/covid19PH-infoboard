import React from 'react'

const Header = () => {
    return (
        <header className='pt-3 font-primary col-span-12 text-center space-y-2 mb-5'>
            <h1 className='underline text-3xl sm:text-2xl'>COVID-19 Information Board</h1>
            <h2 className='text-2xl sm:text-lg'>Philippines</h2>
            <h3>API: <a className='underline text-blue-300 hover:text-blue-800' href="https://disease.sh">Disease.sh</a></h3>
        </header>
    )
}

export default Header
