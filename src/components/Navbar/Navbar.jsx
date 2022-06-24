import LogoWhite from "../../assets/img/Geopagos-blanco.png"
import LogoBlue from "../../assets/img/Geopagos-azul.png"
import "./navbar.css"
import { useContextApp } from "../../context/ContextApp"
import { useEffect } from "react"
import Data from "../../assets/checkoutData.json"

function Navbar() {
    const { data } = useContextApp()
    const { loadData } = useContextApp()

    useEffect(() => {
        loadData(Data.data)
    }, [])

    return (
        <nav className={window.location.href === "http://localhost:3000/error" ? "nav__container white" : "nav__container"}>
            {console.log(window.location.href)}
            {/* <img src={LogoWhite} className="nav__logo" alt="logoGeopagos" /> */}
            <img src={window.location.href === "http://localhost:3000/error" ? LogoBlue : LogoWhite} className="nav__logo" alt="logoGeopagos" />

            <p className={window.location.href === "http://localhost:3000/error" ? "nav__shopName font_black" : "nav__shopName"}>{data?.shop_name}</p>
        </nav>
    )
}



export default Navbar