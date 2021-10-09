import React from 'react';
import {Doughnut} from 'react-chartjs-2'

const Total: React.FC<total> = ({ active, critical, deaths }) => {
  const stringData = [active,critical,deaths]
  const numData = stringData.map(e => {
    return (e?.replace(',',''))
  })
  const data = {
    labels: ['Active','Critical','Deaths'],
    datasets: [   
      {
        label: '',
        data: [...numData],
        backgroundColor: [
          'rgba(40, 255, 40, 0.8)',
          'rgba(255, 20, 47, 0.8)',
          'rgba(12, 12, 12, 0.8)',
        ],
        borderColor: [
          'rgba(40, 255, 40, 1)',
          'rgba(255, 20, 47, 1)',
          'rgba(0, 0, 0, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const option = {
    maintainAspectRatio:false,
    layout:{
      padding:0
    },
    plugins:{
      legend:false
    }
  }

  return (
    <div className="col-start-5 col-span-8 bg-gray-600 w-full rounded-3xl text-xl flex justify-around items-center ">
      <div className='flex flex-col'>
        <div>
          <div className="rounded-[50%] w-[12px] h-[12px] bg-[#28ff28] inline-block"></div>
          <p className="font-secondary inline">
            &nbsp;ACTIVE&emsp;&nbsp;&emsp;
            <p className="font-primary inline">:&nbsp;&emsp;{active}</p>
          </p>
        </div>
        <div>
          <div className="rounded-[50%] w-[12px] h-[12px] bg-[#ff142f] inline-block"></div>
          <p className="font-secondary inline">
            &nbsp;CRITICAL&emsp;&nbsp;
            <p className="font-primary inline">:&nbsp;&emsp;{critical}</p>
          </p>
        </div>
        <div>
          <div className="rounded-[50%] w-[12px] h-[12px] bg-black inline-block"></div>
          <p className="font-secondary inline">
            &nbsp;DEATH&emsp;&nbsp;&emsp;&thinsp;
            <p className="font-primary inline">:&nbsp;&emsp;{deaths}</p>
          </p>
        </div>
      </div>
      <div className='w-[130px] h-[130px]'>
      <Doughnut data = {data} options={option}/>
      </div>
    </div>
  );
};

export default Total;
