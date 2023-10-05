import React, { useState } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';

function UserOne({ gnNo }) {
    const [num, setNum] = useState();
    const [secNum, setSecNum] = useState();
    const [fName, setFName] = useState('');
    const [sName, setSName] = useState('');
    const [range, setRange] = useState('');
    const [firstpoint, setFirstPoint] = useState(0);
    const [secPoint, setSecPoint] = useState(0);
    const [showFirstButton, setShowFirstButton] = useState(true);
    const [showSecondButton, setShowSecondButton] = useState(false);
    const [showUsers, setShowUsers] = useState(false);
    const [showForm, setForm] = useState(true); // State to control displaying users row

    const firstUser = () => {
        const genNum = Math.floor(10 * Math.random());
        setNum(genNum);
        setShowFirstButton(false);
        setShowSecondButton(true);

        // Check if the generated number matches the range
        if (firstpoint.toString() === range) {
            alert(`${fName},You are the winner`);
            setForm(true);
            setShowUsers(false);
        }

        if (num === gnNo) {
            setFirstPoint((prevPoint) => prevPoint + 1);
            setShowFirstButton(true);
            setShowSecondButton(false);
            alert(`You have ${firstpoint + 1} point(s) in firstUser`);
        }
    }

    const secondUser = () => {
        const genNum = Math.floor(10 * Math.random());
        setSecNum(genNum);
        setShowFirstButton(true);
        setShowSecondButton(false);

        // Check if the generated number matches the range
        if (secPoint.toString() === range) {
            alert(`${sName},You are the winner`);
            setForm(true);
            setShowUsers(false);
        }

        if (secNum === gnNo) {
            setSecPoint((prevPoint) => prevPoint + 1);
            setShowFirstButton(false);
            setShowSecondButton(true);
            alert(`You have ${secPoint + 1} point(s) in secondUser`);
        }
    }

    const handleNameSubmit = (e) => {
        e.preventDefault();
        setFName(e.target.elements.fname.value);
        setSName(e.target.elements.sname.value);
        setRange(e.target.elements.range.value);
        setShowFirstButton(true);
        setShowUsers(true);
        setForm(false); // Show the users row
    }

    return (
        <>
            {showForm && (
                <div className='d-flex justify-content-center align-items-center'>
                    <Row className=' container'>
                        <Col lg={12} sm={12} md={12} xl={12}>
                            <Card>
                                <Card.Body className='p-5'>
                                    <Form onSubmit={handleNameSubmit}>
                                        <div className='d-flex'>
                                            <Row className='w-100'>
                                                <Col lg={4} sm={4} md={12} xl={4}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Control type="text" name='fname' placeholder="Enter First User Name" required />
                                                    </Form.Group>
                                                </Col>
                                                <Col lg={4} sm={4} md={12} xl={4}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Control type="text" name='sname' placeholder="Enter Second User Name" required />
                                                    </Form.Group>
                                                </Col>
                                                <Col lg={4} sm={4} md={12} xl={4}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Control type="text" name='range' placeholder="Please Set Point Range" required />
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
            )}

            {showUsers && (
                <div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <Row className='mt-5 mb-5 container' id="users">
                            <Col lg={12} sm={12} md={12} xl={12} className='mb-3'>
                                <Card className='d-flex justify-content-center align-items-center'>
                                    <Card.Body>
                                        <div>
                                            <h1>Range:{range}</h1>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={6} sm={6} md={6} xl={6}>
                                <Card className='d-flex justify-content-center align-items-center' style={{height:"300px"}}>
                                    <Card.Body>
                                        <div>
                                            <h1>{fName}:{firstpoint + 0}</h1>
                                            <h1 className='p-5'>{num}</h1>
                                            {showFirstButton && <button onClick={firstUser} className='btn btn-success'>Generate The Number</button>}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={6} sm={6} md={6} xl={6} >
                                <Card className='d-flex justify-content-center align-items-center' style={{height:"300px"}}>
                                    <Card.Body>
                                        <div>
                                            <h1>{sName}:{secPoint + 0}</h1>
                                            <h1 className='p-5'>{secNum}</h1>
                                            {showSecondButton && <button onClick={secondUser} className='btn btn-success'>Generate The Number</button>}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            )}
        </>
    )
}

export default UserOne;
