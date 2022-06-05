import React from "react";
import { useState, useRef } from "react";
import { PhotographIcon } from "@heroicons/react/solid";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import Header from "../components/Header";
import { db, storage } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { ref, getDownloadURL, uploadString } from "firebase/storage";
import Head from "next/head";

function Create() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const filePickerRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const descRef = useRef(null);
  const nameRef = useRef(null);
  const supplyRef = useRef(null);
  const categoryRef = useRef(null);
  const priceRef = useRef(null);

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

    const docRef = await addDoc(collection(db, "posts"), {
      username: session.user.name,
      description: descRef.current.value,
      supply: supplyRef.current.value,
      category: categoryRef.current.value,
      price: priceRef.current.value,
      profileImg: session.user.image,
      timestamp: serverTimestamp(),
    });

    console.log("New doc added with ID", docRef.id);
    console.log(session);

    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      }
    );
    setOpen(false);
    setLoading(false);
    setSelectedFile(null);
  };

  return (
    <div className="flex flex-col">
      <Head>
        <title>create</title>
      </Head>
      <Header />
      <div className="flex flex-col items-center my-8">
        <p className="text-3xl font-Poppins font-extrabold mb-1">
          Create New Item
        </p>
        <p className="text-lg font-Ubuntu text-blue-600 mb-6">
          Image, Video, Audio, or 3D Model
        </p>
        <p className="text-gray-500 text-xs font-Poppins font-semibold mb-3">
          File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
          GLB, GLTF. Max size: 100 MB
        </p>
        {/* Input */}
        <div className="h-[400px] w-[400px] border-2 border-dotted border-gray-400 rounded-xl">
          <div>
            {selectedFile ? (
              <img src={selectedFile} onClick={() => setSelectedFile(null)} />
            ) : (
              <div
                onClick={() => filePickerRef.current.click()}
                className="flex ml-32 my-32"
              >
                <PhotographIcon
                  className="text-gray-300 inline cursor-pointer h-32"
                  aria-hidden="true"
                />
              </div>
            )}
          </div>

          <input
            type="file"
            name="ground map"
            id="ground_map"
            hidden
            ref={filePickerRef}
            onChange={addImageToPost}
            className="w-full h-full cursor-pointer hidden"
            onClick={() => setOpen(true)}
          />
        </div>

        {/* About Section */}
        <div className="flex flex-col my-10 font-Poppins">
          <div className="flex space-x-6 items-center">
            <p className="font-Poppins font-semibold">Name</p>
            <div className="border-[2px] border-dotted px-4 py-1">
              <input
                type="text"
                className="w-[380px] text-sm outline-none"
                placeholder="Item name"
                ref={nameRef}
              />
            </div>
          </div>
        </div>

        <div className="flex space-x-6 items-center">
          <p className="font-Poppins font-semibold">Description</p>
          <div className="border-[2px] border-dotted px-4 py-1">
            <textarea
              name=""
              id=""
              cols="59"
              rows="4"
              ref={descRef}
              placeholder="Provide a detailed description of your item"
              className="outline-none text-sm"
            />
          </div>
        </div>

        <div className="flex flex-row my-10 font-Poppins">
          <div className="flex space-x-6 items-center">
            <p className="font-Poppins font-semibold">Quantity</p>
            <div className="border-[2px] border-dotted px-4 py-1">
              <input
                type="number"
                className="w-[380px] text-sm outline-none"
                defaultValue={1}
                ref={supplyRef}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row my-10 font-Poppins">
          <div className="flex space-x-6 items-center">
            <p className="font-Poppins font-semibold">Category</p>
            <div className="border-[2px] border-dotted px-4 py-1">
              <input
                type="text"
                className="w-[380px] text-sm outline-none"
                ref={categoryRef}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row my-10 font-Poppins">
          <div className="flex space-x-6 items-center">
            <p className="font-Poppins font-semibold">Price</p>
            <div className="border-[2px] border-dotted px-4 py-1">
              <input
                type="number"
                ref={priceRef}
                className="w-[380px] text-sm outline-none"
                placeholder="₹"
              />
            </div>
          </div>
        </div>

        <div>
          <button
            disabled={!selectedFile || !session}
            className="border-[1px] border-gray-400 text-blue-600 px-8 py-2 text-md rounded-lg font-Poppins font-semibold hover:bg-blue-600 hover:text-white transition duration-200 hover:shadow-md hover:shadow-gray-600 cursor-pointer"
            onClick={uploadPost}
          >
            {loading ? "Uploading" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default Create;
