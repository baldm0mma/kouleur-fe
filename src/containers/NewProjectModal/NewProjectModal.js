import React, { Component } from 'react';
import './NewProjectModal.css';
import { connect } from 'react-redux';
import { setCurrentProject, toggleNewProject, setError, setProjects } from '../../actions';
import { getAllProjectsUrl } from '../../utilities/urls';
import { Button, Form } from 'semantic-ui-react';
import { postProjectName, getProjects } from '../../utilities/apiCalls';

export class NewProjectModal extends Component {
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
      const response = await postProjectName(getAllProjectsUrl, name);
      this.props.setCurrentProject(response, name);
      const projects = await getProjects(getAllProjectsUrl);
      await this.props.setProjects(projects);
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
              {this.props.errorMessage && <p>Sorry, there was an issue posting: {this.props.errorMessage}</p>}
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

export const mapStateToProps = ({ projects, errorMessage }) => ({
  projects,
  errorMessage
});

export const mapDispatchToProps = dispatch => ({
  setCurrentProject: (id, name) => dispatch(setCurrentProject(id, name)),
  toggleNewProject: boolean => dispatch(toggleNewProject(boolean)),
  setError: error => dispatch(setError(error)),
  setProjects: results => dispatch(setProjects(results))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProjectModal);
