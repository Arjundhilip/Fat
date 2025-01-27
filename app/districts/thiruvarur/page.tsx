'use client'
import React from 'react'
import Image from 'next/image'
import { first, agri, climate, geo, industries, pop, popular, history } from '@/constants/districts/thiruvarur'
import { thiruvarur } from '@/constants/signaturedishes'
import Accordion from "@/components/Accordion";
import Accordion_head from '@/components/Accordion_head';

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}


const Thiruvarur = () => {
    return (
        <section>

            {first.map((person, index) => (
                <div key={index} className=" max-container flex w-full flex-col justify-between gap-32 bg-white bg-cover bg-center bg-no-repeat px-6 py-12 text-black sm:flex-row sm:gap-12 sm:py-8 lg:px-20 2xl:rounded-5xl">
                    <div className="z-20 flex w-full flex-1 flex-col items-start justify-normal  gap-6">

                        <div className="" >
                            <h2 className="text-base font-semibold leading-7 text-gray-900">{person.tamilheading}</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-[#BE1E2D] sm:text-4xl">{person.topic}</p>
                        </div>

                        <dl className="">
                            <div className=" text-left mx-auto flex max-w-full flex-col gap-y-4">
                                <dt className="my-2 text-justify text-base leading-7 text-gray-600" >{person.des}
                                </dt>
                            </div>
                        </dl>

                    </div>

                    <div className='w-[300px] rounded-lg '>
                        <Image
                            src={person.img}
                            alt={person.topic}
                            style={{
                                width: 'auto',
                                height: 'auto',
                            }}
                            width={600}
                            height={900}
                            className='flex flex-1 rounded-xl' />
                    </div>

                </div>
            ))}

            <div className=" max-container flex w-full flex-col justify-between gap-32 bg-white bg-cover bg-center bg-no-repeat px-6 py-12 text-black sm:flex-row sm:gap-12 sm:py-8 lg:px-20 2xl:rounded-5xl">
                <div className='max-container relative flex w-full flex-col justify-between bg-white bg-cover'>

                    <Accordion_head title="Glimpse of Thiruvarur">

                        <h2 className="text-xl font-bold text-gray-900">Geographical Features</h2>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-4 my-2">

                            {geo.map((person, index) => (
                                <div key={index} className="flex items-top py-4">

                                    <Image
                                        className="h-10 w-10 rounded-full object-cover mr-4"
                                        src={person.imageUrl1}
                                        alt={person.heading}
                                        width={50}
                                        height={50}
                                    />
                                    <div className=''>
                                        <h2 className="text-sm font-semibold text-gray-900">{person.heading}</h2>
                                        <p className="w-96 text-sm text-gray-600">{person.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">Climate and Rainfall</h2>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-4 my-2">
                            {climate.map((person, index) => (
                                <div key={index} className="flex items-top py-4">
                                    <Image
                                        className="h-10 w-10 rounded-full object-cover mr-4"
                                        src={person.imageUrl1}
                                        alt={person.heading}
                                        width={50}
                                        height={50}
                                    />
                                    <div className=''>
                                        <h2 className="text-sm font-semibold text-gray-900">{person.heading}</h2>
                                        <p className="text-sm text-gray-600">{person.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">Population and Rainfall</h2>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-4 my-2">
                            {pop.map((person, index) => (
                                <div key={index} className="flex items-top py-4">
                                    <Image
                                        className="h-10 w-10 rounded-full object-cover mr-4"
                                        src={person.imageUrl1}
                                        alt={person.heading}
                                        width={50}
                                        height={50}
                                    />
                                    <div className=''>
                                        <h2 className="text-sm font-semibold text-gray-900">{person.heading}</h2>
                                        <p className="text-sm text-gray-600">{person.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">Agriculture</h2>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-4 my-2">
                            {agri.map((person, index) => (
                                <div key={index} className="flex items-top py-4">
                                    <Image
                                        className="h-10 w-10 rounded-full object-cover mr-4"
                                        src={person.imageUrl1}
                                        alt={person.heading}
                                        width={50}
                                        height={50}
                                    />
                                    <div className=''>
                                        <h2 className="text-sm font-semibold text-gray-900">{person.heading}</h2>
                                        <p className="text-sm text-gray-600">{person.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">Industries</h2>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-1 my-2">
                            {industries.map((person, index) => (
                                <div key={index} className="flex items-top py-4">
                                    <Image
                                        className="h-8 w-8 rounded-full object-cover mr-4"
                                        src={person.imageUrl1}
                                        alt={person.heading}
                                        width={50}
                                        height={50}
                                    />
                                    <div className=''>
                                        <h2 className="text-sm text-gray-900">{person.heading}</h2>

                                    </div>
                                </div>
                            ))}
                        </div>

                    </Accordion_head>

                    <Accordion_head title="History of Thiruvarur">
                        <Image
                            src={history[0].imageUrl1}
                            alt="phones"
                            style={{
                                width: 'auto',
                                height: 'auto',
                            }}
                            width={600}
                            height={900}
                            className='flex flex-1 rounded-xl' />
                    </Accordion_head>

                    <Accordion_head title="Culture of Thiruvarur">
                        <Image
                            src={history[1].imageUrl1}
                            alt="phones"
                            style={{
                                width: 'auto',
                                height: 'auto',
                            }}
                            width={600}
                            height={900}
                            className='flex flex-1 rounded-xl' />
                    </Accordion_head>

                </div>
            </div>

            <div className=" max-container flex w-full flex-col justify-between gap-32 bg-white bg-cover bg-center bg-no-repeat px-6 py-12 text-black sm:flex-column sm:gap-12 sm:py-8 lg:px-20 2xl:rounded-5xl">
                <div className='max-container relative flex w-full flex-col justify-between bg-white bg-cover'>
                    <h2 className="text-xl font-bold">Food Culture of Thiruvarur</h2>
                    <Image
                        src={history[2].imageUrl1}
                        alt="phones"
                        style={{
                            width: 'auto',
                            height: 'auto',
                        }}
                        width={600}
                        height={900}
                        className='flex flex-1 rounded-xl' />
                </div>

            </div>

            {/* <div className="max-container flex w-full flex-col justify-between  bg-white bg-cover px-6  lg:px-20">
                <Image
                    src="/districts/infographics/Thiruvarur.svg"
                    alt="Map of virudhunagar"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    width={500}
                    height={300}
                    className='flex flex-1 items-center justify-end rounded-xl' />
            </div> */}

            <div className="max-container relative w-full flex-col justify-between overflow-hidden bg-white bg-cover  lg:px-20">

                <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-2 mb-8 lg:max-w-7xl lg:px-8 text-center">
                    <h1 className="mt-4  text-xl font-semibold sm:text-5xl">Culinary Delights</h1>
                </div>
                <h2 className="my-4 text-center text-md tracking-tight sm:text-3xl">Signature Dishes</h2>
                <div className="mb-8 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
                    {thiruvarur.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <Image
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    width={400}
                                    height={400}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="bold-20 lg:bold-20 mt-4 text-center text-sm text-gray-700">{product.name}</h3>
                        </a>
                    ))}
                </div>
                
                <h2 className="my-4 text-center text-md tracking-tight sm:text-3xl">Popular Dishes</h2>
                <div className="mb-8 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
                    {popular.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <Image
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    width={400}
                                    height={400}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="bold-20 lg:bold-20 mt-4 text-center text-sm text-gray-700">{product.name}</h3>
                        </a>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Thiruvarur
