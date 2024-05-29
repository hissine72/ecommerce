// import { ScrollRestoration } from "react-router-dom"
// import ScrollingImage from "./ScrollingImage"
import Scrole from "./Scrole";
import Scroletow from "./Scroletow";

// import Scroletow from "./Scroletow";

const Landing = () => {
  return (
    <section className=" mt-[100px]       ">
      <div className="  ">
        <div className=" container mx-auto ">
          <div className=" flex justify-between items-center    ">
            <div className=" md:mb-[200px]">
              <h1 className=" font-bold font-sans  text-[15.5px]  md:text-7xl leading-[80px] w-[810px]">
                Custom packaging designed to fit your business
              </h1>
              <p className=" font-sans w-[500px] my-[30px]  text-[#00061ab3] text-2xl">
                Explore, design and order sustainable packaging your customers
                will love
              </p>
              <button className=" bg-[#2757ff] rounded-[4px] text-[#fff] px-[16px] py-[10px]  font-semibold w-[130px] hover:bg-[#3d5ccecc]">
                Shop now
              </button>
            </div>
            <div className=" hidden md:block md:w-[650px] h-[400px] ">
              
              <div className=" relative top-[-202px] flex space-x-2  border-b-2 ">
                <Scrole />
                <Scroletow/>
                {/* <Scroletow /> */}
                {/* <Scroletow/> */}
              {/* <ScrollingImages/> */}
            {/* <Scroletow /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
