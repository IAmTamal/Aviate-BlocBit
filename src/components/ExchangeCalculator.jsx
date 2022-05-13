import React, { useState } from 'react'
import "../styles/Exchange.css"
import Select from "react-select";
import { ConvertCurrency } from "../service/Api.js"
// import { colourOptions } from "./docs/data";

const ExchangeCalculator = () => {

    const [credentials, setcredentials] = useState({ currency: "USD", amount: "950000" });
    const [exchangedamt, setexchangedamt] = useState(0);
    // var exchangedamt = 0;

    const colourOptions = [
        { value: 'USD', label: 'USD' },
        { value: 'AUD', label: 'AUD' },
        { value: 'BRL', label: 'BRL' },
        { value: 'CAD', label: 'CAD' },
        { value: 'CHF', label: 'CHF' },
        { value: 'CLP', label: 'CLP' },
        { value: 'CNY', label: 'CNY' },
        { value: 'DKK', label: 'DKK' },
        { value: 'EUR', label: 'EUR' },
        { value: 'GBP', label: 'GBP' },
        { value: 'HKD', label: 'HKD' },
        { value: 'INR', label: 'INR' },
        { value: 'JPY', label: 'JPY' },
        { value: 'ISK', label: 'ISK' },
        { value: 'KRW', label: 'KRW' },
        { value: 'NZD', label: 'NZD' },
        { value: 'RUB', label: 'RUB' }
    ]


    const handleclick = async (e) => {
        e.preventDefault();
        setexchangedamt(await ConvertCurrency(credentials));
        console.log(exchangedamt);

    }
    return (
        <>

            <div className="exhange_parent">
                <div className="container-fluid exchange_parent2">
                    <div className="exchange_textdiv">

                        <Select
                            defaultValue={[colourOptions[0]]}
                            name="colors"
                            options={colourOptions}
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />

                        <input type="text" name="" id="" placeholder='Enter the value, ex: 500' className='form-control' />

                        <button className='btn btn-warning exchangebtn' onClick={(e) => { handleclick(e) }}>Exchange</button>


                        {exchangedamt !== 0 && <h5 className='btcinfo'>Here's how much the amount is in btc : <span>{exchangedamt.toFixed(3)}</span></h5>}
                    </div>
                </div>
            </div>

        </>
    )
}

export default ExchangeCalculator