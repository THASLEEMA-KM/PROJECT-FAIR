import React, { Children, createContext, useEffect, useState } from 'react'
export const tokenAuthContext = createContext()
const AuthContext = ({children}) => {
    const [isAuthorised,setIsAuthorised] = useState(false)
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setIsAuthorised(true)
        }else{
            setIsAuthorised(false)
        }
    },[isAuthorised])
  return (
    <div>
        <tokenAuthContext.Provider value={{isAuthorised,setIsAuthorised}}>
            {children}
        </tokenAuthContext.Provider> 
    </div>
  )
}

export default AuthContext
