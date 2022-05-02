import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import google from "../../icons/google.png";
import Link from "next/link";
import { PlayIcon } from "@heroicons/react/outline";

export default function SignIn({ providers }) {
  return (
    <div className="grid grid-cols-2 bg-[#1E1E1E] ">
      <section className="flex flex-row bg-[url('../img/background.png')] bg-no-repeat bg-cover py-8 h-screen">
        <div className="mx-10">
          {/* Tag Line */}
          <p className="font-Ubuntu text-[45px] font-semibold mt-10 text-blue-700">
            Discover, buy and sell extraordinary ground plans
          </p>
          {/* Desc */}
          <p className="font-Poppins font-semibold mt-10 text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            ex.
          </p>
          <div className="flex space-x-9 mt-[50px]">
            <button className="bg-blue-600 px-8 py-2 mr-4 text-md rounded-lg text-white font-Poppins font-semibold border-gray-400 hover:bg-white hover:shadow-md hover:shadow-gray-700 hover:text-blue-600 transform transition duration-200">
              Explore
            </button>
            <button className="border-[1px] border-gray-400 text-blue-600 px-8 py-2 text-md rounded-lg font-Poppins font-semibold hover:bg-blue-600 hover:text-white transition duration-200 hover:shadow-md hover:shadow-gray-600">
              <Link href="/create">
                <a>Join us</a>
              </Link>
            </button>
          </div>

          {/* Bottom */}
          <div className="flex mt-[80px] cursor-pointer hover:">
            <p className="font-Poppins font-bold text-black ">
              Learn more about 3Dhousemap
            </p>
            <PlayIcon className="h-6 text-red-600 ml-1 hover:transition duration-75 hover:rotate-45" />
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center mt-10 ">
        <p className="font-Dosis text-6xl cursor-pointer text-blue-800">
          <button>3Dhousemap</button>
        </p>
        <p className="font-Ubuntu text-[20px] font-semibold mt-4 mb-8 text-white">
          Discover, buy and sell extraordinary ground plans
        </p>
        <div className="mt-10 flex flex-col items-center border-[1px] border-gray-600 px-4 py-6 rounded-lg">
          <p className="mb-4 font-Poppins text-blue-600 font-bold">
            Connect with one of our available providers
          </p>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="flex items-center justify-between bg-blue-600 px-4 py-2 rounded-lg font-Poppins text-white w-[500px] shadow-md shadow-gray-700 hover:bg-blue-500"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                <div className="flex items-center">
                  <div className="flex mr-2">
                    <Image src={google} height={25} width={25} />
                  </div>
                  <p className="font-semibold">
                    Google <div className="hidden">{provider.name}</div>
                  </p>
                </div>
                <div>
                  <p className="text-white font-Poppins font-bold ">Popular</p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: await { providers },
  };
}
