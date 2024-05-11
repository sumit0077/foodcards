import Cards from "./Cards";
import Data from "./Data";

function Restaurants() {
    return (
        <div className="w-full flex gap-10  flex-wrap ml-10">
            {
                Data.map((item, index) => (
                    <Cards key={index} title={item.name} address={item.Address} number={item.number} food={item.cuisine} />
                ))
            }
        </div>
    );
}

export default Restaurants;