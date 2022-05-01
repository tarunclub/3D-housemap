import Image from "next/image";
import instagram from "../icons/instagram.png";
import twitter from "../icons/twitter.png";
import linkedin from "../icons/linkedin.png";
import Youtube from "../icons/youtube.png";

function Footer() {
  return (
    <div className=" mt-[80px] pb-[20px] bg-blue-600 rounded-md">
      {/* Connect Section */}
      <section className="flex flex-row mx-10 py-8">
        <div>
          <p className="font-Poppins text-white text-2xl">Stay in the loop</p>
          <div className="text-white text-sm font-Poppins mt-5 ">
            Join our mailing list to stay in the loop with our newest feature
            <br />
            releases and tips and tricks for navigating 3Dhousemap.
          </div>
          <div className="flex mt-6">
            <div className="bg-gray-800 w-fit px-4 py-2 rounded-lg">
              <input
                type="text"
                placeholder="Your email address"
                className="bg-transparent outline-none font-Poppins text-gray-300"
              />
            </div>
            <div>
              <button className="border-[1px] border-gray-400 text-blue-500 bg-white px-8 py-2 text-md rounded-lg font-Poppins font-semibold hover:bg-blue-600 hover:text-white transition duration-200 hover:shadow-md hover:shadow-gray-600 ml-4">
                Signup
              </button>
            </div>
          </div>
        </div>

        {/* Social Section */}
        <div className="flex flex-col mx-auto">
          <p className="font-Poppins text-white text-2xl">Join the community</p>

          {/* Icons */}
          <div className="flex space-x-5 mt-4">
            <div>
              <button className=" text-blue-600 px-2 py-1 rounded-lg hover:bg-[#fb3958] hover:text-white transition duration-200 hover:shadow-md hover:shadow-gray-600">
                <Image src={instagram} height={25} width={25} />
              </button>
            </div>
            <div className="">
              <button className=" text-blue-600 px-2 py-1 rounded-lg hover:bg-blue-600 hover:text-white transition duration-200 hover:shadow-md hover:shadow-gray-600">
                <Image src={twitter} height={25} width={25} />
              </button>
            </div>
            <div className="">
              <button className=" text-blue-600 px-2 py-1 rounded-lg hover:bg-[#FF0000] hover:text-white transition duration-200 hover:shadow-md hover:shadow-gray-600">
                <Image
                  src={Youtube}
                  height={25}
                  width={25}
                  className="text-white"
                />
              </button>
            </div>
            <div className="">
              <button className=" text-blue-600 px-2 py-1 rounded-lg hover:bg-[#0072b1] hover:text-white transition duration-200 hover:shadow-md hover:shadow-gray-600">
                <Image src={linkedin} height={25} width={25} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <hr></hr>

      {/* Bottom Section */}
      <section className="flex flex-row justify-between mx-10 mt-5">
        <div>
          <p className="font-Dosis text-3xl cursor-pointer text-white">
            Ghar Naksha
          </p>
          <p className="text-white mt-5 text-lg font-Poppins">
            Buy, sell, and discover exclusive digital ground maps.
          </p>
        </div>
        <div>
          <p className="text-lg font-Poppins font-bold text-white cursor-pointer">
            My Account
          </p>
          <div className="space-y-3 mt-3">
            <p className="text-md text-white font-Poppins cursor-pointer">
              Lorem, ipsum.
            </p>
            <p className="text-md text-white font-Poppins cursor-pointer">
              Lorem, ipsum.
            </p>
            <p className="text-md text-white font-Poppins cursor-pointer">
              Lorem, ipsum.
            </p>
            <p className="text-md text-white font-Poppins cursor-pointer">
              Lorem, ipsum.
            </p>
            <p className="text-md text-white font-Poppins cursor-pointer">
              Lorem, ipsum.
            </p>
          </div>
        </div>
        <div>
          <p className="text-lg font-Poppins font-bold text-white cursor-pointer">
            Resources
          </p>
          <div className="space-y-3 mt-3">
            <p className="text-md text-white font-Poppins cursor-pointer">
              Lorem, ipsum.
            </p>
            <p
              cursor-pointerp
              className="text-md text-white font-Poppins cursor-pointer"
            >
              Lorem, ipsum.
            </p>
            <p className="text-md text-white font-Poppins cursor-pointer">
              Lorem, ipsum.
            </p>
            <p className="text-md text-white font-Poppins cursor-pointer">
              Lorem, ipsum.
            </p>
            <p className="text-md text-white font-Poppins cursor-pointer">
              Lorem, ipsum.
            </p>
          </div>
        </div>
        <div>
          <p className="text-lg font-Poppins font-bold text-white cursor-pointer">
            Company
          </p>
          <div className="space-y-3 mt-3">
            <p className="text-md text-white font-Poppins cursor-pointer">
              Lorem, ipsum.
            </p>
            <p className="text-md text-white font-Poppins cursor-pointer">
              Lorem, ipsum.
            </p>
            <p className="text-md text-white font-Poppins cursor-pointer">
              Lorem, ipsum.
            </p>
            <p className="text-md text-white font-Poppins cursor-pointer">
              Lorem, ipsum.
            </p>
            <p className="text-md text-white font-Poppins cursor-pointer">
              Lorem, ipsum.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
