//* All the AXIOS API calls will be made from here to the backend
//* These functions will be exported and then imported wherever needed

import Axios from "axios";


export const ConvertCurrency = async (credentials) => {
    try {

        const bitcoinval = await Axios.get(`https://blockchain.info/tobtc?currency=${credentials.currency}&value=${credentials.amount}`);

        return bitcoinval.data;

    } catch (error) {
        console.log(error);
        alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
    }
};

