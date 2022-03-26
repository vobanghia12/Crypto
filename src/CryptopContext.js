import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
const Crypto = createContext()
export const CryptopContext = ({children}) => {
    const [currency, setCurrency] = useState('VND');
    const [symbol, setSymbol] = useState("₫");

    useEffect(() => {
        if(currency === 'VND') setSymbol('₫')
        else if (currency === "USD") setSymbol("$")
    },[currency])
  return (
    <Crypto.Provider value = {{currency, symbol, setCurrency}}>
        {children}
    </Crypto.Provider>
  )
}

export const CryptoState = () => {
   return useContext(Crypto)
}