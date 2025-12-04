'use client'
import { useState } from 'react'
import KanvanCard from '@/app/component/leads/kanban'

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function Page() {

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
                                        `text-[16px] transition-colors
                    ${isActive ? 'text-[#22886B] font-semibold' : ''}
                    ${isCompleted && !isActive ? 'text-[#047857]' : 'font-medium text-[#45556C]'}
                    `
                                    }>
                                        {s.label}
                                        {isCompleted && !isActive ? '✓' : null}

                                    </span>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                {/* Right Form */}
                <div className='bg-white rounded-3xl border p-4'>
                    <form onSubmit={(e) => { e.preventDefault(); /* handle save */ }}>
                        <div className='flex justify-between items-center mb-6'>
                            <h1 className='text-xl font-semibold'>Add Lead</h1>

                            <div className='flex items-center gap-3'>
                                {stepIndex === 0 ? null : (
                                    <button type="button" onClick={goBack} className='btn-primary'>
                                        Back
                                    </button>
                                )}
                                <button type="button" className='btn-primary'>
                                    Cancel
                                </button>

                                <button type="submit" className='btn-primary'>
                                    Save
                                </button>

                                <button
                                    type="button"
                                    onClick={goNext}
                                    className='btn-primary'
                                >
                                    Next
                                </button>
                            </div>
                        </div>

                        {/* Header Box */}
                        <div className='bg-[#EDFFF5] w-full rounded-[12px] flex items-center gap-2 min-h-[52px] px-3'>
                            <span className='text-[#22886B] font-semibold text-[16px]'>
                                {stepIndex + 1}. {steps[stepIndex].label}
                            </span>
                        </div>

                        {/* Step Content */}
                        <div className='mt-5'>
                            {currForm === 'applicationInformation' && <>Application Fields...</>}
                            {currForm === 'coverage' && <>Coverage Fields...</>}
                            {currForm === 'equipment' && <>Equipment Fields...</>}
                            {currForm === 'drivers' && <>Driver Fields...</>}
                            {currForm === 'documents' && <>Documents Fields...</>}
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
