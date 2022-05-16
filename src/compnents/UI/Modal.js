import { createPortal } from "react-dom";
import classes from "./Modal.module.css";
import { Fragment } from "react";

const Backdrop = (props) => {
  return <div onClick={props.onCloseCart} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");

export const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<Backdrop  onCloseCart={props.onCloseCart}/>, portalElement)}
      {createPortal(
        <ModalOverlay >{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
