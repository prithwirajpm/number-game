import React, { useState } from 'react'
import { Row, Col,Card } from 'react-bootstrap';
import UserOne from './UserOne';

function AdminPart() {
    const [num,setNum] =useState()
    const admin =()=>{
        const AdminNumber =Math.floor(10*Math.random())
        setNum(AdminNumber);
    }
  
    return (
        <>
            <div className='d-flex justify-content-center align-items-center'>
                <Row className='mt-5 mb-5 container'>
                    <Col lg={12} sm={12} md={12} xl={12}>
                        <Card className='d-flex justify-content-center align-items-center'>
                            <Card.Body>
                                <div>
                                    <h1 className='p-5'>{num}</h1>
                                    <button onClick={admin} className='btn btn-success'>Generate The Number</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div>
            <UserOne gnNo={num}/>
            </div>

        </>
    )
}

export default AdminPart;