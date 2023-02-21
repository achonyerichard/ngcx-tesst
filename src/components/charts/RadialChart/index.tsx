import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';



interface RadarChart {

  options: any;

  series: {
    name: string;
    data: number[];

  }[];
}


const RadarChart: React.FC = () => {

  const [radarData, setRadarData] = useState<RadarChart>({

    series: [
      {
        name: 'Income',
        data: [70, 68, 80, 95, 75, 77] // Jan - Jun
      },
      {
        name: 'Net Worth',
        data: [90, 72, 62, 65, 80, 75]
      },


    ],

    options: {
      chart: {
        height: 200,
        type: 'radar',
        dropShadow: {
          enabled: false,
          blur: 1
        },

      },
      stroke: {
        width: 2
      },
      fill: {
        opacity: 1
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June'],

      },
      yaxis: {

        show: false,

      },
      colors: ['#FDB528', '#72E128'],
    },
  })





  return (
    <ReactApexChart options={radarData.options} series={radarData.series} type="radar" height={350} />
  );
};

export default RadarChart