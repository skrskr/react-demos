import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UseStateExample from './Components/UseStateExample.jsx'
import './index.css'
import UseEffectExample from './Components/UseEffectExample.jsx'
import UseRefExample from './Components/UseRefExample.jsx'
// import { UseContextProvider } from './Components/UseContextProvider.jsx'
import UseContextExample from './Components/UseContextExample.jsx'
import UseMemoExample from './Components/UseMemoExample.jsx'
import UseReducerExample from './Components/UseReducerExample.jsx'
import UseCustomHookExample from './Components/UseCustomHookExample.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReduxExample from './Components/ReduxExample.jsx'
import { Provider } from 'react-redux'
import storeCounter from './stores/store.js'
import ProtectedRoute from './Components/ProtectedRoute.jsx'
import ProtectedRouteExample1 from './Components/ProtectedRouteExample1.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  < BrowserRouter >
    <Provider store={storeCounter}>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/use-state' element={<UseStateExample />} />
        <Route path='/use-effect' element={<UseEffectExample />} />
        <Route path='/use-ref' element={<UseRefExample />} />
        {/* <Route path='/use-context' element={<UseContextExample />} /> */}
        <Route path='/use-memo' element={<UseMemoExample />} />
        <Route path='/use-reducer' element={<UseReducerExample />} />
        <Route path='/use-custom-hook' element={<UseCustomHookExample />} />
        <Route path='/redux' element={<ReduxExample />} />
        <Route path='/protected-route' element={<ProtectedRoute element={<ProtectedRouteExample1 />} isLoggedIn={false} />} />
      </Routes>
    </Provider >
  </BrowserRouter >
  // </UseContextProvider>
)
