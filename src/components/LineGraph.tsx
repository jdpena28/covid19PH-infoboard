import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const options:{} = {
  legend: {
    display: true,
  },
  elements: {
    point: {
      radius: 3,
    },
  },
  maintainAspectRatio: false,
};



  
const LineGraph = ({historicalData}:{historicalData:any}) => {
  
  return (
    <div className='h-[46vh]'>
      {historicalData.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                label:'Covid Trends in Last 60 days',
                borderColor: "#9a32ef",
                data: historicalData,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
}

export default LineGraph;