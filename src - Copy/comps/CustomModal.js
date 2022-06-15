import { Modal, Button } from "react-bootstrap";
import './CustomModal.css'

function CustomModal(props) {

  return (
    <>
      <Modal show={props.show} onHide={props.onHide} className='customModal'>
        <Modal.Header closeButton>
          <Modal.Title>ERROR</Modal.Title>
        </Modal.Header>
        <Modal.Body>Input field cannot be empty!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModal;
