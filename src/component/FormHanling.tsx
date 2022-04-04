import React, { useState } from 'react'
interface IState{
    user:{
        email:string;
        password:string;
    }
}

const FormHanling = () => {
    let[ state, setState]=useState<IState>({
user:{
    email:'' ,
    password:''
}
    })
    const inputupdate=(event:React.ChangeEvent<HTMLInputElement>):void=>{
     
setState( {
    user:{
        ...state.user,
        [event.target.name]:event.target.value
    }}
)
    }
    const login=(event:React.FormEvent<HTMLFormElement>):void=>{
        event.preventDefault();
          
    }
  return (
    <div>FormHanling
        {/* <pre>{JSON.stringify(state.user)}</pre> */}
        <div className="row">
            <div className="col">
                <div className="card col-4 mx-auto">
                    <div className="card-body text-center">
                        <form onSubmit={login}><h3>Sign In Form </h3>
                        <input placeholder='email...'
                       type='email'
                         name='email' value={state.user.email}
                          onChange={inputupdate} 
                          required
                          className="m-2"/>
                        <br/>  
                        <input placeholder='password...'
                         name='password' 
                       type='password'

                         value={state.user.password}
                          onChange={inputupdate} required={true} 
                          className="m-2"/>
                      <br/>  <input type='submit' className='btn btn-primary btn-sm' value='Submit' />
                      </form>
                      <ul className='item-group'>
                <li className='item'>
                {state.user.email}
                </li>
                
                      </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormHanling