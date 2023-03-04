import React from 'react';
import { Accordion, Button } from 'react-bootstrap';
import { motion as m} from 'framer-motion';

class MyCookbook extends React.Component {
  render() {
    return (
      <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.75, ease: "easeInOut"}}>
        <div>
          <Button as="input" type="submit" value="Add Recipe Category" />
          <Button as="input" type="button" variant="danger" value="Delete Recipe Category" />
        </div>
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
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
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


      </m.div>
    )
  }
}

export default MyCookbook;