import './App.css';
import { devProjects, devPalettes } from '../../utilities/urls';
import { Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import { getProjects } from '../../utilities/apiCalls';
import { setProjects, setPalettes, setError } from '../../actions';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav.js'
import NewProjectModal from '../NewProjectModal/NewProjectModal'

export class App extends Component {
  componentDidMount = async () => {
    try {
      const projects = await getProjects(devProjects);
      await this.props.setProjects(projects);
      const palettes = await getProjects(devPalettes)
      await this.props.setPalettes(palettes);
    } catch (error) {
      this.props.setError(error.message);
    }
  };

  render = () => {
    return <main>
      <Nav />
      <NewProjectModal />
    </main>;
  };
}

export const mapStateToProps = ({ error }) => ({
  error
});

export const mapDispatchToProps = dispatch => ({
  setProjects: results => dispatch(setProjects(results)),
  setPalettes: results => dispatch(setPalettes(results)),
  setError: error => dispatch(setError(error))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
