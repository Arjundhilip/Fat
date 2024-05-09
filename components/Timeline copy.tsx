
"use client";
import { Timeline } from "keep-react";
import { CalendarBlank } from "phosphor-react";
import Image from "next/image";
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: '1982',
        description:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: '/Calendar/1.jpg',
    },

    {
        name: '1984',
        description:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: '/Calendar/1.jpg',
    },

    {
        name: '1982',
        description:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: '/Calendar/1.jpg',
    },

    {
        name: '1984',
        description:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: '/Calendar/1.jpg',
    },
    {
        name: '1982',
        description:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: '/Calendar/1.jpg',
    },

    {
        name: '1984',
        description:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: '/Calendar/1.jpg',
    },

]

const Timelin = () => {
    return (
        <section>
            {/* <div className="mx-10 border-2">
                <Timeline timelineBarType="solid" gradientPoint={true} className="p-8 justify-center gap-10 overflow-x-scroll overscroll-x-contain" horizontal={true}>

                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <Timeline.Time>February 2023</Timeline.Time>
                            <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
                            <Timeline.Body>
                                Get access to over 20+ pages including a dashboard layout, charts,
                                kanban board, calendar, and pre-order E-commerce & Marketing
                                pages.
                            </Timeline.Body>

                            <Image
                                height={220}
                                width={400}
                                src="/Calendar/1.jpg"
                                alt="timeline"
                            />
                        </Timeline.Content>
                    </Timeline.Item>

                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <Timeline.Time>March 2023</Timeline.Time>
                            <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
                            <Timeline.Body>
                                All of the pages and components are first designed in Figma and we
                                keep a parity between the two versions even as we update the
                                project.
                            </Timeline.Body>

                            <Image
                                height={213}
                                width={340}
                                src="/Calendar/1.jpg"
                                alt="timeline"
                                className="rounded-lg"
                            />
                        </Timeline.Content>
                    </Timeline.Item>

                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <Timeline.Time>March 2023</Timeline.Time>
                            <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
                            <Timeline.Body>
                                All of the pages and components are first designed in Figma and we
                                keep a parity between the two versions even as we update the
                                project.
                            </Timeline.Body>

                            <Image
                                height={213}
                                width={340}
                                src="/Calendar/1.jpg"
                                alt="timeline"
                                className="rounded-lg"
                            />
                        </Timeline.Content>
                    </Timeline.Item>

                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <Timeline.Time>March 2023</Timeline.Time>
                            <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
                            <Timeline.Body>
                                All of the pages and components are first designed in Figma and we
                                keep a parity between the two versions even as we update the
                                project.
                            </Timeline.Body>

                            <Image
                                height={213}
                                width={340}
                                src="/Calendar/1.jpg"
                                alt="timeline"
                                className="rounded-lg"
                            />
                        </Timeline.Content>
                    </Timeline.Item>

                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <Timeline.Time>March 2023</Timeline.Time>
                            <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
                            <Timeline.Body>
                                All of the pages and components are first designed in Figma and we
                                keep a parity between the two versions even as we update the
                                project.
                            </Timeline.Body>

                            <Image
                                height={213}
                                width={340}
                                src="/Calendar/1.jpg"
                                alt="timeline"
                                className="rounded-lg"
                            />
                        </Timeline.Content>
                    </Timeline.Item>

                </Timeline>
            </div> */}

            <div className="overflow-x-auto mt-10 ">
                <div className="flex whitespace p-4">
                    {/* Timeline items */}
                    {features.map((feature) => (
                        <div key={feature.name} className="w-96 h-90 bg-gray-200 rounded-lg shadow-md flex-none mx-4">
                            <div className="justify-center p-4">
                                <h2 className="text-2xl font-bold leading-7 text-gray-900">{feature.name}</h2>
                                <p className="mt-3 text-base leading-6 text-justify text-gray-600">{feature.description}</p>
                                <Image
                                    height={213}
                                    width={380}
                                    src={feature.icon}
                                    alt={feature.name}
                                    className="rounded-lg mt-2"
                                />
                            </div>
                        </div>
                    ))}




                    {/* Add more timeline items as needed */}
                </div>
            </div>
        </section>


    );
}

export default Timelin


