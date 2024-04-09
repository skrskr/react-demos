import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UseStateExample from './Components/UseStateExample.jsx'
import './index.css'
import UseEffectExample from './Components/UseEffectExample.jsx'
import UseRefExample from './Components/UseRefExample.jsx'
import { UseContextProvider } from './Components/UseContextProvider.jsx'
import UseContextExample from './Components/UseContextExample.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // 4 wrap app with context provider
  <UseContextProvider>
      {/* <App /> */}
      {/* <UseStateExample /> */}
      {/* <UseEffectExample /> */}
      {/* <UseRefExample /> */}
      <UseContextExample />

  </UseContextProvider>
)
