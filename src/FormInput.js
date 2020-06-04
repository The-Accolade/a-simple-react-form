import React, { Component } from 'react';

class FormInput extends Component {
   
    render() {
        return (
            <form> 
                <div className="form-group card p-5"> 
                    <div className="">
                        <h3>FirstName:</h3> 
                        <input className="form-control my-3" type="text" placeholder="Enter your first name"/>
                    </div>
                    <div>
                        <h3>LastName:</h3> 
                        <input className="form-control my-3" type="text" placeholder="Enter your last name"/>
                    </div>
                    <div>
                        <h3>Email:</h3> 
                        <input className="form-control my-3" type="email" placeholder="Enter your email"/>
                    </div>
                    
                </div>
            </form>
        );
    }
}


export default FormInput;