import React from 'react'
import { Container, Card, Col, Row, Breadcrumb, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CustomerDetail(props) {
    if(props.customer)
        return(
            <Container style={{minHeight:'70vh'}}>
                <Row>
                    <Breadcrumb className='col-12'>
                        <Breadcrumb.Item><Link to='/home'>Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to='/customers'>Customers</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>{props.customer.name}</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <Row className='d-flex justify-content-center'>
                    <Card className="customer-card" style={{margin:"4rem 0.8rem"}}>
                        <Card.Header>
                            <h3>{props.customer.name}</h3>
                            <Card.Subtitle className='text-muted my-1'>ID# {props.customer._id}</Card.Subtitle>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xs={12} md={2}>
                                    <strong>Email:</strong>
                                </Col>
                                <Col xs={12} md={10}>
                                    <p>{props.customer.email}</p>
                                </Col>
                                <Col xs={12} md={2}>
                                    <strong>Mobile:</strong>
                                </Col>
                                <Col xs={12} md={10}>
                                    <p>{props.customer.mobile}</p>
                                </Col>
                                <Col xs={12} md={2}>
                                    <strong>Balance:</strong>
                                </Col>
                                <Col xs={12} md={10}>
                                    <p>₹{props.customer.balance}</p>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer>
                            <button className='btn transfer-btn' onClick={() => props.onClick(props.customer._id)}>Transfer Money</button>
                        </Card.Footer>
                    </Card>
                </Row>
            </Container>
        )
    else{
        return null
    }
}

export default CustomerDetail