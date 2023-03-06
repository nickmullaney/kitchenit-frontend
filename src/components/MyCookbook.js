import React from 'react';
import { Accordion, Button, Container, Row} from 'react-bootstrap';
import { motion as m } from 'framer-motion';
import CookbookRecipeCard from './CookbookRecipeCard';
import './MyCookbook.css';

class MyCookbook extends React.Component {

  render() {
    return (
      <div className='myCookbookBackground'>
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, ease: 'easeInOut' }}>
          <div>
            <Button as="input" type="submit" value="Add Recipe Category" />
            <Button as="input" type="button" variant="danger" value="Delete Recipe Category" />
          </div>
          <div className='accordionBox'>
          <Accordion defaultActiveKey="0" >
            <Accordion.Item eventKey="0">
              <Accordion.Header >Accordion Item #1 </Accordion.Header>
              <Accordion.Body>

                <Container>
                  <Row xs={2} s={3} md={4}>


                    {this.props.cookbookRecipes.map((recipe) => (
                      <CookbookRecipeCard
                        key={recipe._id}
                        recipe={recipe}
                        kitchenIngredients={this.props.kitchenIngredients}
                        deleteCookbookRecipe={this.props.deleteCookbookRecipe}
                      />
                    ))}
                  </Row>

                </Container>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </div>
        </m.div>
      </div>
    );
  }
}

export default MyCookbook;
