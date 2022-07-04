import { useSession } from 'next-auth/react';
import Image from 'next/image';

function ClientInfo() {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col items-center py-8 space-y-4">
      <p className="text-xl font-bold font-Poppins">Success Stories</p>
      <div className="mx-auto mt-[10px] w-fit rounded-full border-8 border-white">
        <Image
          alt="avatar"
          src={session?.user.image}
          className="rounded-full object-fit h-32 w-32"
          objectFit="contain"
        />
      </div>
      <p className="text-white text-semibold text-md font-Ubuntu">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum corporis nisi enim tenetur
        culpa exercitationem reprehenderit repellat. Fugit nemo consequuntur, ducimus, assumenda
        saepe enim quod odio voluptates maiores dolore id.
      </p>

      <div className="flex flex-col items-center mx-auto mt-28">
        <p className="font-Poppins font-bold text-sm">{session?.user.name}</p>

        <p className="font-Poppins font-bold text-xs text-gray-600">{session?.user.email}</p>
      </div>
      <button className="text-white bg-purple-700 px-3 py-2 rounded-lg font-semibold font-Ubuntu mb-10">
        View All
      </button>
    </div>
  );
}

export default ClientInfo;
