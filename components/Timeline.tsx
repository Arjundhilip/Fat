
"use client";

import React from 'react';
import { Timeline } from "keep-react";
import { CalendarBlank } from "phosphor-react";
import Image from "next/image";
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react';


const features = [
    {
        name: '1982',
        description:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: '/Calendar/1.jpg',
    },


]

// const Timelin = () => {
//     const [isHorizontal, setIsHorizontal] = useState(true);

//     useEffect(() => {
//         // Check screen width and set layout mode
//         const handleResize = () => {
//             setIsHorizontal(window.innerWidth > 425); // Adjust breakpoint as needed
//         };

//         handleResize(); // Initial check
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     return (
//         <section>
//             <div className={`overflow-x-${isHorizontal ? 'auto' : 'hidden'} overflow-y-${isHorizontal ? 'hidden' : 'auto'} mt-10`}>
//                 <div className={`flex ${isHorizontal ? 'whitespace' : 'flex-col'} p-4`}>
//                     {/* Timeline items */}
//                     {features.map((feature) => (
//                         <div key={feature.name} className={`w-${isHorizontal ? '96' : 'full'} h-${isHorizontal ? '90' : 'auto'} bg-gray-200 rounded-lg shadow-md flex-none ${isHorizontal ? 'mx-4' : 'my-4'}`}>
//                             <div className="justify-center p-4">
//                                 <h2 className="text-2xl font-bold leading-7 text-gray-900">{feature.name}</h2>
//                                 <p className="mt-3 text-base leading-6 text-justify text-gray-600">{feature.description}</p>
//                                 <Image
//                                     height={213}
//                                     width={380}
//                                     src={feature.icon}
//                                     alt={feature.name}
//                                     className="rounded-lg mt-2"
//                                 />
//                             </div>
//                         </div>
//                     ))}
//                     {/* Add more timeline items as needed */}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Timelin;


const Timelin: React.FC = () => {
    return (
        <div className="container  mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>

                {/* right timeline */}
                {features.map((feature) => (
                    <div key={feature.name} className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-gray-400 shadow-xl w-8 h-8 rounded-full">
                        </div>
                        <div className="order-1 bg-gray-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-[#BE1E2D] text-xl">{feature.name}</h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{feature.description}</p>
                        </div>
                    </div>))}

                {/* left timeline */}
                {features.map((feature) => (
                    <div key={feature.name} className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-gray-400 shadow-xl w-8 h-8 rounded-full">
                        </div>
                        <div className="order-1 bg-gray-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-[#BE1E2D] text-xl">{feature.name}</h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{feature.description}</p>
                        </div>
                    </div>))}

            </div>
        </div>
    );
}

export default Timelin;