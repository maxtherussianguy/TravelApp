import React from 'react'
import Separator from './Separator'
import TripList from './TripList'


export default function Planner(props) {
    function noReload(e){
        e.preventDefault()
        props.btn.AddTripClick()
    }
    console.log(props)

    return (
        <>
            <Separator url='/Images/pexels-alfonso-escalante-2533092.jpg' text="LET'S GET STARTED" />
            <div id="planner" className="col-12 col-lg-9 container" >
                {/* Heading */}
                <h1 className="firstheader">Travel Planner</h1>
                <div className="plannercontainer" >
                    <TripList trips={props.trips} state={{"appData":props.state.appData, "changeData":props.state.changeData}}/>

                    <div className="spinner-border" role="status" style={{ display: props.loading ? "block" : "none" }}>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>


                {/* FORM */}
                <form className="row" onSubmit={noReload}>
                    <div className="form-group col-12 col-lg-9" >
                        <label htmlFor="destination">Destination:</label><br />
                        <input type="text" id="destination" name="destination" defaultValue="Rome" className="form-control" ref={props.refs.cityNameRef} />
                        <label htmlFor="date">Date:</label><br />
                        <input type="date" id="date" name="date" className="form-control"   ref={props.refs.dateRef} />
                    </div>
                    <div className="col-12 col-lg-3 buttons container">
                        <button type="button" className="btn btn-dark col-4 col-lg-12" onClick={props.btn.AddTripClick}>Add trip</button>
                        <button type="button" className="btn btn-light border border-dark col-4 col-lg-12" onClick={props.btn.RandomClick}>Random</button>
                    </div>
                </form>
            </div>
        </>
    )
}
