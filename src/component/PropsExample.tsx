import React from "react"
interface IProps{
    name:string;
    contact:number;
}
const PropsExample:React.FC<IProps> = ({name , contact}) => {
     return (
    <div><h2>PropsExample</h2>
    <div className="row">
        <div className="col">
            <div className="card">
                <div className="card-body">
                  <h4 >Name:{name}</h4>
                  <h6 >Contact:{contact}</h6>

                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default PropsExample