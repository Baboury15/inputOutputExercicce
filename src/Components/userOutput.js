import React from 'react'


const UserOutput =(props) =>{


    return (
       
       
        <div>
            
             <div>

    <p  onClick={props.click}>paragraphe to delete on ONE click </p>

    <p>{props.name}  this is my text number1</p>
            <p>this is my text NUMBER2</p>
            </div>


            
               </div>


    )
}
export default UserOutput;