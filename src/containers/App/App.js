import './App.css';
import { connect } from 'react-redux';
import { devProjects, devPalettes } from '../../utilities/urls';
import { getProjects } from '../../utilities/apiCalls';
import {
  setProjects,
  setPalettes,
  setError,
  setCurrentProject
} from '../../actions';
import Nav from '../Nav/Nav.js';
import NewProjectModal from '../NewProjectModal/NewProjectModal';
import React, { Component } from 'react';
import  Picker  from '../Picker/Picker';

export class App extends Component {
  componentDidMount = async () => {
    try {
      const projects = await getProjects(devProjects);
      await this.props.setProjects(projects);
      await this.props.setCurrentProject(
        projects[0].id,
        projects[0].project_name
      );
      const palettes = await getProjects(devPalettes);
      await this.props.setPalettes(palettes);
    } catch (error) {
      this.props.setError(error);
    }
  };

  render = () => {
    return (
      <main>
        <Nav />
        <section className='body'>
        {this.props.newProjectToggle && <NewProjectModal />}
        <h3>Current Project: {this.props.currentProject.name}</h3>
        <Picker></Picker>
        </section>
      </main>
    );
  };
}

export const mapStateToProps = ({
  errorMessage,
  newProjectToggle,
  currentProject
}) => ({
  currentProject,
  errorMessage,
  newProjectToggle
});

export const mapDispatchToProps = dispatch => ({
  setProjects: results => dispatch(setProjects(results)),
  setPalettes: results => dispatch(setPalettes(results)),
  setError: error => dispatch(setError(error)),
  setCurrentProject: (id, name) => dispatch(setCurrentProject(id, name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
