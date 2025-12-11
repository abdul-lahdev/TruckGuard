"use client";
import { useState } from "react";

export default function TaskCard({ defaultStatus, title, date }) {
    const [status, setStatus] = useState(defaultStatus);

    const isDone = status === "done";

    const statusStyles = {
        done: {
            bg: "bg-[#EAFFF1]",
            border: "border-[#4CAF50]",
            icon: "text-[#4CAF50]",
            pillBg: "bg-[#22C55E1A]",
            pillText: "text-[#16A34A]",
            label: "Done",
        },
        inprogress: {
            bg: "bg-[#EEF5FF]",
            border: "border-[#4A90E2]",
            icon: "text-[#4A90E2]",
            pillBg: "bg-[#4A96FD3B]",
            pillText: "text-[#155DFC]",
            label: "In Progress",
        },
        added: {
            bg: "bg-[#FCFFE9]",
            border: "border-[#F2C94C]",
            icon: "text-[#F2C94C]",
            pillBg: "bg-[#FFEED3]",
            pillText: "text-[#F0B350]",
            label: "Added",
        },
        notcomplete: {
            bg: "bg-[#FFEDED]",
            border: "border-[#EB5757]",
            icon: "text-[#EB5757]",
            pillBg: "bg-[#FFE4E4]",
            pillText: "text-[#FF383C]",
            label: "Not Complete",
        },
    };

    const style = statusStyles[status];

    return (
        <div className={`w-full p-5 rounded-xl flex flex-col md:flex-row items-start gap-3 md:gap-0 md:items-center justify-between ${style.bg}`}>
            <div className="flex items-center gap-4">

                {/* CLICKABLE CHECKBOX */}
                <button
                    onClick={() => setStatus(isDone ? "notcomplete" : "done")}
                    className={`w-6 h-6 flex items-center justify-center border-2 rounded-md bg-white ${style.border} cursor-pointer`}
                >
                    {isDone ? (
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            className={`${style.icon}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    ) : null}
                </button>

                <div>
                    <h2 className="font-medium text-[15px] md:text-lg text-black/80">{title}</h2>
                    <p className="bg-white border border-[#EBEEF2] h-5 px-3 text-[#606C80] font-bold text-[12px]/[12px] w-max flex items-center justify-center">
                        {date}
                    </p>
                </div>
            </div>

            <span className={`px-4 py-1 rounded-full text-sm mt-2 font-medium ${style.pillBg} ${style.pillText}`}>
                {style.label}
            </span>
        </div>
    );
}
