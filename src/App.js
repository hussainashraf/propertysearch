import React from 'react';
//import Routes,route
import{Routes,Route} from 'react-router-dom'
//import components
import Header from './components/Header'
import Footer from './components/Footer'


//import pages
import Home from './pages/Home';
const App = () => {
  return (
    <div>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>

    {/* <Footer/> */}
    </div>
  )
};

export default App;
