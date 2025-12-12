import Image from 'next/image'
export default function NoData({ size }) {
    return (

        <>
            <Image
                src="/images/noData.svg"
                width={size || 400}
                height={size || 400}
                alt="Picture of the author"
            />
        </>
    )

}