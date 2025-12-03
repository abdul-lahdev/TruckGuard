"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip);

export default function ClaimsDonutChart() {
    const data = {
        labels: ["Settled", "In Review", "Open"],
        datasets: [
            {
                data: [12, 8, 5],
                backgroundColor: ["#31C587", "#6597FF", "#EDB347"],
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
        <div className="flex items-center gap-10">
            {/* Doughnut Chart */}
            <div className="relative w-[260px] h-[260px]">
                <Doughnut data={data} options={options} />

                {/* Center Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                    <p className="text-[26px] font-semibold">{total.toLocaleString()}</p>
                    <p className="text-gray-500 text-[16px] -mt-2">Claims</p>
                </div>
            </div>

            {/* Custom Legend */}
            <div className="flex flex-col gap-4 w-full">
                <LegendItem color="#31C587" label="Settled" value="12" />
                <LegendItem color="#6597FF" label="In Review" value="8" />
                <LegendItem color="#EDB347" label="Open" value="5" />
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
