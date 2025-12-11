'use client'
import { useMediaQuery } from 'react-responsive'
import { PostProvider } from "@/context/HotelContext";
import { usePathname, useRouter } from "next/navigation";
import LeftBar from "./left-bar";
import Header from "./header";

export default function Layout({ children }) {

    const router = useRouter();
    const pathname = usePathname();

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1025px)'
    })

    // const isLoggedIn = false; 
    // // replace with real auth check

    // console.log('pathname', pathname)

    // useEffect(() => {
    //     if (!isLoggedIn) {
    //         router.push("/auth");
    //          // redirect to login if not authenticated
    //     }
    // }, [isLoggedIn, router]);
    return (


        <PostProvider>

            {
                isDesktopOrLaptop &&
                <div className={` ${pathname === '/auth' ? 'hidden' : ' fixed left-0 top-0 h-full bg-[linear-gradient(184.03deg,#024733_0%,#1CA37D_225.25%)] w-[310px] text-white pt-8 pb-4 px-5'}`}>
                    <LeftBar />
                </div>
            }
            <div className={` ${pathname === '/auth' ? '' : ' ml-0 xl:ml-[311px] mb-4 pb-4'}`}>
                <div className={`${pathname === '/auth' ? 'hidden' : 'bg-(--light1) px-5 border-b border-[#DDE6ED] sticky top-0 z-10'}`}>
                    <Header />
                </div>
                <div className="px-5 md:px-8">
                    {children}
                </div>
            </div>
        </PostProvider>

    )
}