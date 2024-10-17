import {
    Route,
    createBrowserRouter,
    createRoutesFromElements
  } from 'react-router-dom';
  
  import HomePage from './pages/HomePage'

  export default createBrowserRouter(
      createRoutesFromElements(
        <>
           <Route path='/' element={<HomePage />} />
           <Route path='/contato' element={(<h1>Contato</h1>)} />
        </>
  
      )  
    );