import React from 'react';
import Modal from 'react-bootstrap/Modal';
// import { Button } from 'react-bootstrap';
import './FilteredRecipeModal.css';

class FilteredRecipeModal extends React.Component {
  render() {
    const recipe = this.props.recipe;
    return (
      <Modal
        size='lg'
        show={this.props.show}
        onHide={this.props.close}
        centered
        className='filteredBackground'
      >
        <Modal.Header>
          <Modal.Title>{recipe.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='filteredRecipeModal'>
          <img
            style={{
              width: '300px',
            }}
            src={recipe.imageUrl}
            alt={recipe.name}
            title={recipe.name}
          />

          <div className="recipe-modal-ingredients">
            
            <h2>Ingredients</h2>
            <div className='displayContainer'>
            {this.props.comparedIngredients.map((ingredient, i) => (
              <div
                key={i}
                className={ingredient.hasIngredient ? 'have-ingredient' : 'missing-ingredient'}
              >
              <div className="ingredientsStuffContainer">
                <img
                  style={{
                    width: '2.5rem',
                  }}
                  src={ingredient.imageUrl}
                  alt={ingredient.ingredientName}
                  title={ingredient.ingredientName} />
                <h5>{ingredient.ingredientName}</h5>
                <h5>{ingredient.measurement}</h5>
                </div>
               </div>


            ))}
            </div>
          </div>
          <div className="instructions">
            <h2>Instructions</h2>
            <ol>
              {recipe.instructions.map((step, i) => (
                <li key={i + 1}>{step}</li>
              ))}
            </ol>
          </div>
        </Modal.Body>
        <Modal.Footer className='filteredFooter'>
          <button className='closeFilteredModal' onClick={this.props.close}>Close</button>
          {this.props.hasInCookbook ? <button className='filteredRecipeRemove' onClick={(e) => this.props.handleDeleteRecipe(e, this.props.id)}>Remove from Cookbook</button> : <button className='filteredAdd' onClick={(e) => this.props.handleAddRecipe(e, recipe)}>Add to Cookbook</button>
          }
        </Modal.Footer>
      </Modal>
    );
  }
}

export default FilteredRecipeModal;
