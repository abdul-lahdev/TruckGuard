'use client'
import { useMediaQuery } from 'react-responsive'
import { usePathname } from 'next/navigation'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import MobileNav from "./mobile-nav"


export default function Header() {

    const pathname = usePathname()
    // console.log(pathname)
    const result = pathname.replace("/admin/", "");


    const isDesktopOrLaptop = useMediaQuery({
        query: '(max-width: 1024px)'
    })


    return (
        <div className=" h-[70px] md:h-[98px] p-3 flex justify-between items-center rounded-t-2xl flex-row">

            {
                isDesktopOrLaptop &&
                < MobileNav />
            }

            <h1 className="text-(--dark1) text-[25px] md:text-[32px] font-semibold capitalize">
                {result}
            </h1>
            <div className="flex items-center gap-3">

                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="cursor-pointer relative hover:bg-[#e2e2e2] w-14 h-14 flex items-center justify-center rounded-full shadow-[inset_0px_2px_8px_0px_#FFFFFF66]">
                                <div className="w-2 h-2 bg-[#ED3333] rounded-full absolute right-0 top-0 -translate-x-4 translate-y-4"></div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14 21H10M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z" stroke="#1C1C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="z-50 w-80 bg-(--dark1) text-white border border-(--grey1) rounded-lg shadow-lg p-2 overflow-hidden"
                            side="bottom"
                            align="end"
                        >
                            <div className="flex justify-between items-center px-3 py-2 border-b border-(--grey2)">
                                <span className="font-semibold text-sm">Notifications</span>
                                <button className="text-(--grey2) hover:text-white text-sm cursor-pointer">Clear all</button>
                            </div>

                            <div className="max-h-64 overflow-y-auto py-2">
                                <DropdownMenuItem className="flex flex-col items-start gap-1 py-3 px-3 hover:bg-[#ffffff10] rounded-lg">
                                    <span className="text-sm font-medium">New comment on your post</span>
                                    <span className="text-xs text-(--grey2)">2 min ago</span>
                                </DropdownMenuItem>

                                <DropdownMenuItem className="flex flex-col items-start gap-1 py-3 px-3 hover:bg-[#ffffff10] rounded-lg">
                                    <span className="text-sm font-medium">Your order has been shipped</span>
                                    <span className="text-xs text-(--grey2)">1 hr ago</span>
                                </DropdownMenuItem>

                                <DropdownMenuItem className="flex flex-col items-start gap-1 py-3 px-3 hover:bg-[#ffffff10] rounded-lg">
                                    <span className="text-sm font-medium">New friend request</span>
                                    <span className="text-xs text-(--grey2)">3 hr ago</span>
                                </DropdownMenuItem>
                            </div>


                        </DropdownMenuContent>

                    </DropdownMenu>
                </div>

            </div>
        </div >
    )
}