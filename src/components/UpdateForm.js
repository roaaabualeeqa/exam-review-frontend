import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';





class UpdateForm extends React.Component {



    render() {
        return (
            <>
                <Modal
                    show={this.props.show}
                    onHide={this.props.handleClose}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Update Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form onSubmit={this.props.updateData}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name='name' defaultValue={this.props.name}/>
                            <Form.Label>URL</Form.Label>
                            <Form.Control type="text" name='url' defaultValue={this.props.url} />
                        </Form.Group>
                        <Button type='submit' variant="primary">Save</Button>
                    </Form>
                    </Modal.Body>
                </Modal>
            </>

        )
    }
}

export default UpdateForm;