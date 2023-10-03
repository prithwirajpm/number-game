import React, { useState } from 'react'
import { Row, Col,Card } from 'react-bootstrap';

function UserOne({gnNo}) {
    const [num,setNum] =useState()
    const [secNum,sectsecNum] =useState()
    const firstUser =()=>{
        const genNum =Math.floor(10*Math.random())
        setNum(genNum);
        
    }
    const secondUser =()=>{
        const genNum =Math.floor(10*Math.random())
        sectsecNum(genNum);
    }
 
    return (
        <>
            <div className='d-flex justify-content-center align-items-center'>
                <Row className='mt-5 mb-5 container'>
                    <Col lg={6} sm={6} md={6} xl={6}>
                        <Card className='d-flex justify-content-center align-items-center'>
                            <Card.Body>
                                <div>
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