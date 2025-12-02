"use client";
import { useState } from "react";

export default function TaskCard({ defaultStatus, title, date }) {
    const [status, setStatus] = useState(defaultStatus);

    const isDone = status === "done";

    const statusStyles = {
        done: {
            bg: "bg-[#E8FFE9]",
            border: "border-[#4CAF50]",
            icon: "text-[#4CAF50]",
            pillBg: "bg-[#C5F7CB]",
            pillText: "text-[#1B7D2D]",
            label: "Done",
        },
        inprogress: {
            bg: "bg-[#EFF5FF]",
            border: "border-[#4A90E2]",
            icon: "text-[#4A90E2]",
            pillBg: "bg-[#D9E8FF]",
            pillText: "text-[#2F6DD5]",
            label: "In Progress",
        },
        added: {
            bg: "bg-[#FFFBDB]",
            border: "border-[#F2C94C]",
            icon: "text-[#F2C94C]",
            pillBg: "bg-[#FDECB2]",
            pillText: "text-[#CE9A1B]",
            label: "Added",
        },
        notcomplete: {
            bg: "bg-[#FFE5E5]",
            border: "border-[#EB5757]",
            icon: "text-[#EB5757]",
            pillBg: "bg-[#FFCCCC]",
            pillText: "text-[#C53030]",
            label: "Not Complete",
        },
    };

    const style = statusStyles[status];

    return (
        <div className={`w-full p-5 rounded-xl flex items-center justify-between ${style.bg}`}>
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
                    <h2 className="font-medium text-lg text-black/80">{title}</h2>
                    <p className="text-xs mt-2 bg-white/70 px-3 py-1 rounded-full inline-block">
                        {date}
                    </p>
                </div>
            </div>

            <span className={`px-4 py-1 rounded-full text-sm font-medium ${style.pillBg} ${style.pillText}`}>
                {style.label}
            </span>
        </div>
    );
}
