'use client';
import { faker } from '@faker-js/faker';
import {
    KanbanBoard,
    KanbanCard,
    KanbanCards,
    KanbanHeader,
    KanbanProvider,
} from '@/components/ui/shadcn-io/kanban';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from "@/components/ui/separator"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const STATUS_OPTIONS = [
    "New Business",
    "Renewal",
    "Endorsements",
    "Claims",
];
const columns = [
    { id: faker.string.uuid(), name: 'New Lead', color: '#3B82F6', number: 1 },
    { id: faker.string.uuid(), name: 'Incomplete File', color: '#A78BFA', number: 2 },
    { id: faker.string.uuid(), name: 'Application Ready', color: '#FACC15', number: 3 },
    { id: faker.string.uuid(), name: 'Application Submitted', color: '#4ADE80', number: 4 },
    { id: faker.string.uuid(), name: 'Quote Received', color: '#FB923C', number: 5 },
    { id: faker.string.uuid(), name: 'Proposal Sent', color: '#F43F5E', number: 6 },
    { id: faker.string.uuid(), name: 'Issue Policy', color: '#86EFAC', number: 7 },
];




// Mapping of column names to status types
const STATUS_MAPPING = {
    'New Lead': 'New Lead',
    'Incomplete File': 'Incomplete File',
    'Application Ready': 'Application Ready',
    'Application Submitted': 'Application Submitted',
    'Quote Received': 'Quote Received',
    'Proposal Sent': 'Proposal Sent',
    'Issue Policy': 'Issue Policy',
};

const KanvanCard = ({ newLead, dispatch }) => {



    // ID of the first column ("New Lead")
    const firstColumnId = columns[0].id;

    const [features, setFeatures] = useState([

        {
            id: faker.string.uuid(),
            name: "Swift Logistics",
            email: "abc@mail.com",
            phone: "(637) 789-8990",
            amount: "$43,222",
            statusType: "New Lead",
            column: firstColumnId,
        },
        {
            id: faker.string.uuid(),
            name: "Swift Logistics",
            email: "abc@mail.com",
            phone: "(633) 789-8880",
            amount: "$45,222",
            statusType: "New Lead",
            column: firstColumnId,
        },
    ]);

    // Add New Task to first column only
    const addTask = (columnId) => {
        const newTask = {
            id: faker.string.uuid(),
            name: "Swift Logistics",
            email: "email@example.com",
            phone: "(000) 000-0000",
            amount: "$0.00",
            statusType: "New Lead",
            column: columnId,
        };
        setFeatures((prev) => [newTask, ...prev]);
    };

    return (
        <>
            {/* Button only once at top, adds task to first column */}
            {/* <button
                className="bg-red-600 text-white px-4 py-2 rounded mb-4"
                onClick={() => addTask(firstColumnId)}
            >
                HEHE add Meow
            </button> */}

            <div className='bg-white p-3 rounded-2xl flex justify-between items-center'>
                {/* <select name="" id="" onChange={(val) => console.log(val.target.value)}>
                    <option value="New Business">New Business</option>
                    <option value="Renewal">Renewal</option>
                    <option value="Endorsements">Endorsements</option>
                    <option value="Claims">Claims</option>
                </select> */}
                <Select className='cursor-pointer'>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Leads" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="New Business">New Business</SelectItem>
                        <SelectItem value="Renewal">Renewal</SelectItem>
                        <SelectItem value="Renewal">Renewal</SelectItem>
                        <SelectItem value="Claims">Claims</SelectItem>
                    </SelectContent>
                </Select>
                <button className='btn-primary' onClick={() => dispatch({ type: 'setNewLead', payload: !newLead })}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                    Add New</button>
            </div >

            <div className='bg-white border border-(--grey5) px-4 pt-6 rounded-3xl mt-4   '>


                <KanbanProvider
                    className='grid grid-cols-[300px_300px_300px_300px_300px_300px_300px] overflow-x-scroll min-h-[800px]'
                    columns={columns}
                    data={features}
                    onDataChange={(updatedFeatures) => {
                        // Update statusType based on current column
                        const syncedFeatures = updatedFeatures.map((item) => {
                            const columnName = columns.find((c) => c.id === item.column)?.name;
                            return {
                                ...item,
                                statusType: STATUS_MAPPING[columnName] || item.statusType,
                            };
                        });
                        setFeatures(syncedFeatures);
                    }}
                >
                    {(column) => (
                        <KanbanBoard id={column.id} key={column.id} className='border-none bg-white shadow-none '>
                            {/* Column Header */}

                            <KanbanHeader className={`border-none rounded-[12px] mb-3   ${column.name === 'New Lead' ? 'bg-[#F3F8FF] text-[#155DFC]' : column.name === 'Incomplete File' ? 'bg-[#F9F2FF] text-[#842ED1]' : column.name === 'Application Ready' ? 'bg-[#F2F5FF] text-[#4338CA]' : column.name === 'Application Submitted' ? 'bg-[#FFFEF3] text-[#A4660E]' : column.name === 'Quote Received' ? 'bg-[#FFF9F2] text-[#C2410C]' : column.name === 'Proposal Sent' ? 'bg-[#FFF4F4] text-[#F94747]' : 'bg-[#F3FFF8] text-[#22886B]'}`}>
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-2 px-2">
                                        {/* <div className="h-2 w-2 rounded-full" style={{ backgroundColor: column.color }} /> */}
                                        <span className=''>{column.number}.</span>

                                        <span className="font-semibold">{column.name}</span>
                                    </div>
                                </div>
                            </KanbanHeader>

                            {/* Cards */}
                            <KanbanCards id={column.id}>
                                {(item) => (
                                    <KanbanCard
                                        id={item.id}
                                        key={item.id}
                                        column={column.id}
                                        name={item.name}
                                        className='bg-transparent border border-var(--light2) shadow-[0_1px_3px_0_#606C800D]'
                                    >
                                        {/* Header Row */}
                                        <div >
                                            <div className='flex justify-between items-center'>
                                                <span className='bg-(--light3) h-6 rounded-2xl px-2 text-(--grey2) font-semibold text-[12px]/[12px] flex items-center justify-center'>DOT: #85764</span>
                                                <span className='flex items-center justify-center w-7 h-7 rounded-full text-(--green3) text-[14px]/[12px] font-medium bg-(--green2) '>SD</span>
                                            </div>
                                            <h1 className='text-(--dark2) text-[18px]/[20px] font-semibold mt-3'>
                                                {item.name}
                                            </h1>
                                            <div className='flex flex-col gap-2 mt-3'>
                                                <div className='flex items-center gap-2'>
                                                    <span>
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.333 12L9.90444 7.99999M6.09491 7.99999L1.66636 12M1.33301 4.66666L6.77629 8.47695C7.21707 8.7855 7.43746 8.93977 7.67718 8.99953C7.88894 9.05231 8.11041 9.05231 8.32217 8.99953C8.56189 8.93977 8.78228 8.7855 9.22306 8.47695L14.6663 4.66666M4.53301 13.3333H11.4663C12.5864 13.3333 13.1465 13.3333 13.5743 13.1153C13.9506 12.9236 14.2566 12.6176 14.4484 12.2413C14.6663 11.8135 14.6663 11.2534 14.6663 10.1333V5.86666C14.6663 4.74655 14.6663 4.1865 14.4484 3.75868C14.2566 3.38235 13.9506 3.07639 13.5743 2.88464C13.1465 2.66666 12.5864 2.66666 11.4663 2.66666H4.53301C3.4129 2.66666 2.85285 2.66666 2.42503 2.88464C2.0487 3.07639 1.74274 3.38235 1.55099 3.75868C1.33301 4.1865 1.33301 4.74655 1.33301 5.86666V10.1333C1.33301 11.2534 1.33301 11.8135 1.55099 12.2413C1.74274 12.6176 2.0487 12.9236 2.42503 13.1153C2.85285 13.3333 3.4129 13.3333 4.53301 13.3333Z" stroke="#606C80" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                                                    </span>
                                                    <span className='text-(--grey2) text-[12px]/[12px] font-medium'>{item.email}</span>
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <span>
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.58685 5.90214C6.05085 6.86856 6.68337 7.77432 7.48443 8.57537C8.28548 9.37642 9.19124 10.0089 10.1577 10.4729C10.2408 10.5129 10.2823 10.5328 10.3349 10.5481C10.5218 10.6026 10.7513 10.5635 10.9096 10.4502C10.9542 10.4183 10.9923 10.3802 11.0685 10.3039C11.3016 10.0709 11.4181 9.95434 11.5353 9.87815C11.9772 9.59082 12.5469 9.59082 12.9889 9.87815C13.106 9.95434 13.2226 10.0709 13.4556 10.3039L13.5856 10.4339C13.9398 10.7882 14.117 10.9653 14.2132 11.1556C14.4046 11.5339 14.4046 11.9808 14.2132 12.3591C14.117 12.5494 13.9399 12.7265 13.5856 13.0808L13.4805 13.1859C13.1274 13.539 12.9508 13.7156 12.7108 13.8504C12.4445 14 12.0308 14.1076 11.7253 14.1067C11.45 14.1058 11.2619 14.0524 10.8856 13.9456C8.86333 13.3717 6.95509 12.2887 5.36311 10.6967C3.77112 9.1047 2.68814 7.19646 2.11416 5.1742C2.00735 4.7979 1.95395 4.60975 1.95313 4.33445C1.95222 4.02897 2.0598 3.61531 2.20941 3.34897C2.34424 3.10895 2.52078 2.93241 2.87386 2.57933L2.97895 2.47424C3.33325 2.11995 3.5104 1.9428 3.70065 1.84657C4.07903 1.65519 4.52587 1.65519 4.90424 1.84657C5.0945 1.9428 5.27164 2.11995 5.62594 2.47424L5.75585 2.60415C5.98892 2.83722 6.10546 2.95376 6.18165 3.07094C6.46898 3.51287 6.46898 4.08259 6.18165 4.52452C6.10546 4.6417 5.98892 4.75824 5.75585 4.99131C5.67964 5.06752 5.64154 5.10562 5.60965 5.15016C5.4963 5.30845 5.45717 5.53796 5.51165 5.72486C5.52698 5.77745 5.54694 5.81902 5.58685 5.90214Z" stroke="#606C80" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                                                    </span>
                                                    <span className='text-(--grey2) text-[12px]/[12px] font-medium'>{item.phone}</span>
                                                </div>
                                            </div>
                                            <p className='text-(--grey2) font-medium text-[12px]/[12px] mt-3'>
                                                {item.amount}
                                            </p>
                                            <Separator className='bg-(--light2) mt-3' />

                                            <div className='mt-3 flex items-center justify-between gap-2'>
                                                <div className='flex items-center gap-2'>
                                                    <div className='w-7 h-7 rounded-full flex items-center justify-center bg-(--grey3)'>
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.3337 8.33334V4.53334C13.3337 3.41324 13.3337 2.85319 13.1157 2.42536C12.9239 2.04904 12.618 1.74308 12.2416 1.55133C11.8138 1.33334 11.2538 1.33334 10.1337 1.33334H5.86699C4.74689 1.33334 4.18683 1.33334 3.75901 1.55133C3.38269 1.74308 3.07673 2.04904 2.88498 2.42536C2.66699 2.85319 2.66699 3.41324 2.66699 4.53334V11.4667C2.66699 12.5868 2.66699 13.1468 2.88498 13.5747C3.07673 13.951 3.38269 14.2569 3.75901 14.4487C4.18683 14.6667 4.74689 14.6667 5.86699 14.6667H8.00033M9.33366 7.33334H5.33366M6.66699 10H5.33366M10.667 4.66668H5.33366M9.66699 12.6667L11.0003 14L14.0003 11" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                                                    </div>
                                                    <div className='w-7 h-7 rounded-full flex items-center justify-center bg-(--grey3)'>
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5 7H5.00667M8 7H8.00667M11 7H11.0067M4.66667 12V13.557C4.66667 13.9122 4.66667 14.0898 4.73949 14.1811C4.80282 14.2604 4.89885 14.3066 5.00036 14.3065C5.11708 14.3063 5.25578 14.1954 5.53317 13.9735L7.12348 12.7012C7.44834 12.4413 7.61078 12.3114 7.79166 12.219C7.95213 12.137 8.12295 12.0771 8.29948 12.0408C8.49845 12 8.70646 12 9.1225 12H10.8C11.9201 12 12.4802 12 12.908 11.782C13.2843 11.5903 13.5903 11.2843 13.782 10.908C14 10.4802 14 9.9201 14 8.8V5.2C14 4.07989 14 3.51984 13.782 3.09202C13.5903 2.71569 13.2843 2.40973 12.908 2.21799C12.4802 2 11.9201 2 10.8 2H5.2C4.0799 2 3.51984 2 3.09202 2.21799C2.71569 2.40973 2.40973 2.71569 2.21799 3.09202C2 3.51984 2 4.07989 2 5.2V9.33333C2 9.95331 2 10.2633 2.06815 10.5176C2.25308 11.2078 2.79218 11.7469 3.48236 11.9319C3.7367 12 4.04669 12 4.66667 12ZM5.33333 7C5.33333 7.18409 5.1841 7.33333 5 7.33333C4.81591 7.33333 4.66667 7.18409 4.66667 7C4.66667 6.8159 4.81591 6.66667 5 6.66667C5.1841 6.66667 5.33333 6.8159 5.33333 7ZM8.33333 7C8.33333 7.18409 8.1841 7.33333 8 7.33333C7.81591 7.33333 7.66667 7.18409 7.66667 7C7.66667 6.8159 7.81591 6.66667 8 6.66667C8.1841 6.66667 8.33333 6.8159 8.33333 7ZM11.3333 7C11.3333 7.18409 11.1841 7.33333 11 7.33333C10.8159 7.33333 10.6667 7.18409 10.6667 7C10.6667 6.8159 10.8159 6.66667 11 6.66667C11.1841 6.66667 11.3333 6.8159 11.3333 7Z" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                                                    </div>
                                                    <div className='w-7 h-7 rounded-full flex items-center justify-center bg-(--grey3)'>
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_71_2752)"> <path d="M9.36612 4.00001C10.0173 4.12705 10.6157 4.44552 11.0848 4.91463C11.5539 5.38375 11.8724 5.98219 11.9994 6.63334M9.36612 1.33334C10.719 1.48363 11.9805 2.08946 12.9436 3.05135C13.9067 4.01324 14.5141 5.27402 14.6661 6.62668M6.81744 9.24206C6.01638 8.441 5.38386 7.53524 4.91986 6.56883C4.87995 6.4857 4.85999 6.44414 4.84466 6.39155C4.79018 6.20464 4.82931 5.97514 4.94265 5.81685C4.97455 5.77231 5.01265 5.73421 5.08886 5.658C5.32193 5.42493 5.43847 5.30839 5.51466 5.19121C5.80199 4.74928 5.80199 4.17956 5.51466 3.73763C5.43847 3.62045 5.32193 3.50391 5.08886 3.27084L4.95895 3.14093C4.60465 2.78663 4.4275 2.60948 4.23725 2.51325C3.85888 2.32187 3.41203 2.32187 3.03366 2.51325C2.8434 2.60948 2.66626 2.78663 2.31196 3.14093L2.20687 3.24602C1.85379 3.5991 1.67725 3.77564 1.54242 4.01566C1.3928 4.282 1.28523 4.69566 1.28614 5.00114C1.28696 5.27644 1.34036 5.46459 1.44716 5.84088C2.02114 7.86315 3.10413 9.77139 4.69611 11.3634C6.2881 12.9554 8.19634 14.0383 10.2186 14.6123C10.5949 14.7191 10.7831 14.7725 11.0584 14.7734C11.3638 14.7743 11.7775 14.6667 12.0438 14.5171C12.2839 14.3822 12.4604 14.2057 12.8135 13.8526L12.9186 13.7475C13.2729 13.3932 13.45 13.2161 13.5462 13.0258C13.7376 12.6475 13.7376 12.2006 13.5462 11.8222C13.45 11.632 13.2729 11.4548 12.9186 11.1005L12.7887 10.9706C12.5556 10.7376 12.439 10.621 12.3219 10.5448C11.8799 10.2575 11.3102 10.2575 10.8683 10.5448C10.7511 10.621 10.6346 10.7376 10.4015 10.9706C10.3253 11.0468 10.2872 11.0849 10.2426 11.1168C10.0844 11.2302 9.85485 11.2693 9.66795 11.2148C9.61535 11.1995 9.57379 11.1795 9.49066 11.1396C8.52425 10.6756 7.61849 10.0431 6.81744 9.24206Z" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" /> </g> <defs> <clipPath id="clip0_71_2752"> <rect width="16" height="16" fill="white" /> </clipPath> </defs> </svg>
                                                    </div>
                                                </div>
                                                <span className={`text-[10px] px-2 ${item.statusType === 'Application Ready' ? 'bg-[#F2F5FF] text-[#4338CA]' : item.statusType === 'Quote' ? 'bg-[#FFF9F2] text-[#C2410C]' : item.statusType === 'Incomplete File' ? 'bg-[#F9F2FF] text-[#842ED1]' : item.statusType === 'Proposal' ? 'bg-[#FFF4F4] text-[#F94747]' : item.statusType === 'Application Submitted' ? 'bg-[#FFFEF3] text-[#A4660E]' : 'bg-[#F3F8FF] text-[#155DFC]'}  rounded-xl h-5 flex items-center justify-center`}>
                                                    {item.statusType}
                                                </span>
                                            </div>



                                        </div>
                                    </KanbanCard>
                                )}
                            </KanbanCards>
                        </KanbanBoard>
                    )}
                </KanbanProvider>
            </div>

        </>
    );
};

export default KanvanCard;
