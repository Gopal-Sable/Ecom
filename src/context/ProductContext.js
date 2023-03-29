// create a context{product} ---data
// provider {dilvery boy} ---transfer
//consumer=> useContext Hook ---usecase

import { createContext,useContext } from "react";

const AppContext=createContext();

const AppProvider=({children})=>{
    return <AppContext.Provider value={{nameUsed:"Gopal sable"}}>
        {children}
    </AppContext.Provider>
};
//global context or custome context
const useProductCotext=()=>{return useContext(AppContext)};


export {AppProvider,AppContext,useProductCotext};