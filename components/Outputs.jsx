import React from 'react'


export default function Outputs(props) {

    return (
        <div className="right-side-container">
            <div className="tip-amount">
                <p>Tip Amount <br></br><span>/ person</span></p>
            </div>
            <div className="displaying-tip">
                <p>${props.tipAmount}</p>
            </div>
            <div className="total">
                <p>Total <br></br><span>/ person</span></p>
            </div>
            <div className="displaying-total">
                <p>${props.totalAmount}</p>
            </div>
            <div className="reset-btn">
                <button
                    onClick={props.resetForm}
                    disabled={props.disableResetButton}
                >Reset
                </button>
            </div>
        </div>
    )  
}