import React, { Component } from 'react'
import './NewProjectModal.css'
import { connect } from 'react-redux'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import {setCurrentProject, toggleNewProject} from '../../actions'




class NewProjectModal extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <article className='modal-wrapper'>
        <div className='modal-card'>
          <form>
          
          </form>
        </div>
        <div className='background'/>
      </article>
    )
  }
}


export const mapStateToProps = ({ projects }) => ({
  projects,
})

export const mapDispatchToProps = dispatch => ({
  setCurrentProject: (id, name) => dispatch(setCurrentProject(id, name)),
  toggleNewProject: (boolean) => dispatch(toggleNewProject(boolean))
})


export default connect(mapStateToProps, mapDispatchToProps)(NewProjectModal)