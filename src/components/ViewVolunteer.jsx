import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from './NavBar'

const ViewVolunteer = () => {

    const [data, changeData] = useState([])

    const fetchVolunteerData = () => {

        axios.get("http://localhost:5001/view-volunteer")
            .then(
                (response) => {

                    changeData(response.data)

                }
            )
            .catch(
                (error) => {

                    console.log("Error fetching volunteer details")

                    alert("Failed to view volunteer details")

                }
            )

    }



    useEffect(() => {

        fetchVolunteerData()

    }, [])



    return (

        <div className="volunteer-page">
            <NavBar/>

            <div className="container-fluid px-4 py-5">

                <div className="volunteer-card">

                    <h2 className="text-center volunteer-title mb-2">

                        VIEW ALL VOLUNTEERS

                    </h2>



                    <p className="text-center volunteer-subtitle mb-5">

                        Explore registered volunteer details and community service records

                    </p>




                    <div className="table-responsive">


                        <table className="table table-hover align-middle text-center">


                            <thead>


                                <tr>

                                    <th>Volunteer ID</th>

                                    <th>Name</th>

                                    <th>Email</th>

                                    <th>Phone</th>

                                    <th>DOB</th>

                                    <th>Gender</th>

                                    <th>Blood Group</th>

                                    <th>Department</th>

                                    <th>Year</th>

                                    <th>Camp Name</th>

                                    <th>Hours</th>

                                    <th>Unit</th>

                                    <th>Address</th>


                                </tr>


                            </thead>



                            <tbody>


                                {

                                    data.map(

                                        (value, index) => {


                                            return (


                                                <tr key={index}>


                                                    <td>

                                                        {value.volunteerId}

                                                    </td>



                                                    <td className="fw-semibold">

                                                        {value.fullName}

                                                    </td>




                                                    <td>

                                                        {value.email}

                                                    </td>




                                                    <td>

                                                        {value.phone}

                                                    </td>




                                                    <td>

                                                        {value.dateOfBirth}

                                                    </td>




                                                    <td>


                                                        <span className="badge bg-success">

                                                            {value.gender}

                                                        </span>


                                                    </td>





                                                    <td>


                                                        <span className="badge bg-danger">

                                                            {value.bloodGroup}

                                                        </span>


                                                    </td>





                                                    <td>

                                                        {value.department}

                                                    </td>




                                                    <td>

                                                        {value.yearOfStudy}

                                                    </td>





                                                    <td>

                                                        {value.campName}

                                                    </td>





                                                    <td>

                                                        {value.hoursCompleted}

                                                    </td>





                                                    <td>

                                                        {value.unitNumber}

                                                    </td>





                                                    <td style={{ minWidth: "250px" }}>

                                                        {value.address}

                                                    </td>




                                                </tr>


                                            )


                                        }

                                    )

                                }


                            </tbody>


                        </table>


                    </div>



                </div>


            </div>



        </div>

    )
}


export default ViewVolunteer