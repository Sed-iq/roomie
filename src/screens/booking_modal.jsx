import { MdClose } from "react-icons/md";
import addcart from "../components/addcart";

export default ({ setBooking, name, price, setCart, img, notify }) => {
  return (
    <div
      id="booking-modal"
      className="fixed flex justify-center items-center w-full bg-black-a h-screen z-10 "
    >
      <div id="modal" className="sm:w-1/2 w-3/4 rounded-sm bg-white">
        <div className="px-2 relative">
          {/* Head */}
          <p className="text-slate-600 text-center p-3 font-semibold">
            Book a room
          </p>
          <MdClose
            onClick={() => setBooking(false)}
            className="absolute z-10 right-0 m-3 top-0 text-xl"
          />
        </div>
        <div className="w-full flex h-1/2 p-3 justify-center">
          <div className="lg:w-1/2 md:w-72 rounded w-5/6 mx-2 h-full">
            <img
              alt="Room picture"
              srcSet={img}
              className="h-full w-full text-xs rounded"
            />
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addcart(name, img, price, setCart);
            notify("Room Booked");
          }}
          className="flex flex-col items-center p-4"
        >
          <h2 className="text-sm mb-4 opensans-b">{name}</h2>
          <div>
            <div className="flex items-center">
              <p className="text-xs mx-3">Checkin date:</p>
              <input
                required
                type="date"
                placeholder="Check in date"
                className="border-2 rounded p-1 px-3 text-xs opensans-b border-slate-800"
              />
            </div>
            <div className="flex items-center my-2">
              <p className="text-xs mx-3">Checkout date:</p>
              <input
                required
                type="date"
                placeholder="Check in date"
                className="border-2 rounded p-1 px-3 text-xs opensans-b border-slate-800"
              />
            </div>
          </div>
          <button className="sm:text-xs text-sm opensans-b m-3 p-2 rounded bg-black text-white">
            Book for ${price}/night
          </button>
        </form>
      </div>
    </div>
  );
};
