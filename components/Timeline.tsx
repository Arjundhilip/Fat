
"use client";
import { Timeline } from "keep-react";
import { CalendarBlank } from "phosphor-react";
import Image from "next/image";

const Timelin = () => {
    return (

        // <div className="mx-10 border-2"> 
        // <Timeline timelineBarType="solid" gradientPoint={true} className="p-8 justify-center gap-10 overflow-x-scroll overscroll-x-contain" horizontal={true}>

        //     <Timeline.Item>
        //         <Timeline.Point />
        //         <Timeline.Content>
        //             <Timeline.Time>February 2023</Timeline.Time>
        //             <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
        //             <Timeline.Body>
        //                 Get access to over 20+ pages including a dashboard layout, charts,
        //                 kanban board, calendar, and pre-order E-commerce & Marketing
        //                 pages.
        //             </Timeline.Body>

        //             <Image
        //                 height={220}
        //                 width={400}
        //                 src="/Calendar/1.jpg"
        //                 alt="timeline"
        //             />
        //         </Timeline.Content>
        //     </Timeline.Item>

        //     <Timeline.Item>
        //         <Timeline.Point />
        //         <Timeline.Content>
        //             <Timeline.Time>March 2023</Timeline.Time>
        //             <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
        //             <Timeline.Body>
        //                 All of the pages and components are first designed in Figma and we
        //                 keep a parity between the two versions even as we update the
        //                 project.
        //             </Timeline.Body>

        //             <Image
        //                 height={213}
        //                 width={340}
        //                 src="/Calendar/1.jpg"
        //                 alt="timeline"
        //                 className="rounded-lg"
        //             />
        //         </Timeline.Content>
        //     </Timeline.Item>

        //     <Timeline.Item>
        //         <Timeline.Point />
        //         <Timeline.Content>
        //             <Timeline.Time>March 2023</Timeline.Time>
        //             <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
        //             <Timeline.Body>
        //                 All of the pages and components are first designed in Figma and we
        //                 keep a parity between the two versions even as we update the
        //                 project.
        //             </Timeline.Body>

        //             <Image
        //                 height={213}
        //                 width={340}
        //                 src="/Calendar/1.jpg"
        //                 alt="timeline"
        //                 className="rounded-lg"
        //             />
        //         </Timeline.Content>
        //     </Timeline.Item>

        //     <Timeline.Item>
        //         <Timeline.Point />
        //         <Timeline.Content>
        //             <Timeline.Time>March 2023</Timeline.Time>
        //             <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
        //             <Timeline.Body>
        //                 All of the pages and components are first designed in Figma and we
        //                 keep a parity between the two versions even as we update the
        //                 project.
        //             </Timeline.Body>

        //             <Image
        //                 height={213}
        //                 width={340}
        //                 src="/Calendar/1.jpg"
        //                 alt="timeline"
        //                 className="rounded-lg"
        //             />
        //         </Timeline.Content>
        //     </Timeline.Item>

        //      <Timeline.Item>
        //         <Timeline.Point />
        //         <Timeline.Content>
        //             <Timeline.Time>March 2023</Timeline.Time>
        //             <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
        //             <Timeline.Body>
        //                 All of the pages and components are first designed in Figma and we
        //                 keep a parity between the two versions even as we update the
        //                 project.
        //             </Timeline.Body>

        //             <Image
        //                 height={213}
        //                 width={340}
        //                 src="/Calendar/1.jpg"
        //                 alt="timeline"
        //                 className="rounded-lg"
        //             />
        //         </Timeline.Content>
        //     </Timeline.Item>

        // </Timeline>
        // </div>

        <div className="overflow-x-auto">
            <div className="flex whitespace-nowrap p-4">
                {/* Timeline items */}              
                <div className="w-64 h-32 bg-gray-200 rounded-lg shadow-md flex-none mr-4"></div>
                <div className="w-64 h-32 bg-gray-200 rounded-lg shadow-md flex-none mr-4"></div>
                <div className="w-64 h-32 bg-gray-200 rounded-lg shadow-md flex-none mr-4"></div>
                <div className="w-64 h-32 bg-gray-200 rounded-lg shadow-md flex-none mr-4"></div>
                <div className="w-64 h-32 bg-gray-200 rounded-lg shadow-md flex-none mr-4"></div>
                <div className="w-64 h-32 bg-gray-200 rounded-lg shadow-md flex-none mr-4"></div>
                <div className="w-64 h-32 bg-gray-200 rounded-lg shadow-md flex-none mr-4"></div>
                <div className="w-64 h-32 bg-gray-200 rounded-lg shadow-md flex-none mr-4"></div>
                {/* Add more timeline items as needed */}
            </div>
        </div>


    );
}

export default Timelin
