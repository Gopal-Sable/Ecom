// create a context{product} ---data
// provider {dilvery boy} ---transfer
//consumer=> useContext Hook ---usecase

import { createContext, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

const API ="https://api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {
    const getProducts=async(url)=>{
        const res=await axios.get(url);
        const products=await res.data;
        console.log(res);
    }
    useEffect(() => {
        getProducts(API);
    }, [])
    return <AppContext.Provider value={{ nameUsed: "Gopal sable" }}>
        {children}
    </AppContext.Provider>
};
//global context or custome context
const useProductCotext = () => { return useContext(AppContext) };


export { AppProvider, AppContext, useProductCotext };