
import "./inputRadio.css"



function InputRadio({ element, setInstallments, actualInstallaments, symbol }) {
    return (
        <label className={actualInstallaments === element.installment ? "label_radio label_active" : "label_radio"} htmlFor="dni">
            <div className="div_row flex_start">
                <input className="input_radio" minLength={8} placeholder="DNI del titular" name="dni" id="dni" type="radio"
                    onChange={() => {
                        setInstallments(element.installment)
                    }} />
                <div className="div_column">
                    {element.installment} cuotas de {" " + symbol + " " + element.installmentPrice}
                    <span>
                        CF: {element.financialRate}%
                    </span>
                </div>
            </div>
            <span className="span_radio">
                {element.total === element.installmentPrice ? "Sin interés" : symbol + element.total}
                {/* {symbol + element.total} */}
            </span>
        </label>
    )
}


export default InputRadio