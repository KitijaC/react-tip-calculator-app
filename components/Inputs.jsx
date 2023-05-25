import React from 'react'

export default function Inputs(props) {

    const active = props.activeButton !== null;

    const getButtonStyle = (buttonValue) => {
        if (props.activeButton === buttonValue) {
            return {
                backgroundColor: '#9FE8DF',
                color: '#00474B'
            };
        }
        return {};
    };

    return (
        <div className="left-side-container">
            <div className="bill">
                <p>Bill</p>
                <div className="label-and-input">
                    <i className="fa fa-usd" aria-hidden="true"></i>
                    <input 
                        type="number" 
                        placeholder="0" 
                        name="bill" 
                        value={props.bill} 
                        onChange={props.handleChange}
                    >
                    </input>
                </div>
            </div>
            <div className="select-tip">
                <p>Select tip %</p>
                <button
                    className={`tip-button ${active ? 'active' : ''}`}
                    style={getButtonStyle(props.buttonOne)}
                    onClick={() => props.handleClick(props.buttonOne)}
                >
                    {props.buttonOne}%
                </button>
                <button
                    className={`tip-button ${active ? 'active' : ''}`}
                    style={getButtonStyle(props.buttonTwo)}
                    onClick={() => props.handleClick(props.buttonTwo)}
                >
                    {props.buttonTwo}%
                </button>
                <button
                    className={`tip-button ${active ? 'active' : ''}`}
                    style={getButtonStyle(props.buttonThree)}
                    onClick={() => props.handleClick(props.buttonThree)}
                >
                    {props.buttonThree}%
                </button>
                <button
                    className={`tip-button ${active ? 'active' : ''}`}
                    style={getButtonStyle(props.buttonFour)}
                    onClick={() => props.handleClick(props.buttonFour)}
                >
                    {props.buttonFour}%
                </button>
                <button
                    className={`tip-button ${active ? 'active' : ''}`}
                    style={getButtonStyle(props.buttonFive)}
                    onClick={() => props.handleClick(props.buttonFive)}
                >
                    {props.buttonFive}%
                </button>
                <input 
                    type="number" 
                    placeholder="Custom" 
                    name="customTip" 
                    value={props.customTip} 
                    onChange={props.handleChange}
                    onClick={props.handleCustomTipClick}
                >
                </input>
            </div>
            <div className="number-of-people">
                <p>Number of People 
                    <span 
                        className="input-error-message" 
                        name="errorMessage" 
                        value={props.errorMessage}
                    >{props.errorMessage ? "Can't be zero" : ""}
                    </span>
                </p>
                <div className="label-and-input">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <input 
                        type="number" 
                        placeholder="0" 
                        name="numberOfPeople" 
                        value={props.numberOfPeople} 
                        style={props.customStyle}
                        onChange={props.handleChange}
                    >
                    </input>
                </div>
            </div>
        </div>  
    )
}