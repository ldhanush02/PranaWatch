import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Do from './Component/Do';
import Exercises from './Component/Exercises';
import Home from './Component/Home';
import Register from './Component/Register';
import Contactus from './Component/ProductData';
import { NavLink,Route,Routes } from 'react-router-dom';

function App() {
  let [list,setList]=useState([])
  return(   
  <div className='Container'>
                      <div className="container-fluid bg-dark">
                      <div>
                    <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container">
                        <a href="#" className="navbar-brand text-info">
              <img className='d-block mx-auto mt-1' src="https://cdn1.vectorstock.com/i/1000x1000/55/30/smart-watch-with-icons-vector-21965530.jpg" 
              width='100px' height="100px"></img>
                        </a>
                        <p className='text-light fw-bold lead'>A SMART WATCH</p>
                        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="menu">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item me-4 ">
                                    <NavLink  className="nav-link text-light lead" to="">Home</NavLink >
                                </li>
                                <li className="nav-item me-4">
                                    <NavLink  className="nav-link text-light lead" to="Exercises" >Exercises/Diet</NavLink >
                                </li>
                                 <li className="nav-item me-4">
                                    <NavLink  className="nav-link text-light lead" to="Do" >Do&Don't</NavLink >
                                </li>
                                <li className="nav-item me-4">
                                    <NavLink  className="nav-link text-light lead" to="Register" >Login/Register</NavLink >
                                </li>
                                <li className="nav-item me-4">
                                    <NavLink  className="nav-link text-light lead" to="ProductData" >Product Info</NavLink >
                                </li>
                            </ul>
                        </div>
                    </div>
        
        
                </nav>
                    </div>

            </div>

              <Routes>
                <Route path="" element={<Home />} />
                <Route path="Exercises" element={<Exercises />} />
                <Route path="Do" element={<Do />} />
                <Route path="Register" element={<Register/>} />
                <Route path="ProductData" element={<Contactus/>} />
              </Routes>

             <div className='card-footer bg-dark'>
               <div className='text-light'>
               <div class="row">
                        <div class="col ms-4 mt-5">
                            <a href="#" class="navbar-brand text-light">
                                <img width="120px" height="120px"
                                    src="https://cdn1.vectorstock.com/i/1000x1000/55/30/smart-watch-with-icons-vector-21965530.jpg"></img></a>
                                    <p>A SMART WATCH</p>
                        </div>
                        <div class="col">
                                <h4>ADDRESS</h4><hr/>
                                <p>Vignana Jyothi Nagar</p>
                                <p>Pragathi Nagar, Nizampet</p>
                                <p>(S.O, Hyderabad, Telangana 500090)</p>
                                <p>Phone: 040 2304 2760</p>
                        </div>
                        <div class="col">
                            <h4>TEAM MEMBERS</h4><hr/>
                            <p>LOKAM DHANUSH</p>
                            <p>ARUN DATTA</p>
                            <p>PUJIKA UPADHYAY</p>
                            <p>DINESH</p>
                            <p>KAVYA MIRIYALA</p>
                            <p>ANIRUDH BUKKA</p>
                        </div>
                        <div class="col text-center mt-3">
                             <h5>Email:</h5>
                            <h6>prana@gmail.com</h6>
                            <button class="btn-grad">CONTACT US</button>
                        </div>
                    </div>

               </div>
             </div>



    </div>
  )
};

export default App;
