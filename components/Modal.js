import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

export default function MyModal() {
  const [open, setOpen] = useRecoilState(modalState);

  function closeModal() {
    setOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      {open && (
        <>
          <Transition appear show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-200"
                leave="ease-in duration-200"
                leaveFrom="opacity-200"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-50" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Filter
                      </Dialog.Title>
                      <div className="mt-2">
                        <div className="flex">
                          <input
                            type="number"
                            name=""
                            id=""
                            className="inp"
                            placeholder="Min Plot Area"
                          />
                          <input
                            type="number"
                            name=""
                            id=""
                            className="inp"
                            placeholder="Max Plot Area"
                          />
                        </div>
                        <div className="flex">
                          <input
                            type="number"
                            name=""
                            className="inp"
                            id=""
                            placeholder="width"
                          />
                          <input
                            type="number"
                            name=""
                            id=""
                            className="inp"
                            placeholder="length"
                          />
                        </div>
                        <div>
                          <label for="direction" className="mr-4">
                            Directions
                          </label>
                          <select
                            id="direction"
                            name="direction"
                            className="inp w-[400px] text-md bg-transparent"
                          >
                            <option value="volvo">Select a Direction</option>
                            <option value="saab">North</option>
                            <option value="fiat">South</option>
                            <option value="audi">East</option>
                            <option value="audi">West</option>
                            <option value="audi">North East</option>
                            <option value="audi">North West</option>
                            <option value="audi">South East</option>
                            <option value="audi">South West</option>
                          </select>
                        </div>
                        <div>
                          <input
                            type="number"
                            name=""
                            id=""
                            className="inp"
                            placeholder="Floors"
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Search
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </>
      )}
    </div>
  );
}
