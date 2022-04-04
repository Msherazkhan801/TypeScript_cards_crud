import React, { useState } from "react"
interface IProps{
    name:string;
    contact:number;
    
}
interface IState{

    email:string;
}
const PropsExample:React.FC<IProps> = ({name , contact}) => {
    let [state ,setState]=useState<IState>({email:'text@gmail.com'})
     return (
    <div><h2>PropsExample</h2>
    <div className="row">
        <div className="col">
            <div className="card">
                <div className="card-body">
                  <ul className="item-group">

                      <li className="item">
                        {name}
                      </li>
                      
                      <li className="item">
                        {contact}
                      </li>
                      <li className="item">
                        {state.email}
                      </li>
                  </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default PropsExample