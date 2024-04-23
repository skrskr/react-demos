import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <h1> React Demo</h1>
      <div className="card">
        <Link to="/use-state">Use State Example</Link><br />
        <Link to="/use-effect">Use Effect Example</Link><br />
        <Link to="/use-ref">Use Ref Example</Link><br />
        <Link to="/use-context">Use Context Example</Link><br />
        <Link to="/use-memo">Use memo Example</Link><br />
        <Link to="/use-reducer">Use Reducer Example</Link><br />
        <Link to="/use-custom-hook">Use Custom Hook Example</Link><br />
        <Link to="/redux">Redux</Link><br />
        <Link to="/protected-route">Protected Example 1</Link><br />
      </div>
      
    </>
  )
}

export default App
