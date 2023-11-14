import React, { ReactNode } from 'react';
import Backdrop from '../Backdrop/Backrop';

interface Props {
    show: boolean;
    title: string;
    onClose: () => void;
    children: ReactNode;
}

const Modal: React.FC<Props> = ({ show, title, onClose, children }) => {
    return (
        <>
            <Backdrop show={show} onClick={onClose} />
            <div className="modal show" style={{ display: show ? 'block' : 'none' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">{title}</h1>
                        </div>
                        <div className="modal-body">{children}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;