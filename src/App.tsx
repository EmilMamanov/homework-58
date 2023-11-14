import React, { useState } from 'react';
import Modal from './components/Modal/Modal';

const App: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="container mt-12 text-center">
            <div className="row">
                <div className="col-6">
                    <h2>Modals</h2>
                    <button className="btn btn-primary" onClick={openModal}>
                        Open Modals
                    </button>
                </div>
            </div>
            <Modal show={showModal} title="My Modals" onClose={closeModal} />
        </div>
    );
};

export default App;