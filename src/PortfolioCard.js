import React, { Component } from 'react'
import './PortfolioCard.css'
import ReactModal from 'react-modal'

export default class PortfolioCard extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    const project = this.props.project
    return (
      <div className="portfolio-card">
        <button onClick={this.handleOpenModal}>Trigger Modal</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example">
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
        <img className="project-img" src={'./uma.jpg'} />
        <h2>{project.title}</h2>
        <p>{project.summary}</p>
        <p></p>
      </div>
    )
  }
}