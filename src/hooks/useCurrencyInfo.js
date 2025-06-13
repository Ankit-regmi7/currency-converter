// fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)


// import {useEffect, useState} from "react"


// function useCurrencyInfo(currency){
//     const [data, setData] = useState({})
//     useEffect(() => {
//         console.log(currency);
        
//         fetch(`https://v6.exchangerate-api.com/v6/096dd9c934ab6d778def2bff/latest/${currency}.json`)
//         .then((res) => res.json())
//         .then((res) => setData(res[currency]))
//         console.log(data);
//     }, [currency])
//     console.log(data);
//     return data
// }

// export default useCurrencyInfo;


import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/096dd9c934ab6d778def2bff/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                setData(res.conversion_rates);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [currency]);
    
    return data;
}

export default useCurrencyInfo;