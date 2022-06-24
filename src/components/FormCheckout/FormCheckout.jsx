
import "./formCheckout.css"
import iconCard from "../../assets/img/logo-VISA- Letras.png"


function FormCheckout({ installments, symbol, setInstallments, actualInstallaments }) {
    console.log(installments);
    return (
        <form className="form_checkout">

            <label className="form_label" htmlFor="idCard">Numero de tarjeta
                <img className="iconVisa" src={iconCard} alt="icon visa" />
                <input className="form_input" defaultValue={2345665635782347} name="idCard" id="idCard" type="number" minLength={12} min={1} />
            </label>
            <div className="div_row">
                <label className="form_label label_s" htmlFor="expiration">
                    <input className="form_input" placeholder="MM/AA" name="expiration" id="expiration" type="text" />
                    Fecha de expiracion
                </label>
                <label className="form_label label_s" htmlFor="codSegurity">
                    <input className="form_input" placeholder="Cód. de seguridad ?" name="codSecurity" id="codSecurity" type="text" />
                    3 números al dorso de tarjeta
                </label>
            </div>
            <label className="form_label" htmlFor="codSegurity">
                <input className="form_input" placeholder="Nombre del titular" name="codSecurity" id="codSecurity" type="text" />
                Como figura en la tarjeta
            </label>
            <label className="form_label" htmlFor="dni">
                <input className="form_input" placeholder="DNI del titular" name="dni" id="dni" type="number" minLength={8} />
                Número de documento
            </label>
            <h2 className="h2">Cuotas</h2>
            {
                installments?.map(element => {
                    return (

                        <label key={element.installment} className={actualInstallaments === element.installment ? "label_radio label_active" : "label_radio"} htmlFor="dni">
                            <input className="input_radio" minLength={8} placeholder="DNI del titular" name="dni" id="dni" type="radio"
                                onChange={() => {
                                    setInstallments(element.installment)
                                }} />
                            <div className="div_column">
                                {element.installment} cuotas de {element.installmentPrice}
                                <span>
                                </span>
                                CF: {element.financialRate}%
                            </div>
                            <span className="span_radio">
                                {symbol + element.total}
                            </span>
                        </label>

                    )
                })
            }

            <h2 className="h2">Datos presonales</h2>
            <label className="form_label" htmlFor="dni">
                <input className="form_input" placeholder="E-mail" name="dni" id="dni" type="email" minLength={8} />
                A este email te enviaremos el recibo de compra
            </label>

            <button className="btn">Continuar</button>
        </form>
    )
}


export default FormCheckout