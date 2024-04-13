import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navLinks } from "../db";
import { NavLink } from "react-router-dom";
// import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logo = (
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_iconCarrier">
        <path
          d="M22 22L2 22"
          stroke="#e1842d"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M2 11L6.06296 7.74968M22 11L13.8741 4.49931C12.7784 3.62279 11.2216 3.62279 10.1259 4.49931L9.34398 5.12486"
          stroke="#e1842d"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5"
          stroke="#e1842d"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M4 22V9.5"
          stroke="#e1842d"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M20 9.5V13.5M20 22V17.5"
          stroke="#e1842d"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <path
          d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393M9 22V17"
          stroke="#e1842d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z"
          stroke="#e1842d"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );

  return (
    <header className=" text-white w-full bg-black/95">
      <nav
        className="mx-auto flex max-w-7xl lg:max-w-[85%] items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
            {logo}
            <span className="text-white font-bold">Scouts</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              // className="text-sm font-semibold leading-6 text-gray-400 hover:text-white
              //       transition duration-300 ease-in-out"
              className={({ isActive }) => {
                return (
                  "text-sm font-semibold leading-6 " +
                  (isActive
                    ? " text-gray-100 linkBorder"
                    : " text-gray-500 hover:text-gray-300  transition duration-300 ease-in-out")
                );
              }}
            >
              {item.name}
            </NavLink>
          ))}
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 " />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full h-[50%] overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-400/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
              {logo}
              <span className="text-white font-bold">Scouts</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
            </button>
          </div>
          <div className="mt-9 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              {navLinks.map((item) => (
                <div
                  className="space-y-1 py-2 w-[100%] rounded-lg transition duration-300 ease-in-out hover:bg-white/10"
                  key={item.name}
                >
                  <NavLink
                    to={item.href}
                    className={({ isActive }) => {
                      return (
                        "text-sm font-semibold leading-6 " +
                        (isActive
                          ? " text-gray-100 "
                          : " text-gray-500 hover:text-gray-300  transition duration-300 ease-in-out")
                      );
                    }}
                  >
                    {item.name}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
