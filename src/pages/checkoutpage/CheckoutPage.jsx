import React, { useEffect } from "react";
import Chekout from "../../components/checkout/Checkout"
import { useContextApp } from "../../context/ContextApp";
// import Data from "../../assets/checkoutData.json"


function CheckoutPage() {


    // const { loadData } = useContextApp()
    // useEffect(() => {
    //     loadData(Data.data)
    // }, [])

    return (
        <div className="checkout__container">
            <h2 className="text_center">Completá los datos para pagar</h2>
            <Chekout />
        </div>
    )
}

export default CheckoutPage