import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';



interface ChartData {

    options: any;

    series: {
        name: string;
        data: number[];

    }[];
}



const AxisChart = () => {
    const [chartData, setChartData] = useState<ChartData>({
        options: {
            chart: {
                type: 'bar',
                height: 480,
                stacked: true
            },
            toobar: { show: false },
            colors: ['#72E128', '#72E128'],
            plotOptions: {
                bar: {
                    horizontal: true,
                    barHeight: '40%',
                    barWidth: '20%'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: false,
                width: 1,
                colors: ["#fff"]
            },
            legend: { show: false },
          
            grid: {
                yaxis: {
                    lines: {
                        show: false
                    }
                },

            },
            yaxis: {

                title: {
                    // text: 'Age',
                },

                labels: {
                    show: false,
                    style: {
                        fontSize: '12px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                        colors: undefined,
                    }
                },

            },
            tooltip: {
                shared: false,


            },

            xaxis: {
                position: 'top',

                labels: {
                    show: true,
                    style: {
                        fontSize: '12px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                        colors: undefined,


                    }
                },
            },
        },


        series: [
            {
                name: 'Last Week',
                data: [0, 103, 121, 109, 200, 124, 83] // Mon - Sun
            },
            {
                name: 'This Week',
                data: [-84, -180, -202, -88, -111, -124, -84]
            }
        ],
    });
    return (
        <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            height={250}
        />
    );
};

export default AxisChart;
