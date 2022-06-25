import React from 'react'; 
import { Outlet, NavLink,Link } from 'react-router-dom'
import ImageSlider from './ImageSlider';
import watchdata from'./watch';
import {FaCheckCircle,FaListOl} from 'react-icons/fa'


function Contactus() {
return (
    <div>
        <div className='container-fluid bg-light watch'>
<h1 className='display-5 text-center'>Let's Explore more about the product!</h1>
<ImageSlider slides ={watchdata}/>
<div>
<h1 className='display-5 text-center mt-5'>How it Works</h1>
<p className='lead para'>Smart Watch offers the best home and on-the-go emergency alert systems on the market, ensuring you are covered 24/7. Here's how our medical alert systems work to protect you in three simple steps.</p>
<h1 className='display-5 text-center heading mt-5'>Get Immediate Help in 3 Easy Steps</h1>
<div className='ab text-center'></div>
<p className='fw-bold display-6 text-center need'>Automatic Activate System</p>
<p className='lead text-center'>LifeSaver at times of emergency</p>

<img className='image2 d-flex mx-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMcfEvBPy0AjPf_ICTcGLOREm-pHQzd5ReLA&usqp=CAU"></img>
</div>
<div className='cd text-center mt-5'></div>
<p className='lead text-center fw-bold display-6'>Connect with your Doctor and care takers</p>
<div className='d-flex'>
<img className='image3 mx-auto mt-3' src="https://post.healthline.com/wp-content/uploads/2020/08/Doctors_For_Men-732x549-thumbnail.jpg"></img>
<img className='image3 mx-auto mt-3' src="https://cdn.cdnparenting.com/articles/2019/04/14175650/278188052-H.jpg"></img>
</div>

<div className='ef text-center mt-5'></div>
<p className='lead text-center fw-bold display-6'>Receive Immediate Assistance</p>
<p className='lead text-center'>Help is on the Way</p>
<img className='image2 d-flex mx-auto'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWpaKKMjT2y1enqi9PSA77zlfDVX3BBtdliA&usqp=CAU"></img>
</div>

 

    </div>
)
};
export default Contactus

