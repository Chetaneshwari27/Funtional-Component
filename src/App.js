import './App.css';
import React, { Suspense } from 'react';
// import Home from './components/Home';
import UseMemo from './components/UseMemo';
import Debouncing from './components/Debouncing';
import LocalStorage from './components/LocalStorage';
import SessionStorage from './components/SessionStorage';
import CookiesExample from './components/Cookies';
import Custom2 from './components/Custom2';
import { HigherOrderComponent } from './components/HigherOrderComponent';

const Home= React.lazy(()=>import('./components/Home'))

const  App=()=> {
  return(
  <div>
    <Suspense fallback={<p>Please wait</p>}><Home/></Suspense>

    <Debouncing/>
    <LocalStorage/>
    <SessionStorage/>
    <CookiesExample/>
    <Custom2/>
    <HigherOrderComponent/>
  </div>
  )

  // return (
  //   <div className="App">
  //    {/* <Home/> */}
  //    {/* <UseMemo/> */}
  //   </div>
  // );
}

export default App;
