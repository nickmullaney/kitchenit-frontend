import React from 'react';
import { Row, Accordion, Container } from 'react-bootstrap';
import { motion as m } from 'framer-motion';
import './About.css';
import authorInfo from "./authors.json";
import TeamCard from "./TeamCard";


class About extends React.Component {
  render() {
    return (
      <div className='about'>
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, ease: 'easeInOut' }}>
          <Row xs={1} md={2} lg={4} className="g-2">
            {Array.from({ length: 1 }).map((_, idx) => (
              <Row>
                <Accordion defaultActiveKey="0" className='accordionBox'>

                  <Container>
                    <Row xs={1} s={2} md={4}>


                      {authorInfo.map(person =>
                        <TeamCard 
                          key={person.key}
                          name={person.name}
                          img_Url={person.img_Url}
                          description={person.description}
                        />)}

                    </Row>

                  </Container>

                </Accordion>
              </Row>
            ))}
          </Row>
        </m.div>
      </div>
    );
  }
}

export default About;
