import './App.css';
import EventHnadle from './component/EventHnadle';
import PropsExample from './component/PropsExample';

function App() {
  return (
    <div className='container'>
     <h2 className='text-center m-1'>Main Pages</h2>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae quibusdam enim ex quo expedita rerum dolorem aspernatur.
        Deserunt consequuntur exercitationem iure, natus quasi incidunt dignissimos amet quae vitae sint tenetur.</p>
        <button className='btn btn-success btn-sm'>
          <i className='fa fa-book'></i> Read More</button>
        <PropsExample name={'khan'} contact={123524}/>
        <EventHnadle/>
    </div>
  );
}

export default App;
