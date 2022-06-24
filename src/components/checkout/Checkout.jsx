import "./checkout.css"
import { useContextApp } from "../../context/ContextApp"
import { useState } from "react";
import FormCheckout from "../FormCheckout/FormCheckout";
// import LockIcon from '@mui/icons-material/Lock';
import lockIcon from "../../assets/img/lock_icon.png"

function Checkout() {
    const [installments, setInstallments] = useState(1)
    const { data } = useContextApp()

    function totalAmount(total) {
        return "" + (data?.attributes.currency_symbol + total?.total)
    }

    return (
        <>
            <div className="checkout__total">
                <div className="div_row">
                    <p className="checkout__emphasis">Total</p>
                    <p>
                        <span className="checkout__emphasis font_medium">
                            {totalAmount(data?.attributes.installments.find(element => element.installment === installments))}
                        </span>
                    </p>
                </div>
                {data?.attributes.items.map(prod => {
                    return (
                        <div className="div_row" key={prod.name}>
                            <p className="bold">{prod.name} X {prod.quantity}</p>
                            <p className="bold">{data?.attributes.currency_symbol + " " + prod.unitPrice.amount}</p>
                        </div>
                    )
                })}
            </div>
            <p className="font_small bold">Paga conm tarjeta de crédito o débito. <span className="checkout__emphasis font_small">Ver tarjetas</span></p>
            <FormCheckout setInstallments={setInstallments} actualInstallaments={installments} installments={data?.attributes.installments} symbol={data?.attributes.currency_symbol} />
            <div className="div_row center">
                <img className="iconLock" src={lockIcon} alt="padlock" />
                <p className="mesage_security">Todas las transacciones son seguras y encriptadas</p>
            </div>
        </>
    )
}



export default Checkout