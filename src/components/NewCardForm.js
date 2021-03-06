import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import FaPencil from 'react-icons/lib/fa/pencil'
import './NewCardForm.css';
import './Card.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {

  constructor() {
    super();

    this.state = {
      text: '',
      emoji: '',

    };
  }

  onInputChange = (event) => {
    let updatedInput = {};
    updatedInput[event.target.name] = event.target.value;
    this.setState(updatedInput);

  }

  onFormSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    console.log(this.state);
    this.props.addCardCallback(this.state);

    this.setState({
      text: '',
      emoji: '',

    });
  }

  emojis = () => {
    const emojiChoices = EMOJI_LIST.map((emojiText) => {
      return (
        <option key={emojiText} value={emojiText}>{emojiText.length > 0 ? emoji.getUnicode(emojiText): ""}</option>
      );
    });
    return emojiChoices;
  }

  render() {
    return (

      <section className="new-card-form">
        <h2 className="new-card-form__header">Write a new Card</h2>

        <div >
          <form onSubmit={this.onFormSubmit} className="new-card-form__form" >
            <label htmlFor="text" className="new-card-form__form-label">Write a note <FaPencil/><FaPencil/>
            <FaPencil/></label>
            <textarea name="text" onChange={this.onInputChange} value={this.state.text}
            className="new-card-form__form-textarea" />
            <label htmlFor="emoji" className="new-card-form__form-label">Emoji</label>
            <select name="emoji" onChange={this.onInputChange} value={this.state.emoji}
              className="new-card-form__form-select">
              {this.emojis()}
              </select>
              <button type="submit" className="new-card-form__form-button">Add Card</button>
          </form>
        </div>

      </section>
    );
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
}

export default NewCardForm;
