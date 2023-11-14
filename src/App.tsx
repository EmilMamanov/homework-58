import { useState } from 'react';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backrop';

function App() {
    const [showModal, setShowModal] = useState(false);

    const cancel = () => setShowModal(false);

    return (
        <div className="container mt-5">
            <h1>React Modal Demo</h1>
            <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                Open Modal
            </button>

            <Modal show={showModal} title="Some Modal Title" onClose={cancel}>
                <p>This is modal content</p>
                <button className="btn btn-danger" onClick={cancel}>
                    Close
                </button>
            </Modal>

            {showModal && <Backdrop show={showModal} onClick={cancel} />}
        </div>
    );
}

export default App;