import './App.css';
import { connect } from 'react-redux';
import { getAllProjectsUrl, getAllPalettesUrl } from '../../utilities/urls';
import { getProjects } from '../../utilities/apiCalls';
import {
  setProjects,
  setPalettes,
  setError,
  setCurrentProject
} from '../../actions';
import NewPaletteModal from '../NewPaletteModal/NewPaletteModal';
import Nav from '../Nav/Nav.js';
import NewProjectModal from '../NewProjectModal/NewProjectModal';
import PalettesContainer from '../PalettesContainer/PalettesContainer';
import React, { Component } from 'react';
import Picker from '../Picker/Picker';

export class App extends Component {
  componentDidMount = async () => {
    try {
      const projects = await getProjects(getAllProjectsUrl);
      await this.props.setProjects(projects);
      await this.props.setCurrentProject(
        projects[0].id,
        projects[0].project_name
      );
      const palettes = await getProjects(getAllPalettesUrl);
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
          {this.props.newPaletteToggle && <NewPaletteModal />}
          {/* <h3>Current Project: {this.props.currentProject.name}</h3> */}
          <Picker></Picker>
          <PalettesContainer />
        </section>
      </main>
    );
  };
}

export const mapStateToProps = ({
  errorMessage,
  newProjectToggle,
  currentProject,
  newPaletteToggle
}) => ({
  currentProject,
  errorMessage,
  newProjectToggle,
  newPaletteToggle
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
