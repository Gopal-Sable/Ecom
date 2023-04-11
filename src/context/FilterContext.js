import { createContext,useContext, useEffect, useReducer} from "react";
import { useProductCotext } from "./ProductContext";
import reducer from "../Reducer/filterReducer";

const FilterContext=createContext();

const initialState={
    filter_products:[],
    all_products:[]
}

export const FilterContextProvider=({children})=>{
    const {products}=useProductCotext();


    const [state, dispatch] = useReducer(reducer, initialState)
    
    useEffect(() => {
      dispatch({type:"LOAD_FILTER_PRODUCT", payload:products})
    }, [products])
    
    return(
        <FilterContext.Provider value={{...state}}>{children}</FilterContext.Provider>
    )
}

export const useFilterContext =()=> { return useContext(FilterContext)}
