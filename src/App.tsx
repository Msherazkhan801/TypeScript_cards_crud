import './App.css';
import EventHnadle from './component/EventHnadle';
import FormHanling from './component/FormHanling';
import PropsExample from './component/PropsExample';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
function App() {
  return (
    <Router>
    <div className='container'>
     <h2 className='text-center m-1'>News </h2>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae quibusdam enim ex quo expedita rerum dolorem aspernatur.
        Deserunt consequuntur exercitationem iure, natus quasi incidunt dignissimos amet quae vitae sint tenetur.</p>
        <button className='btn btn-success btn-sm'>
          <i className='fa fa-book'></i> Read More</button>
          <div style={{display:"flex", background:"white",justifyContent:"space-between"}} className="text-center mx-auto col-6" >
            <Link to="/props"> <button className='btn btn-primary btn-sm  m-2' >Props</button>  </Link>
            <Link to="/eventhandle">   <button className='btn btn-warning btn-sm  m-2'> Event Handle</button>   </Link>
            <Link to="/formhandle">  <button className='btn btn-success btn-sm  m-2'> Form Hnadle</button></Link>
          </div>
<Routes>

      <Route path='/props' element={<PropsExample name={'khan'} contact={123524} />}/>
      <Route path='/eventhandle' element={   <EventHnadle/>}/>
        <Route path='/formhandle' element={  <FormHanling/>}/>
</Routes>
    </div>
    </Router>
  );
}

export default App;
