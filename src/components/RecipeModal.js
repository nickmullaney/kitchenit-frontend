import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './RecipeModal.css';

class RecipeModal extends React.Component {
  render() {
    return(
      <Modal
        size='lg'
        show={this.props.show}
        onHide={this.props.close}
        centered
      >
        <Modal.Header>
          <Modal.Title>{this.props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.imageUrl} alt={this.props.name} title={this.props.name}/>
          <div className="recipe-modal-ingredients">
            <h2>Ingredients</h2>
            {this.props.comparedIngredients.map((ingredient) => (
              <div
                key={ingredient._id}
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
              {this.props.instructions.map((step, i) => (
                <li key={i+1}>{step}</li>
              ))}
            </ol>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={this.props.close}>Close</button>
          <button onClick={(e) => this.props.deleteCookbookRecipe(e, this.props._id)}>Remove</button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default RecipeModal;
