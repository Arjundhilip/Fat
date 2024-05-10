import Image from "next/legacy/image"



const products = [
    {
        id: 1,
        name: 'Jigirthanda',
        href: '/dishes/signature/jigarthanda',
        imageSrc: '/dishes/signature/Madurai/jigarthanda/top.jpg',
        imageAlt: 'Jigirthanda',
    },
    {
        id: 2,
        name: 'Karupatti Coffee',
        href: '/dishes/signature/karupatti_coffee',
        imageSrc: '/dishes/signature/Madurai/karupatti_coffee/top.jpg',
        imageAlt: 'Karupatti Coffee',
    },
    {
        id: 3,
        name: 'Paruthi Paal',
        href: '/dishes/signature/paruthi_paal',
        imageSrc: '/dishes/signature/Madurai/paruthi_paal/top.png',
        imageAlt: 'Paruthi Paal',
    },
    {
        id: 4,
        name: 'Mutton Chukka',
        href: '/dishes/signature/mutton-chukka',
        imageSrc: '/dishes/signature/Madurai/muttonchukkavaruval/top.jpg',
        imageAlt: 'Mutton Chukka',
    },
]


export default function Example() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-6 sm:px-10 sm:py-6 mb-8 lg:max-w-7xl lg:px-8">
                <h1 className="my-8 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Signature Dishes</h1>

                <div className="mx-auto grid max-w-6xl gap-x-8 gap-y-20 px-6 py-4 lg:px-8 md:grid-cols-2 lg:grid-cols-4">
                    {products.map((dish) => (
                        <div key={dish.name} className="transform hover:scale-110 transition-transform duration-300 ease-in-out">
                            <a href={dish.href}>
                                <div className="max-w-sm rounded-xl overflow-hidden shadow-lg">
                                    <div className="relative">
                                        <Image
                                            src={dish.imageSrc}
                                            alt={dish.imageAlt}
                                            loading='lazy'

                                            placeholder='blur'
                                            blurDataURL={dish.imageSrc}
                                            layout="responsive"
                                            width={800}
                                            height={340}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="px-6 py-4 hover:bg-[#00ABA6]">
                                        <p className="text-base font-semibold leading-7 tracking-tight hover:text-white text-gray-900">{dish.name}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
