import NoData from "@/app/component/global/no-data"
export default function Page() {
    return (
        <>
            <div className="flex flex-col items-center justify-center pt-10">

                <NoData size='500' />
                <p className="text-black text-[50px] font-medium mt-4 capitalize">
                    No data present
                </p>
            </div>
        </>
    )
}