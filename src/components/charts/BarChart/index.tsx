import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface ChartData {

  options: ApexOptions;

  series: {
    name: string;
    data: number[];
    fillColor: string;
  }[];
}



const BarChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData>({
    options: {
      grid: {
        show: true,
        borderColor: '#90A4AE',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
        row: {
          colors: undefined,
          opacity: 0.5
        },
        column: {
          colors: undefined,
          opacity: 0.5
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
      },
      

      chart: {
        type: 'bar',
        height: 350,

      },
      xaxis: {
        categories: ['', '', '', ''],
        labels: {
          show: false,
          style: {
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
            colors: undefined,
          },
          formatter: undefined,
        },
      },
      yaxis: {
        title: {
          text: '',
        },
        labels: {
          show: false,
          style: {
            fontSize: '3px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
            colors: undefined,
          },
          formatter: undefined,
        },
      },
      legend: {
        position: 'bottom',
      },
      fill: {
        opacity: 1,
      },
      dataLabels: {
        enabled: false,
        offsetX: -6,

        style: {
          fontSize: "3px",
          colors: ["#fff"],

        },
      },


      colors: ['#72E128', '#FDB528',],

    },
    series: [
      
      {
        name: 'Earning',
        data: [120, 200, 150, 120],
        fillColor: '#FDB528',
      },
      {
        name: 'Expense',
        data: [72, 120, 50, 65],
        fillColor: '#FDB528',
      }
      

    ],
  });
  return (
    <ReactApexChart
      options={chartData.options}
      series={chartData.series}
      type="bar"
      height={100}
    />
  );
};

export default BarChart;
