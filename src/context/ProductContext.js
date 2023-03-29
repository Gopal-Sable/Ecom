// create a context{product} ---data
// provider {dilvery boy} ---transfer
//consumer=> useContext Hook ---usecase

import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../Reducer/productReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    featureProducts: [],
    products: [],
}

const AppProvider = ({ children }) => {


    const [state, dispatch] = useReducer(reducer, initialState)
    
    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });

        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products })
        }
        catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    }
    useEffect(() => {
        getProducts(API);
    }, [])


    return <AppContext.Provider value={{ ...state }}>
        {children}
    </AppContext.Provider>
};

//global context or custome context
const useProductCotext = () => { return useContext(AppContext) };

export { AppProvider, AppContext, useProductCotext };