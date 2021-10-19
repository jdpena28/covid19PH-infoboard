import React from 'react'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import ReactTooltip from 'react-tooltip';


const Today:React.FC<today> = ({todayCases,todayDeaths,todayRecovered}) => {
    return (
        <div className='bg-gray-600  font-primary col-start-1 col-span-2 w-max p-5 rounded-3xl text-lg sm:w-full'>
            <h3 className='font-secondary text-center text-xl'>TODAY <AiOutlineQuestionCircle data-tip = 'No Applicable Data from 1:00pm to 6:00pm' className ='inline -mt-2 cursor-pointer' size={'1.3rem'}/></h3>
            <ReactTooltip />
            <div className='block sm:hidden'>
                <p>Cases: {todayCases}</p>
                <p>Deaths: {todayDeaths}</p>
                <p>Recovered: {todayRecovered}</p>
            </div>
            <div className='hidden sm:block w-max mx-auto'>
                <p className="font-secondary">
                &nbsp;CASES&emsp;&emsp;&emsp;&emsp;&nbsp;
                <p className="font-primary inline">:&nbsp;&emsp;{todayCases}</p>
                </p>
                <p className="font-secondary">
                &nbsp;DEATHS&emsp;&nbsp;&emsp;&emsp;&nbsp;
                <p className="font-primary inline">:&nbsp;&emsp;{todayDeaths}</p>
                </p>
                <p className="font-secondary">
                &nbsp;RECOVERED&emsp;&nbsp;
                <p className="font-primary inline">:&nbsp;&emsp;{todayRecovered}</p>
                </p>
            </div>
            
        </div>
    )
}

export default Today
