import Image from 'next/image';

function Post({ id, username, userImg, img, desc }) {
  return (
    <div className="">
      {/* img */}
      <Image alt="image" src={img || ''} className="h-[300px] w-[300px]" />

      {/* userinfo */}
      <div>
        <div className="flex items-center my-2">
          <Image
            alt="avatar"
            src={userImg}
            className="h-9 w-9 rounded-full object-contain p-1 mr-3"
          />
          <p>{username}</p>
        </div>

        <div>
          <button></button>
        </div>
      </div>
    </div>
  );
}

export default Post;
