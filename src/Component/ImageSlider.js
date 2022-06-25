import React,{useState} from 'react';
import {FaChevronRight,FaChevronLeft} from'react-icons/fa'
const ImageSlider= ({slides})=>{
const [current,setCurrent]=useState(0);
const length=slides.length;


const nextSlide= () => {
setCurrent(current===length-1?0:current+1);
      };


const prevSlide= () => {
setCurrent(current===0?length-1:current-1);
      };
if (!Array.isArray(slides)||slides.length<=0){
return null;
    }
return (
<div className='container-fluid'>
<section className ='slider container-fluid mt-3'>
<FaChevronLeft className='left-arrow'onClick={prevSlide}/>
<FaChevronRight className='right-arrow'onClick={nextSlide}/>
{slides.map((slide,index)=>{
return (
<div className={index === current ? 'slide active' : 'slide'} key={index}>
{index === current&& (<img src={slide.image}alt='Comeback soon'className='image mt-2'

         />) } 
</div>
            );
            })
}
</section>
</div>
    );
};
export default ImageSlider;

