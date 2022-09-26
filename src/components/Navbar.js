import React from 'react'
import axios from 'axios'
// import Footer from "./components/Footer";
import { BsFillShareFill } from "react-icons/bs";
import { FaRegCopy, FaAngleLeft } from "react-icons/fa";
import { FcOk } from "react-icons/fc";
import { useEffect, useState } from 'react'
import "./Navbar.css";


const Navbar = () => {
    const [tableData, setTableData] = useState([])
    const dataURL = "https://devapi.2gathers.com/api/events/view-event_new/?eventId=257&eventUniqueNo=1662391471"

    useEffect(() => {
        axios.get(dataURL)
            .then((res) => {
                console.log(res)
                setTableData(res.data.eventDetails)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className='container-fluid h-100' style={{ backgroundColor: " #C0C0C0" }}>
            <div className='container d-flex p-2'>
                <h6><span className='back-icon'><FaAngleLeft /></span>&nbsp;&nbsp;Event Details</h6>
            </div>
            {
                tableData.map(item =>
                    <>
                        <div className='container'>
                            <div className="navbar" style={{ backgroundColor: "	#87CEEB" }}>
                                <span className="d-flex pt-4 ml-4" style={{ marginBottom: "-1.5rem" }}>
                                    <img src="https://devapi.2gathers.com/home/dev2gathers/devapi/togetherfiles/eventlogo/logo20220907111749.png" alt="logo" style={{ width: "4rem", height: "4.3rem", marginLeft: "20px", marginBottom: "-1.5rem}" }} />&nbsp;
                                    <div className='d-flex pt-4 justify-content-between'>
                                        <span className='borders'><h5>{item.eventName}</h5><p>{item.eventEndDate}</p></span>
                                    </div>
                                </span>
                                <div className='logos pt-4'>
                                    <p><span className='Active-logo'><FcOk /> Active</span><br />&nbsp;&nbsp;
                                        <FaRegCopy /> &nbsp;
                                        <BsFillShareFill /> </p>
                                </div>
                            </div>
                            <div className="container bg-white">
                                <div className="row align-items-start ">
                                    <div className=' row align-items-start white-space'>
                                        <div class="col-3">
                                            Event Type<p className='backend-data'>{item.eventType}</p>
                                        </div>
                                        <div class="col-3">
                                            Category<p className='backend-data'>{item.eventCategory}</p>
                                        </div>
                                        <div class="col-3">
                                            Maximum Capacity<p className='backend-data'>{item.eventCapacity}</p>
                                        </div>
                                        <div class="col-3">
                                            No.Of Boxes<p className='backend-data'>{item.NoOfBoxes}</p>
                                        </div>
                                        <div class="col-3">
                                            Public Event<p className='backend-data'>{item.publicEvent}</p>
                                        </div>
                                        <div class="col-3">
                                            Location<p className='backend-data'>{item.location}</p>
                                        </div>
                                        <div class="col-3">
                                            Allow Users to Reserve Box<p className='backend-data'>{item.allowUsersToReserveBox}</p>
                                        </div>
                                        <div class="col-3">
                                            Guest Allowed?<p className='backend-data'>{item.isGuestAllowed}</p>
                                        </div>
                                        <div class="col-6">
                                            <img src='https://devapi.2gathers.com/home/dev2gathers/devapi/togetherfiles/eventlayout/layout20220907111749.png' alt='layout' />
                                        </div>
                                        <div class="col-3">
                                            Description<p className='backend-data'>{item.eventDescription}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* <div className='container'>
                                <div class="row">
                                    <div class="col-md-4 p-2"><button className='empty'>END EVENT</button></div>
                                    <div class="col-md-8 d-flex justify-content-end p-2">
                                        <button>STREAMING</button>&nbsp;
                                        <button>EDIT EVENT</button>&nbsp;
                                        <button>RESERVE BOX</button>&nbsp;
                                        <button>ADD PARTICIPANTS</button>&nbsp;
                                        <button>VIEW INVITEES</button>&nbsp;
                                        <button>JOIN AS HOST</button></div>
                                </div>
                            </div> */}

                        </div>
                    </>
                )
            }

        </div>
    )
}
export default Navbar