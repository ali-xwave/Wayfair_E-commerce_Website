import React, { useState } from 'react';
import logo from "../../src/assets/Header-logo.svg";
import { Link } from 'react-router-dom';

const SignUpPage = () => {
    const [userEmail, setUserEmail] = useState("");
    const [emailMesg, setEmailMesg] = useState("Enter your valid Email or Phone Number");
    const [showUserEmailError, setShowUserEmailError] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [firstNameMesg, setFirstNameMesg] = useState("Enter your First Name");
    const [showFirstNameError, setShowFirstNameError] = useState(false);

    const [surName, setSurName] = useState("");
    const [surNameMesg, setSurNameMesg] = useState("Enter your SurName");
    const [showSurNameError, setShowSurNameError] = useState(false);

    const [userPassword, setUserPassword] = useState("");
    const [passwordMesg, setPasswordMesg] = useState("Enter your valid password");
    const [showUserPasswordError, setShowUserPasswordError] = useState(false);

    const firstNameHandler = (e) => {
        const value = e.target.value;
        setFirstName(value);

        if (value.trim() === "") {
            setShowFirstNameError(true);
            setFirstNameMesg("Enter your First Name");
        } else {
            setShowFirstNameError(true);
            setFirstNameMesg("Looks Good");
        }
    };

    const surNameHandler = (e) => {
        const value = e.target.value;
        setSurName(value);

        if (value.trim() === "") {
            setShowSurNameError(true);
            setSurNameMesg("Enter your SurName");
        } else {
            setShowSurNameError(true);
            setSurNameMesg("Looks Good");
        }
    };

    const userEmailHandler = (e) => {
        const value = e.target.value;
        setUserEmail(value);

        if (value.trim() === "") {
            setShowUserEmailError(true);
            setEmailMesg("Enter your valid Email or Phone Number");
        } else {
            setShowUserEmailError(true);
            setEmailMesg("Looks Good");
        }
    };

    const userPasswordHandler = (e) => {
        const value = e.target.value;
        setUserPassword(value);

        if (value.trim() === "") {
            setShowUserPasswordError(true);
            setPasswordMesg("Enter your valid password");
        } else {
            setShowUserPasswordError(true);
            setPasswordMesg("Looks Good");
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (firstName.trim() === "") {
            setShowFirstNameError(true);
            setFirstNameMesg("Enter your First Name");
        }

        if (surName.trim() === "") {
            setShowSurNameError(true);
            setSurNameMesg("Enter your SurName");
        }

        if (userEmail.trim() === "") {
            setShowUserEmailError(true);
            setEmailMesg("Enter your valid Email or Phone Number");
        }

        if (userPassword.trim() === "") {
            setShowUserPasswordError(true);
            setPasswordMesg("Enter your valid password");
        }
    };

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='d-flex justify-content-between pt-4'>
                        <Link to="/"><img src={logo} alt="" className='img-fluid' /></Link>
                        <div>
                            <p>Secure Login</p>
                        </div>
                    </div>
                    <hr />
                    <div className='col-12 col-md-12 col-lg-12'>
                        <div className='text-center'>
                            <h1 className='text-center pb-3'>Sign Up</h1>
                            <form onSubmit={submitHandler}>
                                <div className="container-fluid row">
                                    <div className="col-md-12">
                                        <input
                                            className='px-3 py-2 rounded-pill para-style border '
                                            value={firstName}
                                            onChange={firstNameHandler}
                                            type="text"
                                            placeholder="First Name"
                                        />
                                        {showFirstNameError && (
                                            <p className={`${firstNameMesg === "Looks Good" ? "text-success" : "text-danger"} fw-bold`}>{firstNameMesg}</p>
                                        )}
                                    </div>

                                    <div className="col-md-12 py-4">
                                        <input
                                            className='px-3 py-2 rounded-pill para-style border '
                                            value={surName}
                                            onChange={surNameHandler}
                                            type="text"
                                            placeholder="SurName"
                                        />
                                        {showSurNameError && (
                                            <p className={`${surNameMesg === "Looks Good" ? "text-success" : "text-danger"} fw-bold`}>{surNameMesg}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="container-fluid row">
                                    <div className="col-md-12">
                                        <input
                                            className='px-3 py-2 rounded-pill para-style border '
                                            value={userEmail}
                                            onChange={userEmailHandler}
                                            type="email"
                                            placeholder="Mobile Number or Email Address"
                                        />
                                        {showUserEmailError && (
                                            <p className={`${emailMesg === "Looks Good" ? "text-success" : "text-danger"} fw-bold`}>{emailMesg}</p>
                                        )}
                                    </div>
                                    <div className="col-md-12 py-4">
                                        <input
                                            className='px-3 py-2 rounded-pill para-style border '
                                            value={userPassword}
                                            onChange={userPasswordHandler}
                                            type="password"
                                            placeholder="Password"
                                        />
                                        {showUserPasswordError && (
                                            <p className={`${passwordMesg === "Looks Good" ? "text-success" : "text-danger"} fw-bold`}>{passwordMesg}</p>
                                        )}
                                    </div>
                                    <div className="">
                                        <input className='px-3 py-2 rounded-pill para-style border-0 bg-color text-white' type="submit" value='Sign Up' />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage;
