import { useState } from 'react';
import {useForm} from 'react-hook-form'

function Exercises(props) {
    
    return(   
             
    <div className='container-fluid mytext'>

        <div>
            <h2 className='text-center display-5 m-3'><span>DIET INSIGHTS:</span></h2>
            <div>
                <table className="table text-center lead mt-4 table-striped table-bordered table-hover table-dark">
                    <thead >
                        <tr>
                            <th>AGE</th>
                            <th>HEIGHT</th>
                            <th>WEIGHT</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>42</td>
                            <td>1.83 m</td>
                            <th>100 kg</th>
                        </tr>

                    </tbody>
                </table>
            </div>
            <h3><span>What Should I Eat to Prevent Asthma? </span></h3>
            <p className='mt-5'>
            Reactions to food can quickly bring on asthma symptoms like wheezing, coughing and breathing difficulties. 
            </p>
            <p >
            Lower your chances of an asthma attack triggered by food. A small number of people with asthma do have a problem with certain foods triggering their asthma symptoms. 
                </p>
                <p >
                People with food allergies need to be strict about avoiding certain foods. Allergic reactions to food can happen very quickly. Avoid the food containing allergens to reduce the histamine effect on your respiratory track.
                </p>
                <p >
                <span>The most common food allergens are: </span>
                </p>
                <ul>
                    <li>Gluten</li>
                    <li>Shellfish </li>
                    <li>Eggs</li>
                    <li>Milk</li>
                    <li>Tree nuts, peanuts</li>
                    <li> Sesame seeds </li>
                    <li>Soya</li>
                    <li>Diets High in Calories </li>
                    
                </ul>
                <h3><span>FOOD TO TAKE:</span></h3>
                <p>Eat plenty of fruits and vegetables </p>
                <p>Eat foods with omega-3 fatty acids. </p>
        </div>
        <div>
            <h2><span>Can exercise stop asthma symptoms? </span></h2>
            <p>Some types of exercise can reduce or prevent asthma symptoms. They work by making your lungs stronger without worsening inflammation. </p>
            <h3><span>Breathing exercises :</span></h3>
            <h4><span>1.NASAL BREATHING </span></h4>
            <img className='d-block mx-auto w-50 mt-2 mb-3' src="https://c8.alamy.com/comp/2BYBGEC/nadi-shodhana-pranayama-or-alternate-nostril-breathing-vector-2BYBGEC.jpg" />
            <h4><span>2.DIAPHRAGMATIC BREATHING </span></h4>
            <p>Diaphragmatic breathing is a breathing exercise that helps strengthen your diaphragm, an important muscle that enables you to breathe. This breathing exercise is also sometimes called belly breathing or abdominal breathing. </p>
            <h3><span>Diaphragm breathing basics </span></h3>
            <p>Here’s the basic procedure for diaphragmatic breathing. It may be easiest to practice while lying on the floor when you first start. </p>
            <ol>
                <li>Sit or lie down on a comfortable, flat surface. </li>
                <li>Relax your shoulders, shifting them downward away from the ears. </li>
                <li>Put a hand on your chest and a hand on your stomach. </li>
                <li>Without straining or pushing, breathe in through your nose until you can’t take in anymore air. </li>
                <li>Feel the air moving through your nostrils into your abdomen, expanding your stomach and sides of the waist. Your chest remains relatively still. </li>
                <li>Purse your lips as if sipping through a straw.</li>
                <li>Exhale slowly through the lips for 4 seconds and feel the stomach gently contracting.</li>
                <li>Repeat these steps several times for best results. </li>
            </ol>
            <img src="https://image.shutterstock.com/image-vector/diaphragm-functions-breathing-illustration-260nw-1936737544.jpg"
            className='d-block mx-auto mt-3 mb-3'/>
            <h3><span>3.PURSED LIP BREATHING </span></h3>
            <p>Pursed lip breathing can help improve and control your breathing in several ways, including: </p>
            <ol>
                <li>relieving shortness of breath by slowing the breath rate </li>
                <li>keeping the airways open longer, which decreases the work that goes into breathing </li>
                <li>improving ventilation by moving old air (carbon dioxide) trapped in the lungs out and making room for new, fresh oxygen </li>
            </ol>
            <h4><span>Pursed lip breathing basics: </span></h4>
            <p> Pursed lip breathing should be practiced until it becomes second nature. It’s most effective when you’re focused or relaxed. Here’s how to practice.</p>
            <ol>
                <li>Sit with your back straight or lie down. Relax your shoulders as much as possible</li>
                <li>Inhale through your nose for two seconds, feeling the air move into your abdomen. Try to fill your abdomen with air instead of just your lungs. </li>
                <li>Purse your lips like you’re blowing on hot food and then breathe out slowly, taking twice as long to exhale as you took to breathe in. </li>
                <li>Then repeat. Over time, you can increase the inhale and exhale counts from 2 seconds to 4 seconds, and so on. </li>
            </ol>
            <img src='https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/03/12256-Breathing_Exercises_with_COPD-1296x728-Body_Image-02.jpg?h=1528' className='w-50 d-block mx-auto mt-2 mb-2'/>
        </div>
              
        </div>
     
    )
  };
  
  export default Exercises;