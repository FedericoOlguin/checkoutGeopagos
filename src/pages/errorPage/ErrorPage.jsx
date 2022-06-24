import "./errorPage.css"
import ErrorIcon from "../../assets/img/error_iconRed.svg"
import {Link as LinkRouter} from "react-router-dom"



function ErrorPage() {

    return (
        <div className="error_container">
            <img className="error_icon" src={ErrorIcon} alt="errorIcon" />
            <h3 className="bold">Transascción denegada</h3>
            <p className="text_center">¡Disculpas! Se ha producido un error, por favor vuelve a intentar.</p>
            <LinkRouter to={"/"} className="btn btn_error">Volver a intentar</LinkRouter>
        </div>
    )
}


export default ErrorPage