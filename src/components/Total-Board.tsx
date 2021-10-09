import React from 'react';
import { VictoryPie, VictoryTooltip } from 'victory';

const Total: React.FC<total> = ({ active, critical, deaths }) => {
  return (
    <div className="col-start-5 col-span-7 bg-gray-400 w-full rounded-3xl text-xl flex justify-around items-center ">
     <div className='flex flex-col'> 
      <div>
        <div className="rounded-[50%] w-[12px] h-[12px] bg-green-500 inline-block"></div>
        <p className="font-secondary inline">
          &nbsp;ACTIVE&emsp;&nbsp;&emsp;
          <p className="font-primary inline">:&nbsp;&emsp;{active}</p>
        </p>
      </div>
      <div>
        <div className="rounded-[50%] w-[12px] h-[12px] bg-red-500 inline-block"></div>
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
      <div className='w-[150px] h-[150px]'>
      <VictoryPie
        innerRadius={75}
        padAngle={2}
        labelComponent={
          <VictoryTooltip
            cornerRadius={0}
            pointerLength={0}
            flyoutStyle={{
              stroke: 'none',
              fill: 'gray',
            }}
          />
        }
        data={[
          { x: '', y: active, label: 'active' },
          { x: '', y: critical, label: 'critical' },
          { x: '', y: deaths, label: 'death' },
        ]}
        colorScale={['green', 'red', 'black']}
      />
    </div>
    </div>
  );
};

export default Total;
