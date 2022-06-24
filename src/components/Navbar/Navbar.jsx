import LogoWhite from "../../assets/img/Geopagos-blanco.png"
import LogoBlue from "../../assets/img/Geopagos-azul.png"
import "./navbar.css"
import { useContextApp } from "../../context/ContextApp"
import { useEffect } from "react"
import Data from "../../assets/checkoutData.json"

function Navbar() {
    const { data, loadData, navColor } = useContextApp()

    useEffect(() => {
        loadData(Data.data)
    }, [])

    return (
        <nav className={navColor ? "nav__container white" : "nav__container"}>
            <img src={navColor ? LogoBlue : LogoWhite} className="nav__logo" alt="logoGeopagos" />
            <p className={navColor ? "nav__shopName font_black" : "nav__shopName"}>{data?.shop_name}</p>
        </nav>
    )
}


export default Navbar