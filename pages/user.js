import {
  ClipboardCheckIcon,
  CollectionIcon,
  HeartIcon,
  PencilAltIcon,
  PencilIcon,
  ShareIcon,
} from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

function User({ products }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);
  const [open, setOpen] = useRecoilState(modalState);
  const { data: session } = useSession();

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  return (
    <div className="h-screen overflow-scroll scrollbar-hide">
      <Head>
        <title>{session?.user.name}</title>
      </Head>
      <Header />

      {/* Top Section */}
      <section className="flex flex-col items-center mt-0">
        {/* Input */}
        <div className="h-[200px] w-full bg-gray-300 cursor-pointer">
          <div>
            {selectedFile ? (
              <Image src={selectedFile} onClick={() => setSelectedFile(null)} />
            ) : (
              <div
                onClick={() => filePickerRef.current.click()}
                className="flex ml-32 mt-20"
              >
                <PencilIcon
                  className="text-gray-500 inline cursor-pointer mx-[500px] h-11"
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

          {/* Profile Pic */}
          <div className="ml-[550px] mt-[10px] w-fit rounded-full border-8 border-white">
            <img
              src={session?.user.image}
              className="rounded-full object-fit h-40 w-40"
              objectFit="contain"
            />
          </div>
        </div>

        {/* User Info */}
        <div className="flex flex-col items-center mx-auto mt-28">
          <p className="font-Poppins font-bold text-3xl">
            {session?.user.name}
          </p>

          <p className="font-Poppins font-bold text-sm text-gray-600">
            {session?.user.email}
          </p>
        </div>

        {/* Options */}
        <div className="flex items-center justify-between px-4 py-2 mt-28 mx-auto w-full font-semibold max-w-6xl">
          <div className="flex items-center cursor-pointer text-blue-600">
            <CollectionIcon className="h-6 " />
            <p className="font-Ubuntu ml-2 text-lg">Collection</p>
          </div>

          <div>
            <Link href="/create">
              <a className="flex items-center cursor-pointer">
                <PencilAltIcon className="h-6 text-gray-500" />
                <p className="font-Ubuntu ml-2 text-lg text-gray-500">Create</p>
              </a>
            </Link>
          </div>

          <div className="flex items-center cursor-pointer">
            <HeartIcon className="h-6 text-gray-500" />
            <p className="font-Ubuntu ml-2 text-lg text-gray-500">Favorite</p>
          </div>

          <div className="flex items-center cursor-pointer">
            <ShareIcon className="h-6 text-gray-500" />
            <p className="font-Ubuntu ml-2 text-lg text-gray-500">Share</p>
          </div>
        </div>
      </section>
      {/* Middle section */}
      <section className="mt-32 max-w-6xl mx-auto">
        <ProductFeed products={products} />
      </section>
    </div>
  );
}

export default User;

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
