import React from 'react';
import { Accordion, Button } from 'react-bootstrap';
import { motion as m} from 'framer-motion';
import RecipeCard from './RecipeCard';

class MyCookbook extends React.Component {

  render() {
    return (
      <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.75, ease: 'easeInOut'}}>
        <div>
          <Button as="input" type="submit" value="Add Recipe Category" />
          <Button as="input" type="button" variant="danger" value="Delete Recipe Category" />
        </div>
        <Accordion defaultActiveKey="0" className='accordionBox'>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1 </Accordion.Header>
            <Accordion.Body>
              {this.props.cookBookRecipes.map((recipe) => (
                <RecipeCard
                  recipe={recipe}
                  kitchenIngredients={this.props.kitchenIngredients}
                  deleteCookbookRecipe={this.props.deleteCookbookRecipe}
                />
              ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </m.div>
    );
  }
}

export default MyCookbook;
