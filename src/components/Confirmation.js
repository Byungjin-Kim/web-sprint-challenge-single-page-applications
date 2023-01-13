import React from "react";


export default function Confirmation(props) {
    const { orders } = props

    return (
        <div className="confirm-wrapper">
            <div className="order-confirm">
                <h2>Congrats! Pizza is on its way!</h2>
                <p>Enjoy this Dog with Pizza</p>
            </div>
        </div>
    )
}
