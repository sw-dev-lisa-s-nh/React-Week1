import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return (  
            <div className=" container-fluid  center">
                <div className="col-sm-4 "></div>
                <div className="col-sm-4  container-fluid border border-primary rounded">    
                        <form className="formdiv form-style container d-block ">
                            <br></br>
                            <div className="h3div">
                                <h3 className="center rounded p-2"> Log In</h3>
                            </div>
                            <div>
                                    <label form="valid02" className="form-label">
                                        <div className="h4div">
                                            <h5 className="center rounded p-2">Enter Username <br></br>and Password</h5>
                                        </div>
                                        <input type="text" name="username" placeholder="username"/>
                                        <input type="text" name="password" placeholder="password" />
                                    </label>
                            </div>
                            <button type="submit">Submit</button>
                            <br></br>
                            <br></br>
                        </form>
                </div>   
            </div>
            )
        }
    }