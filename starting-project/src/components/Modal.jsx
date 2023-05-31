import classes from './Modal.module.css'

function Modal(props) {
    <>
        {/* div는 배경을 렌더링 하는데 사용(백드롭이라 함) */}
        <div className={classes.backdrop} />
        <dialog className={classes.modal}>
            {props.children}

        </dialog>
    </>
}

export default Modal