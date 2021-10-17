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
  tooltips: {
    mode: "index",
    intersect: false,
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
  },
};
const buildChartData = (data?:any, casesType?:any) => {
  let chartData = [];
  let lastDataPoint;

  for (let date in data.cases) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }

  return chartData;
};

const LineGraph = ({ casesType = 'cases'}) => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/historical/phl?lastdays=60")
        .then((response) => response.json())
        .then((data) => {
          let chartData = buildChartData(data.timeline, casesType);
          setData(chartData);
          
        });
    };
    fetchData();
  }, [casesType]);

  return (
    <div className='h-[46vh]'>
      {data.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                label:'Covid Trends in Last 60 days',
                borderColor: "#9a32ef",
                data: data,
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