import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { PhotographIcon } from '@heroicons/react/solid';
import { useRecoilState } from 'recoil';
import { useRef } from 'react';
import { modalState } from '../atoms/modalAtom';
import { db, storage } from '../firebase';
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { ref, getDownloadURL, uploadString } from 'firebase/storage';
import Image from 'next/image';
import { CameraIcon } from '@heroicons/react/outline';
import PlanDetails from './PlanDetails';
import Plan from './Plan';

export default function MyModal() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const filePickerRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const descRef = useRef(null);
  const nameRef = useRef(null);
  const supplyRef = useRef(null);
  const categoryRef = useRef(null);
  const plotTypeRef = useRef(null);
  const plotAreaRef = useRef(null);
  const buildupAreaRef = useRef(null);
  const widthRef = useRef(null);
  const lengthRef = useRef(null);
  const typeOfBuildingRef = useRef(null);
  const buildingCategoryRef = useRef(null);
  const styleRef = useRef(null);
  const estimatedCostRef = useRef(null);
  const bedroomsRef = useRef(null);
  const livingRoomRef = useRef(null);
  const kitchenRef = useRef(null);
  const staircaseRef = useRef(null);
  const staircaseFromRef = useRef(null);
  const toiletRef = useRef(null);
  const bathRef = useRef(null);
  const priceRef = useRef(null);
  const ParkingTypeRef = useRef(null);

  function closeModal() {
    setOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const uploadPost = async () => {
    if (loading) return;

    setLoading(true);

    // Create a post and add to firestore
    // Get the post ID
    // Upload the image to firebase storage
    // get a download URL from firebase storage

    const docRef = await addDoc(collection(db, 'products'), {
      username: session.user.name,
      description: descRef.current.value,
      supply: supplyRef.current.value,
      category: categoryRef.current.value,
      price: priceRef.current.value,
      profileImg: session.user.image,
      plotType: plotTypeRef.current.value,
      plotArea: plotAreaRef.current.value,
      totalBuildupArea: buildupAreaRef.current.value,
      width: widthRef.current.value,
      length: lengthRef.current.value,
      typeOfBuilding: typeOfBuildingRef.current.value,
      buildingCategory: buildingCategoryRef.current.value,
      style: styleRef.current.value,
      estimatedCost: estimatedCostRef.current.value,
      bedrooms: bedroomsRef.current.value,
      livingRoom: livingRoomRef.current.value,
      kitchen: kitchenRef.current.value,
      staircase: staircaseRef.current.value,
      staircaseFrom: staircaseFromRef.current.value,
      toilet: toiletRef.current.value,
      bath: bathRef.current.value,
      ParkingType: ParkingTypeRef.current.value,
      timestamp: serverTimestamp()
    });

    // console.log("New doc added with ID", docRef.id);
    // console.log(session);

    const imageRef = ref(storage, `products/${docRef.id}/image`);

    await uploadString(imageRef, selectedFile, 'data_url').then(async (snapshot) => {
      const downloadURL = await getDownloadURL(imageRef);
      await updateDoc(doc(db, 'products', docRef.id), {
        image: downloadURL
      });
    });
    setOpen(false);
    setLoading(false);
    setSelectedFile(null);
  };

  return (
    <div className="">
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
                leaveTo="opacity-0">
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
                    leaveTo="opacity-0 scale-95">
                    <Dialog.Panel className="flex flex-col items-center w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        {/* Upload input */}
                        <div className="align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl shadow-gray-300 transform transition-all sm:my-8 sm:align-middle  sm:max-w-sm sm:p-6">
                          <div className="">
                            {selectedFile ? (
                              <Image
                                src={selectedFile || 'https://via.placeholder.com/150'}
                                className="object-contain cursor-pointer"
                                onClick={() => setSelectedFile()}
                                alt="selected file"
                              />
                            ) : (
                              <div
                                onClick={() => filePickerRef.current.click()}
                                className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 cursor-pointer">
                                <CameraIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                              </div>
                            )}
                          </div>
                        </div>
                      </Dialog.Title>
                      <div>
                        <div>
                          <div>
                            <input
                              ref={filePickerRef}
                              type="file"
                              hidden
                              onChange={addImageToPost}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Options */}
                      <div>
                        <div className="flex flex-col my-10 font-Poppins">
                          <div className="flex space-x-16 items-center">
                            <p className="font-Poppins text-gray-600">Name</p>
                            <div className="border-b-2 border-blue-500 px-4 py-1 hover:bg-gray-300 rounded-t-md">
                              <input
                                type="text"
                                className="w-[380px] text-sm outline-none bg-transparent"
                                ref={nameRef}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex space-x-6 items-center">
                          <p className="font-Poppins text-gray-600">Description</p>
                          <div className="border-b-2 border-blue-500 px-4 py-1 hover:bg-gray-300 rounded-t-md">
                            <textarea
                              name=""
                              id=""
                              cols="59"
                              rows="4"
                              ref={descRef}
                              placeholder="Provide a detailed description of your item"
                              className="outline-none text-sm bg-transparent placeholder:text-gray-500"
                            />
                          </div>
                        </div>

                        <div className="flex flex-row my-10 font-Poppins">
                          <div className="flex space-x-12 items-center">
                            <p className="font-Poppins text-gray-600">Quantity</p>
                            <div className="border-b-2 border-blue-500 hover:bg-gray-300 rounded-t-md px-4 py-1">
                              <input
                                type="number"
                                className="w-[380px] text-sm outline-none bg-transparent"
                                defaultValue={1}
                                ref={supplyRef}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-row my-10 font-Poppins">
                          <div className="flex space-x-10 items-center">
                            <p className="font-Poppins text-gray-600">Category</p>
                            <div className="border-b-2 border-blue-500 px-4 py-1 hover:bg-gray-300 rounded-t-md">
                              <input
                                type="text"
                                className="w-[380px] text-sm outline-none bg-transparent"
                                ref={categoryRef}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row my-10 font-Poppins">
                          <div className="flex space-x-10 items-center">
                            <p className="font-Poppins text-gray-600">Price</p>
                            <div className="border-b-2 border-blue-500 px-4 py-1 hover:bg-gray-300 rounded-t-md">
                              <input
                                type="text"
                                className="w-[380px] text-sm outline-none bg-transparent"
                                ref={priceRef}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm">
                          <section className="flex flex-row justify-between">
                            <div className="flex flex-col space-y-3">
                              <p className="text-xl font-Poppins text-gray-600 mb-10">
                                Plan Description
                              </p>
                              <div className="flex font-Poppins">
                                <p className="text-gray-600">Plot Type</p>
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  ref={plotTypeRef}
                                  required={true}
                                  className="input appearance-none"
                                />
                              </div>
                              <div className="flex font-Poppins">
                                <p className="text-gray-600">Plot Area</p>
                                <input
                                  type="number"
                                  name=""
                                  id=""
                                  ref={plotAreaRef}
                                  className="input appearance-none"
                                />
                              </div>
                              <div className="flex font-Poppins">
                                <p className="text-gray-600">Total Buitup Area</p>
                                <input
                                  type="number"
                                  name=""
                                  id=""
                                  ref={buildupAreaRef}
                                  className="input appearance-none"
                                />
                              </div>
                              <div className="flex font-Poppins">
                                <p className="text-gray-600">width</p>
                                <input
                                  type="number"
                                  name=""
                                  id=""
                                  ref={widthRef}
                                  className="input appearance-none"
                                />
                              </div>
                              <div className="flex font-Poppins">
                                <p className="text-gray-600">Length</p>
                                <input
                                  type="number"
                                  name=""
                                  id=""
                                  ref={lengthRef}
                                  className="input appearance-none"
                                />
                              </div>
                              <div className="flex font-Poppins">
                                <p className="text-gray-600">type of building</p>
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  ref={typeOfBuildingRef}
                                  className="input appearance-none"
                                />
                              </div>
                              <div className="flex font-Poppins">
                                <p className="text-gray-600">Building Category</p>
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  ref={buildingCategoryRef}
                                  className="input appearance-none"
                                />
                              </div>
                              <div className="flex font-Poppins">
                                <p className="text-gray-600">Style</p>
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  ref={styleRef}
                                  className="input appearance-none"
                                />
                              </div>
                              <div className="flex font-Poppins">
                                <p className="text-gray-600">Estimated Cost Of Construction</p>
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  ref={estimatedCostRef}
                                  className="input appearance-none"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col space-y-3">
                              <p className="font-Poppins text-xl mb-6 text-gray-600">
                                Floor Description
                              </p>
                              <div className="flex font-Poppins">
                                <p className="text-gray-600">Bedroom</p>
                                <input
                                  type="number"
                                  name=""
                                  id=""
                                  ref={bedroomsRef}
                                  className="input appearance-none"
                                />
                              </div>
                              <div className="flex font-Poppins">
                                <p className="text-gray-600">Living Room</p>
                                <input
                                  type="number"
                                  name=""
                                  id=""
                                  ref={livingRoomRef}
                                  className="input appearance-none"
                                />
                              </div>
                              <div className="flex font-Poppins">
                                <p className="text-gray-600">Kitchen</p>
                                <input
                                  type="number"
                                  name=""
                                  id=""
                                  ref={kitchenRef}
                                  className="input appearance-none"
                                />
                              </div>
                              <div className="flex font-Poppins">
                                <p className="text-gray-600">Staircase</p>
                                <input
                                  type="number"
                                  name=""
                                  id=""
                                  ref={staircaseRef}
                                  className="input appearance-none"
                                />
                              </div>
                              <div className="flex font-Poppins">
                                <p className="text-gray-600">Staircase from</p>
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  ref={staircaseFromRef}
                                  className="input appearance-none"
                                />
                              </div>
                              <div className="flex font-Poppins">
                                <p className="text-gray-600">Toilet</p>
                                <input
                                  type="number"
                                  name=""
                                  id=""
                                  ref={toiletRef}
                                  className="input appearance-none"
                                />
                              </div>
                              <div className="flex font-Poppins">
                                <p className="text-gray-600">Bath</p>
                                <input
                                  type="number"
                                  name=""
                                  id=""
                                  ref={bathRef}
                                  className="input appearance-none"
                                />
                              </div>
                              <div className="flex font-Poppins">
                                <p className="text-gray-600">Parking type</p>
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  ref={ParkingTypeRef}
                                  className="input appearance-none"
                                />
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                      <div className="mt-5 sm:mt-6">
                        <button
                          type="button"
                          disabled={!selectedFile || !session}
                          className="inline-flex border-[1px] border-gray-400 text-blue-600 px-8 py-2 text-md rounded-lg font-Poppins font-semibold hover:bg-blue-600 hover:text-white transition duration-200 hover:shadow-md hover:shadow-gray-600 cursor-pointer mt-10"
                          onClick={uploadPost}>
                          {loading ? 'Uploading' : 'Upload'}
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
