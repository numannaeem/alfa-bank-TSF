import React from 'react';
import { Container, Table,Row, Breadcrumb } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';

function Customers(props) {
    
    const history = useHistory()

    const gotoUser = (id) => {
        history.push(`/customer/${id}`)
    }

    if(!props.customers.length)
        return(
            <div className='d-flex flex-column justify-content-center align-items-center' style={{height:'70vh'}} >
                <span className='text-dark fa fa-3x fa-spin fa-circle-notch'></span>
                <h5 className='text-muted mt-5'>(if this takes too long, please refresh the page or try again later)</h5>
            </div>
        )

    const customerList = props.customers.map((c) => {
        return(
            <tr key={c._id} onClick={() => gotoUser(c._id)} >
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.mobile}</td>
                <td>₹{c.balance}</td>
            </tr>
        )
    })
    
    return(
        <div>
            <Container style={{minHeight: "100vh"}}>
                <Row>
                    <Breadcrumb className='col-12'>
                        <Breadcrumb.Item><Link to='/home'>Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>Customers</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <h2 className='text-center my-5' style={{color:"rgb(66, 0, 66)"}}>All Customers</h2>
                <Table striped borderless hover responsive='sm' className='table' >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customerList}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default Customers