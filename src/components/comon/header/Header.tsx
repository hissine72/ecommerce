import { NavLink } from "react-router-dom";
import "../../../../src/App.css";
// import Headertow from "./Headertow";
import { Headerbasket } from "../../ecoomerce/headerbasket/Headerbasket";
import { Cart } from "../../ecoomerce/cart/Cart";
import { Link } from "react-router-dom";
import Headertow from "./Headertow";
import Slider from "../slider/Slider";
import img33 from "../../../assets/images/111.jpg";

const Header = () => {
  return (
    <section className="bg-[#FFFF] py-2">
      <div className=" container mx-auto flex justify-center justify-between items-center   ">
        <NavLink to={"home"}>
          <img src={img33} />
        </NavLink>
        <div className=" flex space-x-4">
          <input
            type="text"
            placeholder="search for products... "
            className=" border-2  w-[900px] outline-none px-20 rounded-[30px] py-2"
          />
        </div>
        <div className=" flex space-x-4">
          <div className=" flex space-x-4">
            <Link className=" flex space-x-2" to={"signin"}>
              <Headerbasket />
              <p>sign in</p>
            </Link>
          </div>
          <div className=" flex space-x-8 cursor-pointer">
            <img
              width="24"
              height="24"
              src="https://packhelp.com/img/images/eu_countries/eu.svg"
              data-src="https://packhelp.com/img/images/eu_countries/eu.svg"
              alt="region switcher flag"
            />
            <Cart />
          </div>
        </div>
      </div>

      <div className=" mt-6 border-b-2 pb-3">
        <Headertow />
      </div>
    </section>
  );
};

export default Header;
