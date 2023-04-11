import { createContext,useContext, useEffect, useReducer} from "react";
import { useProductCotext } from "./ProductContext";
import reducer from "../Reducer/filterReducer";

const FilterContext=createContext();

const initialState={
    filter_products:[],
    all_products:[],
    grid_view:true,
}

export const FilterContextProvider=({children})=>{
    const {products}=useProductCotext();

    const [state, dispatch] = useReducer(reducer, initialState)
    
    // to set grid view
    const setGridView=()=>{
        return dispatch({type:"SET_GRIDVIEW"})
    }
    useEffect(() => {
      dispatch({type:"LOAD_FILTER_PRODUCTS", payload:products})
    }, [products])
    
    return(
        <FilterContext.Provider value={{...state,setGridView}}>{children}</FilterContext.Provider>
    )
}

export const useFilterContext =()=> { return useContext(FilterContext)}
