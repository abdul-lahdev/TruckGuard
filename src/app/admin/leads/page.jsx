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

export default function Page() {


    const initialState = {
        openDate: false,
        dateVal: undefined,
        dateAuthority: false,
        dateAuthorityVal: undefined,
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
            case 'setNewLead':
                return {
                    ...state,
                    newLead: action.payload
                }
            default:
                throw new Error('Unknown action type')
        }

    }

    const [{ openDate, dateVal, stateData, businessType, dateAuthority, dateAuthorityVal, newLead }, dispatch] = useReducer(reducer, initialState)



    const steps = [
        { id: 'applicationInformation', label: 'Application Information' },
        { id: 'coverage', label: 'Coverage' },
        { id: 'equipment', label: 'Equipment' },
        { id: 'drivers', label: 'Drivers' },
        { id: 'documents', label: 'Documents' },
    ]

    const [stepIndex, setStepIndex] = useState(0)

    const currForm = steps[stepIndex].id

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
                                            {stepIndex + 1}. {steps[stepIndex].label}
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
                                        {currForm === 'coverage' && <>Coverage Fields...</>}
                                        {currForm === 'equipment' && <>Equipment Fields...</>}
                                        {currForm === 'drivers' && <>Driver Fields...</>}
                                        {currForm === 'documents' && <>Documents Fields...</>}
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
