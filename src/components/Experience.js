// import React from 'react';
// import clsx from 'clsx';

// import { Row, Col } from 'react-bootstrap';

// import '../css/Experience.css';
// import { experience } from '../EditMe';

// function Experience() {
//     return (
//         <Row className="experience-container">
//             <Col xs={12} className="experience-section">
//                 {experience.experiences.map((company) => 
//                     <Row className="company">
//                         <Col xs={12} md={3} style={{textAlign: "right"}}>
//                             <img className="companyLogo" src={clsx({
//                                 'https://quarkerp.com.br/images/logo-placeholder.png' : company.companyLogo == "",
//                                 [company.companyLogo] : company.companyLogo != "",
//                             })} />
//                         </Col>
//                         <Col xs={12} md={9} className="companyDetails">
//                             <p className="companyName">{company.companyName}</p>
//                             <p className="companyLocation">{company.companyLocation}</p>
//                               {company.roles.map((role) =>
//                                 <>
//                                     <p className="role">• {role.role}</p>
//                                     <p className="role-time">{role.startPeriod} - {role.endPeriod} • {role.type}</p>
//                                     <p className="role-desc">{role.description}</p>
//                                 </>
//                               )}  
//                         </Col>
//                     </Row>
//                 )}
//             </Col>
//         </Row>
//     );
// }

// export default Experience;

import React from 'react'
import './experince.css'
import {BsPatchCheckFill} from 'react-icons/bs';
const Experince = () => {
  return (
    <section id='experince'>
      <h5>Skills I Have</h5>
      <h2>My Experince</h2>
      <div className='container experince__container'>
        <div className='experince__frontend'>
           <h3>Frontend Development</h3>
           <div className='experince__content'>
            <article className='experince__details'>
                 <BsPatchCheckFill className='experince__details-icon' />
                 <div>
                 <h4>HTML</h4>
                 <small className='text-light'>Experinced</small>
                 </div>
            </article>
            <article className='experince__details'>
                 <BsPatchCheckFill className='experince__details-icon' />
                 <div>
                 <h4>CSS</h4>
                 <small className='text-light'>Experinced</small>
                 </div>          
            </article>
            <article className='experince__details'>
                 <BsPatchCheckFill className='experince__details-icon' />
                 <div>
                 <h4>Javascript</h4>
                 <small className='text-light'>Intermediate</small>
                 </div>
            </article>
            <article className='experince__details'>
                 <BsPatchCheckFill className='experince__details-icon' />
                 <div>
                 <h4>Bootstrap</h4>
                 <small className='text-light'>Experinced</small>
                 </div>
            </article>
            <article className='experince__details'>
                 <BsPatchCheckFill className='experince__details-icon' />
                 <div>
                 <h4>Tailwind</h4>
                 <small className='text-light'>Experinced</small>
                 </div>
            </article>
            <article className='experince__details'>
                 <BsPatchCheckFill className='experince__details-icon' />
                 <div>
                 <h4>React</h4>
                 <small className='text-light'>Intermediate</small>
                 </div>
            </article>
           </div>
        </div>
        <div className='experince__backend'>
        <h3>Backend Development</h3>
           <div className='experince__content'>
            <article className='experince__details'>
                 <BsPatchCheckFill className='experince__details-icon' />
                 <div>
                 <h4>Node</h4>
                 <small className='text-light'>Intermediate</small>
                 </div>
            </article>
            <article className='experince__details'>
                 <BsPatchCheckFill className='experince__details-icon' />
                 <div>
                 <h4>MongoDB</h4>
                 <small className='text-light'>Intermediate</small>
                 </div>
            </article>
            <article className='experince__details'>
                 <BsPatchCheckFill className='experince__details-icon' />
                 <div>
                 <h4>My SQL</h4>
                 <small className='text-light'>Intermediate</small>
                 </div>
            </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experince;