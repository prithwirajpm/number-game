import React, { useState } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';

function UserOne({ gnNo }) {
    const [num, setNum] = useState();
    const [secNum, setSecNum] = useState();
    const [fName, setFName] = useState('');
    const [sName, setSName] = useState('');

    const firstUser = () => {
        const genNum = Math.floor(10 * Math.random());
        setNum(genNum);
        num === gnNo && alert("You have One point UserOne");
    }

    const secondUser = () => {
        const genNum = Math.floor(10 * Math.random());
        setSecNum(genNum);
        secNum === gnNo && alert("You have One point secondUser");
    }

    const handleNameSubmit = (e) => {
        e.preventDefault();  // Prevent the default form submission behavior
        // Update state with the input values
        setFName(e.target.elements.fname.value);
        setSName(e.target.elements.sname.value);
    }

    return (
        <>
            <div className='d-flex justify-content-center align-items-center'>
                <Row className=' container'>
                    <Col lg={12} sm={12} md={12} xl={12}>
                        <Card>
                            <Card.Body className='p-5'>
                                <Form onSubmit={handleNameSubmit}>
                                    <div className='d-flex'>
                                        <Row className='w-100'>
                                            <Col lg={6} sm={6} md={12} xl={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Control type="text" name='fname' placeholder="Enter First User Name" />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} sm={6} md={12} xl={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Control type="text" name='sname' placeholder="Enter Second User Name" />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                    </div>
                                    <Button type='submit' className='btn btn-secondary w-100'>Submit</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <Row className='mt-5 mb-5 container'>
                    <Col lg={6} sm={6} md={6} xl={6}>
                        <Card className='d-flex justify-content-center align-items-center'>
                            <Card.Body>
                                <div>
                                    <h1>{fName}</h1>
                                    <h1 className='p-5'>{num}</h1>
                                    <button onClick={firstUser} className='btn btn-success'>Generate The Number</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} sm={6} md={6} xl={6}>
                        <Card className='d-flex justify-content-center align-items-center'>
                            <Card.Body>
                                <div>
                                    <h1>{sName}</h1>
                                    <h1 className='p-5'>{secNum}</h1>
                                    <button onClick={secondUser} className='btn btn-success'>Generate The Number</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default UserOne;
