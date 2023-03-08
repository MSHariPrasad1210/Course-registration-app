
//import './App.css';
import Register from './components/register';
import Show  from './components/show';
import Register2 from './components/form';
import Delete from './components/delete';
import Update from './components/update';
import Form1 from './component1/form3';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App2 from './App2';

function App() {
  return (
    <>
    {/* <div>
      <Form1/>
      
     </div> */}
    <Router>
<div className='App'>
<Routes>
<Route exact path='/' element={<Form1/>}></Route>
<Route exact path='/App2' element={<App2 />}></Route>
<Route exact path='/delete' element={<Delete />}></Route>
</Routes>
</div>
</Router>
</>
  );
}

export default App;
