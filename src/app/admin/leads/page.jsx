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
import Image from 'next/image';


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
        }
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
        } else {
            console.log('Submit the form')
            dispatch({ type: 'setNewLead', payload: false })
            setStepIndex(0)
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

    const dDriverType = [
        { value: 'Hourly', label: 'Hourly' },
    ]
    const dLicenseType = [
        { value: 'learning', label: 'learning' },
        { value: 'Permanent', label: 'Permanent' },
    ]
    const dStateType = [
        { value: 'california', label: 'California' },
        { value: 'texas', label: 'Texas' },
        { value: 'florida', label: 'Florida' },
        { value: 'new_york', label: 'New York' },
    ]






    return (
        <div className='pt-5 h-full'>

            {
                newLead ?

                    <>
                        <form onSubmit={(e) => { e.preventDefault(); /* handle save */ }}>
                            <div className='flex flex-col md:flex-row justify-between items-start gap-3 md:gap-0 md:items-center mb-5'>
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

                                        {stepIndex < steps.length - 1 ? 'Next' : 'Submit'}
                                    </button>
                                </div>
                            </div>


                            <div className='grid grid-cols-1 xl:grid-cols-[335px_1fr] gap-4'>

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
                                            <div className='grid grid-cols-1 xl:grid-cols-5 gap-3'>
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
                                                <div className='mt-0 xl:mt-5 col-span-1' >
                                                    <label htmlFor="" className='col-span-1 text-[14px] font-medium text-(--dark4) mt-3'>Request Effective Date</label>
                                                </div>
                                                <div className='w-full mt-0 xl:mt-5 col-span-4'>
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
                                                    <div className='grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr] gap-3 reactSingleSelect mt-3'>
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

                                                <div className='col-span-1 mt-0 xl:mt-5'>
                                                    <label htmlFor="" className='col-span-1 text-[14px] font-medium text-(--dark4) mt-3'>Business Owner</label>
                                                </div>
                                                <div className='w-full col-span-4 mt-0 xl:mt-5'>
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
                                                <div className='col-span-1 mt-0 xl:mt-5'>
                                                    <label htmlFor="" className='col-span-1 text-[14px] font-medium text-(--dark4) mt-3'>Business Type</label>
                                                </div>
                                                <div className='w-full col-span-4 mt-0 xl:mt-5 reactSingleSelect'>
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


                                                <div className='col-span-1 mt-0 xl:mt-5'>
                                                    <label htmlFor="" className='col-span-1 text-[16px] font-medium text-(--dark4) mt-3'>Total Garage Locations:</label>
                                                </div>
                                                <div className='w-full col-span-4 mt-0 xl:mt-5 relative'>
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
                                                    <div className='grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr] gap-3 reactSingleSelect mt-3'>
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
                                                <div className='col-span-1 mt-0 xl:mt-5'>
                                                    <label htmlFor="" className='col-span-1 text-[16px] font-medium text-(--dark4) mt-3'>Total Owned Trailers</label>
                                                </div>
                                                <div className='w-full col-span-4 mt-0 xl:mt-5 relative'>
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
                                            <div className='grid grid-cols-[repeat(8,max-content)] overflow-x-scroll md:overflow-x-hidden md:grid-cols-3 lg:grid-cols-4 gap-5'>
                                                <label
                                                    htmlFor="nonTrucking"
                                                    onClick={() => handleToggle("nonTrucking")}
                                                    className='bg-(--yellow4) border border-[#CFCF5A] rounded-2xl min-h-[234px] justify-center items-center flex flex-col gap-2 cursor-pointer w-[300px] md:w-full px-3'
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

                                                <label htmlFor="physicalDamage" onClick={() => handleToggle("physicalDamage")} className={`bg-[#EAF9FF] border border-[#67DAEE] rounded-2xl min-h-[234px] justify-center items-center flex flex-col gap-2 cursor-pointer w-[300px] md:w-full px-3 `}>
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
                                                <label htmlFor="autoLiability" onClick={() => handleToggle("autoLiability")} className={`bg-[#F2FFE5] border-[#C2E86A] rounded-2xl min-h-[234px] justify-center items-center flex flex-col gap-2 cursor-pointer w-[300px] md:w-full px-3 ${autoLiability ? 'border-2' : 'border'} `}>
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
                                                <label htmlFor="workCompensation" onClick={() => handleToggle("workCompensation")} className={`bg-[#F8EAFF] border border-[#DD88FF] rounded-2xl min-h-[234px] justify-center items-center flex flex-col gap-2 cursor-pointer w-[300px] md:w-full px-3`}>
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
                                                <label htmlFor="generalLiability" onClick={() => handleToggle("generalLiability")} className={`bg-[#FFF7EA] border border-[#F0B350] rounded-2xl min-h-[234px] justify-center items-center flex flex-col gap-2 cursor-pointer w-[300px] md:w-full px-3`}>
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
                                                <label htmlFor="motorTruckCargo" onClick={() => handleToggle("motorTruckCargo")} className={`bg-[#FFF8EF] border border-[#B29367] rounded-2xl min-h-[234px] justify-center items-center flex flex-col gap-2 cursor-pointer w-[300px] md:w-full px-3`}>
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
                                                <label htmlFor="occupationalAccident" onClick={() => handleToggle("occupationalAccident")} className={`bg-[#F4F7FF] border border-[#899DFF] rounded-2xl min-h-[234px] justify-center items-center flex flex-col gap-2 cursor-pointer w-[300px] md:w-full px-3`}>
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
                                                <label htmlFor="trailerInterchange" onClick={() => handleToggle("trailerInterchange")} className={`bg-[#FFF0ED] border border-[#FF5A32] rounded-2xl min-h-[234px] justify-center items-center flex flex-col gap-2 cursor-pointer w-[300px] md:w-full px-3`}>
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
                                                        {/* <svg width="86" height="36" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" > <g clipPath="url(#clip0_2_13185)"> <rect width="120" height="80" fill="url(#pattern0_2_13185)" /> </g> <defs> <pattern id="pattern0_2_13185" patternContentUnits="objectBoundingBox" width="1" height="1" > <use href="#image0_2_13185" transform="scale(0.0025641 0.00384615)" /> </pattern> <clipPath id="clip0_2_13185"> <rect width="120" height="80" fill="white" /> </clipPath> <image id="image0_2_13185" width="390" height="260" preserveAspectRatio="none" href="data:image/png;base64,iVBORw0K..." /> </defs> </svg> */}
                                                        <Image
                                                            src="/images/leads/coverage9.svg"
                                                            width={36}
                                                            height={36}
                                                            alt="Picture of the author"
                                                        />
                                                        {/* <svg width="86" height="36" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g clipPath="url(#clip0_2_13185)"> <rect width="120" height="80" fill="url(#pattern0_2_13185)" /> </g> <defs> <pattern id="pattern0_2_13185" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_2_13185" transform="scale(0.0025641 0.00384615)" /> </pattern> <clipPath id="clip0_2_13185"> <rect width="120" height="80" fill="white" /> </clipPath> <image id="image0_2_13185" width="390" height="260" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYYAAAEECAMAAAAbJmMEAAAAAXNSR0IB2cksfwAAADNQTFRFOczlOczlOczlOczlOczlOczlOczlOczlOczlOczlOczlOczlOczlOczlOczlOczlOczly6fOKAAAABF0Uk5TABBg//BAMMDQIHCwoJBQgOADJT+cAAANj0lEQVR4nO2da4Pcpg6GZ3b2mmST/v9feU57NjnbdHa6M74BlkACBNjo/dAmsQ1Yz4irwMeDSkDHy/zHuw/K/XJF6Vgn62/n8AOKQUKKoQkphiZkYTj+E35AMUjIwnAhtNGKQUIWhrvf4QcUg4QsDISmQTGISDE0IcXQhB5N0yuGajLdQTFUk2JoQoqhCSmGJqQYmpBiaEKKoQkphiakGJqQYiin4x1q4zCGz4fv35e/ZSxWXxosHY3hZF1UDFFazOw1MuWOm08oBrYerEXNIIaH/4fu+ExEMbBFCbsw7oGXou9swxMw2NmSGv5dy7YHbGXjnnCtRfKGE/zPlLCPfcr+IcML/k+LdbJgePk7VChC3MHORKiVvrz7r9tpPL+FMCC+sFJPVdVXq9EF39xoxsHr1yGHmUQAw7dfxKJNyXdRVYVX/I1KBLzuOlQAA9UZXO27qiLUSoGBhQtSCMOgL38lPd6uwu7QEoZJxwdm3da6UjFYHZ9rRe7H8P2NXrSwnn7mTK2mLAzgMNmPYYXRjyGPMzh6+Z9EqmUVdIf2MYzadCueEcPtej0MVjE2J9uQj6tB7uYwDHrO2grJKzST7cWw9qVWMEzaim/8MBs4r6UDGIbLXgyP1YxC2ahUVwF3yImhvDM4ev1P7RKgomIApnfMXzdlEbQ6hlHf/lu7BIAM4wCdvvnq1z99T24KwyhkObGS/O5wwi9tHcOk+g3HtYOaBcN0dYsYBh0/KtPwLnT+8Rd6yeL3MNRn28UwqVpvzothXgX1Ypgv+jA8VHd+hio04z4O87giHcMmnMFVQefwYZg7pT4MS398dxhGPRZY4fDWSifsirGuvFzbK4ZBzx+iNHxDZRQDCG/fGA7g8CmbfO5AwGBc2j0G0QkRjzsoBldyrXYEhud54sMMmOgBgxyHxUKr/jKGASbnwXB/wa9tSzXcIRuG3ThDEXdgY7AuKIY0oVN4CIalaVAMGTUbyY1QRDDM99sduD4wVKiVxgvGbk/7fvt2xZAorFYa/92NVFQMMgpgwOokZ90Ux/DlHb20OQnGa86rATwMzr/jGNQZaEIsqxjWksQwd0HtTMZVUASDWyDFkCzYtGOdbv8jgkwxZNBkKCcw7ATkjE67KoZkzXtxIJMrBkOyC9SwcT0Y1gGVKAbuVtyWJRwmMMUkBTGgzoBjUGega7TVx2X9j4phUSEMkM0hDEBxFEMOQfZdY5i24SoGIdEwoA20YsijcVhmLUijGKDSdInhNsLNygawsGJwBA5vp2vnLIEPDAwgfgzDjijAnUZHqcF9iNGJztAdhsB7RYf4DemaS56KwZEZpHiH32aK7RzjpIORFYIBbpI6w8B7Lc6xHisjKwZHy5tHvRXtHIkgBh+FvjBQqyQ8BY9uFjM2qd6qKcWwKNEbnDQwuWa+MXcxYMfeIRj2FJZh7L9K+XGFQAwmc+zuaytMIRjUGXzpwIIaAzdvxXBIfqvAnl+3cQAwoBsjFUNcUpAcdwAwnF8QDoohMi1APgy3fdL4ubSKITaxtV5/rnI7m3/xPKwYePKeXnNNf/nFp2PYJ4UsZ9b50rBtvcLgebQnDHkGQyEOigFU1jrpEInh+mdfdL9iSEhwpWsO85KFi8HHTzGkpGjpeMFNrxiKYZiyMEw/dZuunQNv/0AxJCW50snCME1ehJwBxnCHx3lvTsYKWr4fF25Sw+A2Ef+EFGjwfTrDj3z7EE8H7DtsKAb/mKUjDDmPYvG6w3jx6R/FMEugabCTdbRY/Psb4BeIFENyurY+O0XjIdYvfyuGWaUxGDY/LX8IhaHtHYNxvHrgrQaTfSUfx45x+ExhjSE0qQhhyPuZsbqihopZkWG0nyFm2pX1w3USiGFHzmC8/5Pvc6UrMxFsgC0sz1Y/Of/3qB8MvreCzBS2QsgdFMOsZXem561gK0VzcMz/7Vc4MHnvGCje4Ov0EBN3nrMwEJxBMRwCQ+JA6g9Q0Ldtf8WQiiHSHxwMhPh8AMOe+quU+NVw7BEurHUwMHx/I0QiABj26QyRGOI4jBhuq8+UOqkfDFF1kv9B/OnTrYM2/pcSlqMYEjH4GvjbJSxs1ZJiQO345WfoSe/jh8PrsBJ9JKxzKIZw1R3NgS7FEDbjH2gg9pjA9+QP1+wbg7PpAxRho6e8O6wx0Gfc29diIPzMOooRxTmsMezIGfLUSYdwLHgyB8VAMqG0OygGigkffgtzUAw0C4Y+U5vIQTEQDSjrDt1jIH/aQZTDCsOejmkwzqeNnF81JclhhWGfzoDHqGfD8JESItsJhuSmwZ8IN6WVFAMjPTkOioGRXvzSQ0iKgZOgmDvsGQNlv1XgcB5HoWiJaA57xkCJB+AcLulLZxB6XlJILoYdUSDtt+L+foWqpT4wZGoaDuF9jJEcFANToc3KcRwUA1ci1ZJiYEuCg2JgK7AiGtVb2jEG0ra3mN+ugDs4GF5/wrdtUYs5PG8VYzOBAAEHw46cgbbtLa5Fze4PvWOI4xAw0wk72ASVYohKO7c7dI9BhINimGV87sj/VviRzR5ldof9YiD1V29izrJS0kzDEAqK2pIWS4SPFXuICJ/2cuAtY7gYduQM1KYBfoSgrO6gGNYiNhY5G37FgCq0/0QxUJSMYdTlCZur86ULfRTad7vx58fopdQWlQvDqPUxbf6TLHnuMGPwnvq0QdH7qywtXaDA5rQoDHuqjQYJYYjJn6ABw/4o5K6TEvKn6IZhhxQ2iAHfrLphbQ/DHp1hexjSizl35trpbhn9yy4wANm1sG+rdkepJAZ8HjH6A9m5tFghy9feUgpAUQKGJ38UR90WZ7FCpTNACmEgZFMTxLZa6E8MUR/58H4ac1E9EJvDEFNMOxMTpLPbO+eHXFjqAIOZBfT0/XvghgLaPwZKX7B2f9Fwyp1imDPwP7ise9Sww2KFF3YEXeYCkMTGQKRwMOqmCsO52nWSMIb5SwSkp6aylO+618ZAPpdm1JFVTLorDJodorQxamNgh4txijkxZjwzlaewNXaNYUw8xoEKDyA2h4FRb8dQiH0qTcYGg41gYIcWxo4zStqj9rBFEEO0NacRREGDLFaotMArjSFhBqoKhjrOcM8dKZEnulNsWZxDbQwxu31IJR3XdiPfaihWud2+W8RAKmp8lZTj8bjsimaJ5E8UMVwszRmmcpUN3Lh/+nNbGAgf7Lj9N+GdCrtDZSXtBA1uplcMRKVuyL3qeb0xMoMRe+LA39GIn5VlzgIpBpaSz8xY67pHd9g47NvXGh4ZtIzBWB34cYzZrO5IAMMi0qFEoZua4wCZLHWZqg4GK1d0jNYihvMB/uBzlgqYIzoGbJJslSfyBkOsZUsYAtaKL6okBqRUQJa+O5vBQFktji1seQzQXKIXWCMciJYSi+91lIoBzNF3axMY7FLbRXp9/4Veo4l/uJgMBvjedjAYhYZncULhoeTkqUrEgOTYNgbS/GvCJK0kBnj/DgfDcBREdQxU+y67aLj7hSQxwGXhYBgi/mpjmDeKhQsyhig+/GZGf0pigE9q52AYDFAZAy98bbqbF4/cNgbjtKhKYdb8IMKh03O8sE6/20KlZGX+WHgfdUQo5/lw+0S9sD8U7ylBAlY4RDS1ujHRn7zKlB+nRJUghlHS516O8xfcGrEEh0QM8Hl08EQxuWRSrXjR6E8eh+KTGXTljnuMDlqbzr6L2wpCUukZVr5Cn7wj6/zZ4ykY/cl63WQM0/d57z5Cd0ZiCKRK1pB9XG8gYWMHTXQM2K/S/U4ydmpJIoVRL/eREZhpcbQR82FCGMKLoFefDy2C5lIovg3JPnEhJ2JrFE1ZQgIuwQrpkBvDKHJ08pB76Nt5oedbwOA9+P18XVv39W0i1kLoCo84yocdSmEoHa3AF96pOr9cfyHxzqAYIrQuaPqS07B1jDHlLYYh3afLyihuhehPOQzs7smiGhgGXQsdNOE0CZ8x+lMOQ+o2k8pCS28e3Yh3RG7vQD7LUWoy46rY3WtNUEAxDLMcX8f2HeXAcwdJDGmD0MrCKdBubAhD0obcyiJPdSGRGEOAYn0Mt9m7CA5tUGBMv+cIwpX1hkJRbBICCw7v5/cQowYtNYehEQqcldn0IFzmZ5IihvfMJeNWKMArDVLRn2Jr0YtYUzOtUOCtzG4BA2O3f0OfMGNFi6RikAuQMR+6EBuIZlzhkA8DaRxdBMOBuKbbEgVflDnxZvN1/IuxglF7roIOwf1Yr7AYcVYM14FWutzVeYISFkL8ICLKIqtcTTQoYzQRVQWkYCBECTQkuF+RNfozXmkY4DlX0WXneIGmhT9gnyfskKFUDFcZIavr78i2o+LRnwzlwLAR1Yr+pEgxrI2L3Mg+1ZOhjjCgY38HBHl5KKM6woDa1x7DVen9KYarzoR7RAdCimHUtefq3Y4lOhTqCUPDYYeKgSjZeYGuMLQb/akYaBKeJOsLQ7PRn51h8G6V8Uh6xrgzDJHu8PyGnBOaS71hiNvzLr580huGqGpJfhGrOwwR1RK8NJRV/WFgcxi2P8iqQwxMDgV8oU8McrvMo9UlBsbJVoVCTPrEQHaIUoE+vWIgcTgWO5GxWwwEEAVj3jrGEABRNPCwaww4iIvwIZiuOsdwgE6gqBB6qBhumk6G4X84L4/+Be+dWkSGQ0L+AAAAAElFTkSuQmCC" /> </defs> </svg> */}
                                                        {/* <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M30.24 20.88L27.6 15.6C27.3733 15.2313 27.0555 14.9273 26.6772 14.7171C26.2989 14.5069 25.8728 14.3977 25.44 14.4H10.56C10.1272 14.3977 9.70117 14.5069 9.32285 14.7171C8.94453 14.9273 8.62671 15.2313 8.40002 15.6L5.76002 20.88L2.78402 23.6448C2.66308 23.757 2.56657 23.8929 2.5005 24.044C2.43443 24.1951 2.40022 24.3583 2.40002 24.5232V34.8C2.40002 35.1183 2.52645 35.4235 2.7515 35.6485C2.97654 35.8736 3.28176 36 3.60002 36H8.40002C8.88002 36 9.60002 35.52 9.60002 35.04V33.6H26.4V34.8C26.4 35.28 26.88 36 27.36 36H32.4C32.7183 36 33.0235 35.8736 33.2486 35.6485C33.4736 35.4235 33.6 35.1183 33.6 34.8V24.5232C33.5998 24.3583 33.5656 24.1951 33.4995 24.044C33.4335 23.8929 33.337 23.757 33.216 23.6448L30.24 20.88ZM10.8 16.8H25.2L27.6 21.6H8.40002L10.8 16.8ZM12 27.84C12 28.32 11.28 28.8 10.8 28.8H5.76002C5.28002 28.8 4.80002 28.08 4.80002 27.6V24.96C5.04002 24.24 5.52002 23.76 6.24002 24L11.04 24.96C11.52 24.96 12 25.68 12 26.16V27.84ZM31.2 27.6C31.2 28.08 30.72 28.8 30.24 28.8H25.2C24.72 28.8 24 28.32 24 27.84V26.16C24 25.68 24.48 24.96 24.96 24.96L29.76 24C30.48 23.76 30.96 24.24 31.2 24.96V27.6ZM19.2 9.6H16.8L14.4 0H21.6L19.2 9.6ZM2.64002 4.32L8.88002 0.72L11.52 10.32L9.60002 11.28L2.64002 4.32ZM27.12 0.72L33.36 4.32L26.4 11.52L24.24 10.32L27.12 0.72Z" fill="#39CCE5" /> </svg> */}
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
                                                {autoLiability &&
                                                    <div className='border border-(--light2) rounded-3xl bg-white px-4 py-8 flex items-start gap-3 mt-4'>
                                                        <span>
                                                            <svg width="36" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M21.6894 5.21822C21.7684 5.24547 21.8474 5.27272 21.9287 5.30079C22.0077 5.32598 22.0866 5.35117 22.168 5.37712C23.0004 5.65872 23.7392 6.16765 24.1699 6.96158C24.3763 7.42369 24.4447 7.8533 24.4436 8.35603C24.4436 8.45201 24.4436 8.548 24.4436 8.6469C24.4431 8.74951 24.4426 8.85213 24.4422 8.95785C24.442 9.11659 24.442 9.11659 24.4418 9.27854C24.4413 9.61607 24.4402 9.9536 24.4391 10.2911C24.4386 10.5202 24.4382 10.7492 24.4379 10.9782C24.4369 11.5393 24.4354 12.1003 24.4336 12.6614C24.372 12.6627 24.3104 12.664 24.2469 12.6653C23.9667 12.672 23.6866 12.6805 23.4064 12.6892C23.3094 12.6912 23.2125 12.6932 23.1127 12.6952C23.0189 12.6984 22.9252 12.7015 22.8286 12.7048C22.7425 12.7071 22.6564 12.7094 22.5677 12.7118C22.283 12.7567 22.1165 12.8456 21.8848 13.0167C21.087 14.2259 21.6524 15.9156 21.6211 17.3686C14.4861 17.3686 7.35117 17.3686 0 17.3686C0 14.555 0 11.7413 0 8.84232C7.425 8.84232 14.85 8.84232 22.5 8.84232C22.4188 7.94775 22.4188 7.94775 22.1484 7.64539C21.7075 7.4191 21.2418 7.28152 20.769 7.13887C20.2544 6.97123 19.9801 6.82249 19.6875 6.35548C19.6103 6.10591 19.6238 5.89784 19.6875 5.64496C20.1726 4.81049 20.8925 4.95566 21.6894 5.21822Z" fill="#C3C339" /> <path d="M26.1914 8.84286C26.8343 8.83537 27.477 8.82826 28.1199 8.82448C28.4194 8.82262 28.7188 8.82014 29.0183 8.81606C29.3635 8.81171 29.7086 8.80973 30.0538 8.80817C30.2115 8.80542 30.2115 8.80542 30.3724 8.80261C31.8444 8.80223 33.0973 9.30674 34.1634 10.3257C34.5872 10.7555 34.9393 11.1141 35.1562 11.685C35.0927 11.6857 35.0291 11.6864 34.9635 11.6871C34.3623 11.6941 33.761 11.7018 33.1598 11.7105C32.8507 11.7149 32.5417 11.719 32.2326 11.7224C31.8768 11.7264 31.521 11.7316 31.1651 11.737C30.9997 11.7385 30.9997 11.7385 30.831 11.7401C30.0709 11.7361 30.0709 11.7361 29.3555 11.9514C29.1059 12.3903 29.1543 12.9176 29.1563 13.4113C29.1562 13.5 29.156 13.5887 29.1558 13.68C29.1557 13.8669 29.156 14.0538 29.1568 14.2408C29.1577 14.5261 29.1568 14.8114 29.1557 15.0967C29.1558 15.2788 29.156 15.4608 29.1563 15.6428C29.156 15.7278 29.1556 15.8127 29.1553 15.9002C29.1504 16.5254 29.1504 16.5254 29.3555 17.1027C29.7993 17.2683 30.2078 17.306 30.6801 17.3033C30.7823 17.3038 30.7823 17.3038 30.8865 17.3043C31.1101 17.3051 31.3336 17.3046 31.5572 17.304C31.7138 17.3041 31.8705 17.3042 32.0271 17.3045C32.3549 17.3047 32.6827 17.3043 33.0105 17.3035C33.4286 17.3025 33.8467 17.3031 34.2649 17.3042C34.5883 17.3048 34.9117 17.3046 35.2351 17.3041C35.3892 17.304 35.5432 17.3042 35.6973 17.3046C37.0117 17.3742 37.0117 17.3742 38.194 16.9306C38.3352 16.7444 38.3352 16.7444 38.4082 16.481C39.1638 16.5721 39.9195 16.6632 40.6751 16.7543C41.0261 16.7967 41.377 16.839 41.7279 16.8813C42.067 16.9221 42.4061 16.963 42.7451 17.0039C42.8741 17.0195 43.003 17.035 43.132 17.0506C43.3135 17.0724 43.495 17.0943 43.6765 17.1162C43.7795 17.1287 43.8826 17.1411 43.9888 17.1539C44.326 17.1951 44.663 17.2378 45 17.2804C45 17.9545 45 18.6286 45 19.3231C44.782 19.3275 44.564 19.3318 44.3394 19.3363C44.128 19.3411 43.9165 19.3462 43.705 19.3513C43.5582 19.3547 43.4114 19.3578 43.2646 19.3606C43.0534 19.3647 42.8423 19.3698 42.6311 19.3752C42.5329 19.3767 42.5329 19.3767 42.4327 19.3783C42.1064 19.3876 41.8458 19.3994 41.5723 19.5896C41.3696 19.8763 41.368 20.1327 41.3965 20.4777C41.4688 20.6969 41.5224 20.7983 41.7107 20.9292C42.0137 21.0449 42.3113 21.0424 42.6311 21.0474C42.7213 21.0497 42.7213 21.0497 42.8132 21.0521C43.0368 21.0577 43.2603 21.0618 43.4839 21.0661C44.2344 21.0826 44.2344 21.0826 45 21.0994C45 22.6821 45 24.2648 45 25.8955C44.3619 25.8955 43.7238 25.8955 43.0664 25.8955C43.0447 25.7123 43.0229 25.5291 43.0005 25.3404C42.7869 23.8611 42.1727 22.5245 41.0209 21.5525C40.2916 21.0064 39.405 20.5199 38.4961 20.3889C38.4081 20.3761 38.32 20.3633 38.2293 20.3501C36.7488 20.1881 35.3365 20.5785 34.1283 21.462C33.8596 21.688 33.634 21.9436 33.4142 22.218C33.1663 22.3796 33.0272 22.3201 32.746 22.2788C32.2591 22.2256 31.7672 22.2434 31.2781 22.2454C31.1589 22.2455 31.0397 22.2457 30.9205 22.2458C30.609 22.2461 30.2975 22.247 29.9859 22.2479C29.6672 22.2489 29.3484 22.2493 29.0297 22.2497C28.4058 22.2507 27.782 22.2522 27.1582 22.254C27.1577 22.1438 27.1572 22.0335 27.1566 21.9199C27.1516 20.8809 27.1452 19.842 27.1375 18.803C27.1336 18.2689 27.1301 17.7347 27.1278 17.2006C27.1255 16.6852 27.1219 16.1698 27.1175 15.6544C27.116 15.4577 27.115 15.261 27.1145 15.0643C27.1136 14.7889 27.1112 14.5135 27.1083 14.2382C27.1085 14.116 27.1085 14.116 27.1087 13.9914C27.1015 13.4118 27.1015 13.4118 26.8066 12.9284C26.5021 12.7965 26.5021 12.7965 26.1914 12.6619C26.1914 11.4016 26.1914 10.1413 26.1914 8.84286Z" fill="#C3C339" /> <path d="M8.96471 22.8742C9.63298 23.4113 10.0148 24.1037 10.2831 24.9169C10.3203 24.8354 10.3576 24.7539 10.396 24.6699C10.9505 23.4848 11.6214 22.6319 12.8923 22.1692C13.9776 21.8902 15.1047 22.0166 16.0753 22.5776C16.9149 23.1444 17.5036 23.9055 17.7867 24.8902C18.0091 26.0768 17.8464 27.1683 17.177 28.1809C16.5583 28.9817 15.7584 29.523 14.7655 29.713C13.5529 29.831 12.5402 29.6227 11.5613 28.8547C10.9672 28.3033 10.5649 27.6298 10.2831 26.8709C10.2605 26.9375 10.238 27.0042 10.2147 27.0728C9.80821 28.1711 9.12152 28.9145 8.09061 29.4459C7.2291 29.8416 6.10424 29.8583 5.21493 29.5388C4.01143 28.9979 3.41175 28.2473 2.90025 27.0485C2.59651 25.9991 2.77405 24.8481 3.27688 23.906C3.80633 23.0267 4.55127 22.4773 5.49852 22.1415C6.76512 21.8612 7.92679 22.1194 8.96471 22.8742ZM5.80064 25.361C5.65994 25.6454 5.66888 25.9406 5.71275 26.2492C5.8704 26.4988 5.97808 26.6497 6.2401 26.7821C6.63194 26.8278 6.81151 26.8091 7.15196 26.5989C7.42683 26.2881 7.47788 26.1304 7.47057 25.7163C7.33208 25.3922 7.1658 25.1713 6.85533 25.0058C6.3731 24.9437 6.14418 25.0139 5.80064 25.361ZM13.3592 25.2722C13.1546 25.5578 13.1486 25.8147 13.1835 26.1604C13.2957 26.4099 13.3866 26.5601 13.6064 26.721C13.9622 26.834 14.2276 26.8273 14.5677 26.6711C14.7803 26.504 14.8611 26.4181 14.9413 26.1604C14.9846 25.749 14.9299 25.5112 14.6776 25.1834C14.2395 24.8628 13.7679 24.951 13.3592 25.2722Z" fill="#C3C339" /> <path d="M0 19.2335C7.13496 19.2335 14.2699 19.2335 21.6211 19.2335C21.6501 20.2887 21.6791 21.3438 21.709 22.4309C22.2025 23.0195 22.2025 23.0195 23.4668 23.0526C23.4668 23.9905 23.4668 24.9284 23.4668 25.8947C22.1906 25.8947 20.9145 25.8947 19.5996 25.8947C19.5416 25.4551 19.4836 25.0154 19.4238 24.5625C19.0383 23.1196 18.2153 21.9064 16.9292 21.1396C16.8154 21.0754 16.8154 21.0754 16.6992 21.0098C16.6396 20.9743 16.58 20.9389 16.5186 20.9023C15.4043 20.2809 13.9097 20.187 12.6782 20.4769C11.8695 20.748 11.0176 21.1566 10.3711 21.7204C10.0899 21.5872 9.84234 21.4245 9.58557 21.2485C8.28383 20.4028 6.91665 20.2396 5.4063 20.4259C3.93689 20.7535 2.69527 21.645 1.88553 22.9201C1.84338 22.9931 1.80124 23.0662 1.75781 23.1414C1.71748 23.2108 1.67715 23.2802 1.63559 23.3517C1.23137 24.1415 1.11726 25.0274 0.966797 25.8947C0.647754 25.8947 0.328711 25.8947 0 25.8947C0 23.6965 0 21.4983 0 19.2335Z" fill="#C3C339" /> <path d="M39.9022 22.8745C40.6413 23.4686 41.1243 24.3117 41.2868 25.2549C41.4226 26.4807 41.1183 27.5124 40.3701 28.4835C39.737 29.1972 38.7895 29.6746 37.844 29.7314C36.6277 29.7467 35.6746 29.4787 34.7441 28.6476C33.9195 27.7668 33.7068 26.6646 33.7255 25.5002C33.7672 24.4788 34.2864 23.6208 35.0133 22.9356C36.447 21.7149 38.4129 21.7914 39.9022 22.8745ZM36.7381 25.3614C36.5974 25.6458 36.6064 25.941 36.6502 26.2495C36.8079 26.4991 36.9156 26.6501 37.1776 26.7824C37.5694 26.8281 37.749 26.8095 38.0895 26.5993C38.3643 26.2884 38.4154 26.1308 38.4081 25.7167C38.2696 25.3926 38.1033 25.1717 37.7928 25.0061C37.3106 24.9441 37.0817 25.0142 36.7381 25.3614Z" fill="#C3C339" /> <path d="M28.1248 23.9268C28.1929 23.926 28.261 23.9251 28.3311 23.9243C28.404 23.9239 28.4769 23.9235 28.552 23.9231C28.6278 23.9226 28.7037 23.9221 28.7819 23.9216C28.9423 23.9207 29.1028 23.9202 29.2632 23.9198C29.5071 23.919 29.7508 23.9162 29.9946 23.9134C30.1509 23.9128 30.3073 23.9124 30.4636 23.912C30.5357 23.9109 30.6079 23.9098 30.6823 23.9087C31.3515 23.9113 31.9438 24.0701 32.4315 24.5629C32.8042 25.1074 32.9362 25.5902 32.871 26.2504C32.7245 26.8829 32.4146 27.2217 31.8987 27.6048C31.5718 27.8016 31.3142 27.8595 30.9374 27.8634C30.8694 27.8642 30.8013 27.8651 30.7311 27.8659C30.6582 27.8663 30.5854 27.8667 30.5103 27.8671C30.4344 27.8676 30.3585 27.8681 30.2804 27.8686C30.1199 27.8695 29.9595 27.87 29.799 27.8704C29.5552 27.8712 29.3114 27.874 29.0676 27.8768C28.9113 27.8774 28.755 27.8779 28.5986 27.8782C28.5265 27.8793 28.4543 27.8804 28.38 27.8815C27.7107 27.8789 27.1184 27.7201 26.6307 27.2273C26.2585 26.6834 26.1249 26.1995 26.1913 25.5398C26.3157 25.0378 26.5207 24.585 26.9534 24.2825C27.346 24.0452 27.6721 23.9315 28.1248 23.9268Z" fill="#C3C339" /> <path d="M23.3789 14.5264C24.017 14.5264 24.6551 14.5264 25.3125 14.5264C25.3125 16.7246 25.3125 18.9227 25.3125 21.1876C24.6744 21.1876 24.0363 21.1876 23.3789 21.1876C23.3789 18.9894 23.3789 16.7912 23.3789 14.5264Z" fill="#C3C339" /> <path d="M30.9375 13.5493C32.3297 13.5493 33.7219 13.5493 35.1562 13.5493C36.0352 15.3256 36.0352 15.3256 36.0352 15.5033C34.3529 15.5033 32.6707 15.5033 30.9375 15.5033C30.9375 14.8585 30.9375 14.2137 30.9375 13.5493Z" fill="#C3C339" /> </svg>
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
                                                        <svg width="36" height="36" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_2_13205)"> <path d="M34.6713 30.8477L40.6222 32.8799L46.2375 16.7944H43.9683C43.9672 16.7944 43.966 16.7946 43.9647 16.7946C43.9633 16.7946 43.9624 16.7944 43.9611 16.7944H34.5654C30.0282 16.7944 26.318 20.4859 26.2953 25.0233C26.2953 25.0354 26.2363 36.7822 26.2361 36.7941C26.2279 38.4272 27.2201 39.722 28.6011 40.1938L30.6988 40.9101L33.2155 33.5394L33.242 33.5486C33.2637 29.1881 33.2555 30.8456 33.2845 25.0586C33.2864 24.6762 33.5975 24.3676 33.9797 24.3686C34.362 24.3695 34.6713 24.6798 34.6713 25.0621V30.8477Z" fill="#7901E4" fillOpacity="0.8" /> <path d="M43.9648 14.4857C47.9649 14.4857 51.2076 11.243 51.2076 7.24286C51.2076 3.24274 47.9649 0 43.9648 0C39.9647 0 36.7219 3.24274 36.7219 7.24286C36.7219 11.243 39.9647 14.4857 43.9648 14.4857Z" fill="#7901E4" fillOpacity="0.8" /> <path d="M41.4883 44.5947C43.3163 45.2188 45.3015 44.2421 45.925 42.417C46.5488 40.5901 45.5732 38.6039 43.7472 37.9803L41.4883 44.5947Z" fill="#7901E4" fillOpacity="0.8" /> <path d="M61.6343 25.0233C61.6116 20.4861 57.9014 16.7946 53.364 16.7946H50.2797L44.234 34.1136L44.9803 34.3684C48.7954 35.6712 50.8394 39.8352 49.5364 43.6503C48.2342 47.4637 44.0847 49.514 40.2547 48.2066L34.6711 46.2998C34.6711 46.2998 34.6729 81.7783 34.6729 83.8063C34.6729 86.1224 36.5505 88 38.8666 88C41.1827 88 43.0603 86.1224 43.0603 83.8063C43.0603 82.576 43.0603 56.7159 43.0603 51.2056C43.0603 50.6976 43.4722 50.2857 43.98 50.2857C44.4723 50.2857 44.8711 50.6848 44.8711 51.1769C44.8711 56.4184 44.8711 81.9462 44.8711 83.8063C44.8711 86.1224 46.7487 88 49.0649 88C51.381 88 53.2586 86.1224 53.2586 83.8063L53.184 24.9989C53.1834 24.5951 53.5103 24.2674 53.9141 24.2669C54.3179 24.2663 54.6456 24.593 54.6464 24.9968C54.6464 25.017 54.6462 25.0376 54.6454 25.0586L54.7744 50.7331C54.7841 52.6572 56.3467 54.2102 58.2687 54.2102C58.2747 54.2102 58.2808 54.2102 58.2867 54.2102C60.2168 54.2005 61.7734 52.628 61.7638 50.6979L61.6343 25.0233Z" fill="#7901E4" fillOpacity="0.8" /> </g> <defs> <clipPath id="clip0_2_13205"> <rect width="88" height="88" fill="white" /> </clipPath> </defs> </svg>

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
                                                        <svg width="36" height="36" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_2_13218)"> <path fillRule="evenodd" clipRule="evenodd" d="M36.524 0.932C27.044 6.464 15.044 10.252 5.98797 11.516C2.69997 11.976 0.00796734 14.676 0.0119673 17.996L0.0199673 19.984C-0.100033 44.156 1.92797 65.312 37.868 79.596C39.233 80.1332 40.7509 80.1332 42.116 79.596C78.08 65.312 80.128 44.16 80 19.984V17.98C80 14.668 77.308 11.94 74.036 11.428C65.44 10.08 52.908 6.332 43.436 0.916C42.3827 0.312987 41.1895 -0.00291136 39.9758 -0.000103515C38.7621 0.00270433 37.5745 0.32412 36.524 0.932ZM54.832 34.844C55.5825 34.094 56.0044 33.0765 56.0048 32.0154C56.0052 30.9543 55.584 29.9366 54.834 29.186C54.0839 28.4354 53.0665 28.0136 52.0054 28.0132C50.9443 28.0128 49.9265 28.434 49.176 29.184L36.004 42.36L30.832 37.188C30.463 36.806 30.0216 36.5012 29.5336 36.2916C29.0456 36.082 28.5207 35.9716 27.9896 35.967C27.4585 35.9624 26.9317 36.0636 26.4402 36.2647C25.9486 36.4658 25.502 36.7628 25.1264 37.1384C24.7508 37.514 24.4538 37.9606 24.2527 38.4522C24.0516 38.9438 23.9504 39.4705 23.955 40.0016C23.9596 40.5327 24.0699 41.0576 24.2796 41.5456C24.4892 42.0336 24.7939 42.475 25.176 42.844L33.176 50.848C33.9261 51.5979 34.9433 52.0191 36.004 52.0191C37.0646 52.0191 38.0819 51.5979 38.832 50.848L54.832 34.844Z" fill="#E9940B" /> </g> <defs> <clipPath id="clip0_2_13218"> <rect width="80" height="80" fill="white" /> </clipPath> </defs> </svg>
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
                                                        <svg width="36" height="36" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M64.4516 16.2489L57.1183 12.4005C50.6811 9.0224 47.4625 7.33331 44.0001 7.33331C40.5376 7.33331 37.319 9.0224 30.8818 12.4005L29.7021 13.0196L62.4199 31.7154L77.1478 24.3515C74.7784 21.6681 70.9556 19.6619 64.4516 16.2489Z" fill="#B29367" /> <path d="M79.7441 29.2026L65.0833 36.5329V47.6667C65.0833 49.1854 63.8521 50.4167 62.3333 50.4167C60.8146 50.4167 59.5833 49.1854 59.5833 47.6667V39.2828L46.75 45.6995V80.3147C49.3823 79.6591 52.3776 78.0872 57.1182 75.5993L64.4516 71.7512C72.3411 67.6108 76.2857 65.5409 78.4762 61.8211C80.6667 58.1013 80.6667 53.4721 80.6667 44.2145V43.7855C80.6667 36.846 80.6667 32.5071 79.7441 29.2026Z" fill="#B29367" /> <path d="M41.25 80.3147V45.6995L8.25605 29.2026C7.33337 32.5071 7.33337 36.846 7.33337 43.7855V44.2145C7.33337 53.4721 7.33337 58.1013 9.52384 61.8211C11.7143 65.5409 15.659 67.6108 23.5484 71.7512L30.8818 75.5993C35.6226 78.0872 38.6177 79.6591 41.25 80.3147Z" fill="#B29367" /> <path d="M10.8522 24.3515L44 40.9255L56.5077 34.6716L23.9234 16.0521L23.5484 16.2489C17.0447 19.6619 13.2216 21.6681 10.8522 24.3515Z" fill="#B29367" /> </svg>
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
                                                        <svg width="36" height="36" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.42014 71.8996C26.0926 64.0068 24.8153 64.5895 25.4148 64.1905L24.9074 61.0903L18.8717 53.4861L17.8992 56.9362L3.03554 63.2189C0.415185 64.3265 -0.727462 67.1676 0.483218 69.5649C1.69367 71.9612 4.79885 73.0076 7.42014 71.8996Z" fill="#899DFF" /> <path d="M55.4701 16.5155C60.4554 16.5155 64.4968 12.8184 64.4968 8.25777C64.4968 3.69713 60.4554 0 55.4701 0C50.4848 0 46.4434 3.69713 46.4434 8.25777C46.4434 12.8184 50.4848 16.5155 55.4701 16.5155Z" fill="#899DFF" /> <path d="M79.2376 11.9197C77.9004 10.1139 75.2682 9.67482 73.3584 10.9395L58.4228 20.8298L49.2288 19.873C49.2288 19.873 49.2484 19.7695 40.5042 12.6508C38.0305 10.6368 34.2989 10.9007 32.1692 13.2401L12.2528 35.1196L12.2656 35.1199C10.8829 36.7623 10.7598 39.1332 12.1275 40.9148L26.1891 59.2279L28.8312 75.918C29.2465 78.5387 31.8287 80.3376 34.591 79.9466C37.358 79.5548 39.2651 77.1162 38.851 74.4995L36.0255 56.6514C35.9053 55.8905 35.5925 55.1684 35.1149 54.5458L32.3934 45.4057L27.5275 39.0251L35.5488 24.9804L43.9261 39.4956C44.62 40.6596 45.8834 41.4187 47.2947 41.5169L64.4513 42.7142C66.7756 42.8758 68.7997 41.2242 68.9703 39.0251C69.1411 36.8255 67.3941 34.9128 65.0693 34.7514L50.5062 33.7403L42.6231 20.5134L50.2917 28.0162L59.0795 28.9308C60.086 29.0353 61.1129 28.7954 61.9627 28.2327L78.2006 17.4797C80.1108 16.2151 80.5751 13.7258 79.2376 11.9197Z" fill="#899DFF" /> </svg>
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
                                                        <svg width="36" height="36" viewBox="0 0 119 88" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_2_13245)"> <path d="M1.5239 15.7476C28.0618 15.7476 54.5998 15.7476 81.9419 15.7476C81.9419 27.6136 81.9419 39.4796 81.9419 51.7052C56.8612 51.7052 31.7806 51.7052 5.93992 51.7052C5.93992 52.1675 5.93992 52.6298 5.93992 53.1061C31.4808 53.1061 57.0216 53.1061 83.3364 53.1061C83.3364 56.1111 83.3364 59.1162 83.3364 62.2122C77.9704 62.2755 72.6046 62.3271 67.2383 62.3574C64.7467 62.3719 62.2552 62.3916 59.7637 62.4236C57.592 62.4515 55.4205 62.4696 53.2486 62.4759C52.0985 62.4795 50.949 62.4881 49.7991 62.5085C48.7163 62.5275 47.6342 62.5334 46.5513 62.5292C46.1543 62.5299 45.7572 62.5355 45.3604 62.5462C44.1724 62.5769 43.1056 62.5717 41.9653 62.2122C41.3415 61.5473 41.0061 60.9521 40.6521 60.1133C39.8095 58.2256 37.7781 57.0907 35.9223 56.375C33.3133 55.5212 30.4578 55.8472 28.02 57.0755C26.0373 58.3044 24.5341 60.0687 23.604 62.2122C23.1438 62.2122 22.6836 62.2122 22.2094 62.2122C22.139 62.0599 22.0686 61.9076 21.9961 61.7507C20.7216 59.0798 19.1142 57.5083 16.3263 56.4042C13.7414 55.6119 11.25 55.7485 8.78799 56.9095C6.47182 58.234 5.25146 59.8295 4.08054 62.2122C2.56334 61.694 1.55428 60.8723 0.826637 59.4104C0.797967 58.8759 0.785828 58.3404 0.783058 57.8051C0.779762 57.5168 0.776467 57.2284 0.773071 56.9313C0.826637 56.1415 0.826637 56.1415 1.29148 55.2075C1.40653 35.6749 1.40653 35.6749 1.5239 15.7476Z" fill="#FF5A32" /> <path d="M88.1457 18.1987C88.3699 18.1968 88.5941 18.1948 88.825 18.1928C89.0706 18.1954 89.3162 18.1981 89.5693 18.2008C89.8282 18.1999 90.0871 18.199 90.3539 18.1981C91.2124 18.1963 92.0706 18.2013 92.9291 18.2066C93.5245 18.2071 94.12 18.2073 94.7155 18.2072C95.9648 18.208 97.2141 18.2117 98.4634 18.2181C99.9065 18.2254 101.35 18.2279 102.793 18.2276C104.182 18.2273 105.571 18.2297 106.96 18.2335C107.551 18.235 108.141 18.2359 108.732 18.2363C109.558 18.2373 110.383 18.2414 111.209 18.2464C111.576 18.246 111.576 18.246 111.95 18.2457C112.289 18.2487 112.289 18.2487 112.634 18.2518C112.829 18.2525 113.024 18.2533 113.225 18.2541C113.881 18.3247 114.361 18.4717 114.946 18.7812C115.195 19.1709 115.195 19.1709 115.338 19.6297C115.391 19.797 115.445 19.9642 115.5 20.1365C115.717 20.9157 115.924 21.6949 116.106 22.4832C116.167 22.7429 116.167 22.7429 116.23 23.0077C116.364 23.5756 116.495 24.1439 116.626 24.7124C116.694 25.008 116.694 25.008 116.764 25.3096C117.005 26.356 117.245 27.4029 117.483 28.45C117.677 29.3042 117.876 30.1574 118.077 31.01C119.199 35.7562 120.243 40.25 119.826 45.1656C119.443 45.1656 119.059 45.1656 118.664 45.1656C118.664 47.7083 118.664 50.251 118.664 52.8708C119.048 52.8708 119.431 52.8708 119.826 52.8708C119.844 53.9886 119.856 55.1062 119.865 56.2241C119.868 56.6044 119.873 56.9846 119.879 57.3649C119.888 57.9114 119.891 58.4579 119.895 59.0045C119.898 59.1745 119.902 59.3446 119.905 59.5197C119.906 60.1654 119.892 60.6849 119.589 61.2626C118.857 61.6567 118.101 61.6479 117.288 61.6687C117.107 61.6738 116.926 61.6789 116.74 61.6841C116.357 61.6928 115.974 61.6993 115.591 61.7039C115.008 61.7142 114.428 61.7419 113.845 61.7699C111.116 61.8409 111.116 61.8409 110.168 60.9555C109.744 60.2695 109.744 60.2695 109.437 59.5846C108.608 57.8181 106.633 57.0534 104.927 56.3604C102.451 55.5481 99.9203 55.8007 97.573 56.9076C96.2458 57.6666 94.6931 58.6475 94.0587 60.1044C93.788 60.6765 93.5555 61.0709 93.0979 61.51C92.1154 61.776 91.1747 61.7394 90.1636 61.6997C89.7645 61.7017 89.7645 61.7017 89.3574 61.7038C87.8996 61.6771 87.8996 61.6771 87.2874 61.51C86.2842 60.2841 86.3287 58.7946 86.3251 57.2725C86.3244 57.1098 86.3237 56.9472 86.323 56.7796C86.321 56.2376 86.3206 55.6956 86.3202 55.1536C86.3192 54.7639 86.318 54.3741 86.3168 53.9843C86.3137 52.9279 86.3122 51.8715 86.3112 50.815C86.3105 50.155 86.3095 49.495 86.3085 48.835C86.3053 46.77 86.3031 44.705 86.3022 42.64C86.3011 40.256 86.297 37.872 86.2903 35.488C86.2853 33.6446 86.283 31.8013 86.2826 29.9579C86.2824 28.857 86.281 27.7561 86.2769 26.6551C86.2731 25.6206 86.2725 24.5861 86.2746 23.5516C86.2748 23.1717 86.2737 22.7918 86.2715 22.4119C86.2685 21.8939 86.2699 21.376 86.2723 20.858C86.2719 20.5679 86.2716 20.2779 86.2713 19.9791C86.4228 18.6979 86.8592 18.1971 88.1457 18.1987ZM91.0061 22.2835C91.0061 27.2149 91.0061 32.1462 91.0061 37.2269C98.446 37.2269 105.886 37.2269 113.551 37.2269C113.164 33.9 113.164 33.9 112.693 30.588C112.641 30.2482 112.641 30.2482 112.587 29.9016C112.515 29.4326 112.442 28.9636 112.369 28.4947C112.257 27.7742 112.146 27.0535 112.035 26.3327C111.964 25.8734 111.893 25.4142 111.822 24.955C111.772 24.6326 111.772 24.6326 111.722 24.3036C111.675 24.0073 111.675 24.0073 111.628 23.7051C111.601 23.5314 111.574 23.3578 111.546 23.1789C111.474 22.7304 111.474 22.7304 111.227 22.2835C104.554 22.2835 97.8812 22.2835 91.0061 22.2835ZM92.1682 39.3284C92.1682 39.6366 92.1682 39.9448 92.1682 40.2623C93.8556 40.2623 95.543 40.2623 97.2815 40.2623C97.2815 39.9541 97.2815 39.6459 97.2815 39.3284C95.5941 39.3284 93.9068 39.3284 92.1682 39.3284ZM107.973 54.7387C108.356 55.124 108.74 55.5093 109.135 55.9062C109.266 56.0955 109.397 56.2848 109.533 56.4799C109.981 57.1172 110.356 57.5569 110.994 58.0076C112.184 58.187 113.288 58.134 114.481 58.0076C114.481 56.9289 114.481 55.8501 114.481 54.7387C112.333 54.7387 110.186 54.7387 107.973 54.7387Z" fill="#FF5A32" /> <path d="M36.3866 58.0093C37.9999 59.1259 39.1577 60.5237 39.7812 62.4027C40.1625 64.5229 40.0846 66.6644 38.9432 68.5164C38.8617 68.6617 38.7802 68.8071 38.6963 68.9569C37.8194 70.367 36.4865 71.2014 34.9921 71.8582C32.6453 72.3985 30.5778 72.2905 28.4252 71.1158C27.808 70.7135 27.3412 70.2375 26.8573 69.6838C26.6991 69.5153 26.5409 69.3467 26.3779 69.1731C25.0296 67.2068 24.7382 65.274 24.9979 62.9126C25.4008 61.0989 26.3971 59.6843 27.787 58.4763C30.4852 56.7709 33.5146 56.4737 36.3866 58.0093ZM28.1174 61.9166C27.427 63.0218 27.2313 64.1023 27.4038 65.3907C27.8058 66.9939 28.5106 68.2076 29.9396 69.0654C31.3377 69.7137 32.5726 69.8734 34.0624 69.4503C35.4467 68.8245 36.3 67.9609 37.1274 66.6922C37.7578 64.9874 37.5286 63.6237 36.8514 61.9786C36.1666 60.7879 35.0948 60.1163 33.8299 59.6437C31.4119 59.2435 29.6368 60.0262 28.1174 61.9166Z" fill="#FF5A32" /> <path d="M16.3987 57.7776C18.1774 58.8784 19.5999 60.3697 20.2046 62.4183C20.6518 64.7814 20.4199 67.0257 19.0615 69.0536C17.7109 70.7085 15.93 71.8644 13.813 72.1957C11.5523 72.3953 9.57256 71.8126 7.79907 70.3861C6.1235 68.6426 5.24243 66.749 5.24243 64.3154C5.46181 62.0392 6.27579 60.2407 7.94161 58.6724C10.3439 56.8199 13.6679 56.3579 16.3987 57.7776ZM9.2508 61.0164C8.27803 62.2621 7.67323 63.344 7.72826 64.9748C7.96392 66.6654 8.79562 67.8503 10.1079 68.8967C11.3258 69.7132 12.5298 69.7922 13.9437 69.6081C15.2728 69.2601 16.4187 68.4484 17.2122 67.3216C17.9245 65.95 18.0775 64.3587 17.6425 62.8633C17.0263 61.4877 16.0348 60.4951 14.6809 59.8462C12.7469 59.2063 10.6645 59.5013 9.2508 61.0164Z" fill="#FF5A32" /> <path d="M105.184 57.7754C106.963 58.8761 108.385 60.3675 108.99 62.416C109.437 64.7792 109.205 67.0235 107.847 69.0513C106.496 70.7062 104.715 71.8621 102.598 72.1934C100.336 72.3931 98.3598 71.809 96.5842 70.3838C94.916 68.6764 94.0316 66.7131 94.0276 64.3131C94.22 62.0844 95.1477 60.1355 96.7867 58.6099C99.1978 56.8188 102.479 56.369 105.184 57.7754ZM98.036 61.0059C96.9394 62.3915 96.4024 63.6844 96.5842 65.4805C97.0514 67.1529 97.9421 68.257 99.3733 69.2164C100.684 69.8016 101.949 69.8044 103.324 69.4499C104.735 68.8211 105.715 67.9273 106.39 66.5294C106.843 65.1309 106.805 63.7222 106.215 62.3722C105.443 61.0319 104.318 60.126 102.86 59.6433C100.996 59.4026 99.3711 59.6019 98.036 61.0059Z" fill="#FF5A32" /> </g> <defs> <clipPath id="clip0_2_13245"> <rect width="119" height="88" fill="white" /> </clipPath> </defs> </svg>
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


                                                <div className='grid grid-cols-1 lg:grid-cols-5 gap-4 mt-4 items-center'>
                                                    <div className='relative flex justify-end col-span-1 lg:col-span-3'>
                                                        <svg className='absolute translate-y-6.5 -translate-x-3' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.25 12.25L8.75006 8.75M9.91667 5.83333C9.91667 8.0885 8.0885 9.91667 5.83333 9.91667C3.57817 9.91667 1.75 8.0885 1.75 5.83333C1.75 3.57817 3.57817 1.75 5.83333 1.75C8.0885 1.75 9.91667 3.57817 9.91667 5.83333Z" stroke="#717182" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                                                        <input type="number" className='w-full bg-(--grey6) border border-[#BFCAD252] rounded-xl pl-3 pr-7 mt-4 h-[35px]' placeholder='VIN Number' />
                                                    </div>

                                                    <div className='flex items-center gap-3 justify-center col-span-1'>
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

                                                    <div className='leadReactSelectSetting col-span-1' >
                                                        <Select options={makeData} classNamePrefix="react-select" placeholder='Make' />

                                                    </div>
                                                    <div className='col-span-1' >
                                                        <input type="text" className='w-full bg-(--grey6) border border-[#BFCAD252] rounded-xl px-3 h-[35px]' placeholder='yyyy' />
                                                    </div>
                                                    <div className='leadReactSelectSetting col-span-1' >
                                                        <Select options={modelData} classNamePrefix="react-select" placeholder='Model' />

                                                    </div>
                                                    <div className='leadReactSelectSetting col-span-1' >
                                                        <Select options={makeData} classNamePrefix="react-select" placeholder='Make' />

                                                    </div>
                                                    <div className='leadReactSelectSetting col-span-1' >
                                                        <Select options={pricingData} classNamePrefix="react-select" placeholder='Value' />

                                                    </div>
                                                    <div className='leadReactSelectSetting col-span-1' >
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
                                                    <input type="text" name='firstName' className='w-full bg-(--grey6) border border-[#BFCAD252] rounded-[8px] px-3 h-[35px] text-[12px] text-[#656A73]' placeholder='First Name' />
                                                </div>
                                                <div>
                                                    <input type="text" name='lastName' className='w-full bg-(--grey6) border border-[#BFCAD252] rounded-[8px] px-3 h-[35px] text-[12px] text-[#656A73]' placeholder='Last Name' />
                                                </div>

                                                <div>
                                                    <Popover open={openDate} onOpenChange={() => dispatch({ type: "setOpdenDate", payload: (!openDate) })}>
                                                        <PopoverTrigger className='w-full' asChild>
                                                            <Button
                                                                variant="outline"
                                                                id="date"
                                                                className="w-full justify-between bg-(--grey6) font-normal border border-[#BFCAD252] h-[35px] rounded-[8px] shadow-none text-[12px] text-[#98a1af]"
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
                                                    <Select options={dDriverType} classNamePrefix="react-select" placeholder='Driver Type' />
                                                </div>
                                                <div>
                                                    <input type="text" name='licenseNo' className='w-full bg-(--grey6) border border-[#BFCAD252] rounded-[8px] px-3 h-[35px] text-[12px] text-[#656A73]' placeholder='License Number' />
                                                </div>
                                                <div className='leadReactSelectSetting'>
                                                    <Select options={dStateType} classNamePrefix="react-select" placeholder='State' />
                                                </div>
                                                <div className='leadReactSelectSetting'>
                                                    <Select options={dLicenseType} classNamePrefix="react-select" placeholder='License Type' />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <Popover open={driverDateHiredOpen} onOpenChange={(val) => dispatch({ type: 'setDriverDateHiredOpen', payload: val })}>
                                                        <PopoverTrigger asChild>
                                                            <button className="w-full flex flex-row items-center justify-between bg-(--grey6) border border-[#BFCAD252] rounded-[8px] h-[35px] px-3 text-left font-normal shadow-none text-[12px] text-[#98a1af] cursor-pointer ">
                                                                {driverDateHiredVal ? driverDateHiredVal.toLocaleDateString() : 'Date Hired'}
                                                                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.25 5.41667H0.75M8.33333 0.75V3.08333M3.66667 0.75V3.08333M3.55 12.4167H8.45C9.43009 12.4167 9.92014 12.4167 10.2945 12.2259C10.6238 12.0581 10.8915 11.7904 11.0593 11.4611C11.25 11.0868 11.25 10.5968 11.25 9.61667V4.71667C11.25 3.73657 11.25 3.24653 11.0593 2.87218C10.8915 2.5429 10.6238 2.27518 10.2945 2.10741C9.92014 1.91667 9.43009 1.91667 8.45 1.91667H3.55C2.56991 1.91667 2.07986 1.91667 1.70552 2.10741C1.37623 2.27518 1.10852 2.5429 0.940739 2.87218C0.75 3.24653 0.75 3.73657 0.75 4.71667V9.61667C0.75 10.5968 0.75 11.0868 0.940739 11.4611C1.10852 11.7904 1.37623 12.0581 1.70552 12.2259C2.07986 12.4167 2.56991 12.4167 3.55 12.4167Z" stroke="#717182" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>

                                                            </button>
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
                                                <div className="md:col-span-2 w-full">
                                                    <div className="grid grid-cols-[1fr_3fr] items-center">
                                                        <span className='text-[14px] font-medium text-(--dark4)'>Experience</span>
                                                        <Popover open={driverExperienceOpen} onOpenChange={(val) => dispatch({ type: 'setDriverExperienceOpen', payload: val })}>
                                                            <PopoverTrigger asChild>
                                                                <button className="w-full flex flex-row items-center justify-between bg-(--grey6) border border-[#BFCAD252] rounded-[8px] h-[35px] px-3 text-left font-normal shadow-none text-[12px] text-[#98a1af] cursor-pointer">
                                                                    {driverExperienceVal ? driverExperienceVal.toLocaleDateString() : 'Issued Date'}
                                                                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.25 5.41667H0.75M8.33333 0.75V3.08333M3.66667 0.75V3.08333M3.55 12.4167H8.45C9.43009 12.4167 9.92014 12.4167 10.2945 12.2259C10.6238 12.0581 10.8915 11.7904 11.0593 11.4611C11.25 11.0868 11.25 10.5968 11.25 9.61667V4.71667C11.25 3.73657 11.25 3.24653 11.0593 2.87218C10.8915 2.5429 10.6238 2.27518 10.2945 2.10741C9.92014 1.91667 9.43009 1.91667 8.45 1.91667H3.55C2.56991 1.91667 2.07986 1.91667 1.70552 2.10741C1.37623 2.27518 1.10852 2.5429 0.940739 2.87218C0.75 3.24653 0.75 3.73657 0.75 4.71667V9.61667C0.75 10.5968 0.75 11.0868 0.940739 11.4611C1.10852 11.7904 1.37623 12.0581 1.70552 12.2259C2.07986 12.4167 2.56991 12.4167 3.55 12.4167Z" stroke="#717182" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>

                                                                </button>
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
                                                    <input type="text" name='dateHired' className='w-full bg-(--grey6) border border-[#BFCAD252] rounded-[8px] px-3 h-[35px] text-[12px] text-[#656A73]' placeholder='Date Hired' />
                                                </div>
                                                <div>
                                                    <input type="text" name='operatingExp' className='w-full bg-(--grey6) border border-[#BFCAD252] rounded-[8px] px-3 h-[35px] text-[12px] text-[#656A73]' placeholder='Operating Experience' />
                                                </div>


                                            </div>

                                            <div className='flex justify-end mt-6'>
                                                <button className='px-8 btn-primary'>Add</button>
                                            </div>


                                            <div className='flex justify-between items-center mt-6'>
                                                <label htmlFor="" className='text-[14px] font-medium text-(--dark4) '>
                                                    Driver’s List
                                                </label>
                                                <div className='relative flex justify-end '>
                                                    <svg className='absolute translate-y-3 -translate-x-3' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.25 12.25L8.75006 8.75M9.91667 5.83333C9.91667 8.0885 8.0885 9.91667 5.83333 9.91667C3.57817 9.91667 1.75 8.0885 1.75 5.83333C1.75 3.57817 3.57817 1.75 5.83333 1.75C8.0885 1.75 9.91667 3.57817 9.91667 5.83333Z" stroke="#717182" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                                                    <input type="number" className='w-full bg-(--grey6) border border-[#BFCAD252] rounded-xl pl-3 pr-7 h-[35px]' placeholder='VIN Number' />
                                                </div>

                                            </div>
                                            <Separator className='mt-3 bg-(--green1)' />


                                            <div className='mt-6 grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
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
