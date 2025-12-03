"use client";
import React from "react";
import dynamic from "next/dynamic";

// Load ApexCharts only on client
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});

const RevenueChart = () => {
    const dataValues = [1500, 2500, 1800, 1300, 3700, 3000, 1600, 2500, 1900, 1100, 1100, 3100];
    const maxValue = Math.max(...dataValues);

    const [state] = React.useState({
        series: [
            {
                name: "Net Profit",
                data: dataValues,
            },
        ],

        options: {
            chart: {
                type: "bar",
                height: 350,
                toolbar: { show: false },
                background: "transparent",
            },

            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "65%",       // tighter like screenshot
                    borderRadius: 12,
                    borderRadiusApplication: "around",
                    dataLabels: {
                        position: "bottom",     // keeps label inside bar bottom
                    },
                },
            },

            colors: ["#46B987"],

            fill: {
                type: "gradient",
                gradient: {
                    shade: "light",
                    type: "vertical",
                    shadeIntensity: 0.2,
                    gradientToColors: ["#20A27D"],
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100],
                },
            },

            dataLabels: {
                enabled: true,
                formatter: (value) => {
                    const percentage = Math.round((value / maxValue) * 100);
                    return `${percentage}%`;
                },
                style: {
                    colors: ["#F0F0F0"],      // softer white like screenshot
                    fontSize: "12px",
                    fontWeight: 600,
                },
                background: {
                    enabled: false,           // remove box around label
                },
                offsetY: 2,                 // push INTO bar slightly
            },

            stroke: {
                show: false,
            },

            xaxis: {
                categories: [
                    "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
                    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
                ],
                labels: {
                    style: {
                        colors: "#1C1C1CB2",
                        fontSize: "12px",
                        fontWeight: '400'
                    },
                },
                axisBorder: { show: false },
                axisTicks: { show: false },
            },

            yaxis: {
                min: 0,
                max: 5000,
                tickAmount: 5,
                labels: {
                    style: {
                        colors: "#1C1C1CB2",
                        fontSize: "12px",
                        fontWeight: '400'
                    },
                    formatter: (value) => value / 1000 + "k",
                },
            },

            grid: {
                borderColor: "#D1DDE2",
                strokeDashArray: 3,
                xaxis: { lines: { show: false } },
                yaxis: { lines: { show: true } },
            },

            tooltip: {
                theme: "dark",
                y: {
                    formatter: (val) => `${val / 1000}k`,
                },
                style: {
                    fontSize: "12px",
                },
            },
        },
    });



    return (
        <div>
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="bar"
                height={450}
            />
        </div>
    );
};

export default RevenueChart;
