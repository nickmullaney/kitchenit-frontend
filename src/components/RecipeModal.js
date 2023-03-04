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
          <img src={this.props.imageUrl} alt={this.props.name} title={this.props.title}/>
          <div className="recipe-modal-ingredients">
            <h2>Ingredients</h2>
            {this.props.comparedIngredients.map((ingredient) => (
              <div
                key={ingredient._id}
                className={ingredient.hasIngredient ? 'have-ingredient' : 'missing-ingredient'}
              >
                <img src={ingredient.imageUrl} alt={ingredient.name} title={ingredient.title}/>
                <h2>{ingredient.name}</h2>
              </div>
            ))}
          </div>
          <div className="instructions">
            <ol>
              {this.props.instructions.map((step, i) => (
                <li key={i+1}>{step}</li>
              ))}
            </ol>
          </div>
          <p>{this.props.name}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.close}>Close</Button>
          <button onClick={this.props.deleteCookbookRecipe}>Remove</button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default RecipeModal;
