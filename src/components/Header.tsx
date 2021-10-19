import React from 'react'
import {TiSocialLinkedin,TiSocialGithub,TiSocialInstagram} from 'react-icons/ti'


const Header = () => {
    return (
        <header className='pt-3 font-primary col-span-12 text-center space-y-2 mb-5'>
            <h1 className='underline text-3xl sm:text-2xl'>COVID-19 Information Board</h1>
            <h2 className='text-2xl sm:text-lg'>Philippines</h2>
            <div className = 'flex w-full justify-center gap-x-3'>
                <div className="flex gap-x-1 text-current text-white">
                    <a href="https://www.instagram.com/jdpena28/" target="_blank"><TiSocialInstagram size={22}/></a>
                    <a href="https://www.linkedin.com/in/johnhenrichdelapena/" target = "_blank"><TiSocialLinkedin size={22}/></a>
                    <a href="https://github.com/jdpena28" target="_blank"><TiSocialGithub size={24}/></a>
                </div>
                <p>|</p>
                <h3>API: <a className='underline text-blue-300 hover:text-blue-800' href="https://disease.sh">Disease.sh</a></h3>
            </div>
        </header>
    )
}

export default Header
