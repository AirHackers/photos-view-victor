import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import SlideShow from './slideshow';

ReactModal.setAppElement('#app');

const Modal = (props) => {
  return (
    <div>
      <button onClick={()=>(props.openModal())}>modal example button</button>
      <ReactModal
        isOpen={props.state.modalIsOpen}
        onRequestClose={props.closeModal}
        className="Modal"
      >
        <SlideShow 
        state={props.state} />
        <div className="backArrow" onClick={props.prevClick}>
          <button onClick={props.prevClick}>back</button>
        </div>
        <div className="nextArrow" onClick={props.nextClick}>
          <button>forward</button>
        </div>
        <button id="modal-close-button" onClick={()=>(props.closeModal())}>Close modal</button>
      </ReactModal>
    </div>  
  )
}

export default Modal;