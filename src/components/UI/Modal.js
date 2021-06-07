import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';


const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onHideCart} />
}


const ModalOverlay = (props) => {
    return (
        <div>

            <div className={classes.modal}>
                <div className={classes.content}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}


const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop  onHideCart={props.onHideCart} />,document.getElementById("overlays"))}
            {ReactDOM.createPortal(<ModalOverlay> {props.children} </ModalOverlay>, document.getElementById("overlays")) }
        </Fragment>
    )
}




export default Modal;