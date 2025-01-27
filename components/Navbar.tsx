"use client"
import Image from "next/image"
import Link from "next/link"
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition, Tab } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  ShoppingBagIcon,
  UserIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Search from "./Search"


const media = [
  { name: 'Images', description: '', href: '/media/images', icon: UserIcon },
  { name: 'Video', description: '', href: '#', icon: CursorArrowRaysIcon },

]

const history = [
  { name: 'Literature', description: '', href: '/history/literature', icon: FingerPrintIcon },

]

const dishes = [
  { name: 'Popular Dishes', description: '', href: '/dishes/popular', icon: UserIcon },
  { name: 'Signature Dishes', description: '', href: '/dishes/signature', icon: CursorArrowRaysIcon },
  

]



const Navbar = () => {

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  //Handles the opening and closing of our nav


  return (

    <header className="bg-white sticky top-0 z-50">

      <nav className="flexBetween max-container padding-container relative z-50 py-5">

        {/*Logo*/}
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={200} height={70} className="" />
        </Link>

        {/*Links*/}
        <Popover.Group className="hidden lg:flex lg:gap-x-12 ">

          {/* <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
            About
          </Link> */}

          <Link href="/map" className="text-sm font-semibold leading-6 text-gray-900">
            Map
          </Link>

          <Link href="/districts" className="text-sm font-semibold leading-6 text-gray-900">
            Districts
          </Link>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Dishes
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-900" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {dishes.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-10"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-10 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-green-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </Popover.Panel>
            </Transition>
          </Popover>

          

        </Popover.Group>

        {/*Cart&Sign*/}
        <div className="relative block">
          <Search />
        </div>

        {/*Mobile Menu*/}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>

        <div className="fixed inset-0 z-40" />

        <Dialog.Panel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Vercel</span>
              <Image
                className="h-10 w-auto"
                src="/vercel.svg"
                alt=""
                width={70}
                height={70}

              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />

            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* <a
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-10"
                >
                  About
                </a> */}

                <a
                  href="/map"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-10"
                >
                  Map
                </a>

                <a
                  href="/districts"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-10"
                >
                  Districts
                </a>


                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-10">
                        Dishes
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...dishes,].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-10"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>


                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-10">
                        History
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...history,].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-10"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-10">
                        Media
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...media,].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-10"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

              </div>

            </div>
          </div>
        </Dialog.Panel>
      </Dialog>

    </header>

  )
}

export default Navbar