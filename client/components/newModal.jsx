import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import SlideShow from './slideshow';

if (process.env.NODE_ENV !== 'test') ReactModal.setAppElement('#app');

const Modal = (props) => {
  return (
    <div>
      <ReactModal
        isOpen={props.state.modalIsOpen}
        onRequestClose={props.closeModal}
        className="Modal"
      >
        <SlideShow 
        state={props.state} />
        <div className="backArrow" onClick={props.prevClick}>
          <button type="button" id="backArrow" aria-label="Previous"><svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" ><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd"></path></svg></button>
        </div>
        <div className="nextArrow" onClick={props.nextClick}>
          <button type="button" id="nextArrow" aria-label="Next"><svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false"><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd"></path></svg></button>
        </div>
        <button type="button" id="closeButton" onClick={()=>(props.closeModal())} id="closeModal" aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false"><path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd"></path></svg></button>
      </ReactModal>
    </div>  
  )
}

export default Modal;