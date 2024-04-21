import { createContext, useState } from "react";
import Anty from "../Anty/Anty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './grandPa.css'

export const AssetContext = createContext('gold')
export const MoneyContext = createContext(1000)

const GrandPa = () => {
    const [money, setMoney] = useState(1000)
    const asset = 'Diamond'
    return (
        <div className="GrandPa">
            <h2>GrandPa</h2>
            <p>net money: {money}</p>
            <AssetContext.Provider value="gold">
                <MoneyContext.Provider value={[money, setMoney]}>
                    <section className="flex">
                        <Dad asset={asset}></Dad>
                        <Uncle asset={asset}></Uncle>
                        <Anty></Anty>
                    </section>
                </MoneyContext.Provider>
            </AssetContext.Provider>
        </div>
    );
};

export default GrandPa;


/**
 * 1. Create a context and export it
 * 2. Add provider for the context with a value. value could be anything
 * 3. useContext to access value in the context API
*/