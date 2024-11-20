import {
    Route,
    createBrowserRouter,
    createRoutesFromElements
  } from 'react-router-dom';
  
  import HomePage from './pages/HomePage'
  import ProductListingPage from './pages/ProductListingPage'
  import LoginPage from './pages/LoginPage';
  import AdminPage from './pages/AdminPage';
  import ProductDescriptionPage from './pages/ProductDescriptionPage';

  export default createBrowserRouter(
      createRoutesFromElements(
        <>
           <Route path='/' element={<HomePage />} />
           <Route path='/Produtos' element={<ProductListingPage />} />
           <Route path='/login' element={<LoginPage />}/>
           <Route path='/admin' element={<AdminPage />}/>
           <Route path='/product' element={<ProductDescriptionPage />}/>
        </>
  
      )  
    );