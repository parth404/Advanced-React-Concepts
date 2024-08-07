import styles from './App.module.css'
import {Child} from './Child'
import JsCssDemo from './components/JsCssDemo/jsCssDemo'
import UtilityCssDemo from './components/UtilityCssDemo/UtilityCssDemo'
import "./index.css"

function App() {
  return (
    <>
    {/* The class name is generated by the CSS Modules library */}
     <h2 className={`${styles.header} ${styles.headerLighter}`}>App</h2>
     {/* // Using Tailwind */}
     <h1 className='text-4xl text-blue-500'>Some Text</h1>
     <Child />
      <JsCssDemo />
      <UtilityCssDemo />
    </>
  )
}

export default App
