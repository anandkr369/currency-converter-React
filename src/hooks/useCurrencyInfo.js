import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({});
    
    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
            .then((res) => res.json())
            .then((data) => {
                // Check if data is received successfully
                if (data && data.rates) {
                    setData(data.rates);
                } else {
                    // Handle case where data or data.rates is undefined
                    console.error("Invalid data received:", data);
                }
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [currency]);

    // Log data inside useEffect for better logging
    useEffect(() => {
        console.log("Currency Info:", data);
    }, [data]);
    
    return data;
};

export default useCurrencyInfo;
