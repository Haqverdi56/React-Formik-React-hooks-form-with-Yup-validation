import React from 'react'
import Formik from './components/Formik'
import HookForm from './components/HookForm'

const App = () => {
  return (<>
      <div className='app'>
        <HookForm />
        <Formik />
      </div>
  </>)
}

export default App