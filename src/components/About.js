import React from 'react';
import { Row, Accordion, Container } from 'react-bootstrap';
import { motion as m } from 'framer-motion';
import './About.css';
// import authorInfo from "./authors.json";
import TeamCard from "./TeamCard.js";


class About extends React.Component {
  render() {
    return (
      <div className='about'>
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, ease: 'easeInOut' }}>
          
            {Array.from({ length: 1 }).map((_, idx) => (
              
                <Accordion defaultActiveKey="0" className='accordionBox'>


                  <TeamCard />

                </Accordion>
            
            ))}
          
        </m.div>
      </div>
    );
  }
}

export default About;
