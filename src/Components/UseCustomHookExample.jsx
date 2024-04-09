import { useEffect, useState } from 'react'
import './../App.css'
import useFetchData from '../hooks/FetchData'

function UseCustomHookExample() {

    const [data] = useFetchData('https://jsonplaceholder.typicode.com/todos')

  return (
    <>
      <h1>Use Custom Hook Example</h1>
      <div className='card'>
        {data.map((item) => <p key={item.id}>{item.title}</p>)}
      </div>
    </>
  )
}

export default UseCustomHookExample
