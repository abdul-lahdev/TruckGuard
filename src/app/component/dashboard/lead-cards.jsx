// components/LeadCard.jsx

import { Mail, Phone, FileText, MessageSquare } from "lucide-react";

export default function LeadCard({ dot, name, email, phone, amount, status }) {
    return (
        <div className="border border-[#DDE6ED] rounded-xl p-4 shadow-[0_1px_3px_0_#606C800D] bg-white">
            <div className="flex items-center justify-between">
                <p className="rounded-2xl text-[12px] flex items-center justify-center w-max px-3 font-semibold bg-(--light3) h-6">DOT: #{dot}</p>
                <span className="flex items-center justify-center bg-(--green2) text-(--green3) text-[14px] font-medium h-7 w-7 rounded-full">
                    SD
                </span>
            </div>

            <div className="flex items-center justify-between mt-3">
                <h2 className="text-(--dark2) font-semibold text-[16px]/[18px] xl:text-[18px]/[20px]">{name}</h2>

            </div>

            <div className="mt-2 space-y-2 text-sm">
                <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 stroke-[#606C80]" /> <span className="text-[12px]/[10px] xl:text-[14px]/[12px] font-medium text-(--grey2)">{email}</span>
                </p>
                <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 stroke-[#606C80]" /> <span className="text-[12px]/[10px] xl:text-[14px]/[12px] font-medium text-(--grey2)">{phone}</span>
                </p>
                <p className="text-(--grey2) text-[16px]/[12px] font-medium mt-3">${amount}</p>
            </div>

            <div className="flex items-center justify-between mt-3 border-t pt-3">
                <div className="flex gap-2 text-gray-500">
                    <div className="p-2 bg-(--grey3) rounded-full">
                        <FileText className="w-3 h-3 stroke-[#606C80]" />
                    </div>
                    <div className="p-2 bg-(--grey3) rounded-full">

                        <MessageSquare className="w-3 h-3 stroke-[#606C80]" />
                    </div>
                    <div className="p-2 bg-(--grey3) rounded-full">
                        <Phone className="w-3 h-3 stroke-[#606C80]" />
                    </div>
                </div>

                <span className={`text-[10px] px-2 ${status === 'Application Ready' ? 'bg-[#F2F5FF] text-[#4338CA]' : status === 'Quote' ? 'bg-[#FFF9F2] text-[#C2410C]' : status === 'Incomplete File' ? 'bg-[#F9F2FF] text-[#842ED1]' : status === 'Proposal' ? 'bg-[#FFF4F4] text-[#F94747]' : status === 'Application Submitted' ? 'bg-[#FFFEF3] text-[#A4660E]' : 'bg-[#F3F8FF] text-[#155DFC]'}  rounded-xl h-5 flex items-center justify-center`}>
                    {status}
                </span>
            </div>
        </div >
    );
}
