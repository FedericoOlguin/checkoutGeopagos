import "./formCheckout.css"
import iconCard from "../../assets/img/logo-VISA- Letras.png"
import InputRadio from "../inputRadio/InputRadio";
import { useEffect, useRef } from "react"
import { useContextApp } from "../../context/ContextApp";
import { useNavigate } from "react-router-dom";

function FormCheckout(props) {
    const navigate = useNavigate();
    const form = useRef()
    const { updateNavColor } = useContextApp()

    // genera la orden de pago y 
    function sendOrder(e) {
        e.preventDefault()
        form.current.focus()
        let dataFrom = new FormData(form.current)
        let order = {
            idCard: dataFrom.get("idCard"),
            expiration: dataFrom.get("expiration"),
            securityCod: dataFrom.get("codSecurity"),
            titularName: dataFrom.get("titularName"),
            dni: dataFrom.get("dni"),
            installament: props.actualInstallaments,
            email: dataFrom.get("email"),
        }
        navigate("/error")
    }

    useEffect(() => {
        updateNavColor()
    }, [])

    return (
        <form className="form_checkout" onSubmit={(e) => { sendOrder(e) }} ref={form}>
            <label className="form_label  " htmlFor="idCard">Numero de tarjeta
                <div className="label_row">
                    <input required className="form_input" defaultValue={2345665635782347} name="idCard" id="idCard" type="number" minLength={12} min={1} />
                    <img className="iconVisa" src={iconCard} alt="icon visa" />
                </div>
            </label>
            <div className="div_row">
                <label className="form_label label_s" htmlFor="expiration">
                    <input required maxLength={5} className="form_input" placeholder="MM/AA" name="expiration" id="expiration" type="text" />
                    Fecha de expiracion
                </label>
                <label className="form_label label_s" htmlFor="codSegurity">
                    <input required maxLength={3} minLength={3} min={1} className="form_input" placeholder="Cód. de seguridad ?" name="codSecurity" id="codSecurity" type="text" />
                    3 números al dorso de tarjeta
                </label>
            </div>
            <label className="form_label" htmlFor="titularName">
                <input required className="form_input" placeholder="Nombre del titular" name="titularName" id="titularName" type="text" />
                Como figura en la tarjeta
            </label>
            <label className="form_label" htmlFor="dni">
                <input required className="form_input" placeholder="DNI del titular" name="dni" id="dni" type="number" minLength={8} />
                Número de documento
            </label>
            <h2 className="h2">Cuotas</h2>
            {props.installments?.map(element => {
                return (
                    <InputRadio key={element.installment}
                        element={element}
                        installments={props.installments}
                        symbol={props.symbol}
                        setInstallments={props.setInstallments}
                        actualInstallaments={props.actualInstallaments}
                    />
                )
            })}
            <h2 className="h2">Datos presonales</h2>
            <label className="form_label" htmlFor="email">
                <input required className="form_input" placeholder="E-mail" name="email" id="email" type="email" minLength={8} />
                A este email te enviaremos el recibo de compra
            </label>
            <input type="submit" value={"Continuar"} className="btn" name="send" id="send" />
        </form>
    )
}


export default FormCheckout