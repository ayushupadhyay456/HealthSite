import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Form from './Form';
import Homepage from './Homepage'
function App() {
  return (
    <>
    <Router>
    
      <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route exact path='/form' element={<Form/>}/>


    </Routes>
    
    
    </Router>
    
    </>
  );
}

export default App;
