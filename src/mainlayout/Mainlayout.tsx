import Footer from "../components/comon/footer/Footer"
import Header from "../components/comon/header/Header"
import { Outlet } from "react-router-dom"


const Mainlayout = () => {
  return (
    <div>
        <Header/>
        <main>
        <Outlet/>
        </main>
        <Footer/>

    </div>
  )
}

export default Mainlayout