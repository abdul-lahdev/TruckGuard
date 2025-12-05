'use client'
import dynamic from "next/dynamic";

import { useState } from "react"
import * as React from "react"
import { Calendar } from "@/components/ui/calendar"


import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Lock, FileClock } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import LeadCard from "@/app/component/dashboard/lead-cards";
import { leadsData } from "@/app/constants/leads";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectValue,
    SelectItem,
} from "@/components/ui/select";

import { Separator } from "@/components/ui/separator"
import Link from "next/link";


import TaskCard from '@/app/component/dashboard/task-card'

const RevenueChart = dynamic(
    () => import('@/app/component/dashboard/revenue-chart'),
    { ssr: false } // only render on client
);

const ClaimsChart = dynamic(
    () => import('@/app/component/dashboard/claims-chart'),
    { ssr: false } // only render on client
);
const LeadsOverViewChart = dynamic(
    () => import('@/app/component/dashboard/leads-overview'),
    { ssr: false } // only render on client
);




function Page() {

    const categories = ["New Business", "Renewal", "Endorsements", "Claims"];
    const [selected, setSelected] = useState("New Business");

    const [open, setOpen] = React.useState(false)
    const [date, setDate] = useState(undefined)
    const [open2, setOpen2] = React.useState(false)
    const [date2, setDate2] = useState(undefined)

    const dashboardCards = [
        {
            title: "Total Monthly Premium", value: "$32,143", icon:
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"> <g filter="url(#filter0_ii_1_4421)"> <rect x="8" y="8" width="48" height="48" rx="24" fill="#20C797" fillOpacity="0.18" /> <g clipPath="url(#clip0_1_4421)"> <path d="M32.0002 20.3333C25.5602 20.3333 20.3335 25.56 20.3335 32C20.3335 38.44 25.5602 43.6667 32.0002 43.6667C38.4402 43.6667 43.6668 38.44 43.6668 32C43.6668 25.56 38.4402 20.3333 32.0002 20.3333ZM32.0002 41.3333C26.8552 41.3333 22.6668 37.145 22.6668 32C22.6668 26.855 26.8552 22.6667 32.0002 22.6667C37.1452 22.6667 41.3335 26.855 41.3335 32C41.3335 37.145 37.1452 41.3333 32.0002 41.3333ZM32.3618 30.9967C30.2968 30.4717 29.6318 29.9 29.6318 29.0483C29.6318 28.0683 30.5535 27.38 32.0818 27.38C33.6918 27.38 34.2985 28.15 34.3452 29.2933H36.3402C36.2818 27.73 35.3252 26.295 33.4352 25.8283V23.8333H30.7168V25.805C28.9552 26.1783 27.5435 27.3217 27.5435 29.0833C27.5435 31.1717 29.2818 32.2217 31.8135 32.8283C34.0885 33.365 34.5435 34.17 34.5435 35.01C34.5435 35.6283 34.0885 36.6317 32.0935 36.6317C30.2268 36.6317 29.4918 35.7917 29.3868 34.7183H27.3802C27.4968 36.7017 28.9668 37.8217 30.7168 38.1833V40.1667H33.4468V38.2183C35.2202 37.88 36.6202 36.865 36.6318 34.9867C36.6202 32.42 34.4152 31.5333 32.3618 30.9967Z" fill="#22886B" /> </g> </g> <defs> <filter id="filter0_ii_1_4421" x="8" y="6" width="48" height="52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"> <feFlood floodOpacity="0" result="BackgroundImageFix" /> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" /> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /> <feOffset dy="2" /> <feGaussianBlur stdDeviation="4" /> <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" /> <feColorMatrix type="matrix" values="0 0 0 0 0.133333 0 0 0 0 0.533333 0 0 0 0 0.419608 0 0 0 0.24 0" /> <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_4421" /> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /> <feOffset dy="-2" /> <feGaussianBlur stdDeviation="3" /> <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" /> <feColorMatrix type="matrix" values="0 0 0 0 0.133333 0 0 0 0 0.533333 0 0 0 0 0.419608 0 0 0 0.32 0" /> <feBlend mode="normal" in2="effect1_innerShadow_1_4421" result="effect2_innerShadow_1_4421" /> </filter> <clipPath id="clip0_1_4421"> <rect width="28" height="28" fill="white" transform="translate(18 18)" /> </clipPath> </defs> </svg>
        },
        {
            title: "Total Claims", value: "$32,143", icon:
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"> <g filter="url(#filter0_ii_1_4428)"> <rect x="8" y="8" width="48" height="48" rx="24" fill="#F0B350" fillOpacity="0.18" /> <path d="M31.9999 36.6667V32M31.9999 27.3333H32.0116M20.3333 27.9432V36.0568C20.3333 36.3422 20.3333 36.4848 20.3655 36.6191C20.3941 36.7382 20.4412 36.852 20.5052 36.9563C20.5773 37.0741 20.6782 37.175 20.88 37.3767L26.6232 43.1199C26.825 43.3217 26.9259 43.4226 27.0436 43.4948C27.148 43.5587 27.2618 43.6059 27.3808 43.6344C27.5151 43.6667 27.6578 43.6667 27.9431 43.6667H36.0567C36.3421 43.6667 36.4848 43.6667 36.619 43.6344C36.7381 43.6059 36.8519 43.5587 36.9562 43.4948C37.074 43.4226 37.1749 43.3217 37.3767 43.1199L43.1198 37.3767C43.3216 37.175 43.4225 37.0741 43.4947 36.9563C43.5586 36.852 43.6058 36.7382 43.6343 36.6191C43.6666 36.4848 43.6666 36.3422 43.6666 36.0568V27.9432C43.6666 27.6579 43.6666 27.5152 43.6343 27.3809C43.6058 27.2619 43.5586 27.1481 43.4947 27.0437C43.4225 26.9259 43.3216 26.8251 43.1198 26.6233L37.3767 20.8801C37.1749 20.6783 37.074 20.5774 36.9562 20.5053C36.8519 20.4413 36.7381 20.3942 36.619 20.3656C36.4848 20.3333 36.3421 20.3333 36.0567 20.3333H27.9431C27.6578 20.3333 27.5151 20.3333 27.3808 20.3656C27.2618 20.3942 27.148 20.4413 27.0436 20.5053C26.9259 20.5774 26.825 20.6783 26.6232 20.8801L20.88 26.6233C20.6782 26.8251 20.5773 26.9259 20.5052 27.0437C20.4412 27.1481 20.3941 27.2619 20.3655 27.3809C20.3333 27.5152 20.3333 27.6579 20.3333 27.9432Z" stroke="#F0B350" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g> <defs> <filter id="filter0_ii_1_4428" x="8" y="6" width="48" height="52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"> <feFlood floodOpacity="0" result="BackgroundImageFix" /> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" /> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /> <feOffset dy="2" /> <feGaussianBlur stdDeviation="4" /> <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" /> <feColorMatrix type="matrix" values="0 0 0 0 0.942308 0 0 0 0 0.700917 0 0 0 0 0.312592 0 0 0 0.24 0" /> <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_4428" /> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /> <feOffset dy="-2" /> <feGaussianBlur stdDeviation="3" /> <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" /> <feColorMatrix type="matrix" values="0 0 0 0 0.942308 0 0 0 0 0.700917 0 0 0 0 0.312592 0 0 0 0.32 0" /> <feBlend mode="normal" in2="effect1_innerShadow_1_4428" result="effect2_innerShadow_1_4428" /> </filter> </defs> </svg>
        }
        ,
        {
            title: "Active Leads", value: "2,321", icon:
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"> <g filter="url(#filter0_ii_1_4435)"> <rect x="8" y="8" width="48" height="48" rx="24" fill="#4E9FFF" fillOpacity="0.18" /> <g opacity="0.8" filter="url(#filter1_d_1_4435)"> <path d="M31.9999 36.0833H26.7499C25.1218 36.0833 24.3077 36.0833 23.6453 36.2843C22.1538 36.7367 20.9866 37.9039 20.5342 39.3953C20.3333 40.0578 20.3333 40.8718 20.3333 42.5M36.6666 39L38.9999 41.3333L43.6666 36.6667M34.9166 26.75C34.9166 29.6495 32.5661 32 29.6666 32C26.7671 32 24.4166 29.6495 24.4166 26.75C24.4166 23.8505 26.7671 21.5 29.6666 21.5C32.5661 21.5 34.9166 23.8505 34.9166 26.75Z" stroke="#155DFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g> </g> <defs> <filter id="filter0_ii_1_4435" x="8" y="6" width="48" height="52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"> <feFlood floodOpacity="0" result="BackgroundImageFix" /> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" /> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /> <feOffset dy="2" /> <feGaussianBlur stdDeviation="4" /> <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" /> <feColorMatrix type="matrix" values="0 0 0 0 0.305882 0 0 0 0 0.623529 0 0 0 0 1 0 0 0 0.24 0" /> <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_4435" /> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /> <feOffset dy="-2" /> <feGaussianBlur stdDeviation="3" /> <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" /> <feColorMatrix type="matrix" values="0 0 0 0 0.305882 0 0 0 0 0.623529 0 0 0 0 1 0 0 0 0.32 0" /> <feBlend mode="normal" in2="effect1_innerShadow_1_4435" result="effect2_innerShadow_1_4435" /> </filter> <filter id="filter1_d_1_4435" x="14" y="18" width="36" height="36" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"> <feFlood floodOpacity="0" result="BackgroundImageFix" /> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /> <feOffset dy="4" /> <feGaussianBlur stdDeviation="2" /> <feComposite in2="hardAlpha" operator="out" /> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.482353 0 0 0 0 1 0 0 0 0.01 0" /> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_4435" /> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_4435" result="shape" /> </filter> </defs> </svg>
        },
        {
            title: "Active Policies", value: "2,322", icon:
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"> <g filter="url(#filter0_ii_1_4442)"> <rect x="8" y="8" width="48" height="48" rx="24" fill="#892ADB" fillOpacity="0.18" /> <path d="M36.6667 22.6667C37.7517 22.6667 38.2942 22.6667 38.7393 22.7859C39.9471 23.1096 40.8905 24.053 41.2142 25.2608C41.3334 25.7059 41.3334 26.2484 41.3334 27.3333V38.0667C41.3334 40.0269 41.3334 41.007 40.9519 41.7556C40.6164 42.4142 40.0809 42.9496 39.4224 43.2852C38.6737 43.6667 37.6936 43.6667 35.7334 43.6667H28.2667C26.3066 43.6667 25.3265 43.6667 24.5778 43.2852C23.9192 42.9496 23.3838 42.4142 23.0482 41.7556C22.6667 41.007 22.6667 40.0269 22.6667 38.0667V27.3333C22.6667 26.2484 22.6667 25.7059 22.786 25.2608C23.1096 24.053 24.0531 23.1096 25.2609 22.7859C25.706 22.6667 26.2484 22.6667 27.3334 22.6667M29.2001 25H34.8001C35.4535 25 35.7802 25 36.0297 24.8729C36.2493 24.761 36.4277 24.5825 36.5396 24.363C36.6667 24.1134 36.6667 23.7867 36.6667 23.1333V22.2C36.6667 21.5466 36.6667 21.2199 36.5396 20.9704C36.4277 20.7508 36.2493 20.5724 36.0297 20.4605C35.7802 20.3333 35.4535 20.3333 34.8001 20.3333H29.2001C28.5467 20.3333 28.22 20.3333 27.9704 20.4605C27.7509 20.5724 27.5724 20.7508 27.4606 20.9704C27.3334 21.2199 27.3334 21.5466 27.3334 22.2V23.1333C27.3334 23.7867 27.3334 24.1134 27.4606 24.363C27.5724 24.5825 27.7509 24.761 27.9704 24.8729C28.22 25 28.5467 25 29.2001 25Z" stroke="#892ADB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g> <defs> <filter id="filter0_ii_1_4442" x="8" y="6" width="48" height="52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"> <feFlood floodOpacity="0" result="BackgroundImageFix" /> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" /> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /> <feOffset dy="2" /> <feGaussianBlur stdDeviation="4" /> <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" /> <feColorMatrix type="matrix" values="0 0 0 0 0.537255 0 0 0 0 0.164706 0 0 0 0 0.858824 0 0 0 0.24 0" /> <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_4442" /> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /> <feOffset dy="-2" /> <feGaussianBlur stdDeviation="3" /> <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" /> <feColorMatrix type="matrix" values="0 0 0 0 0.537255 0 0 0 0 0.164706 0 0 0 0 0.858824 0 0 0 0.32 0" /> <feBlend mode="normal" in2="effect1_innerShadow_1_4442" result="effect2_innerShadow_1_4442" /> </filter> </defs> </svg>
        },
    ]


    const items = [
        {
            time: "01:23 AM",
            title: "Claim Logged",
            author: "Alex Will",
            icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="28" height="28" rx="14" fill="#EAB919" fillOpacity="0.12" /> <rect x="2" y="2" width="24" height="24" rx="12" fill="#EAB919" fillOpacity="0.12" /> <path d="M13.9999 11.3334V14M13.9999 16.6667H14.0066M7.33325 11.6819V16.3182C7.33325 16.4813 7.33325 16.5628 7.35167 16.6395C7.368 16.7076 7.39494 16.7726 7.43149 16.8322C7.47272 16.8995 7.53037 16.9572 7.64567 17.0725L10.9275 20.3543C11.0428 20.4696 11.1005 20.5272 11.1677 20.5685C11.2274 20.605 11.2924 20.632 11.3604 20.6483C11.4372 20.6667 11.5187 20.6667 11.6817 20.6667H16.3181C16.4812 20.6667 16.5627 20.6667 16.6394 20.6483C16.7074 20.632 16.7725 20.605 16.8321 20.5685C16.8994 20.5272 16.957 20.4696 17.0723 20.3543L20.3542 17.0725C20.4695 16.9572 20.5271 16.8995 20.5683 16.8322C20.6049 16.7726 20.6318 16.7076 20.6482 16.6395C20.6666 16.5628 20.6666 16.4813 20.6666 16.3182V11.6819C20.6666 11.5188 20.6666 11.4373 20.6482 11.3606C20.6318 11.2925 20.6049 11.2275 20.5683 11.1679C20.5271 11.1006 20.4695 11.0429 20.3542 10.9276L17.0723 7.64579C16.957 7.53049 16.8994 7.47284 16.8321 7.43161C16.7725 7.39506 16.7074 7.36813 16.6394 7.35179C16.5627 7.33337 16.4812 7.33337 16.3181 7.33337H11.6817C11.5187 7.33337 11.4372 7.33337 11.3604 7.35179C11.2924 7.36813 11.2274 7.39506 11.1677 7.43161C11.1005 7.47284 11.0428 7.53049 10.9275 7.64579L7.64567 10.9276C7.53037 11.0429 7.47272 11.1006 7.43149 11.1679C7.39494 11.2275 7.368 11.2925 7.35167 11.3606C7.33325 11.4373 7.33325 11.5188 7.33325 11.6819Z" stroke="#EAB919" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>,
        },
        {
            time: "01:23 AM",
            title: "Added Task",
            author: "Alex Will",
            icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="28" height="28" rx="14" fill="#4EC483" fillOpacity="0.12" /> <rect x="2" y="2" width="24" height="24" rx="12" fill="#4EC483" fillOpacity="0.12" /> <path d="M10.9999 14L12.9999 16L16.9999 12M20.6666 14C20.6666 17.6819 17.6818 20.6667 13.9999 20.6667C10.318 20.6667 7.33325 17.6819 7.33325 14C7.33325 10.3181 10.318 7.33337 13.9999 7.33337C17.6818 7.33337 20.6666 10.3181 20.6666 14Z" stroke="#4EC483" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>,
        },
        {
            time: "01:23 AM",
            title: "Policy Locked",
            author: "Alex Will",
            icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="28" height="28" rx="14" fill="#E1F930" fillOpacity="0.12" /> <rect x="2" y="2" width="24" height="24" rx="12" fill="#E1F930" fillOpacity="0.12" /> <path d="M8 11.2C8 10.0799 8 9.51984 8.21799 9.09202C8.40973 8.71569 8.71569 8.40973 9.09202 8.21799C9.51984 8 10.0799 8 11.2 8H16.8C17.9201 8 18.4802 8 18.908 8.21799C19.2843 8.40973 19.5903 8.71569 19.782 9.09202C20 9.51984 20 10.0799 20 11.2V14.8C20 15.9201 20 16.4802 19.782 16.908C19.5903 17.2843 19.2843 17.5903 18.908 17.782C18.4802 18 17.9201 18 16.8 18H15.1225C14.7065 18 14.4984 18 14.2995 18.0408C14.123 18.0771 13.9521 18.137 13.7917 18.219C13.6108 18.3114 13.4483 18.4413 13.1235 18.7012L11.5332 19.9735C11.2558 20.1954 11.1171 20.3063 11.0004 20.3065C10.8988 20.3066 10.8028 20.2604 10.7395 20.1811C10.6667 20.0898 10.6667 19.9122 10.6667 19.557V18C10.0467 18 9.7367 18 9.48236 17.9319C8.79218 17.7469 8.25308 17.2078 8.06815 16.5176C8 16.2633 8 15.9533 8 15.3333V11.2Z" stroke="#F4EC00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>,
        },
    ];

    const [openDropdown, setOpenDropdown] = useState(null);


    const dropdownRef = React.useRef(null);

    // Close dropdown when clicking outside
    React.useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenDropdown(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    // ---------------- Pagination State ----------------








    return (
        <div className=" pt-4">

            <div className="bg-[url(/images/dashboard/motivation.png)] bg-cover bg-center bg-no-repeat border border-(--yellow2) rounded-xl min-h-[72px] flex justify-center items-center gap-3">
                <span>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10.6665 18.6667C10.6665 18.6667 12.6665 21.3333 15.9998 21.3333C19.3332 21.3333 21.3332 18.6667 21.3332 18.6667M19.9998 12H20.0132M11.9998 12H12.0132M29.3332 16C29.3332 23.3638 23.3636 29.3333 15.9998 29.3333C8.63604 29.3333 2.6665 23.3638 2.6665 16C2.6665 8.63621 8.63604 2.66667 15.9998 2.66667C23.3636 2.66667 29.3332 8.63621 29.3332 16ZM20.6665 12C20.6665 12.3682 20.368 12.6667 19.9998 12.6667C19.6316 12.6667 19.3332 12.3682 19.3332 12C19.3332 11.6318 19.6316 11.3333 19.9998 11.3333C20.368 11.3333 20.6665 11.6318 20.6665 12ZM12.6665 12C12.6665 12.3682 12.368 12.6667 11.9998 12.6667C11.6316 12.6667 11.3332 12.3682 11.3332 12C11.3332 11.6318 11.6316 11.3333 11.9998 11.3333C12.368 11.3333 12.6665 11.6318 12.6665 12Z" stroke="#A67931" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                </span>
                <span className="text-(--yellow3) text-[24px] font-semibold ">Your effort today becomes your success story tomorrow.</span>
            </div>
            <div className="h-full grid grid-cols-1 xl:grid-cols-4 justify-between gap-6 mt-8">
                {
                    dashboardCards.map((item, index) =>
                        <div key={index} className="bg-white border border-(--light2) p-5 rounded-3xl h-full flex items-center justify-between min-h-[165px]">
                            <div className="flex flex-col justify-between h-full">
                                <h2 className="text-[#1C1C1CB2] font-medium text-[22px]">{item.title}</h2>
                                <h1 className="text-[#1C1C1CB2] font-medium text-[40px]">{item.value}</h1>
                            </div>
                            <div >
                                {item.icon}
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 mt-6">
                <div className="xl:col-span-3 bg-white border border-(--light2) p-5 rounded-[20px]">
                    <div className="flex items-center justify-between">
                        <h1 className="text-(--dark2) font-medium text-[24px]">Monthly Premium</h1>
                        <div className="flex flex-col gap-3">

                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <div className="w-10 h-10 rounded-xl bg-[#FFFFFF14] flex items-center justify-center cursor-pointer">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M21 10H3M16 2V6M8 2V6M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z" stroke="#1C1C1C" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                                        {/* {date ? date.toLocaleDateString() : "Select date"} */}
                                    </div>

                                </PopoverTrigger>
                                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        captionLayout="dropdown"
                                        onSelect={(date) => {
                                            setDate(date)
                                            setOpen(false)
                                        }}

                                    />
                                </PopoverContent>
                            </Popover>
                        </div>

                    </div>
                    <Separator className='mt-3 bg-(--light2)' />
                    <div className="mt-3">
                        <RevenueChart />
                    </div>
                </div>
                <div className="xl:col-span-2 bg-white border border-(--light2) p-5 rounded-[20px]">
                    <div className="flex items-center justify-between">
                        <h1 className="text-(--dark2) font-medium text-[24px]">Tasks</h1>
                        <Link href='' className="underline">
                            View All
                        </Link>

                    </div>
                    <Separator className='mt-3 bg-(--light2)' />


                    <div className="flex flex-col gap-3 mt-8">
                        <TaskCard
                            defaultStatus="done"
                            title="Follow up with ABC Company"
                            date="12/02/2023"
                        />

                        <TaskCard
                            defaultStatus="inprogress"
                            title="Follow up with ABC Company"
                            date="12/02/2023"
                        />

                        <TaskCard
                            defaultStatus="added"
                            title="Follow up with ABC Company"
                            date="12/02/2023"
                        />

                        <TaskCard
                            defaultStatus="notcomplete"
                            title="Follow up with ABC Company"
                            date="12/02/2023"
                        />
                    </div>
                </div>


                <div className="xl:col-span-3 bg-white border border-(--light2) p-5 rounded-[20px]">
                    <div>
                        <div className="flex justify-between items-center">
                            <h1 className="text-(--dark2) font-medium text-[24px]">Recent Leads</h1>

                            <Select defaultValue="New Business" onValueChange={setSelected}>
                                <SelectTrigger className="w-48">
                                    <SelectValue placeholder="Select Type" />
                                </SelectTrigger>

                                <SelectContent>
                                    {categories.map((item) => (
                                        <SelectItem key={item} value={item}>
                                            {item}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <Separator className='mt-3 bg-(--light2)' />


                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
                            {leadsData[selected]?.map((lead, i) => (
                                <LeadCard key={i} {...lead} />
                            ))}

                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 bg-white border border-(--light2) p-5 rounded-[20px]">
                    <h1 className="text-(--dark2) font-medium text-[24px]">Recent Leads</h1>

                    <Separator className='mt-3 bg-(--light2)' />

                    <div className="mt-5">
                        <ClaimsChart />
                    </div>
                </div>

                <div className="xl:col-span-3 bg-white border border-(--light2) p-5 rounded-[20px]">
                    <div className="flex items-center justify-between">

                        <h1 className="text-(--dark2) font-medium text-[24px]">Leads Overview</h1>
                        <Popover open={open2} onOpenChange={setOpen2}>
                            <PopoverTrigger asChild>
                                <div className="w-10 h-10 rounded-xl bg-[#FFFFFF14] flex items-center justify-center cursor-pointer">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M21 10H3M16 2V6M8 2V6M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z" stroke="#1C1C1C" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                                    {/* {date ? date.toLocaleDateString() : "Select date"} */}
                                </div>

                            </PopoverTrigger>
                            <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={date2}
                                    captionLayout="dropdown"
                                    onSelect={(date) => {
                                        setDate2(date)
                                        setOpen2(false)
                                    }}

                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <Separator className='mt-3 bg-(--light2)' />
                    <div className="mt-5">
                        <LeadsOverViewChart />
                    </div>
                </div>


                <div className="xl:col-span-2 bg-white border border-(--light2) p-5 rounded-[20px]">
                    <h1 className="text-(--dark2) font-medium text-[24px]">Activity Log</h1>

                    <Separator className='mt-3 bg-(--light2)' />


                    <div className="space-y-8 mt-5">
                        {items.map((item, index) => (
                            <div className="flex gap-4 relative" key={index}>
                                {/* Dot + Line */}
                                <div className="flex flex-col items-center">
                                    <div className="flex flex-col gap-2 items-center justify-center">
                                        <div className="w-4 h-4 bg-[#22886B] rounded-full border-2 border-[#22886B52] shadow" >
                                        </div>
                                        <span className="text-[#333333B2] text-[10px]/[12px] font-medium whitespace-nowrap">
                                            {item.time}
                                        </span>
                                    </div>
                                    {index !== items.length - 1 && (
                                        <div className="h-full w-0.5 bg-gray-300 mt-1"></div>
                                    )}
                                </div>

                                {/* Card */}
                                <div className="w-full min-h-[94px] bg-[#FFFFFF] border border-[#D0D5DD] rounded-xl shadow-[0_1px_2px_0_#1018280D] flex items-center ">
                                    <div className="p-3 w-full">
                                        <div className="flex bg-(--grey4) items-center border border-[#EAECF0A3] gap-2 rounded-xl p-1">

                                            {item.icon}

                                            <p className="text-[#202E2DA8] font-semibold text-[12px]">{item.title}</p>
                                        </div>

                                        <p className="text-[#202E2D99] text-[14px] mt-2 font-medium italic">By {item.author}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Page
