
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";


function Cards({ title, address,number,food,}) {
  return (
    <>
    
      
      <div className=" w-80 border-1 border-black flex  flex-col gap-2 justify-evenly  p-2 shadow-xl rounded-lg mt-5 ">
        <section className="flex">
          <p className="text-lg font-semibold">{title}</p>
          <FaStar className="text-amber-500 text-lg m-1 ml-2" />
          <FaStar className="text-amber-500 text-lg  mt-1" />
          <FaStar className="text-amber-500 text-lg mt-1" />
          <FaStar className="text-amber-500 text-lg mt-1" />
          <FaStar className="text-amber-500 text-lg mt-1" />
          <FaStar className="text-amber-500 text-lg mt-1" />
        </section>
        <section className="flex text-slate-600">
          <FaLocationDot className="m-1" />
          <p> {address}</p>
        </section>
        <section className="flex  text-slate-600">
          <p>{number}</p>
        </section>
        <section className="flex">
          <ImSpoonKnife className="text-green-500 m-1" />
          <p className="text-green-500">{food}</p>
        </section>
        <section className="flex">
          <p className="text-sky-400 decoration-solid">Visit Menu</p>
        </section>
      </div>
    </>
  );
}

export default Cards;
