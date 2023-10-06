import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import UserOne from './UserOne';

function AdminPart() {
    const [num, setNum] = useState();
    const [countdown, setCountdown] = useState(10);

    // Function to generate admin number
    const admin = () => {
        const AdminNumber = Math.floor(10 * Math.random());
        setNum(AdminNumber);
    };

    useEffect(() => {
        // Generate admin number initially
        admin();

        // Generate admin number every 10 seconds
        const interval = setInterval(() => {
            admin();
            setCountdown(10); // Reset countdown to 10 on every admin generation
        }, 10000); // 10 seconds in milliseconds

        // Update countdown every second
        const countdownInterval = setInterval(() => {
            setCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
        }, 1000); // 1 second in milliseconds

        // Clear the intervals when the component is unmounted or when num changes
        return () => {
            clearInterval(interval);
            clearInterval(countdownInterval);
        };
    }, [num]);

    return (
        <>
            <div className='d-flex justify-content-center align-items-center'>
                <Row className='mt-5 mb-5 container'>
                    <Col lg={12} sm={12} md={12} xl={12}>
                        <Card className='d-flex justify-content-center align-items-center'>
                            <Card.Body>
                                <div>
                                    <h1 className='text-center'>{num}</h1>
                                    <h3>countdown: {countdown} seconds</h3>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div>
                <UserOne gnNo={num} />
            </div>
        </>
    );
}

export default AdminPart;
