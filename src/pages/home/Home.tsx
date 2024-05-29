
// import Swipe from "../../components/contenthome/Swipe"
import { Link, Outlet } from "react-router-dom"
import Landing from "../../components/contenthome/Landing"
import Startdesign from "../../components/contenthome/Startdesign"
import Stories from "../../components/contenthome/Stories"
import Trying from "../../components/contenthome/Trying"
import Sustainability from "../../components/contenthome/Sustainability"
import Slider from "../../components/contenthome/Slider"



const Home = () => {
  return (
     <>
    <Landing />
    <Slider />
    <h1 className="text-center font-bold text-6xl mt-[200px]">Making packaging simple</h1>
    <ul className=" w-[700px] mx-auto flex justify-between py-[10px] font-semibold text-2xl mt-[50px] bg-[#e5e5e5]">
      <Link to={"Products"} className=" px-[6px]"> Products</Link>
      <Link to={"Design"} > Design</Link>
      <Link to={"Ordering"}>Ordering</Link>
      <Link to={"Warehousing"}>Warehousing</Link>
      <Link to={"Pay"}>Pay as you want</Link>
    </ul>
    <Outlet/>
    <Startdesign/>
    <Slider/>
    <Stories />
    <Trying/>
    <Sustainability />
    

    </>
    

  )
}

export default Home