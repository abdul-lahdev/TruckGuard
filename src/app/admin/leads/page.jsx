'use client'
import { useReducer, useState, React } from 'react'
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import { Calendar } from '@/components/ui/calendar';

import KanvanCard from '@/app/component/leads/kanban';
import Select from 'react-select'

import {
    NativeSelect,
    NativeSelectOption,
} from "@/components/ui/native-select"
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from "@/components/ui/separator"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import FileUpload from '@/app/component/leads/file-upload';


export default function Page() {






    const initialState = {
        openDate: false,
        dateVal: undefined,
        dobDate: false,
        dobVal: undefined,
        dateAuthority: false,
        dateAuthorityVal: undefined,
        driverDateHiredOpen: false,
        driverDateHiredVal: undefined,
        driverExperienceOpen: false,
        driverExperienceVal: undefined,
        stateData: [
            { value: 'california', label: 'California' },
            { value: 'texas', label: 'Texas' },
            { value: 'florida', label: 'Florida' },
            { value: 'new_york', label: 'New York' },
            { value: 'pennsylvania', label: 'Pennsylvania' },
            { value: 'illinois', label: 'Illinois' },
            { value: 'ohio', label: 'Ohio' },
            { value: 'georgia', label: 'Georgia' },
            { value: 'north_carolina', label: 'North Carolina' },
            { value: 'michigan', label: 'Michigan' },
            { value: 'new_jersey', label: 'New Jersey' },
            { value: 'virginia', label: 'Virginia' },
            { value: 'washington', label: 'Washington' },
            { value: 'arizona', label: 'Arizona' },
            { value: 'massachusetts', label: 'Massachusetts' },
            { value: 'tennessee', label: 'Tennessee' },
            { value: 'indiana', label: 'Indiana' },
            { value: 'missouri', label: 'Missouri' },
            { value: 'maryland', label: 'Maryland' }
        ],
        businessType: [
            { value: 'sole_proprietorship', label: 'Sole Proprietorship' },
            { value: 'partnership', label: 'Partnership' },
            { value: 'llc', label: 'LLC (Limited Liability Company)' }
        ],
        newLead: false,
        nonTrucking: false,
        physicalDamage: false,
        autoLiability: false,
        workCompensation: false,
        generalLiability: false,
        motorTruckCargo: false,
        occupationalAccident: false,
        trailerInterchange: false,
        powerUnitData: [
            {
                vin: '4323763',
                year: '2015',
                model: 'Volvo',
                make: 'VNL',
                class: 'Class 8',
                truckType: 'Truck Tractor',
                zipCode: '90001',
            },
            {
                vin: '4323763',
                year: '2015',
                model: 'Volvo',
                make: 'VNL',
                class: 'Class 8',
                truckType: 'Truck Tractor',
                zipCode: '90001',
            },
        ],
        trailersData: [
            {
                vin: '4323763',
                ownedTrailer: 'Dry Van/Box',
                year: '2002',
                make: 'Wabash National',
                model: 'Van-Kingpin',
                value: '50000',
                zipCode: '98723'
            }
        ],
        driversData: [
            {
                name: 'John Lewis',
                dob: '12/02/1985',
                type: 'Owner Operator',
                license: '643894',
                licenseType: 'Commercial',
                issuedDate: '23/03/2012',
                dateHired: '12/02/2013',
                exp: '2yrs 2mths'
            }
        ],
        powerUnitForm: {
            vin: '',
            year: '',
            model: '',
            make: '',
            class: '',
            truckType: '',
            zipCode: '',
        },
        powerUnitEditIndex: null,
        powerUnitModalOpen: false,
    }





    function reducer(state, action) {

        switch (action.type) {
            case 'setOpdenDate':
                return {
                    ...state,
                    openDate: action.payload

                }

            case 'setDateVal':
                return {
                    ...state,
                    dateVal: action.payload
                }
            case 'setDateAuthority':
                return {
                    ...state,
                    dateAuthority: action.payload
                }
            case 'setDateAuthorityVal':
                return {
                    ...state,
                    dateAuthorityVal: action.payload
                }
            case 'setDriverDateHiredOpen':
                return {
                    ...state,
                    driverDateHiredOpen: action.payload
                }
            case 'setDriverDateHiredVal':
                return {
                    ...state,
                    driverDateHiredVal: action.payload
                }
            case 'setDriverExperienceOpen':
                return {
                    ...state,
                    driverExperienceOpen: action.payload
                }
            case 'setDriverExperienceVal':
                return {
                    ...state,
                    driverExperienceVal: action.payload
                }
            case 'setPowerUnitField':
                return {
                    ...state,
                    powerUnitForm: {
                        ...state.powerUnitForm,
                        [action.field]: action.value,
                    }
                }
            case 'addPowerUnit':
                return {
                    ...state,
                    powerUnitData: [
                        ...state.powerUnitData,
                        { ...state.powerUnitForm },
                    ],
                    powerUnitForm: {
                        vin: '',
                        year: '',
                        model: '',
                        make: '',
                        class: '',
                        truckType: '',
                        zipCode: '',
                    }
                }
            case 'setNewLead':
                return {
                    ...state,
                    newLead: action.payload
                }
            case "TOGGLE":
                return {
                    ...state,
                    [action.payload]: !state[action.payload]
                };
            case "SET_FIELD":
                return {
                    ...state,
                    [action.field]: action.value,
                };

            default:
                throw new Error('Unknown action type')
        }

    }

    const [{ openDate, dateVal, stateData, trailersData, businessType, dateAuthority, dateAuthorityVal, driverDateHiredOpen, driverDateHiredVal, driverExperienceOpen, driverExperienceVal, powerUnitForm, newLead, nonTrucking, physicalDamage, autoLiability, workCompensation, generalLiability, motorTruckCargo, occupationalAccident, trailerInterchange, powerUnitData }, dispatch] = useReducer(reducer, initialState)


    const handleToggle = (field) => {
        dispatch({ type: "TOGGLE", payload: field });

    };

    const steps = [
        { id: 'applicationInformation', label: 'Application Information', name: 'Application Information' },
        { id: 'coverage', label: 'Coverage', name: 'Coverage' },
        { id: 'equipment', label: 'Equipment', name: 'Scheduled Equipment' },
        { id: 'drivers', label: 'Drivers', name: 'Scheduled Drivers' },
        { id: 'documents', label: 'Documents', name: 'Documents' },
    ]

    const documentTypes = [
        { value: "owner-cdl", label: "Owner's CDL" },
        { value: "ifta", label: "Last 4 Quarter's IFTA" },
        { value: "loss-runs", label: "Last 3 Year Loss Runs" },
    ]

    const initialDocumentSections = [
        {
            title: "Owner's CDL",
            key: "owner-cdl",
            files: [
                { name: "abc.docx", size: "16 MB" },
                { name: "abc.docx", size: "16 MB" },
            ],
        },
        {
            title: "Last 4 Quarter's IFTA",
            key: "ifta",
            files: [
                { name: "abc.docx", size: "16 MB" },
                { name: "abc.docx", size: "16 MB" },
            ],
        },
        {
            title: "Last 3 Year Loss Runs",
            key: "loss-runs",
            files: [
                { name: "abc.docx", size: "16 MB" },
                { name: "abc.docx", size: "16 MB" },
            ],
        },
    ]

    const [stepIndex, setStepIndex] = useState(0)
    // const [checkboxVal, setCheckboxVal] = useState(false)
    const currForm = steps[stepIndex].id
    const [selectedDocType, setSelectedDocType] = useState(documentTypes[0]?.value || "")
    const [documentLists, setDocumentLists] = useState(initialDocumentSections)
    const [uploadQueue, setUploadQueue] = useState([])
    const [isDragging, setIsDragging] = useState(false)

    const formatFileSize = (size) => {
        if (!size && size !== 0) return ""
        const kb = size / 1024
        const mb = kb / 1024
        if (mb >= 1) return `${mb.toFixed(1)} MB`
        return `${Math.max(kb, 1).toFixed(0)} KB`
    }

    const handleFilesSelected = (fileList) => {
        const incoming = Array.from(fileList || []).map((file) => ({
            name: file.name,
            size: formatFileSize(file.size),
        }))
        if (!incoming.length) return
        setUploadQueue((prev) => [...prev, ...incoming])
        setIsDragging(false)
    }

    const handleAddDocuments = () => {
        if (!selectedDocType || !uploadQueue.length) return
        setDocumentLists((prev) =>
            prev.map((section) =>
                section.key === selectedDocType
                    ? { ...section, files: [...section.files, ...uploadQueue] }
                    : section
            )
        )
        setUploadQueue([])
    }



    // Functions

    const goNext = () => {
        if (stepIndex < steps.length - 1) {
            setStepIndex(prev => prev + 1)
        }
    }

    const goBack = () => {
        if (stepIndex > 0) {
            setStepIndex(prev => prev - 1)
        }
    }

    // Select Objects
    const classData = [
        {
            value: 'Class 8', label: 'Class 8'
        },
        {
            value: 'Class 2', label: 'Class 2'
        },
    ]

    const pricingData = [
        { value: '$ 750,000', label: '$ 750,000' },
        { value: '$ 750,500', label: '$ 750,500' },
    ]
    const makeData = [
        {
            value: 'VNL', label: 'VNL'
        },
    ]
    const modelData = [
        {
            value: 'Volvo', label: 'Volvo'
        },
        {
            value: 'Suzuki', label: 'Suzuki'
        },
        {
            value: 'Honda', label: 'Honda'
        },
    ]

    const truckType = [
        {
            value: 'Truck Tractor', label: 'Truck Tractor'
        },
        {
            value: 'Sleeper Truck', label: 'Sleeper Truck'
        },
    ]
    const zipCode = [
        {
            value: '75600', label: '75600'
        },
        {
            value: '98723', label: '98723'
        },
    ]





    return (
        <div className='pt-5 h-full'>

            {
                newLead ?

                    <>
                        <form onSubmit={(e) => { e.preventDefault(); /* handle save */ }}>
                            <div className='flex justify-between items-center mb-5'>
                                <div className='flex items-center gap-3' >
                                    {stepIndex <= 0 ? <span onClick={() => dispatch({ type: 'setNewLead', payload: !newLead })}>
                                        <svg className='cursor-pointer' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 24L12 16L20 8" stroke="#0A0A0A" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                                    </span> : (
                                        <span className='cursor-pointer' >
                                            <svg onClick={goBack} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 24L12 16L20 8" stroke="#0A0A0A" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                                        </span>
                                    )}

                                    <h1 className='text-xl font-semibold'>Add Lead</h1>
                                </div>

                                <div className='flex items-center gap-3'>

                                    <button
                                        style={{ paddingLeft: '30px', paddingRight: '30px' }}

                                        type="button" className='btn-light'>
                                        Cancel
                                    </button>

                                    <button
                                        style={{ paddingLeft: '30px', paddingRight: '30px' }}

                                        type="submit" className='btn-secondary'>
                                        Save
                                    </button>

                                    <button
                                        type="button"
                                        style={{ paddingLeft: '30px', paddingRight: '30px' }}
                                        onClick={goNext}
                                        className='px-8 btn-primary '
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>


                            <div className='grid grid-cols-[335px_1fr] gap-4'>

                                {/* Left Steps */}


                                <div className='bg-white rounded-3xl border p-4'>
                                    <ul className='flex flex-col gap-5'>
                                        {steps.map((s, index) => {
                                            const isActive = stepIndex === index
                                            const isCompleted = index < stepIndex

                                            return (
                                                <li
                                                    key={s.id}
                                                    onClick={() => setStepIndex(index)}
                                                    className={
                                                        `w-full h-[52px] rounded-[12px] flex items-center gap-3 px-3 border-l-4  hover:border-(--green4) hover:bg-[#EDFFF5] cursor-pointer transition-colors ${isActive ? 'bg-[#EDFFF5] border-[#22886B]' : 'border-transparent'} ${isCompleted ? 'bg-transparent border-l-4 border-transparent' : ''}`}>
                                                    <span
                                                        className={
                                                            `flex items-center justify-center w-[29px] h-[29px] rounded-full shrink-0 transition-colors bg-[#E2E8F0] border-[#E2E8F0] text-[#1C1C1CB2]
                      ${isActive ? 'currentClassAdd' : ''}
                      ${isCompleted && !isActive ? 'submitedClass' : ''}
                      `
                                                        }
                                                    >
                                                        {/* {isCompleted && !isActive ? '✓' : index + 1} */}
                                                        {index + 1}
                                                    </span>

                                                    <span className={
                                                        `text-[16px] transition-colors flex items-center justify-between w-full
                    ${isActive ? 'text-[#22886B] font-semibold' : ''}
                    ${isCompleted && !isActive ? 'text-[#047857]' : 'font-medium text-[#45556C]'}
                    `
                                                    }>
                                                        {s.label}
                                                        {isCompleted && !isActive ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 6L9 17L4 12" stroke="#22886B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg> : null}

                                                    </span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>

                                {/* Right Form */}


                                <div className='bg-white rounded-3xl border p-4'>

                                    {/* <div className='flex justify-between items-center mb-6'>
                                        <div className='flex items-center gap-3 cursor-pointer' >
                                            {stepIndex <= 0 ? <span onClick={() => dispatch({ type: 'setNewLead', payload: !newLead })}>
                                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 24L12 16L20 8" stroke="#0A0A0A" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                                            </span> : (
                                                <span >
                                                    <svg onClick={goBack} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 24L12 16L20 8" stroke="#0A0A0A" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                                                </span>
                                            )}

                                            <h1 className='text-xl font-semibold'>Add Lead</h1>
                                        </div>

                                        <div className='flex items-center gap-3'>

                                            <button
                                                style={{ paddingLeft: '30px', paddingRight: '30px' }}

                                                type="button" className='btn-light'>
                                                Cancel
                                            </button>

                                            <button
                                                style={{ paddingLeft: '30px', paddingRight: '30px' }}

                                                type="submit" className='btn-secondary'>
                                                Save
                                            </button>

                                            <button
                                                type="button"
                                                style={{ paddingLeft: '30px', paddingRight: '30px' }}
                                                onClick={goNext}
                                                className='px-8 btn-primary '
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </div> */}

                                    {/* Header Box */}
                                    <div className='bg-[#EDFFF5] w-full rounded-[12px] flex items-center gap-2 min-h-[52px] px-3'>
                                        <span className='text-[#22886B] font-semibold text-[16px]'>
                                            {stepIndex + 1}. {steps[stepIndex].name}
                                        </span>
                                    </div>

                                    {/* Step Content */}
                                    <div className='mt-5'>
                                        {currForm === 'applicationInformation' && <>
                                            <div className='grid grid-cols-5 gap-3'>
                                                <div className='col-span-1' >
                                                    <label htmlFor="" className='text-[14px] font-medium text-(--dark4)'>Request Effective Date</label>
                                                </div>
                                                <div className="w-full col-span-4">
                                                    <Popover open={openDate} onOpenChange={() => dispatch({ type: "setOpdenDate", payload: (!openDate) })}>
                                                        <PopoverTrigger className='w-full' asChild>
                                                            <Button
                                                                variant="outline"
                                                                id="date"
                                                                className="w-full justify-between font-normal bg-(--grey6) border border-[#BFCAD252] h-8 rounded-xl"
                                                            >
                                                                {dateVal ? dateVal.toLocaleDateString() : "Select date"}
                                                                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.25 5.41667H0.75M8.33333 0.75V3.08333M3.66667 0.75V3.08333M3.55 12.4167H8.45C9.43009 12.4167 9.92014 12.4167 10.2945 12.2259C10.6238 12.0581 10.8915 11.7904 11.0593 11.4611C11.25 11.0868 11.25 10.5968 11.25 9.61667V4.71667C11.25 3.73657 11.25 3.24653 11.0593 2.87218C10.8915 2.5429 10.6238 2.27518 10.2945 2.10741C9.92014 1.91667 9.43009 1.91667 8.45 1.91667H3.55C2.56991 1.91667 2.07986 1.91667 1.70552 2.10741C1.37623 2.27518 1.10852 2.5429 0.940739 2.87218C0.75 3.24653 0.75 3.73657 0.75 4.71667V9.61667C0.75 10.5968 0.75 11.0868 0.940739 11.4611C1.10852 11.7904 1.37623 12.0581 1.70552 12.2259C2.07986 12.4167 2.56991 12.4167 3.55 12.4167Z" stroke="#717182" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                                                            </Button>
                                                        </PopoverTrigger>
                                                        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                                            <Calendar
                                                                mode="single"
                                                                selected={dateVal}
                                                                captionLayout="dropdown"
                                                                onSelect={(date) => {
                                                                    dispatch({ type: 'setDateVal', payload: (date) })
                                                                    dispatch({ type: 'setOpdenDate', payload: false })
                                                                }}
                                                            />
                                                        </PopoverContent>
                                                    </Popover>
                                                </div>
                                                <div className='mt-5 col-span-1' >
                                                    <label htmlFor="" className='col-span-1 text-[14px] font-medium text-(--dark4) mt-3'>Request Effective Date</label>
                                                </div>
                                                <div className='w-full mt-5 col-span-4'>
                                                    <input type="text" name='requestEffectiveDate' className='form-control w-full' />
                                                </div>
                                                <div className='col-span-1'>
                                                    <label htmlFor="" className='col-span-1 text-[14px] font-medium text-(--dark4) mt-3'>MC Number</label>
                                                </div>
                                                <div className='w-full col-span-4'>
                                                    <input type="text" name='mcNo' className='form-control w-full' />
                                                </div>


                                                <div className='col-span-1'>
                                                    <label htmlFor="" className='col-span-1 text-[14px] font-medium text-(--dark4) mt-3'>Mailing Address</label>
                                                </div>
                                                <div className='w-full col-span-4'>
                                                    <input type="text" placeholder='Enter Address' name='mailAddress' className='form-control w-full' />
                                                    <div className='grid grid-cols-[3fr_1fr_1fr] gap-3 reactSingleSelect mt-3'>
                                                        <input type="text" name='City' placeholder='City' className='form-control w-full' />
                                                        <Select options={stateData} classNamePrefix="react-select" placeholder='State' />
                                                        <input type="number" name='zipCode' placeholder='ZIP Code' className='form-control w-full' />
                                                    </div>
                                                </div>
                                                <div className='col-span-1'>
                                                    <label htmlFor="" className='col-span-1 text-[14px] font-medium text-(--dark4) mt-3'>Country</label>
                                                </div>
                                                <div className='w-full col-span-4'>
                                                    <input type="text" name='country' placeholder='Enter Country' className='form-control w-full' />
                                                </div>

                                                <div className='col-span-1 mt-5'>
                                                    <label htmlFor="" className='col-span-1 text-[14px] font-medium text-(--dark4) mt-3'>Business Owner</label>
                                                </div>
                                                <div className='w-full col-span-4 mt-5'>
                                                    <input type="text" name='businessOwner' placeholder='Enter name' className='form-control w-full' />
                                                </div>
                                                <div className='col-span-1 '>
                                                    <label htmlFor="" className='col-span-1 text-[14px] font-medium text-(--dark4) mt-3'>Email Address</label>
                                                </div>
                                                <div className='w-full col-span-4 '>
                                                    <input type="email" name='emailAddress' placeholder='abc@example.com' className='form-control w-full' />
                                                </div>
                                                <div className='col-span-1 '>
                                                    <label htmlFor="" className='col-span-1 text-[14px] font-medium text-(--dark4) mt-3'>Phone Number</label>
                                                </div>
                                                <div className='w-full col-span-4 '>
                                                    <input type="number" name='number' placeholder='Enter number' className='form-control w-full' />
                                                </div>
                                                <div className='col-span-1 mt-5'>
                                                    <label htmlFor="" className='col-span-1 text-[14px] font-medium text-(--dark4) mt-3'>Business Type</label>
                                                </div>
                                                <div className='w-full col-span-4 mt-5 reactSingleSelect'>
                                                    <Select options={businessType} classNamePrefix="react-select" placeholder='Select' />
                                                </div>

                                                <div className='col-span-1' >
                                                    <label htmlFor="" className='text-[14px] font-medium text-(--dark4)'>Date of Authority</label>
                                                </div>
                                                <div className="w-full col-span-4">
                                                    <Popover open={dateAuthority} onOpenChange={() => dispatch({ type: "setDateAuthority", payload: (!dateAuthority) })}>
                                                        <PopoverTrigger className='w-full' asChild>
                                                            <Button
                                                                variant="outline"
                                                                id="date"
                                                                className="w-full justify-between font-normal bg-(--grey6) border border-[#BFCAD252] h-8 rounded-xl"
                                                            >
                                                                {dateAuthorityVal ? dateAuthorityVal.toLocaleDateString() : "Select date"}
                                                                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.25 5.41667H0.75M8.33333 0.75V3.08333M3.66667 0.75V3.08333M3.55 12.4167H8.45C9.43009 12.4167 9.92014 12.4167 10.2945 12.2259C10.6238 12.0581 10.8915 11.7904 11.0593 11.4611C11.25 11.0868 11.25 10.5968 11.25 9.61667V4.71667C11.25 3.73657 11.25 3.24653 11.0593 2.87218C10.8915 2.5429 10.6238 2.27518 10.2945 2.10741C9.92014 1.91667 9.43009 1.91667 8.45 1.91667H3.55C2.56991 1.91667 2.07986 1.91667 1.70552 2.10741C1.37623 2.27518 1.10852 2.5429 0.940739 2.87218C0.75 3.24653 0.75 3.73657 0.75 4.71667V9.61667C0.75 10.5968 0.75 11.0868 0.940739 11.4611C1.10852 11.7904 1.37623 12.0581 1.70552 12.2259C2.07986 12.4167 2.56991 12.4167 3.55 12.4167Z" stroke="#717182" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                                                            </Button>
                                                        </PopoverTrigger>
                                                        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                                            <Calendar
                                                                mode="single"
                                                                selected={dateAuthorityVal}
                                                                captionLayout="dropdown"
                                                                onSelect={(date) => {
                                                                    dispatch({ type: 'setDateAuthorityVal', payload: (date) })
                                                                    dispatch({ type: 'setDateAuthority', payload: false })
                                                                }}
                                                            />
                                                        </PopoverContent>
                                                    </Popover>
                                                </div>

                                                <div className='col-span-1 '>
                                                    <label htmlFor="" className='col-span-1 text-[16px] font-medium text-(--dark4) mt-3'>Carrier Authority</label>
                                                </div>
                                                <div className='w-full col-span-4  relative'>
                                                    <svg className='absolute right-0 top-0 -translate-x-3.5 translate-y-1.5' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_1_4857)"> <path d="M7.00002 9.33335V7.00002M7.00002 4.66669H7.00585M12.8334 7.00002C12.8334 10.2217 10.2217 12.8334 7.00002 12.8334C3.77836 12.8334 1.16669 10.2217 1.16669 7.00002C1.16669 3.77836 3.77836 1.16669 7.00002 1.16669C10.2217 1.16669 12.8334 3.77836 12.8334 7.00002Z" stroke="#F0B350" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g> <defs> <clipPath id="clip0_1_4857"> <rect width="14" height="14" fill="white" /> </clipPath> </defs> </svg>
                                                    <div className='flex items-center w-full '>
                                                        <NativeSelect className='h-[26px] bg-[#22886B0F] rounded-l-xl rounded-r-none border-r-0 py-0 shadow-none text-[#717182]'>
                                                            <NativeSelectOption value="">Select status</NativeSelectOption>
                                                            <NativeSelectOption value="DOT">DOT</NativeSelectOption>
                                                        </NativeSelect>
                                                        <input type="text" className='bg-[#FCFCFC] border border-[#BFCAD252] rounded-r-xl h-[26px] w-full pl-3 pr-8' />
                                                    </div>
                                                </div>
                                                <div className='col-span-1 '>
                                                    <label htmlFor="" className='col-span-1 text-[16px] font-medium text-(--dark4) mt-3'>Business Categories</label>
                                                </div>
                                                <div className='w-full col-span-4'>
                                                    <div className='flex items-center gap-3'>
                                                        <Checkbox
                                                            id="terms"
                                                            className="
        h-5 w-5 
        rounded-[6px] 
        border-2
        border-[#22886B] 
        data-[state=checked]:bg-white
        data-[state=checked]:text-[#22886B]
        data-[state=checked]:border-[#22886B]
      "
                                                        /> <span>1 business category selected</span>
                                                    </div>
                                                </div>


                                                <div className='col-span-1 mt-5'>
                                                    <label htmlFor="" className='col-span-1 text-[16px] font-medium text-(--dark4) mt-3'>Total Garage Locations:</label>
                                                </div>
                                                <div className='w-full col-span-4 mt-5 relative'>
                                                    <svg className='absolute right-0 top-0 -translate-x-3.5 translate-y-1.5' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_1_4857)"> <path d="M7.00002 9.33335V7.00002M7.00002 4.66669H7.00585M12.8334 7.00002C12.8334 10.2217 10.2217 12.8334 7.00002 12.8334C3.77836 12.8334 1.16669 10.2217 1.16669 7.00002C1.16669 3.77836 3.77836 1.16669 7.00002 1.16669C10.2217 1.16669 12.8334 3.77836 12.8334 7.00002Z" stroke="#F0B350" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g> <defs> <clipPath id="clip0_1_4857"> <rect width="14" height="14" fill="white" /> </clipPath> </defs> </svg>
                                                    <input type="number" name='totalGarage' placeholder='1' className='form-control w-full pl-3 pr-8' />
                                                </div>


                                                <div className='col-span-1'>
                                                    <label htmlFor="" className='col-span-1 text-[14px] font-medium text-(--dark4) mt-3'>Principal Garage Location</label>
                                                </div>
                                                <div className='w-full col-span-4'>
                                                    <input type="text" placeholder='Enter Address' name='garageAddress' className='form-control w-full' />
                                                    <div className='flex items-center justify-end gap-3 my-3'>
                                                        <Checkbox
                                                            id="address"
                                                            className="
        h-5 w-5 
        rounded-[6px] 
        border-2
        border-[#22886B] 
        data-[state=checked]:bg-white
        data-[state=checked]:text-[#22886B]
        data-[state=checked]:border-[#22886B]
      "
                                                        /> <span className='text-[#22886B] font-medium text-[14px]'>Same as Mailing Address</span>
                                                    </div>
                                                    <div className='grid grid-cols-[3fr_1fr_1fr] gap-3 reactSingleSelect mt-3'>
                                                        <input type="text" name='garageCity' placeholder='City' className='form-control w-full' />
                                                        <Select options={stateData} classNamePrefix="react-select" placeholder='State' />
                                                        <input type="number" name='garageZipCode' placeholder='ZIP Code' className='form-control w-full' />
                                                    </div>
                                                </div>

                                                <div className='col-span-1'>
                                                    <label htmlFor="" className='col-span-1 text-[14px] font-medium text-(--dark4) mt-3'>Country</label>
                                                </div>
                                                <div className='w-full col-span-4  '>
                                                    <input type="number" name='garageCountry' placeholder='Enter Country' className='form-control w-full' />
                                                </div>



                                                <div className='col-span-1 mt-5'>
                                                    <label htmlFor="" className='col-span-1 text-[16px] font-medium text-(--dark4) mt-3'>Total Owned Trailers</label>
                                                </div>
                                                <div className='w-full col-span-4 mt-5 relative'>
                                                    <svg className='absolute right-0 top-0 -translate-x-3.5 translate-y-1.5' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_1_4857)"> <path d="M7.00002 9.33335V7.00002M7.00002 4.66669H7.00585M12.8334 7.00002C12.8334 10.2217 10.2217 12.8334 7.00002 12.8334C3.77836 12.8334 1.16669 10.2217 1.16669 7.00002C1.16669 3.77836 3.77836 1.16669 7.00002 1.16669C10.2217 1.16669 12.8334 3.77836 12.8334 7.00002Z" stroke="#F0B350" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g> <defs> <clipPath id="clip0_1_4857"> <rect width="14" height="14" fill="white" /> </clipPath> </defs> </svg>
                                                    <input type="number" name='garageTrailers' placeholder='1' className='form-control w-full pl-3 pr-8' />
                                                </div>
                                                <div className='col-span-1'>
                                                    <label htmlFor="" className='col-span-1 text-[16px] font-medium text-(--dark4) mt-3'>Total Nonowned Trailers</label>
                                                </div>
                                                <div className='w-full col-span-4 relative'>
                                                    <svg className='absolute right-0 top-0 -translate-x-3.5 translate-y-1.5' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_1_4857)"> <path d="M7.00002 9.33335V7.00002M7.00002 4.66669H7.00585M12.8334 7.00002C12.8334 10.2217 10.2217 12.8334 7.00002 12.8334C3.77836 12.8334 1.16669 10.2217 1.16669 7.00002C1.16669 3.77836 3.77836 1.16669 7.00002 1.16669C10.2217 1.16669 12.8334 3.77836 12.8334 7.00002Z" stroke="#F0B350" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g> <defs> <clipPath id="clip0_1_4857"> <rect width="14" height="14" fill="white" /> </clipPath> </defs> </svg>
                                                    <input type="number" name='nonownedTrailers' placeholder='1' className='form-control w-full pl-3 pr-8' />
                                                </div>
                                                <div className='col-span-1'>
                                                    <label htmlFor="" className='col-span-1 text-[16px] font-medium text-(--dark4) mt-3'>Total Drivers</label>
                                                </div>
                                                <div className='w-full col-span-4 relative'>
                                                    <svg className='absolute right-0 top-0 -translate-x-3.5 translate-y-1.5' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_1_4857)"> <path d="M7.00002 9.33335V7.00002M7.00002 4.66669H7.00585M12.8334 7.00002C12.8334 10.2217 10.2217 12.8334 7.00002 12.8334C3.77836 12.8334 1.16669 10.2217 1.16669 7.00002C1.16669 3.77836 3.77836 1.16669 7.00002 1.16669C10.2217 1.16669 12.8334 3.77836 12.8334 7.00002Z" stroke="#F0B350" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g> <defs> <clipPath id="clip0_1_4857"> <rect width="14" height="14" fill="white" /> </clipPath> </defs> </svg>
                                                    <input type="number" name='totalDrivers' placeholder='1' className='form-control w-full pl-3 pr-8' />
                                                </div>
                                                <div className='col-span-1'>
                                                    <label htmlFor="" className='col-span-1 text-[16px] font-medium text-(--dark4) mt-3'>Total Trucks</label>
                                                </div>
                                                <div className='w-full col-span-4 relative'>
                                                    <svg className='absolute right-0 top-0 -translate-x-3.5 translate-y-1.5' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_1_4857)"> <path d="M7.00002 9.33335V7.00002M7.00002 4.66669H7.00585M12.8334 7.00002C12.8334 10.2217 10.2217 12.8334 7.00002 12.8334C3.77836 12.8334 1.16669 10.2217 1.16669 7.00002C1.16669 3.77836 3.77836 1.16669 7.00002 1.16669C10.2217 1.16669 12.8334 3.77836 12.8334 7.00002Z" stroke="#F0B350" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g> <defs> <clipPath id="clip0_1_4857"> <rect width="14" height="14" fill="white" /> </clipPath> </defs> </svg>
                                                    <input type="number" name='totalTrucks' placeholder='1' className='form-control w-full pl-3 pr-8' />
                                                </div>



                                            </div>
                                        </>}
                                        {currForm === 'coverage' && <>
                                            <div className='grid grid-cols-4 gap-5'>
                                                <label
                                                    htmlFor="nonTrucking"
                                                    onClick={() => handleToggle("nonTrucking")}
                                                    className='bg-(--yellow4) border border-[#CFCF5A] rounded-2xl min-h-[234px] justify-center items-center flex flex-col gap-2 cursor-pointer'
                                                >
                                                    <div className='bg-[url(/images/leads/coverage1.png)] bg-contain bg-center w-full h-20 bg-no-repeat'></div>

                                                    <div className='flex flex-col'>
                                                        <h1 className='text-[22px] font-medium text-(--dark4) text-center'>
                                                            Non-Trucking Liability
                                                        </h1>
                                                        <h2 className='text-(--dark4) font-medium text-[14px] text-center'>
                                                            Protects when not under dispatch
                                                        </h2>
                                                    </div>

                                                    <input
                                                        type="checkbox"
                                                        checked={nonTrucking}
                                                        onChange={() => handleToggle("nonTrucking")}
                                                        className="hidden"
                                                        id="nonTrucking"
                                                    />
                                                </label>

                                                <label htmlFor="physicalDamage" onClick={() => handleToggle("physicalDamage")} className={`bg-[#EAF9FF] border border-[#67DAEE] rounded-2xl min-h-[234px] justify-center items-center flex flex-col gap-2 cursor-pointer `}>
                                                    <div className='bg-[url(/images/leads/coverage2.png)] bg-contain bg-center w-full h-20 bg-no-repeat'></div>


                                                    <div className='flex flex-col '>
                                                        <h1 className='text-[22px] font-medium text-(--dark4) text-center'>
                                                            Physical Damage
                                                        </h1>
                                                        <h2 className='text-(--dark4) font-medium text-[14px] text-center '>
                                                            Vehicle damage protection
                                                        </h2>
                                                    </div>
                                                    <input type="checkbox"
                                                        checked={physicalDamage}
                                                        onChange={() => handleToggle("physicalDamage")}
                                                        className='hidden' id='physicalDamage' />
                                                </label>
                                                <label htmlFor="autoLiability" onClick={() => handleToggle("autoLiability")} className={`bg-[#F2FFE5] border-[#C2E86A] rounded-2xl min-h-[234px] justify-center items-center flex flex-col gap-2 cursor-pointer ${autoLiability ? 'border-2' : 'border'} `}>
                                                    <div className='bg-[url(/images/leads/coverage3.png)] bg-contain bg-center w-full h-20 bg-no-repeat'></div>


                                                    <div className='flex flex-col '>
                                                        <h1 className='text-[22px] font-medium text-(--dark4) text-center'>
                                                            Auto Liability
                                                        </h1>
                                                        <h2 className='text-(--dark4) font-medium text-[14px]  text-center'>
                                                            Primary liability coverage
                                                        </h2>
                                                    </div>
                                                    <input type="checkbox"
                                                        checked={autoLiability}
                                                        onChange={() => handleToggle("autoLiability")}
                                                        className='hidden' id='autoLiability' />
                                                </label>
                                                <label htmlFor="workCompensation" onClick={() => handleToggle("workCompensation")} className={`bg-[#F8EAFF] border border-[#DD88FF] rounded-2xl min-h-[234px] justify-center items-center flex flex-col gap-2 cursor-pointer `}>
                                                    <div className='bg-[url(/images/leads/coverage4.png)]  bg-center w-full h-20 bg-contain bg-no-repeat'></div>


                                                    <div className='flex flex-col '>
                                                        <h1 className='text-[22px] font-medium text-(--dark4) text-center'>
                                                            Workers Compensation
                                                        </h1>
                                                        <h2 className='text-(--dark4) font-medium text-[14px] text-center'>
                                                            Employee injury coverage
                                                        </h2>
                                                    </div>
                                                    <input type="checkbox"
                                                        checked={workCompensation}
                                                        onChange={() => handleToggle("workCompensation")}
                                                        className='hidden' id='workCompensation' />
                                                </label>
                                                <label htmlFor="generalLiability" onClick={() => handleToggle("generalLiability")} className={`bg-[#FFF7EA] border border-[#F0B350] rounded-2xl min-h-[234px] justify-center items-center flex flex-col gap-2 cursor-pointer `}>
                                                    <div className='bg-[url(/images/leads/coverage5.png)]  bg-center w-full h-20 bg-contain bg-no-repeat'></div>


                                                    <div className='flex flex-col '>
                                                        <h1 className='text-[22px] font-medium text-(--dark4) text-center'>
                                                            General Liability
                                                        </h1>
                                                        <h2 className='text-(--dark4) font-medium text-[14px] text-center'>
                                                            Business liability protection
                                                        </h2>
                                                    </div>
                                                    <input type="checkbox"
                                                        checked={generalLiability}
                                                        onChange={() => handleToggle("generalLiability")}
                                                        className='hidden' id='generalLiability' />
                                                </label>
                                                <label htmlFor="motorTruckCargo" onClick={() => handleToggle("motorTruckCargo")} className={`bg-[#FFF8EF] border border-[#B29367] rounded-2xl min-h-[234px] justify-center items-center flex flex-col gap-2 cursor-pointer `}>
                                                    <div className='bg-[url(/images/leads/coverage6.png)]  bg-center w-full h-20 bg-contain bg-no-repeat'></div>


                                                    <div className='flex flex-col '>
                                                        <h1 className='text-[22px] font-medium text-(--dark4) text-center'>
                                                            Motor Truck Cargo
                                                        </h1>
                                                        <h2 className='text-(--dark4) font-medium text-[14px] text-center'>
                                                            Cargo in transit coverage
                                                        </h2>
                                                    </div>
                                                    <input type="checkbox"
                                                        checked={motorTruckCargo}
                                                        onChange={() => handleToggle("motorTruckCargo")}
                                                        className='hidden' id='motorTruckCargo' />
                                                </label>
                                                <label htmlFor="occupationalAccident" onClick={() => handleToggle("occupationalAccident")} className={`bg-[#F4F7FF] border border-[#899DFF] rounded-2xl min-h-[234px] justify-center items-center flex flex-col gap-2 cursor-pointer `}>
                                                    <div className='bg-[url(/images/leads/coverage7.png)]  bg-center w-full h-20 bg-contain bg-no-repeat'></div>


                                                    <div className='flex flex-col '>
                                                        <h1 className='text-[22px] font-medium text-(--dark4) text-center'>
                                                            Occupational Accident
                                                        </h1>
                                                        <h2 className='text-(--dark4) font-medium text-[14px] text-center'>
                                                            Driver injury protection
                                                        </h2>
                                                    </div>
                                                    <input type="checkbox"
                                                        checked={occupationalAccident}
                                                        onChange={() => handleToggle("occupationalAccident")}
                                                        className='hidden' id='occupationalAccident' />
                                                </label>
                                                <label htmlFor="trailerInterchange" onClick={() => handleToggle("trailerInterchange")} className={`bg-[#FFF0ED] border border-[#FF5A32] rounded-2xl min-h-[234px] justify-center items-center flex flex-col gap-2 cursor-pointer `}>
                                                    <div className='bg-[url(/images/leads/coverage8.png)]  bg-center w-full h-20 bg-contain bg-no-repeat'></div>


                                                    <div className='flex flex-col '>
                                                        <h1 className='text-[22px] font-medium text-(--dark4) text-center'>
                                                            Trailer Interchange
                                                        </h1>
                                                        <h2 className='text-(--dark4) font-medium text-[14px] text-center'>
                                                            Non-owned trailer coverage
                                                        </h2>
                                                    </div>
                                                    <input type="checkbox"
                                                        checked={trailerInterchange}
                                                        onChange={() => handleToggle("trailerInterchange")}
                                                        className='hidden' id='trailerInterchange' />
                                                </label>
                                            </div>


                                            <div className='bg-white border border-(--light2) p-4 rounded-3xl mt-4'>

                                                <h2 className='text-(--dark4) font-semibold text-[18px]'>
                                                    Coverage Limits
                                                </h2>


                                                {nonTrucking && <div className='border border-(--light2) rounded-3xl bg-white px-4 py-8 flex items-start gap-3 mt-4'>
                                                    <span>
                                                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_2_13259)"> <path fillRule="evenodd" clipRule="evenodd" d="M2.97949 14.5488C-0.237311 12.9141 0.131829 11.0918 3.36327 11.2822L4.08691 12.6387L5.57812 8.00098C6.16406 6.17578 7.13964 4.52051 9.05273 4.52051H28.125C30.0381 4.52051 31.1396 6.14355 31.6025 7.99805L32.7217 12.4951L33.3662 11.2822C36.6885 11.0889 36.9844 13.0195 33.4687 14.6865L34.04 15.5625C36.3516 17.9385 36.1348 22.1396 35.7744 28.0078V30.3926C35.7744 30.9902 35.2851 31.4795 34.6875 31.4795H30.0498C29.4521 31.4795 28.9629 30.9902 28.9629 30.3926V29.0625H7.04296V30.3926C7.04296 30.9902 6.5537 31.4795 5.95605 31.4795H1.31835C0.720697 31.4795 0.231439 30.9902 0.231439 30.3926V27.4307C0.231439 27.3721 0.237298 27.3164 0.243158 27.2607C-0.108405 22.7578 -0.603522 16.8691 2.97949 14.5488ZM8.90038 21.7178L4.78124 21.1992C3.80859 21.0908 3.54784 21.501 3.8789 22.3389L4.32421 23.4199C4.46777 23.6982 4.6582 23.9004 4.88085 24.041C5.14159 24.2021 5.45507 24.2812 5.8037 24.2959L9.47753 24.3252C10.3652 24.3223 10.749 23.9678 10.4707 23.1533C10.2422 22.3887 9.7207 21.9082 8.90038 21.7178ZM15.9316 19.9863H20.1504C20.3994 19.9863 20.6045 20.1914 20.6045 20.4404C20.6045 20.6895 20.3994 20.8945 20.1504 20.8945H15.9316C15.6826 20.8945 15.4775 20.6895 15.4775 20.4404C15.4746 20.1914 15.6797 19.9863 15.9316 19.9863ZM26.3555 25.9512H30.5742C30.8232 25.9512 31.0283 26.1562 31.0283 26.4053C31.0283 26.6543 30.8232 26.8594 30.5742 26.8594H26.3555C26.1064 26.8594 25.9014 26.6543 25.9014 26.4053C25.9014 26.1562 26.1035 25.9512 26.3555 25.9512ZM27.0996 21.7178L31.2187 21.1992C32.1914 21.0908 32.4521 21.501 32.1211 22.3389L31.6758 23.4199C31.5322 23.6982 31.3418 23.9004 31.1191 24.041C30.8584 24.2021 30.5449 24.2812 30.1963 24.2959L26.5225 24.3252C25.6348 24.3223 25.251 23.9678 25.5293 23.1533C25.7578 22.3887 26.2793 21.9082 27.0996 21.7178ZM5.39355 25.9512H9.6123C9.86132 25.9512 10.0664 26.1562 10.0664 26.4053C10.0664 26.6543 9.86132 26.8594 9.6123 26.8594H5.39355C5.14452 26.8594 4.93945 26.6543 4.93945 26.4053C4.93945 26.1562 5.14452 25.9512 5.39355 25.9512ZM5.63378 13.6611H31.0693L29.9473 8.99707C29.6396 7.57617 28.7549 6.3457 27.2959 6.3457H9.68554C8.22949 6.3457 7.48242 7.6084 7.03417 8.99707L5.63378 13.6611Z" fill="#ACE035" /> </g> <defs> <clipPath id="clip0_2_13259"> <rect width="36" height="36" fill="white" /> </clipPath> </defs> </svg>
                                                    </span>
                                                    <div className='w-full xl:w-[50%] '>
                                                        <h3 className='text-(--dark4) font-medium text-[18px]'>
                                                            Non -Trucking Liability
                                                        </h3>

                                                        <div className='mt-3'>
                                                            <Select options={pricingData} classNamePrefix="react-select w-full" placeholder='Select Price' />
                                                        </div>

                                                    </div>
                                                </div>}
                                                {physicalDamage && <div className='border border-(--light2) rounded-3xl bg-white px-4 py-8 flex items-start gap-3 mt-4'>
                                                    <span>
                                                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M30.24 20.88L27.6 15.6C27.3733 15.2313 27.0555 14.9273 26.6772 14.7171C26.2989 14.5069 25.8728 14.3977 25.44 14.4H10.56C10.1272 14.3977 9.70117 14.5069 9.32285 14.7171C8.94453 14.9273 8.62671 15.2313 8.40002 15.6L5.76002 20.88L2.78402 23.6448C2.66308 23.757 2.56657 23.8929 2.5005 24.044C2.43443 24.1951 2.40022 24.3583 2.40002 24.5232V34.8C2.40002 35.1183 2.52645 35.4235 2.7515 35.6485C2.97654 35.8736 3.28176 36 3.60002 36H8.40002C8.88002 36 9.60002 35.52 9.60002 35.04V33.6H26.4V34.8C26.4 35.28 26.88 36 27.36 36H32.4C32.7183 36 33.0235 35.8736 33.2486 35.6485C33.4736 35.4235 33.6 35.1183 33.6 34.8V24.5232C33.5998 24.3583 33.5656 24.1951 33.4995 24.044C33.4335 23.8929 33.337 23.757 33.216 23.6448L30.24 20.88ZM10.8 16.8H25.2L27.6 21.6H8.40002L10.8 16.8ZM12 27.84C12 28.32 11.28 28.8 10.8 28.8H5.76002C5.28002 28.8 4.80002 28.08 4.80002 27.6V24.96C5.04002 24.24 5.52002 23.76 6.24002 24L11.04 24.96C11.52 24.96 12 25.68 12 26.16V27.84ZM31.2 27.6C31.2 28.08 30.72 28.8 30.24 28.8H25.2C24.72 28.8 24 28.32 24 27.84V26.16C24 25.68 24.48 24.96 24.96 24.96L29.76 24C30.48 23.76 30.96 24.24 31.2 24.96V27.6ZM19.2 9.6H16.8L14.4 0H21.6L19.2 9.6ZM2.64002 4.32L8.88002 0.72L11.52 10.32L9.60002 11.28L2.64002 4.32ZM27.12 0.72L33.36 4.32L26.4 11.52L24.24 10.32L27.12 0.72Z" fill="#39CCE5" /> </svg>
                                                    </span>
                                                    <div className='w-full xl:w-[50%] '>
                                                        <h3 className='text-(--dark4) font-medium text-[18px]'>
                                                            Physical Damage
                                                        </h3>

                                                        <div className='mt-3'>
                                                            <Select options={pricingData} classNamePrefix="react-select w-full" placeholder='Select Price' />
                                                        </div>

                                                    </div>
                                                </div>}
                                                {autoLiability && <div className='border border-(--light2) rounded-3xl bg-white px-4 py-8 flex items-start gap-3 mt-4'>
                                                    <span>

                                                    </span>
                                                    <div className='w-full xl:w-[50%] '>
                                                        <h3 className='text-(--dark4) font-medium text-[18px]'>
                                                            Auto Liability
                                                        </h3>

                                                        <div className='mt-3'>
                                                            <Select options={pricingData} classNamePrefix="react-select w-full" placeholder='Select Price' />
                                                        </div>

                                                    </div>
                                                </div>}

                                                {workCompensation && <div className='border border-(--light2) rounded-3xl bg-white px-4 py-8 flex items-start gap-3 mt-4'>
                                                    <span>

                                                    </span>
                                                    <div className='w-full xl:w-[50%] '>
                                                        <h3 className='text-(--dark4) font-medium text-[18px]'>
                                                            Workers Compensation
                                                        </h3>

                                                        <div className='mt-3'>
                                                            <Select options={pricingData} classNamePrefix="react-select w-full" placeholder='Select Price' />
                                                        </div>

                                                    </div>
                                                </div>}
                                                {generalLiability && <div className='border border-(--light2) rounded-3xl bg-white px-4 py-8 flex items-start gap-3 mt-4'>
                                                    <span>

                                                    </span>
                                                    <div className='w-full xl:w-[50%] '>
                                                        <h3 className='text-(--dark4) font-medium text-[18px]'>
                                                            General Liability
                                                        </h3>

                                                        <div className='mt-3'>
                                                            <Select options={pricingData} classNamePrefix="react-select w-full" placeholder='Select Price' />
                                                        </div>

                                                    </div>
                                                </div>}
                                                {motorTruckCargo && <div className='border border-(--light2) rounded-3xl bg-white px-4 py-8 flex items-start gap-3 mt-4'>
                                                    <span>

                                                    </span>
                                                    <div className='w-full xl:w-[50%] '>
                                                        <h3 className='text-(--dark4) font-medium text-[18px]'>
                                                            Motor Truck Cargo
                                                        </h3>

                                                        <div className='mt-3'>
                                                            <Select options={pricingData} classNamePrefix="react-select w-full" placeholder='Select Price' />
                                                        </div>

                                                    </div>
                                                </div>}
                                                {occupationalAccident && <div className='border border-(--light2) rounded-3xl bg-white px-4 py-8 flex items-start gap-3 mt-4'>
                                                    <span>

                                                    </span>
                                                    <div className='w-full xl:w-[50%] '>
                                                        <h3 className='text-(--dark4) font-medium text-[18px]'>
                                                            Occupational Accident
                                                        </h3>

                                                        <div className='mt-3'>
                                                            <Select options={pricingData} classNamePrefix="react-select w-full" placeholder='Select Price' />
                                                        </div>

                                                    </div>
                                                </div>}
                                                {trailerInterchange && <div className='border border-(--light2) rounded-3xl bg-white px-4 py-8 flex items-start gap-3 mt-4'>
                                                    <span>

                                                    </span>
                                                    <div className='w-full xl:w-[50%] '>
                                                        <h3 className='text-(--dark4) font-medium text-[18px]'>
                                                            Trailer Interchange
                                                        </h3>

                                                        <div className='mt-3'>
                                                            <Select options={pricingData} classNamePrefix="react-select w-full" placeholder='Select Price' />
                                                        </div>

                                                    </div>
                                                </div>}

                                            </div>

                                            {/* <h1 className='text-black'>
                                                {!checkboxVal ? 'false' : 'true'}
                                            </h1> */}
                                        </>}
                                        {currForm === 'equipment' && <>

                                            <label htmlFor="" className='text-[14px] font-medium text-(--dark4) '>
                                                Power Units:
                                            </label>
                                            <Separator className='mt-3 bg-(--green1)' />
                                            <div className='relative flex justify-end mt-4'>
                                                <svg className='absolute translate-y-6.5 -translate-x-3' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.25 12.25L8.75006 8.75M9.91667 5.83333C9.91667 8.0885 8.0885 9.91667 5.83333 9.91667C3.57817 9.91667 1.75 8.0885 1.75 5.83333C1.75 3.57817 3.57817 1.75 5.83333 1.75C8.0885 1.75 9.91667 3.57817 9.91667 5.83333Z" stroke="#717182" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                                                <input
                                                    type="text"
                                                    value={powerUnitForm.vin}
                                                    onChange={(e) => dispatch({ type: 'setPowerUnitField', field: 'vin', value: e.target.value })}
                                                    className='w-full bg-(--grey6) border border-[#BFCAD252] rounded-xl pl-3 pr-7 mt-4 h-[35px]'
                                                    placeholder='VIN Number'
                                                />
                                            </div>

                                            <div className='grid grid-cols-1 md:grid-col-2 xl:grid-cols-6 gap-4 mt-4'>
                                                <div className='leadReactSelectSetting' >
                                                    <Select
                                                        options={makeData}
                                                        classNamePrefix="react-select"
                                                        placeholder='Make'
                                                        value={powerUnitForm.make ? makeData.find(m => m.value === powerUnitForm.make) : null}
                                                        onChange={(opt) => dispatch({ type: 'setPowerUnitField', field: 'make', value: opt?.value || '' })}
                                                    />

                                                </div>
                                                <div className='leadReactSelectSetting'>
                                                    <Select
                                                        options={modelData}
                                                        classNamePrefix="react-select"
                                                        placeholder='Model'
                                                        value={powerUnitForm.model ? modelData.find(m => m.value === powerUnitForm.model) : null}
                                                        onChange={(opt) => dispatch({ type: 'setPowerUnitField', field: 'model', value: opt?.value || '' })}
                                                    />

                                                </div>
                                                <div className='leadReactSelectSetting'>
                                                    <Select
                                                        options={classData}
                                                        classNamePrefix="react-select"
                                                        placeholder='GVW Class'
                                                        value={powerUnitForm.class ? classData.find(m => m.value === powerUnitForm.class) : null}
                                                        onChange={(opt) => dispatch({ type: 'setPowerUnitField', field: 'class', value: opt?.value || '' })}
                                                    />

                                                </div>
                                                <div className='leadReactSelectSetting'>
                                                    <Select
                                                        options={truckType}
                                                        classNamePrefix="react-select"
                                                        placeholder='Truck Type'
                                                        value={powerUnitForm.truckType ? truckType.find(m => m.value === powerUnitForm.truckType) : null}
                                                        onChange={(opt) => dispatch({ type: 'setPowerUnitField', field: 'truckType', value: opt?.value || '' })}
                                                    />
                                                </div>
                                                <div className='leadReactSelectSetting'>
                                                    <Select
                                                        options={zipCode}
                                                        classNamePrefix="react-select"
                                                        placeholder='ZIP Code'
                                                        value={powerUnitForm.zipCode ? zipCode.find(m => m.value === powerUnitForm.zipCode) : null}
                                                        onChange={(opt) => dispatch({ type: 'setPowerUnitField', field: 'zipCode', value: opt?.value || '' })}
                                                    />
                                                </div>
                                                <div >
                                                    <input
                                                        type="text"
                                                        value={powerUnitForm.year}
                                                        onChange={(e) => dispatch({ type: 'setPowerUnitField', field: 'year', value: e.target.value })}
                                                        className='w-full bg-(--grey6) border border-[#BFCAD252] rounded-xl px-3 h-[35px]'
                                                        placeholder='yyyy'
                                                    />
                                                </div>
                                            </div>
                                            <div className='flex justify-end mt-6'>
                                                <button
                                                    type='button'
                                                    onClick={() => dispatch({ type: 'addPowerUnit' })}
                                                    className='px-8 btn-primary'
                                                >
                                                    Add
                                                </button>
                                            </div>

                                            <div className='mt-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>

                                                {
                                                    powerUnitData.map((item, index) => (
                                                        <div key={index} className='bg-(--grey4) shadow-[0_0_7.6px_0_#D9D9D9B2] rounded-xl p-4 flex flex-col gap-3'>
                                                            <div className='flex items-center justify-between'>
                                                                <h2 className='text-(--dark4) text-[16px] font-normal'><span className='font-semibold'>VIN:</span> {item.vin}</h2>
                                                                <div className='flex items-center gap-2'>
                                                                    <svg width="24" className='cursor-pointer' height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2.87604 18.1156C2.92198 17.7021 2.94496 17.4954 3.00751 17.3022C3.06301 17.1307 3.14143 16.9676 3.24064 16.8171C3.35246 16.6475 3.49955 16.5005 3.79373 16.2063L17 3C18.1046 1.89543 19.8955 1.89543 21 3C22.1046 4.10457 22.1046 5.89543 21 7L7.79373 20.2063C7.49955 20.5005 7.35245 20.6475 7.18289 20.7594C7.03245 20.8586 6.86929 20.937 6.69785 20.9925C6.5046 21.055 6.29786 21.078 5.88437 21.124L2.5 21.5L2.87604 18.1156Z" fill="#22886B" /> <path d="M18 10L14 6M2.5 21.5L5.88437 21.124C6.29786 21.078 6.5046 21.055 6.69785 20.9925C6.86929 20.937 7.03245 20.8586 7.18289 20.7594C7.35245 20.6475 7.49955 20.5005 7.79373 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8955 1.89543 18.1046 1.89543 17 3L3.79373 16.2063C3.49955 16.5005 3.35246 16.6475 3.24064 16.8171C3.14143 16.9676 3.06301 17.1307 3.00751 17.3022C2.94496 17.4954 2.92198 17.7021 2.87604 18.1156L2.5 21.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                                                                    <svg width="24" className='cursor-pointer' height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3 6H21H3Z" fill="#22886B" /> <path d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6" stroke="#ED3333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                                                                </div>
                                                            </div>
                                                            <div className='flex items-center gap-6 bg-white rounded-[12px] p-3'>
                                                                <span className='text-[#0A0A0AB2] text-[14px] font-semibold'>Year</span>
                                                                <span className='text-(--grey7) text-[14px] font-medium'>
                                                                    {item.year}
                                                                </span>

                                                            </div>
                                                            <div className='flex items-center gap-6 bg-white rounded-[12px] p-3'>
                                                                <span className='text-[#0A0A0AB2] text-[14px] font-semibold'>Model</span>
                                                                <span className='text-(--grey7) text-[14px] font-medium'>
                                                                    {item.model}
                                                                </span>

                                                            </div>
                                                            <div className='flex items-center gap-6 bg-white rounded-[12px] p-3'>
                                                                <span className='text-[#0A0A0AB2] text-[14px] font-semibold'>Make</span>
                                                                <span className='text-(--grey7) text-[14px] font-medium'>
                                                                    {item.make}
                                                                </span>

                                                            </div>
                                                            <div className='flex items-center gap-6 bg-white rounded-[12px] p-3'>
                                                                <span className='text-[#0A0A0AB2] text-[14px] font-semibold'>GVW Class</span>
                                                                <span className='text-(--grey7) text-[14px] font-medium'>
                                                                    {item.class}
                                                                </span>

                                                            </div>
                                                            <div className='flex items-center gap-6 bg-white rounded-[12px] p-3'>
                                                                <span className='text-[#0A0A0AB2] text-[14px] font-semibold'>Truck Type</span>
                                                                <span className='text-(--grey7) text-[14px] font-medium'>
                                                                    {item.truckType}
                                                                </span>

                                                            </div>
                                                            <div className='flex items-center gap-6 bg-white rounded-[12px] p-3'>
                                                                <span className='text-[#0A0A0AB2] text-[14px] font-semibold'>ZIP Code</span>
                                                                <span className='text-(--grey7) text-[14px] font-medium'>
                                                                    {item.zipCode}
                                                                </span>

                                                            </div>

                                                        </div>
                                                    ))
                                                }


                                            </div>

                                            <div className='mt-6 bg-[#EDFFF5] min-h-12 rounded-[12px] text-(--green1) font-semibold text-[16px] flex items-center px-4 '>
                                                Equipment Scheduled: Trailer Information

                                            </div>

                                            <div className='mt-4'>


                                                <div className='grid grid-cols-5 gap-4 mt-4 items-center'>
                                                    <div className='relative flex justify-end col-span-3'>
                                                        <svg className='absolute translate-y-6.5 -translate-x-3' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.25 12.25L8.75006 8.75M9.91667 5.83333C9.91667 8.0885 8.0885 9.91667 5.83333 9.91667C3.57817 9.91667 1.75 8.0885 1.75 5.83333C1.75 3.57817 3.57817 1.75 5.83333 1.75C8.0885 1.75 9.91667 3.57817 9.91667 5.83333Z" stroke="#717182" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                                                        <input type="number" className='w-full bg-(--grey6) border border-[#BFCAD252] rounded-xl pl-3 pr-7 mt-4 h-[35px]' placeholder='VIN Number' />
                                                    </div>

                                                    <div className='flex items-center gap-3 justify-center'>
                                                        <div className='w-full col-span-4'>
                                                            <div className='flex items-center gap-3'>
                                                                <Checkbox
                                                                    id="nonTrailer"
                                                                    className="
        h-5 w-5 
        rounded-[6px] 
        border-2
        border-[#22886B] 
        data-[state=checked]:bg-white
        data-[state=checked]:text-[#22886B]
        data-[state=checked]:border-[#22886B]
      "
                                                                /> <span className='text-[14px] font-semibold text-[#656A73]'> Non-Owned Trailer</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='leadReactSelectSetting' >
                                                        <Select options={makeData} classNamePrefix="react-select" placeholder='Make' />

                                                    </div>
                                                    <div >
                                                        <input type="text" className='w-full bg-(--grey6) border border-[#BFCAD252] rounded-xl px-3 h-[35px]' placeholder='yyyy' />
                                                    </div>
                                                    <div className='leadReactSelectSetting' >
                                                        <Select options={modelData} classNamePrefix="react-select" placeholder='Model' />

                                                    </div>
                                                    <div className='leadReactSelectSetting' >
                                                        <Select options={makeData} classNamePrefix="react-select" placeholder='Make' />

                                                    </div>
                                                    <div className='leadReactSelectSetting' >
                                                        <Select options={pricingData} classNamePrefix="react-select" placeholder='Value' />

                                                    </div>
                                                    <div className='leadReactSelectSetting' >
                                                        <Select options={zipCode} classNamePrefix="react-select" placeholder='zip Code' />

                                                    </div>



                                                </div>

                                                <div className='flex justify-end mt-6'>
                                                    <button className='px-8 btn-primary'>Add</button>
                                                </div>


                                                <label htmlFor="" className='text-[14px] font-medium text-(--dark4) '>
                                                    Trailers
                                                </label>
                                                <Separator className='mt-3 bg-(--green1)' />

                                                <div className='mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>

                                                    {
                                                        trailersData.map((item, index) => (
                                                            <div key={index} className='bg-(--grey4) shadow-[0_0_7.6px_0_#D9D9D9B2] rounded-xl p-4 flex flex-col gap-3'>
                                                                <div className='flex items-center justify-between'>
                                                                    <h2 className='text-(--dark4) text-[16px] font-normal'><span className='font-semibold'>VIN:</span> {item.vin}</h2>
                                                                    <div className='flex items-center gap-2'>
                                                                        <svg width="24" className='cursor-pointer' height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2.87604 18.1156C2.92198 17.7021 2.94496 17.4954 3.00751 17.3022C3.06301 17.1307 3.14143 16.9676 3.24064 16.8171C3.35246 16.6475 3.49955 16.5005 3.79373 16.2063L17 3C18.1046 1.89543 19.8955 1.89543 21 3C22.1046 4.10457 22.1046 5.89543 21 7L7.79373 20.2063C7.49955 20.5005 7.35245 20.6475 7.18289 20.7594C7.03245 20.8586 6.86929 20.937 6.69785 20.9925C6.5046 21.055 6.29786 21.078 5.88437 21.124L2.5 21.5L2.87604 18.1156Z" fill="#22886B" /> <path d="M18 10L14 6M2.5 21.5L5.88437 21.124C6.29786 21.078 6.5046 21.055 6.69785 20.9925C6.86929 20.937 7.03245 20.8586 7.18289 20.7594C7.35245 20.6475 7.49955 20.5005 7.79373 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8955 1.89543 18.1046 1.89543 17 3L3.79373 16.2063C3.49955 16.5005 3.35246 16.6475 3.24064 16.8171C3.14143 16.9676 3.06301 17.1307 3.00751 17.3022C2.94496 17.4954 2.92198 17.7021 2.87604 18.1156L2.5 21.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                                                                        <svg width="24" className='cursor-pointer' height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3 6H21H3Z" fill="#22886B" /> <path d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6" stroke="#ED3333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                                                                    </div>
                                                                </div>
                                                                <div className='flex items-center gap-6 bg-white rounded-[12px] p-3'>
                                                                    <span className='text-[#0A0A0AB2] text-[14px] font-semibold'> Non-Owned Trailer</span>
                                                                    <span className='text-(--grey7) text-[14px] font-medium'>
                                                                        {item.ownedTrailer}
                                                                    </span>

                                                                </div>
                                                                <div className='flex items-center gap-6 bg-white rounded-[12px] p-3'>
                                                                    <span className='text-[#0A0A0AB2] text-[14px] font-semibold'>Year</span>
                                                                    <span className='text-(--grey7) text-[14px] font-medium'>
                                                                        {item.year}
                                                                    </span>

                                                                </div>
                                                                <div className='flex items-center gap-6 bg-white rounded-[12px] p-3'>
                                                                    <span className='text-[#0A0A0AB2] text-[14px] font-semibold'>Make</span>
                                                                    <span className='text-(--grey7) text-[14px] font-medium'>
                                                                        {item.make}
                                                                    </span>

                                                                </div>
                                                                <div className='flex items-center gap-6 bg-white rounded-[12px] p-3'>
                                                                    <span className='text-[#0A0A0AB2] text-[14px] font-semibold'>Model</span>
                                                                    <span className='text-(--grey7) text-[14px] font-medium'>
                                                                        {item.model}
                                                                    </span>

                                                                </div>
                                                                <div className='flex items-center gap-6 bg-white rounded-[12px] p-3'>
                                                                    <span className='text-[#0A0A0AB2] text-[14px] font-semibold'>Value</span>
                                                                    <span className='text-(--grey7) text-[14px] font-medium'>
                                                                        {item.value}
                                                                    </span>

                                                                </div>
                                                                <div className='flex items-center gap-6 bg-white rounded-[12px] p-3'>
                                                                    <span className='text-[#0A0A0AB2] text-[14px] font-semibold'>ZIP Code</span>
                                                                    <span className='text-(--grey7) text-[14px] font-medium'>
                                                                        {item.zipCode}
                                                                    </span>

                                                                </div>

                                                            </div>
                                                        ))
                                                    }


                                                </div>

                                                <div className='mt-8 bg-[#FFFFDA] border border-l-4 border-[#FACA7B] p-3 rounded-[12px]'>
                                                    <h1 className='text-(--dark1) text-[14px] font-semibold'>
                                                        Important Note:
                                                    </h1>
                                                    <p className='text-(--dark1) text-[14px] font-medium'>
                                                        The rate indication will not be formalized until all serial numbers (VIN) are entered and verified. All rate indications are subject to underwriting review and final rate approval.

                                                    </p>
                                                </div>
                                            </div>

                                        </>}
                                        {currForm === 'drivers' && <>


                                            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5'>
                                                <div>
                                                    <input type="text" name='firstName' className='w-full bg-(--grey6) border border-[#BFCAD252] rounded-[8px] px-3 h-[35px]' placeholder='First Name' />
                                                </div>
                                                <div>
                                                    <input type="text" name='lastName' className='w-full bg-(--grey6) border border-[#BFCAD252] rounded-[8px] px-3 h-[35px]' placeholder='Last Name' />
                                                </div>

                                                <div>
                                                    <Popover open={openDate} onOpenChange={() => dispatch({ type: "setOpdenDate", payload: (!openDate) })}>
                                                        <PopoverTrigger className='w-full' asChild>
                                                            <Button
                                                                variant="outline"
                                                                id="date"
                                                                className="w-full justify-between font-normal bg-(--grey6) border border-[#BFCAD252] h-[35px] rounded-[8px] text-[#656A73]"
                                                                placeholder="DOB"
                                                            >
                                                                {dateVal ? dateVal.toLocaleDateString() : "Select date"}
                                                                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.25 5.41667H0.75M8.33333 0.75V3.08333M3.66667 0.75V3.08333M3.55 12.4167H8.45C9.43009 12.4167 9.92014 12.4167 10.2945 12.2259C10.6238 12.0581 10.8915 11.7904 11.0593 11.4611C11.25 11.0868 11.25 10.5968 11.25 9.61667V4.71667C11.25 3.73657 11.25 3.24653 11.0593 2.87218C10.8915 2.5429 10.6238 2.27518 10.2945 2.10741C9.92014 1.91667 9.43009 1.91667 8.45 1.91667H3.55C2.56991 1.91667 2.07986 1.91667 1.70552 2.10741C1.37623 2.27518 1.10852 2.5429 0.940739 2.87218C0.75 3.24653 0.75 3.73657 0.75 4.71667V9.61667C0.75 10.5968 0.75 11.0868 0.940739 11.4611C1.10852 11.7904 1.37623 12.0581 1.70552 12.2259C2.07986 12.4167 2.56991 12.4167 3.55 12.4167Z" stroke="#717182" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                                                            </Button>
                                                        </PopoverTrigger>
                                                        <PopoverContent className="w-auto overflow-hidden p-0 z-30" align="start">
                                                            <Calendar
                                                                mode="single"
                                                                selected={dateVal}
                                                                captionLayout="dropdown"
                                                                onSelect={(date) => {
                                                                    dispatch({ type: 'setDateVal', payload: (date) })
                                                                    dispatch({ type: 'setOpdenDate', payload: false })
                                                                }}
                                                            />
                                                        </PopoverContent>
                                                    </Popover>
                                                </div>
                                                <div className='leadReactSelectSetting'>
                                                    <Select options={zipCode} classNamePrefix="react-select" placeholder='Driver Type' />
                                                </div>
                                                <div>
                                                    <input type="text" name='licenseNo' className='w-full bg-(--grey6) border border-[#BFCAD252] rounded-[8px] px-3 h-[35px]' placeholder='License Number' />
                                                </div>
                                                <div className='leadReactSelectSetting'>
                                                    <Select options={zipCode} classNamePrefix="react-select" placeholder='State' />
                                                </div>
                                                <div className='leadReactSelectSetting'>
                                                    <Select options={zipCode} classNamePrefix="react-select" placeholder='License Type' />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <Popover open={driverDateHiredOpen} onOpenChange={(val) => dispatch({ type: 'setDriverDateHiredOpen', payload: val })}>
                                                        <PopoverTrigger asChild>
                                                            <Button variant="outline" className="w-full justify-start bg-(--grey6) border border-[#BFCAD252] rounded-[8px] h-[35px] px-3 text-left text-[14px] font-normal text-[#656A73] cursor-pointer ">
                                                                {driverDateHiredVal ? driverDateHiredVal.toLocaleDateString() : 'Date Hired'}
                                                            </Button>
                                                        </PopoverTrigger>
                                                        <PopoverContent className="w-auto p-0 z-5" align="start">
                                                            <Calendar
                                                                mode="single"
                                                                selected={driverDateHiredVal}
                                                                onSelect={(date) => {
                                                                    dispatch({ type: 'setDriverDateHiredVal', payload: date })
                                                                    dispatch({ type: 'setDriverDateHiredOpen', payload: false })
                                                                }}
                                                                initialFocus
                                                            />
                                                        </PopoverContent>
                                                    </Popover>
                                                </div>
                                                <div className="col-span-2 w-full">
                                                    <div className="grid grid-cols-[1fr_3fr] items-center">
                                                        <span className='text-[14px] font-medium text-(--dark4)'>Experience</span>
                                                        <Popover open={driverExperienceOpen} onOpenChange={(val) => dispatch({ type: 'setDriverExperienceOpen', payload: val })}>
                                                            <PopoverTrigger asChild>
                                                                <Button variant="outline" className="w-full justify-start bg-(--grey6) border border-[#BFCAD252] rounded-[8px] h-[35px] px-3 text-left text-[14px] font-normal text-[#656A73] cursor-pointer">
                                                                    {driverExperienceVal ? driverExperienceVal.toLocaleDateString() : 'Issued Date'}
                                                                </Button>
                                                            </PopoverTrigger>
                                                            <PopoverContent className="w-auto p-0 z-5" align="start">
                                                                <Calendar
                                                                    mode="single"
                                                                    selected={driverExperienceVal}
                                                                    onSelect={(date) => {
                                                                        dispatch({ type: 'setDriverExperienceVal', payload: date })
                                                                        dispatch({ type: 'setDriverExperienceOpen', payload: false })
                                                                    }}
                                                                    initialFocus
                                                                />
                                                            </PopoverContent>
                                                        </Popover>
                                                    </div>
                                                </div>

                                                <div>
                                                    <input type="text" name='dateHired' className='w-full bg-(--grey6) border border-[#BFCAD252] rounded-[8px] px-3 h-[35px]' placeholder='Date Hired' />
                                                </div>
                                                <div>
                                                    <input type="text" name='operatingExp' className='w-full bg-(--grey6) border border-[#BFCAD252] rounded-[8px] px-3 h-[35px]' placeholder='Operating Experience' />
                                                </div>


                                            </div>

                                            <div className='flex justify-end mt-6'>
                                                <button className='px-8 btn-primary'>Add</button>
                                            </div>


                                            <div className='flex justify-between items-center mt-6'>
                                                <label htmlFor="" className='text-[14px] font-medium text-(--dark4) '>
                                                    Power Units:
                                                </label>
                                                <div className='relative flex justify-end '>
                                                    <svg className='absolute translate-y-3 -translate-x-3' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.25 12.25L8.75006 8.75M9.91667 5.83333C9.91667 8.0885 8.0885 9.91667 5.83333 9.91667C3.57817 9.91667 1.75 8.0885 1.75 5.83333C1.75 3.57817 3.57817 1.75 5.83333 1.75C8.0885 1.75 9.91667 3.57817 9.91667 5.83333Z" stroke="#717182" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                                                    <input type="number" className='w-full bg-(--grey6) border border-[#BFCAD252] rounded-xl pl-3 pr-7 h-[35px]' placeholder='VIN Number' />
                                                </div>

                                            </div>
                                            <Separator className='mt-3 bg-(--green1)' />


                                            <div className='mt-6 grid grid-cols-4 gap-4'>
                                                <div className='shadow-[0_0_7.6px_0_#D9D9D9B2] rounded-2xl bg-(--grey4) overflow-hidden '>

                                                    <div className='bg-(--green3) px-3 relative'>
                                                        <div className='flex justify-end absolute w-full px-6 bottom-0 -translate-y-3 '>
                                                            <DropdownMenu>
                                                                <DropdownMenuTrigger className='cursor-pointer'>
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="white" /> <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" fill="white" /> <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" fill="white" /> <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                                                                </DropdownMenuTrigger>
                                                                <DropdownMenuContent>
                                                                    <DropdownMenuItem>Delete</DropdownMenuItem>
                                                                </DropdownMenuContent>
                                                            </DropdownMenu>
                                                        </div>
                                                        <div className='flex justify-center'>
                                                            <div className='shadow-[0_0_4px_0_#46B987] rounded-full bg-[#EDFFF5] h-[62px] w-[62px] flex items-center justify-center text-[#1C1C1CB2] font-semibold text-[24px] translate-y-5 '>
                                                                JS
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='mt-5 px-5 flex flex-col gap-3 py-4'>
                                                        <h1 className='text-center text-(--green1) text-[20px] font-semibold '>John Lewis</h1>
                                                        <div className='bg-white rounded-[12px] flex items-center gap-4 py-2 px-3'>
                                                            <span className='text-[#0A0A0AB2] text-[14px] font-semibold'>DOB</span>
                                                            <span className='text-(--grey7) font-medium text-[14px]'>12/02/1985</span>
                                                        </div>
                                                        <div className='bg-white rounded-[12px] flex items-center gap-4 py-2 px-3'>
                                                            <span className='text-[#0A0A0AB2] text-[14px] font-semibold'>Driver Type</span>
                                                            <span className='text-(--grey7) font-medium text-[14px]'>Owner Operator</span>
                                                        </div>
                                                        <div className='bg-white rounded-[12px] flex items-center gap-4 py-2 px-3'>
                                                            <span className='text-[#0A0A0AB2] text-[14px] font-semibold'>License No.</span>
                                                            <span className='text-(--grey7) font-medium text-[14px]'>643894</span>
                                                        </div>
                                                        <div className='bg-white rounded-[12px] flex items-center gap-4 py-2 px-3'>
                                                            <span className='text-[#0A0A0AB2] text-[14px] font-semibold'>License Type</span>
                                                            <span className='text-(--grey7) font-medium text-[14px]'>Commercial</span>
                                                        </div>
                                                        <div className='bg-white rounded-[12px] flex items-center gap-4 py-2 px-3'>
                                                            <span className='text-[#0A0A0AB2] text-[14px] font-semibold'>Issued Date</span>
                                                            <span className='text-(--grey7) font-medium text-[14px]'>23/03/2012</span>
                                                        </div>
                                                        <div className='bg-white rounded-[12px] flex items-center gap-4 py-2 px-3'>
                                                            <span className='text-[#0A0A0AB2] text-[14px] font-semibold'>Date Hired</span>
                                                            <span className='text-(--grey7) font-medium text-[14px]'>12/02/2013</span>
                                                        </div>
                                                        <div className='bg-white rounded-[12px] flex items-center gap-4 py-2 px-3'>
                                                            <span className='text-[#0A0A0AB2] text-[14px] font-semibold'>Experience</span>
                                                            <span className='text-(--grey7) font-medium text-[14px]'>2 yrs 2 mths</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='mt-8 bg-[#FFFFDA] border border-l-4 border-[#FACA7B] p-3 rounded-[12px]'>
                                                <h1 className='text-(--dark1) text-[14px] font-semibold'>
                                                    Important Note:
                                                </h1>
                                                <p className='text-(--dark1) text-[14px] font-medium'>
                                                    The rate indication will not be formalized until all serial numbers (VIN) are entered and verified. All rate indications are subject to underwriting review and final rate approval.

                                                </p>
                                            </div>

                                        </>}
                                        {currForm === 'documents' && <>
                                            <FileUpload />
                                        </>}
                                    </div>
                                </div>

                            </div>
                        </form>
                    </>
                    : <KanvanCard newLead={newLead} dispatch={dispatch} />

            }
            {/* <KanvanCard /> */}

        </div>
    )
}
