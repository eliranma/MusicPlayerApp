import React,{createContext, useState} from 'react';
import { TabBar } from '../components';

export const AppContext = createContext()

const AppProvider = ({children})=>{
    const [appConf,setAppConf] = useState({
        searchHistory:[],

    })
    return(
        <AppContext.Provider value={{appConf, setAppConf}}>
        {children}
        <TabBar />
        </AppContext.Provider>
    )
}
export default AppProvider