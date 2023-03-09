import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { motion as m } from 'framer-motion';
import CookbookRecipeCard from './CookbookRecipeCard';
import './MyCookbook.css';
import altLogo from '../img/chef-cooking.gif';
class MyCookbook extends React.Component {

  render() {
    return (
      <div className='myCookbookBackground'>
        <m.div initial={{opacity: 0, x:-1000}} animate={{opacity: 1, x:0}} transition={{duration: 1.5, ease: 'easeInOut'}}>
          
  
            <Container>
              <Row className='row' xs={1} md={2} lg={3} xl={4}>
              <img src={altLogo} alt={"Alt Logo"} height={220} width={125}/>
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
