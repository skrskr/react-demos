import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UseStateExample from './Components/UseStateExample.jsx'
import './index.css'
import UseEffectExample from './Components/UseEffectExample.jsx'
import UseRefExample from './Components/UseRefExample.jsx'
import { UseContextProvider } from './Components/UseContextProvider.jsx'
import UseContextExample from './Components/UseContextExample.jsx'
import UseMemoExample from './Components/UseMemoExample.jsx'
import UseReducerExample from './Components/UseReducerExample.jsx'
import UseCustomHookExample from './Components/UseCustomHookExample.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // 4 wrap app with context provider
  <UseContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/use-state' element={<UseStateExample />} />
        <Route path='/use-effect' element={<UseEffectExample />} />
        <Route path='/use-ref' element={<UseRefExample />} />
        <Route path='/use-context' element={<UseContextExample />} />
        <Route path='/use-memo' element={<UseMemoExample />} />
        <Route path='/use-reducer' element={<UseReducerExample />} />
        <Route path='/use-custom-hook' element={<UseCustomHookExample />} />
      </Routes>
    </BrowserRouter>
  </UseContextProvider>
)
