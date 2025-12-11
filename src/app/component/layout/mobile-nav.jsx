import { Button } from "@/components/ui/button"
import { DialogTitle } from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function MobileNav() {


    const pathname = usePathname()
    const result = pathname.replace("/admin/", "");


    const menuItems = [
        {
            href: '/admin/dashboard', name: 'dashboard', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.4 3H4.6C4.03995 3 3.75992 3 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3 3.75992 3 4.03995 3 4.6V8.4C3 8.96005 3 9.24008 3.10899 9.45399C3.20487 9.64215 3.35785 9.79513 3.54601 9.89101C3.75992 10 4.03995 10 4.6 10H8.4C8.96005 10 9.24008 10 9.45399 9.89101C9.64215 9.79513 9.79513 9.64215 9.89101 9.45399C10 9.24008 10 8.96005 10 8.4V4.6C10 4.03995 10 3.75992 9.89101 3.54601C9.79513 3.35785 9.64215 3.20487 9.45399 3.10899C9.24008 3 8.96005 3 8.4 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> <path d="M19.4 3H15.6C15.0399 3 14.7599 3 14.546 3.10899C14.3578 3.20487 14.2049 3.35785 14.109 3.54601C14 3.75992 14 4.03995 14 4.6V8.4C14 8.96005 14 9.24008 14.109 9.45399C14.2049 9.64215 14.3578 9.79513 14.546 9.89101C14.7599 10 15.0399 10 15.6 10H19.4C19.9601 10 20.2401 10 20.454 9.89101C20.6422 9.79513 20.7951 9.64215 20.891 9.45399C21 9.24008 21 8.96005 21 8.4V4.6C21 4.03995 21 3.75992 20.891 3.54601C20.7951 3.35785 20.6422 3.20487 20.454 3.10899C20.2401 3 19.9601 3 19.4 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> <path d="M19.4 14H15.6C15.0399 14 14.7599 14 14.546 14.109C14.3578 14.2049 14.2049 14.3578 14.109 14.546C14 14.7599 14 15.0399 14 15.6V19.4C14 19.9601 14 20.2401 14.109 20.454C14.2049 20.6422 14.3578 20.7951 14.546 20.891C14.7599 21 15.0399 21 15.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V15.6C21 15.0399 21 14.7599 20.891 14.546C20.7951 14.3578 20.6422 14.2049 20.454 14.109C20.2401 14 19.9601 14 19.4 14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> <path d="M8.4 14H4.6C4.03995 14 3.75992 14 3.54601 14.109C3.35785 14.2049 3.20487 14.3578 3.10899 14.546C3 14.7599 3 15.0399 3 15.6V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H8.4C8.96005 21 9.24008 21 9.45399 20.891C9.64215 20.7951 9.79513 20.6422 9.89101 20.454C10 20.2401 10 19.9601 10 19.4V15.6C10 15.0399 10 14.7599 9.89101 14.546C9.79513 14.3578 9.64215 14.2049 9.45399 14.109C9.24008 14 8.96005 14 8.4 14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </svg>, tooltip: 'Dashboard'
        },
        {
            href: '/admin/leads', name: 'leads', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19 21V15M16 18H22M12 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
            , tooltip: 'Leads'
        },
        {
            href: '/admin/dashboard', name: 'clients', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M22 21V19C22 17.1362 20.7252 15.5701 19 15.126M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M17 21C17 19.1362 17 18.2044 16.6955 17.4693C16.2895 16.4892 15.5108 15.7105 14.5307 15.3045C13.7956 15 12.8638 15 11 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
            , tooltip: 'Clients'
        },
        {
            href: '/admin/dashboard', name: 'policies', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6.5 20H5C3.89543 20 3 19.1046 3 18V4C3 2.89543 3.89543 2 5 2H19C20.1046 2 21 2.89543 21 4V18C21 19.1046 20.1046 20 19 20H17.5M12 19C13.6569 19 15 17.6569 15 16C15 14.3431 13.6569 13 12 13C10.3431 13 9 14.3431 9 16C9 17.6569 10.3431 19 12 19ZM12 19L12.0214 18.9998L8.82867 22.1926L6.00024 19.3641L9.01965 16.3447M12 19L15.1928 22.1926L18.0212 19.3641L15.0018 16.3447M9 6H15M7 9.5H17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
            , tooltip: 'Policies'
        },
        {
            href: '/admin/dashboard', name: 'claims', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 14V10.5M12 7H12.01M9.9 19.2L11.36 21.1467C11.5771 21.4362 11.6857 21.5809 11.8188 21.6327C11.9353 21.678 12.0647 21.678 12.1812 21.6327C12.3143 21.5809 12.4229 21.4362 12.64 21.1467L14.1 19.2C14.3931 18.8091 14.5397 18.6137 14.7185 18.4645C14.9569 18.2656 15.2383 18.1248 15.5405 18.0535C15.7671 18 16.0114 18 16.5 18C17.8978 18 18.5967 18 19.1481 17.7716C19.8831 17.4672 20.4672 16.8831 20.7716 16.1481C21 15.5967 21 14.8978 21 13.5V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V13.5C3 14.8978 3 15.5967 3.22836 16.1481C3.53284 16.8831 4.11687 17.4672 4.85195 17.7716C5.40326 18 6.10218 18 7.5 18C7.98858 18 8.23287 18 8.45951 18.0535C8.76169 18.1248 9.04312 18.2656 9.2815 18.4645C9.46028 18.6137 9.60685 18.8091 9.9 19.2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
            , tooltip: 'Claims'
        },
        {
            href: '/admin/dashboard', name: 'tasks', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 12.5V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H12M14 11H8M10 15H8M16 7H8M14.5 19L16.5 21L21 16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
            , tooltip: 'Tasks'
        },
        {
            href: '/admin/dashboard', name: 'reports', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M17.2 14C17.477 14 17.6155 14 17.7278 14.0615C17.8204 14.1122 17.9065 14.2075 17.9478 14.3047C17.9978 14.4225 17.9852 14.5479 17.96 14.7987C17.8296 16.0987 17.3822 17.3514 16.6518 18.4445C15.7727 19.7601 14.5233 20.7855 13.0615 21.391C11.5997 21.9965 9.99113 22.155 8.43928 21.8463C6.88743 21.5376 5.46197 20.7757 4.34315 19.6568C3.22433 18.538 2.4624 17.1126 2.15372 15.5607C1.84504 14.0089 2.00347 12.4003 2.60897 10.9385C3.21447 9.47671 4.23985 8.22728 5.55544 7.34823C6.64856 6.61783 7.90125 6.17039 9.20131 6.03995C9.45207 6.01479 9.57745 6.00221 9.69528 6.0522C9.79249 6.09344 9.88776 6.17964 9.9385 6.27224C10 6.38449 10 6.52299 10 6.79999V13.2C10 13.48 10 13.62 10.0545 13.727C10.1024 13.8211 10.1789 13.8976 10.273 13.9455C10.38 14 10.52 14 10.8 14H17.2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M14 2.79999C14 2.52298 14 2.38448 14.0615 2.27223C14.1122 2.17963 14.2075 2.09344 14.3047 2.0522C14.4225 2.0022 14.5479 2.01478 14.7987 2.03993C16.6271 2.22333 18.346 3.03229 19.6569 4.34313C20.9677 5.65398 21.7767 7.37289 21.9601 9.20129C21.9852 9.45206 21.9978 9.57744 21.9478 9.69527C21.9066 9.79248 21.8204 9.88774 21.7278 9.93848C21.6155 9.99998 21.477 9.99999 21.2 9.99999L14.8 9.99999C14.52 9.99999 14.38 9.99999 14.273 9.94549C14.1789 9.89755 14.1024 9.82106 14.0545 9.72698C14 9.62003 14 9.48001 14 9.19999V2.79999Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
            , tooltip: 'Reports'
        },
        {
            href: '/admin/dashboard', name: 'settings', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.39504 19.3711L9.97949 20.6856C10.1532 21.0768 10.4368 21.4093 10.7957 21.6426C11.1547 21.8759 11.5736 22.0001 12.0017 22C12.4298 22.0001 12.8488 21.8759 13.2077 21.6426C13.5667 21.4093 13.8502 21.0768 14.0239 20.6856L14.6084 19.3711C14.8164 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5677 17.8941 17.0784 17.9478L18.5084 18.1C18.934 18.145 19.3636 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8714 16.635 20.9735 16.2103 20.951 15.7829C20.9285 15.3555 20.7825 14.9438 20.5306 14.5978L19.6839 13.4344C19.3825 13.0171 19.2214 12.5148 19.2239 12C19.2238 11.4866 19.3864 10.9864 19.6884 10.5711L20.535 9.40778C20.7869 9.06175 20.933 8.65007 20.9554 8.22267C20.9779 7.79528 20.8759 7.37054 20.6617 7C20.4478 6.62923 20.1309 6.32849 19.7495 6.13423C19.3681 5.93997 18.9385 5.86053 18.5128 5.90556L17.0828 6.05778C16.5722 6.11141 16.0576 6.00212 15.6128 5.74556C15.1699 5.48825 14.8199 5.09736 14.6128 4.62889L14.0239 3.31444C13.8502 2.92317 13.5667 2.59072 13.2077 2.3574C12.8488 2.12408 12.4298 1.99993 12.0017 2C11.5736 1.99993 11.1547 2.12408 10.7957 2.3574C10.4368 2.59072 10.1532 2.92317 9.97949 3.31444L9.39504 4.62889C9.18797 5.09736 8.83792 5.48825 8.39504 5.74556C7.95026 6.00212 7.43571 6.11141 6.92504 6.05778L5.4906 5.90556C5.06493 5.86053 4.63534 5.93997 4.25391 6.13423C3.87249 6.32849 3.55561 6.62923 3.34171 7C3.12753 7.37054 3.02549 7.79528 3.04798 8.22267C3.07046 8.65007 3.2165 9.06175 3.46838 9.40778L4.31504 10.5711C4.61698 10.9864 4.77958 11.4866 4.77949 12C4.77958 12.5134 4.61698 13.0137 4.31504 13.4289L3.46838 14.5922C3.2165 14.9382 3.07046 15.3499 3.04798 15.7773C3.02549 16.2047 3.12753 16.6295 3.34171 17C3.55582 17.3706 3.87274 17.6712 4.25411 17.8654C4.63548 18.0596 5.06496 18.1392 5.4906 18.0944L6.9206 17.9422C7.43127 17.8886 7.94581 17.9979 8.3906 18.2544C8.83513 18.511 9.18681 18.902 9.39504 19.3711Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M11.9999 15C13.6568 15 14.9999 13.6569 14.9999 12C14.9999 10.3431 13.6568 9 11.9999 9C10.3431 9 8.99992 10.3431 8.99992 12C8.99992 13.6569 10.3431 15 11.9999 15Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
            , tooltip: 'Settings'
        },

    ]


    return (
        <Drawer direction="left">
            <DrawerTrigger asChild>
                <Button className='p-0 bg-[#e8e8e8]'>
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" /> <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" /> <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" /> </svg>
                </Button>
            </DrawerTrigger>

            <DrawerContent className='bg-[linear-gradient(184.03deg,#024733_0%,#1CA37D_225.25%)] border-none ' autoFocus={false}>
                <DialogTitle></DialogTitle>
                <div className="flex flex-col justify-between h-full items-center w-full px-5 py-3 overflow-y-scroll">
                    <div className='w-full'>
                        <div className='px-4 pt-2 flex justify-start'>
                            <Image src="/images/layout/mainLogo.svg" alt="logo" width='100' height='100' className=' h-[52px] w-[155px]' />

                        </div>
                        <ul className='mt-7 flex flex-col items-center w-full'>

                            {menuItems.map((item, index) => (
                                <li className='w-full' key={index} onClick={() => {
                                    setStep('categories')
                                    setHotel(hotelData[0].name)
                                }}>
                                    <Tooltip placement="right">
                                        <TooltipTrigger asChild>
                                            <Link href={item.href} className={` ${result === item.name ? 'bg-[linear-gradient(90deg,#007B58_0%,#138C6A_208.33%)] border-[#FFFFFF29] ' : `${item.name}`} hover:bg-[linear-gradient(90deg,#007B58_0%,#138C6A_208.33%)] hover:border-[#FFFFFF29] border border-transparent h-12 rounded-xl w-full flex justify-start gap-3 px-4 items-center mb-4 `}>
                                                <span>
                                                    {item.icon}
                                                </span>
                                                <span className='text-white font-semibold text-[20px] capitalize'>
                                                    {item.name}
                                                </span>
                                            </Link>

                                        </TooltipTrigger>
                                        <TooltipContent side="right" align="center" >
                                            <p>{item.tooltip}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </li>
                            ))}



                        </ul>
                    </div>
                    <Tooltip placement="right">
                        <div className='bg-white w-full flex items-center justify-between min-h-[84px] shadow-[0_0_8px_0_#FFFFFF52] border border-[#FFFFFF1F] rounded-2xl p-4'>
                            <div className='flex items-center gap-3'>
                                <div className='w-[52px] h-[52px] rounded-full bg-[url(/images/layout/profile.webp)] bg-center bg-cover bg-no-repeat shadow-[0_2px_8px_0_#FFFFFF66_inset] border border-[#46B9874D]  '></div>
                                <div>
                                    <h1 className='text-[14px]/[20px] font-semibold text-(--green1)'>John Lewis</h1>
                                    <p className='text-[10px]/[12px] font-normal text-(--grey1)'>Admin</p>

                                </div>

                            </div>
                            <TooltipTrigger asChild>
                                <Link href='#' className=''>
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.5 25.5H12.1667C11.7246 25.5 11.3007 25.3244 10.9882 25.0118C10.6756 24.6993 10.5 24.2754 10.5 23.8333V12.1667C10.5 11.7246 10.6756 11.3007 10.9882 10.9882C11.3007 10.6756 11.7246 10.5 12.1667 10.5H15.5M21.3333 22.1667L25.5 18M25.5 18L21.3333 13.8333M25.5 18H15.5" stroke="#22886B" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                                </Link>
                            </TooltipTrigger>
                        </div>
                        <TooltipContent side="right" align="center" >
                            <p>Logout</p>
                        </TooltipContent>
                    </Tooltip>
                </div >
                <DrawerHeader className='hidden'>
                    <DrawerDescription className='hidden'>

                    </DrawerDescription>
                </DrawerHeader>


            </DrawerContent>
        </Drawer>
    )
}
