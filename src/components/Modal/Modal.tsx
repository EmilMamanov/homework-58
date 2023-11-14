import React from 'react';
import Alert from '../Alert/Alert';

interface ModalProps {
    show: boolean;
    title: string;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, title, onClose }) => {
    return (
        <>
            <div
                className="modal-backdrop show"
                style={{ display: show ? 'block' : 'none' }}
                onClick={onClose}
            />
            <div className="modal show" style={{ display: show ? 'block' : 'none' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">{title}</h1>
                        </div>
                        <div className="modal-body">
                            <Alert type="warning" onDismiss={onClose}>
                                This is a warning type alert
                            </Alert>
                            <Alert type="success">This is a success type alert</Alert>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-danger" onClick={onClose}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;