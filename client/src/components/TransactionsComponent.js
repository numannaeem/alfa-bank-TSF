import React from 'react';
import { Breadcrumb, Container, Row, Table, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Transactions(props) {

    if(!props.transactions.length)
    return(<h5 className='text-center text-info my-5'>Loading...<br/>(if this takes too long, please refresh the page or try again later)</h5>)

    const transactionList = props.transactions.map((t) => {
        const date = new Date(t.date).toLocaleString('en-US')
        return(
            <tr style={{cursor: 'default'}} key={t._id}>
                <td>{t.from}</td>
                <td>{t.to}</td>
                <td>₹{t.amount}</td>
                <td>{date}</td>
                <td>{t._id}</td>
            </tr>
        )
    })
    
    return(
        <Container style={{minHeight: "100vh"}}>
            <Row>
                <Breadcrumb className='col-12'>
                    <Breadcrumb.Item><Link to='/home'>Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>Transactions</Breadcrumb.Item>
                </Breadcrumb>
            </Row>
            <h2 className='text-center my-5' style={{color:"rgb(66, 0, 66)"}}>All Transactions</h2>
            <Row>
                <Col xs='12'>
                    <Table striped borderless responsive="md" className='table'>
                        <thead>
                            <tr>
                                <th>From</th>
                                <th>To</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Invoice ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactionList}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default Transactions