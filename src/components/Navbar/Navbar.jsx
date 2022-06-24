import LogoWhite from "../../assets/img/Geopagos-blanco.png"
import "./navbar.css"
import { useContextApp } from "../../context/ContextApp"

function Navbar() {
    const { data } = useContextApp()
    return (
        <nav className="nav__container">
            <img src={LogoWhite} className="nav__logo" alt="logoGeopagos" />
            <p className="nav__shopName">{data?.shop_name}</p>
        </nav>
    )
}



export default Navbar