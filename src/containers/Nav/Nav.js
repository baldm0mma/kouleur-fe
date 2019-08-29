import React from 'react';
import { connect } from 'react-redux';
import { Dropdown, Button, Icon } from 'semantic-ui-react';
import {
  setCurrentProject,
  setError,
  setPalettes,
  setProjects,
  toggleNewProject
} from '../../actions';
import { deleteProject, getProjects } from '../../utilities/apiCalls';
import {
  deleteProjectUrl,
  getAllProjectsUrl,
  getAllPalettesUrl
} from '../../utilities/urls';
import './Nav.css';

export const Nav = ({
  currentProject,
  projects,
  setCurrentProject,
  setError,
  setPalettes,
  setProjects,
  toggleNewProject
}) => {
  const handleClick = (id, name) => {
    setCurrentProject(id, name);
  };

  const clickNewProject = () => {
    toggleNewProject(true);
  };

  const buildProjects = projects.map(proj => {
    return (
      <Dropdown.Item
        text={proj.project_name}
        id={proj.id}
        key={proj.id}
        onClick={() => handleClick(proj.id, proj.project_name)}
      />
    );
  });

  const deleteCurrentProject = async () => {
    try {
      await deleteProject(deleteProjectUrl, currentProject.id);
      const projects = await getProjects(getAllProjectsUrl);
      await setProjects(projects);
      await setCurrentProject(projects[0].id, projects[0].project_name);
      const palettes = await getProjects(getAllPalettesUrl);
      await setPalettes(palettes);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <nav>
      <section className='nav-wrapper'>
        <h1 className='site-title'>
          <span className='k'>K</span>
          <span className='o'>o</span>
          <span className='u'>u</span>
          <span className='l'>l</span>
          <span className='e'>e</span>
          <span className='u2'>u</span>
          <span className='r'>r</span>
        </h1>
        <div className='nav-control-bar'>
          <div className='project-control-container'>
            <Button id='new-project-button' onClick={clickNewProject}>
              New Project
            </Button>
            <Dropdown
              id='new-project-dropdown'
              text={`Project: ${currentProject.name}`}
            >
              <Dropdown.Menu>{buildProjects}</Dropdown.Menu>
            </Dropdown>
          </div>
          <Icon
            name='delete'
            id='delete'
            size='large'
            color='red'
            onClick={deleteCurrentProject}
          />
        </div>
      </section>
    </nav>
  );
};

export const mapStateToProps = ({ projects, currentProject }) => ({
  currentProject,
  projects
});

export const mapDispatchToProps = dispatch => ({
  setCurrentProject: (id, name) => dispatch(setCurrentProject(id, name)),
  setError: error => dispatch(setError(error)),
  setPalettes: palettes => dispatch(setPalettes(palettes)),
  setProjects: projects => dispatch(setProjects(projects)),
  toggleNewProject: boolean => dispatch(toggleNewProject(boolean))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
