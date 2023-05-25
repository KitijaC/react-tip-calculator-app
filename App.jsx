import React from 'react'
import { useState } from 'react'
import Inputs from './components/Inputs'
import Outputs from './components/Outputs'


export default function App() {
    const [inputData, setInputData] = useState(
        {
            bill: "",
            customTip: "",
            numberOfPeople: "",
            errorMessage: ""
        }
    )

    const [buttonValue, setButtonValue] = useState(
        {
            buttonOne: 5,
            buttonTwo: 10,
            buttonThree: 15,
            buttonFour: 25,
            buttonFive: 50
        }
    )
    
    const [activeButton, setActiveButton] = useState(null)


    const handleClick = (buttonValue) => {
        setActiveButton(buttonValue)
    }

    function buttonTip(event) {
        setButtonValue((prevButtonValue) => ({
          ...prevButtonValue,
          [event.target.name]: parseInt(event.target.value),
        }));
      }


    function resetForm() {
        setInputData({
            bill: "",
            customTip: "",
            numberOfPeople: "",
            errorMessage: ""
        });
        setActiveButton(null);
    } 

    const disableResetButton =
        inputData.bill === "" &&
        inputData.customTip === "" &&
        inputData.numberOfPeople === "" &&
        activeButton === null

    function handleChange(event) {
        const { name, value } = event.target;
        setInputData((prevInputData) => ({
          ...prevInputData,
          [name]: value,
          errorMessage: name === 'numberOfPeople' && value === '0' ? "Can't be zero" : '',
        }))
    }


    const handleCustomTipClick = () => {
        setActiveButton("");
    }

    const customStyle = {
        borderColor: inputData.errorMessage ?  "#FF0000" : ""
    }


    const calculateTipAmount = () => {
        const billAmount = parseFloat(inputData.bill);
        const tipPercentage = activeButton ? parseFloat(activeButton) : parseFloat(inputData.customTip);
        const numberOfPeople = parseInt(inputData.numberOfPeople);
      
        if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(numberOfPeople) || numberOfPeople === 0) {
          return {
            tipAmount: "0.00",
            totalAmount: "0.00",
          };
        }
      
        const tipAmount = (billAmount * tipPercentage) / 100;
        const totalAmount = billAmount + tipAmount;
      
        const tipPerPerson = tipAmount / numberOfPeople;
        const totalPerPerson = totalAmount / numberOfPeople;
      
        return {
          tipAmount: tipPerPerson.toFixed(2),
          totalAmount: totalPerPerson.toFixed(2),
        };
    };

    const { tipAmount, totalAmount } = calculateTipAmount()


    return (
        <main className="container-main">
            <div className="title">
                <p>spli<br></br>tter</p>
            </div>
            <div className="container-calculator">
                <Inputs 
                    bill={inputData.bill}
                    customTip={inputData.customTip}
                    numberOfPeople={inputData.numberOfPeople}
                    errorMessage={inputData.errorMessage}
                    buttonOne={buttonValue.buttonOne}
                    buttonTwo={buttonValue.buttonTwo}
                    buttonThree={buttonValue.buttonThree}
                    buttonFour={buttonValue.buttonFour}
                    buttonFive={buttonValue.buttonFive}
                    activeButton={activeButton}
                    handleChange={handleChange}
                    handleClick={handleClick}
                    buttonTip={buttonTip}
                    handleCustomTipClick={handleCustomTipClick}
                    customStyle={customStyle}
                />
                <Outputs 
                    tipAmount={tipAmount}
                    totalAmount={totalAmount}
                    resetForm={resetForm}
                    disableResetButton={disableResetButton}
                />
            </div>
        </main>
    )
}

