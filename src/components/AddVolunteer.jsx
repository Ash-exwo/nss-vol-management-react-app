import React, { useState } from 'react'
import axios from 'axios'
import NavBar from './NavBar'

const AddVolunteer = () => {

    const [input, changeInput] = useState(
        {
            volunteerId: "",
            fullName: "",
            email: "",
            phone: "",
            dateOfBirth: "",
            gender: "",
            bloodGroup: "",
            department: "",
            yearOfStudy: "",
            campName: "",
            hoursCompleted: "",
            address: "",
            unitNumber: ""
        }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }


    const readValue = () => {

        console.log(input)

        axios.post("http://localhost:5001/add-volunteer", input).then(
            (response) => {

                console.log(response.data)

                alert("Volunteer registered successfully")


            }
        ).catch(
            (error) => {

                console.log(error)

                alert("Failed to register volunteer")

            }
        )
    }



    return (

        <div className="volunteer-page">
            <NavBar/>

            <div className="container py-5">

                <div className="row justify-content-center">

                    <div className="col-lg-10">


                        <div className="volunteer-card">


                            <h2 className="text-center volunteer-title mb-2">

                                VOLUNTEER REGISTRATION

                            </h2>



                            <p className="text-center volunteer-subtitle mb-5">

                                Register volunteer details for community service programs

                            </p>




                            <div className="row g-4">



                                <div className="col-md-6">

                                    <label className="form-label fw-semibold">
                                        Volunteer ID
                                    </label>

                                    <input

                                        type="number"

                                        className="form-control"

                                        name="volunteerId"

                                        value={input.volunteerId}

                                        onChange={inputHandler}

                                    />

                                </div>


                                <div className="col-md-6">

                                    <label className="form-label fw-semibold">
                                        Full Name
                                    </label>

                                    <input

                                        type="text"

                                        className="form-control"

                                        name="fullName"

                                        value={input.fullName}

                                        onChange={inputHandler}


                                    />

                                </div>


                                <div className="col-md-6">

                                    <label className="form-label fw-semibold">
                                        Email
                                    </label>

                                    <input

                                        type="email"

                                        className="form-control"

                                        name="email"

                                        value={input.email}

                                        onChange={inputHandler}

                                        placeholder="example@gmail.com"

                                    />

                                </div>


                                <div className="col-md-6">

                                    <label className="form-label fw-semibold">
                                        Phone
                                    </label>

                                    <input

                                        type="text"

                                        className="form-control"

                                        name="phone"

                                        value={input.phone}

                                        onChange={inputHandler}


                                    />

                                </div>





                                <div className="col-md-6">

                                    <label className="form-label fw-semibold">
                                        Date Of Birth
                                    </label>

                                    <input

                                        type="date"

                                        className="form-control"

                                        name="dateOfBirth"

                                        value={input.dateOfBirth}

                                        onChange={inputHandler}

                                    />

                                </div>


                                <div className="col-md-6">

                                    <label className="form-label fw-semibold">
                                        Gender
                                    </label>


                                    <select

                                        className="form-control"

                                        name="gender"

                                        value={input.gender}

                                        onChange={inputHandler}

                                    >

                                        <option value="">
                                            Select
                                        </option>

                                        <option>
                                            Male
                                        </option>

                                        <option>
                                            Female
                                        </option>

                                        <option>
                                            Other
                                        </option>


                                    </select>


                                </div>


                                <div className="col-md-6">

                                    <label className="form-label fw-semibold">
                                        Blood Group
                                    </label>


                                    <select

                                        className="form-control"

                                        name="bloodGroup"

                                        value={input.bloodGroup}

                                        onChange={inputHandler}

                                    >

                                        <option value="">
                                            Select
                                        </option>

                                        <option>
                                            A+
                                        </option>

                                        <option>
                                            A-
                                        </option>

                                        <option>
                                            B+
                                        </option>

                                        <option>
                                            B-
                                        </option>

                                        <option>
                                            AB+
                                        </option>

                                        <option>
                                            AB-
                                        </option>

                                        <option>
                                            O+
                                        </option>

                                        <option>
                                            O-
                                        </option>

                                    </select>


                                </div>


                                <div className="col-md-6">


                                    <label className="form-label fw-semibold">
                                        Department
                                    </label>


                                    <input

                                        type="text"

                                        className="form-control"

                                        name="department"

                                        value={input.department}

                                        onChange={inputHandler}


                                    />

                                </div>

                                <div className="col-md-6">

                                    <label className="form-label fw-semibold">
                                        Year Of Study
                                    </label>


                                    <input

                                        type="number"

                                        className="form-control"

                                        name="yearOfStudy"

                                        value={input.yearOfStudy}

                                        onChange={inputHandler}


                                    />

                                </div>





                                <div className="col-md-6">


                                    <label className="form-label fw-semibold">
                                        Camp Name
                                    </label>


                                    <input

                                        type="text"

                                        className="form-control"

                                        name="campName"

                                        value={input.campName}

                                        onChange={inputHandler}


                                    />


                                </div>





                                <div className="col-md-6">


                                    <label className="form-label fw-semibold">
                                        Hours Completed
                                    </label>


                                    <input

                                        type="number"

                                        className="form-control"

                                        name="hoursCompleted"

                                        value={input.hoursCompleted}

                                        onChange={inputHandler}


                                    />


                                </div>





                                <div className="col-md-6">


                                    <label className="form-label fw-semibold">
                                        Unit Number
                                    </label>


                                    <input

                                        type="number"

                                        className="form-control"

                                        name="unitNumber"

                                        value={input.unitNumber}

                                        onChange={inputHandler}


                                    />


                                </div>





                                <div className="col-12">


                                    <label className="form-label fw-semibold">
                                        Address
                                    </label>


                                    <textarea

                                        className="form-control"

                                        rows="3"

                                        name="address"

                                        value={input.address}

                                        onChange={inputHandler}

                                        placeholder="Enter complete address"

                                    ></textarea>


                                </div>






                                <div className="col-12 text-center mt-5">


                                    <button

                                        className="volunteer-submit-btn"

                                        onClick={readValue}

                                    >

                                        REGISTER VOLUNTEER

                                    </button>


                                </div>




                            </div>


                        </div>


                    </div>


                </div>


            </div>


        </div>

    )
}

export default AddVolunteer