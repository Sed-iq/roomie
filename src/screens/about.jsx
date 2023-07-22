import { MdClose } from "react-icons/md";

export default ({ setAbout }) => {
  return (
    <div className="z-10 w-full fixed h-screen left-0 bg-black-a">
      <div className=" w-full h-1/2 flex flex-col justify-between items-center p-3">
        <div className="w-full flex bg-transparent h-2/5 items-end p-3 justify-end">
          <MdClose
            onClick={() => setAbout(false)}
            className="sm:text-4xl hover:cursor-pointer text-red-500 "
          />
        </div>
        <div className="bg-white sm:w-1/2 p-4 rounded">
          <p className="sm:text-sm my-2 text-center opensans-b">About Us</p>
          <p className="text-gray-700 text-center text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            repudiandae, atque at quod mollitia nulla laboriosam voluptas. Autem
            deleniti numquam eius unde, commodi accusantium perspiciatis?
            Deserunt quibusdam ea ab nostrum, perspiciatis quasi sint saepe quia
            cum rem voluptate obcaecati autem quidem repellendus veritatis
            corrupti nobis debitis voluptatum consequatur doloribus! Provident?
          </p>
        </div>
      </div>
    </div>
  );
};
