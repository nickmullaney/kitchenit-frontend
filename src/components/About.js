import React from 'react';
import { Row, Col, Accordion } from 'react-bootstrap';
import { motion as m } from 'framer-motion';

class About extends React.Component {
  render() {
    return (
      <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, ease: "easeInOut" }}>
        <Row xs={1} md={2} lg={4} className="g-2">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Accordion defaultActiveKey="0" className='accordionBox'>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1 </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>

              </Accordion>
            </Col>
          ))}
        </Row>
      </m.div>
    )
  }
}

export default About;