import React, { useState } from 'react'
interface IState{
mas:string;
}
const EventHnadle:React.FC = () => {
    let [message ,SetMassage]=useState<IState>({
        mas:'hi'
    })
const changemsg=(greet:string):void=>{
    SetMassage({
        mas:greet
    })
}
  return (
    <div>EventHnadle
           <div className="row">
        <div className="col-md-10">
            <div className="card">
                <div className="card-body">
                    <h4 className='text-center'>{message.mas}</h4>
                  <button className='btn btn-primary m-1'  onClick={()=>changemsg('Good Morniing')}>Good Morning</button>
                  <button className='btn btn-warning m-1'  onClick={()=>changemsg('Good AfterNoon')}>Good afterNoon</button>
                  <button className='btn btn-success m-1'  onClick={()=>changemsg('Good Evening')}>Good Evening</button>

                </div>
            </div>
        </div>
    </div>
 
    </div>

  )
}

export default EventHnadle