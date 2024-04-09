import { useRef, useState, createContext } from 'react'
import './../App.css'

// 1 Create a context
const ColorContext = createContext();


// 2 create provider
function UseContextProvider({children}) {
  return (
    <ColorContext.Provider value='white'>
      {children}
    </ColorContext.Provider>
  )
}

// 3 export context and provider 
export{
  UseContextProvider, ColorContext
}