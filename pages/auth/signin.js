import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";
import Image from "next/image";
import google from "../../icons/google.png";

export default function SignIn({ providers }) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center mt-20">
        <p className="font-Dosis text-6xl cursor-pointer text-blue-800">
          <button>Ghar Naksha</button>
        </p>
        <p className="font-Ubuntu text-[20px] font-semibold  mt-4 mb-8">
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
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: await { providers },
  };
}
