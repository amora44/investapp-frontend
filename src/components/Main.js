import {Routes, Route} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Index from '../pages/Index';

const Main = (props) => {
    const [stocks, setStocks ] = useState(null);
    const API_URL = "http://localhost:3001/stocks";

    const getStocks = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setStocks(data);
        } catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        getStocks();
    }, []);

    return(
        <main>
            <Routes>
                < Route path='/stocks' element={<Index stocks={stocks} />}/>
            </Routes>
        </main>
    );
};

export default Main;