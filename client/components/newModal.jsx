import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#app');

const NewModal = (props) => {
  return (
    <div>
      <button onClick={props.openModal}>modal example button</button>
      <ReactModal
        isOpen={props.state.modalIsOpen}
        onRequestClose={props.closeModal}
        // style={customStyles}
        contentLabel="Photos Modal"
      >
        open a component here
        <button id="modal-close-button" onClick={props.closeModal}>Close modal</button>
      </ReactModal>
    </div>  
  )
}

export default NewModal;