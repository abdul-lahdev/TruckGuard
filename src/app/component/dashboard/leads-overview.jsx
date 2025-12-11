"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip);

export default function LeadsOverViewChart() {
    const data = {
        labels: ["Closed", "New Leads", "Quoted", "Proposal"],
        datasets: [
            {
                data: [5, 5, 5, 5],
                backgroundColor: ["#28C99B", "#78B3FF", "#C57DFC", "#F0B350"],
                borderWidth: 0,
                cutout: "80%",
                borderRadius: 50,  // rounded corners
                spacing: 10,       // gap between arcs
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
        }
    };

    const total = 1293;

    return (
        <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Doughnut Chart */}
            <div className="relative w-[300px] h-[300px] md:w-[362px] md:h-[362px]">
                <Doughnut data={data} options={options} />

                {/* Center Text */}
                <div className="absolute inset-32 mb-12 flex flex-col items-center justify-center text-center pointer-events-none">
                    <p className="text-[26px] font-semibold">{total.toLocaleString()}</p>
                    <p className="text-gray-500 text-[16px] -mt-2">Leads</p>
                </div>
            </div>

            {/* Custom Legend */}
            <div className="flex flex-col gap-4 w-full ">
                <LegendItem color="#28C99B" label="Closed" value="12,332" />
                <LegendItem color="#78B3FF" label="New Leads" value="8,324" />
                <LegendItem color="#F0B350" label="Quoted" value="2,345" />
                <LegendItem color="#C57DFC" label="Proposal" value="1,454" />
            </div>
        </div>
    );
}

function LegendItem({ color, label, value }) {
    return (
        <div className="flex items-center justify-between border p-2 rounded-xl text-sm">
            <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></span>
                <span className="text-[#1C1C1CB2] text-[12px]/[20px] font-medium">
                    {label}
                </span>
            </div>
            <span className="font-medium text-[#1C1C1CB2] text-[12px]/[28px]">{value}</span>
        </div>
    );
}
