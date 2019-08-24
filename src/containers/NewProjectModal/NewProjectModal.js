import React, { Component } from 'react';
import './NewProjectModal.css';
import { connect } from 'react-redux';
import { setCurrentProject, toggleNewProject, setError } from '../../actions';
import { devProjects } from '../../utilities/urls';
import { Button, Form } from 'semantic-ui-react';
import { postProjectName } from '../../utilities/apiCalls';

class NewProjectModal extends Component {
  constructor() {
    super();
    this.state = {
      project_name: ''
    };
  }

  handleNameChange = e => {
    this.setState({ project_name: e.target.value });
  };

  makeNewProject = async () => {
    const name = this.state.project_name;
    try {
      const response = await postProjectName(devProjects, name);
      await console.log('response', response);
      this.props.setCurrentProject(response, name);
      this.props.toggleNewProject(false);
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
              <label id='modal-title'>Project Name</label>
              <input
                placeholder='Project Name'
                value={this.state.project_name}
                onChange={e => this.handleNameChange(e)}
              />
            </Form.Field>
            <Button
              id='create-project-button'
              type='submit'
              onClick={this.makeNewProject}
            >
              Create Project
            </Button>
            <Button
              onClick={() => this.props.toggleNewProject(false)}
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

export const mapStateToProps = ({ projects }) => ({
  projects
});

export const mapDispatchToProps = dispatch => ({
  setCurrentProject: (id, name) => dispatch(setCurrentProject(id, name)),
  toggleNewProject: boolean => dispatch(toggleNewProject(boolean)),
  setError: error => dispatch(setError(error))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProjectModal);
