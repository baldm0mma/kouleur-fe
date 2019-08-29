import React, { Component } from 'react';
import './NewPaletteModal.css';
import { connect } from 'react-redux';
import { toggleNewPalette, setError, setPalettes } from '../../actions';
import { postNewPaletteUrl, getAllPalettesUrl } from '../../utilities/urls';
import { Button, Form } from 'semantic-ui-react';
import { postNewPalette, getProjects } from '../../utilities/apiCalls';

export class NewPaletteModal extends Component {
  constructor() {
    super();
    this.state = {
      palette_name: ''
    };
  }

  handleNameChange = e => {
    this.setState({ palette_name: e.target.value });
  };

  makeNewPalette = async () => {
    const { currentProject, currentPalette } = this.props;
    const name = this.state.palette_name;
    try {
      await postNewPalette(
        postNewPaletteUrl,
        currentProject.id,
        name,
        currentPalette[0].hex,
        currentPalette[1].hex,
        currentPalette[2].hex,
        currentPalette[3].hex,
        currentPalette[4].hex
      );
      const palettes = await getProjects(getAllPalettesUrl);
      await this.props.setPalettes(palettes);
      this.props.toggleNewPalette(false);
    } catch (error) {
      this.props.setError(error.message);
    }
  };

  render() {
    return (
      <article className='modal-wrapper'>
        <div className='modal-card'>
          <Form>
            <Form.Field>
              <label id='modal-title'>Palette Name</label>
              {this.props.errorMessage && (
                <p>
                  Sorry, there was an issue posting: {this.props.errorMessage}
                </p>
              )}
              <input
                placeholder='Palette Name'
                value={this.state.palette_name}
                onChange={e => this.handleNameChange(e)}
              />
            </Form.Field>
            <Button
              id='create-project-button'
              type='submit'
              onClick={this.makeNewPalette}
            >
              Create Palette
            </Button>
            <Button
              onClick={() => this.props.toggleNewPalette(false)}
              type='submit'
            >
              Cancel
            </Button>
          </Form>
        </div>
        <div className='background' />
      </article>
    );
  }
}

export const mapStateToProps = ({
  projects,
  errorMessage,
  currentPalette,
  currentProject
}) => ({
  projects,
  errorMessage,
  currentPalette,
  currentProject
});

export const mapDispatchToProps = dispatch => ({
  toggleNewPalette: boolean => dispatch(toggleNewPalette(boolean)),
  setPalettes: results => dispatch(setPalettes(results)),
  setError: error => dispatch(setError(error))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPaletteModal);
