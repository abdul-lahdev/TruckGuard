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

const KanvanCard = () => {



    // ID of the first column ("New Lead")
    const firstColumnId = columns[0].id;

    const [features, setFeatures] = useState([

        {
            id: faker.string.uuid(),
            name: "New Client",
            email: "email@example.com",
            phone: "(000) 000-0000",
            amount: "$0.00",
            statusType: "New Lead",
            column: firstColumnId,
        },
    ]);

    // Add New Task to first column only
    const addTask = (columnId) => {
        const newTask = {
            id: faker.string.uuid(),
            name: "New Client",
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
            <select name="" id="" onChange={(val) => console.log(val.target.value)}>
                <option value="New Business">New Business</option>
                <option value="Renewal">Renewal</option>
                <option value="Endorsements">Endorsements</option>
                <option value="Claims">Claims</option>
            </select>


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

                            <KanbanHeader className={`border-none rounded-[12px]   ${column.name === 'New Lead' ? 'bg-[#F3F8FF] text-[#155DFC]' : column.name === 'Incomplete File' ? 'bg-[#F9F2FF] text-[#842ED1]' : column.name === 'Application Ready' ? 'bg-[#F2F5FF] text-[#4338CA]' : column.name === 'Application Submitted' ? 'bg-[#FFFEF3] text-[#A4660E]' : column.name === 'Quote Received' ? 'bg-[#FFF9F2] text-[#C2410C]' : column.name === 'Proposal Sent' ? 'bg-[#FFF4F4] text-[#F94747]' : 'bg-[#F3FFF8] text-[#22886B]'}`}>
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
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <p className="font-medium text-sm">{item.statusType}</p>
                                                <p className="font-medium text-sm">{item.name}</p>
                                                <p className="text-xs text-muted-foreground">{item.email}</p>
                                                <p className="text-xs text-muted-foreground">{item.phone}</p>
                                                <p className="font-semibold text-sm mt-1">{item.amount}</p>
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
