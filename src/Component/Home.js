import react from "react";
import pic1 from "./SampleData.jpeg"
function Home(){
    return(
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-4 text-center">
                        <div className="card card1 mt-5 m-3 shadow-lg">
                            <div className="card-body text-center border border-dark border-2 w-100 h-100">
                            <img src="https://static.foxnews.com/foxnews.com/content/uploads/2022/01/Ray-Allen.jpg"
                           className="d-block mx-auto person shadow-lg" width="150px" height="150px" />
                            <h3 className="mt-5 "><span>NAME:</span>Ray Allen</h3>
                            </div>

                        </div>
                        </div>
                        <div className="col-8">
                        <div className="card card2 m-4 shadow-lg">
                        <div className="card-body text-center border border-dark border-2 w-100 h-100">
                                <div className="row">
                                    <div className="col text-start">
                                    <h4><span>PULSE RATE</span></h4>
                                    </div>
                                    <div className="col text-start">
                                    <h4> : 114 bpm</h4>
                                    </div>

                                </div>
                                <hr></hr>
                                <div className="row">


                                <div className="col  text-start">
                                    <h4><span>DATE </span></h4>
                                    </div>
                                    <div className="col  text-start">
                                    <h4> : 01/01/22</h4>
                                    </div>
                                    </div>
                                <hr></hr>
                                <div className="row">


                                <div className="col  text-start">
                                    <h4><span>TIME </span></h4>
                                    </div>
                                    <div className="col  text-start">
                                    <h4> : 5:07 AM</h4>
                                    </div>
                                    </div>
                                    <hr></hr>
                                <div className="row">


                                <div className="col  text-start">
                                    <h4><span>LOCATION </span></h4>
                                    </div>
                                    <div className="col  text-start">
                                    <h4> : Chisinau,Moldova</h4>
                                    </div>
                                    </div>
                               
                                <hr></hr>
                                <div className="row">


                                <div className="col  text-start">
                                    <h4><span>TEMPERATURE </span></h4>
                                    </div>
                                    <div className="col  text-start">
                                    <h4> : 5Â°C</h4>
                                    </div>
                                    </div>
                               
                                <hr></hr>
                                <div className="row">


                                <div className="col  text-start">
                                    <h4><span>HUMIDITY </span></h4>
                                    </div>
                                    <div className="col  text-start">
                                    <h4> : 15%</h4>
                                    </div>
                                    </div>
                                <hr></hr>
                                <div className="row">


                                <div className="col  text-start">
                                    <h4><span>AIR FRESHNESS </span></h4>
                                    </div>
                                    <div className="col  text-start">
                                    <h4> : Good</h4>
                                    </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                <div className="col  text-start">
                                    <h4><span>RESPIRATORY RATE  </span></h4>
                                    </div>
                                    <div className="col  text-start">
                                    <h4> : 23 bpm</h4>
                                    </div>
                                    </div>
                            </div>
                        </div>

                        </div>
                    </div>
                    <img src={pic1} className="image4 mb-4 mt-1" />
            </div>
    )
};
export default Home;