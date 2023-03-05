import React from 'react';
import Modal from 'react-bootstrap/Modal';
// import { Button } from 'react-bootstrap';
import './FilteredRecipeModal.css';

class FilteredRecipeModal extends React.Component {
  render() {
    const recipe = this.props.recipe;
    return(
      <Modal
        size='lg'
        show={this.props.show}
           onHide={this.props.close}
        centered
      >
        <Modal.Header>
          <Modal.Title>{recipe.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
            {this.props.comparedIngredients.map((ingredient, i) => (
              <div
                key={i}
                className={ingredient.hasIngredient ? 'have-ingredient' : 'missing-ingredient'}
              >
                <img
                  style={{
                    width: '2.5rem',
                  }}
                  src={ingredient.imageUrl}
                  alt={ingredient.ingredientName}
                  title={ingredient.ingredientName}/>
                <h4>{ingredient.ingredientName}</h4>
                <h4>{ingredient.measurement}</h4>
              </div>
            ))}
          </div>
          <div className="instructions">
            <h2>Instructions</h2>
            <ol>
              {recipe.instructions.map((step, i) => (
                <li key={i+1}>{step}</li>
              ))}
            </ol>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={this.props.close}>Close</button>
          {this.props.hasInCookbook ? <button onClick={(e) => this.props.handleDeleteRecipe(e, this.props.id)}>Remove from Cookbook</button> : <button onClick={(e) => this.props.handleAddRecipe(e, recipe)}>Add to Cookbook</button>         
            }
        </Modal.Footer>
      </Modal>
    );
  }
}

export default FilteredRecipeModal;
