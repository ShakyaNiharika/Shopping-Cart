import React from "react";
import "../../styles/messageBox/MessageBox.css";
import Button from "../button/Button";

const MessageBox = ({ message, onClose, onConfirm, confirmDelete = false }) => {
  return (
    <div className="message-overlay">
      <div className="message-content">
        <p>{message}</p>
        <div className="button-group">
          {confirmDelete ? (
            <>
              <Button
                title="Yes"
                onClick={onConfirm}
                className="confirm-button"
              />
              <Button
                title="Cancel"
                onClick={onClose}
                className="cancel-button"
              />
            </>
          ) : (
            <Button title="OK" onClick={onClose} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
