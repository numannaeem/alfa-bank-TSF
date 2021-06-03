import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home(props) {
    return(
        <Container style={{minHeight: '100vh'}}>
            <Row className='text-center'>
                <Col>
                    <h3 className='mt-5' style={{color:"rgb(66, 0, 66)"}}>Welcome to Alfa Bank</h3>
                    <h5 className='font-weight-light'>Click on one of the options below to get started</h5>
                </Col>
            </Row>
            <Row className='text-center'>
                <Col xs={12} md={6}>
                    <Link to='/customers'>
                        <div className='home-button'>
                            <i className='fa fa-3x fa-users mb-3'></i>
                            <h3>View all customers</h3>
                        </div>
                    </Link>
                </Col>
                <Col xs={12} md={6}>
                    <Link to='/transactions'>
                        <div className='home-button'>
                            <i className='fa fa-3x fa-coins mb-3'></i>
                            <h3>View transaction history</h3>
                        </div>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Home