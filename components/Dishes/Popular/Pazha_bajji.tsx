'use client'
import { cooking, intro, reviews } from '@/constants/dishes/popular/pazha_bajji'
import React, { useState } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/20/solid'
import PrintButton from '../../PrintButton'


function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}


const Pazha_bajji = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const [numServings, setNumServings] = useState(1); // Default servings



    const handleServingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newServings = parseInt(e.target.value);
        setNumServings(newServings);
    };


    return (
        <section>
            {intro.map((person, index) => (
                <div key={index} className="mx-auto max-w-full px-4 place-content-center sm:px-6 lg:px-40" >
                    <Image
                        src={person.Src}
                        alt={person.topic}
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        width={500}
                        height={300}
                        className='flex flex-1 items-center justify-end rounded-xl' />
                </div>
            ))}

            {intro.map((person, index) => (
                <div key={index}>
                    <div className=" mx-auto place-content-center max-w-full px-4 sm:px-40 sm:mt-10 sm:mb-5 lg:px-40 " >
                        <h2 className="text-base font-semibold leading-7 text-[#BE1E2D]">{person.tamilheading}</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{person.topic}</p>
                        <p className="mt-6 text-lg leading-6 text-gray-600">
                        </p>
                    </div>

                    <div className="mx-auto place-content-center max-w-full px-4 sm:px-40 sm:mt-10 sm:mb-5 sm:grid grid-cols-1 sm:gap-x-8 sm:gap-y-16 lg:grid-cols-1">
                        <div className="text-left mx-auto flex max-w-full flex-col gap-y-4">
                            {/* <dt className="mb-6 text-justify text-base leading-7 text-gray-600">
                                {person.des}
                            </dt> */}

                            <dl className="mt-4 max-w-xl space-y-8 text-base text-justify leading-7 text-gray-600 lg:max-w-none">
                                {cooking.map((feature) => (
                                    <div key={feature.name} className="relative">
                                        <dt className="inline font-semibold text-gray-900">
                                            {feature.name}
                                        </dt>
                                        <dd className="">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        
                    </div>
                </div>
            ))}

            <div className="mt-5 mb-5 place-content-center max-w-full px-40">
                <div className="mb-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-base font-semibold leading-6 text-gray-900"></dt>
                    <dd className="mt-1 text-base font-bold leading-6 text-gray-700 sm:col-span-2 sm:mt-0">RATING AND COMMENTS
                    </dd>
                    <dt className="text-base font-semibold leading-6 text-gray-900"></dt>
                    <div>
                        <h3 className="sr-only">Reviews</h3>
                        <div className="flex items-center">
                            <div className="flex items-center">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                    <StarIcon
                                        key={rating}
                                        className={classNames(
                                            reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                                            'h-8 w-8 '
                                        )}
                                        aria-hidden="true"
                                    />
                                ))}
                            </div>
                            <p className="sr-only">{reviews.average} out of 5 stars</p>
                            <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                {reviews.totalCount} reviews
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </section >
    )
}

export default Pazha_bajji
