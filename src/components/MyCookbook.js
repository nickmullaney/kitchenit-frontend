import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { motion as m } from 'framer-motion';
import CookbookRecipeCard from './CookbookRecipeCard';
import './MyCookbook.css';

class MyCookbook extends React.Component {

  render() {
    return (
      <div className='myCookbookBackground'>
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, ease: 'easeInOut' }}>
  
            <Container>
              <Row xs={1} md={2} lg={3} xl={4}>
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
        </m.div>
      </div>
    );
  }
}

export default MyCookbook;
