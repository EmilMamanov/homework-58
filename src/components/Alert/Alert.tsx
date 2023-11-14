import React from 'react';

interface AlertProps extends React.PropsWithChildren {
    type: 'success' | 'warning';
    onDismiss?: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, onDismiss, children }) => {
    return (
        <div className={`alert alert-${type}`} role="alert">
            {children}
            {onDismiss && (
                <button type="button" className="btn-close text-end" onClick={onDismiss} aria-label="Close"></button>
            )}
        </div>
    );
};

export default Alert;