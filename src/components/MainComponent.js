import React, { Component } from 'react'
import { baseUrl } from '../shared/baseUrl'
import Customers from './CustomersComponent'
import Footer from './FooterComponent'
import Header from './HeaderComponent'
import Home from './HomeComponent'
import Transactions from './TransactionsComponent'
import {Redirect, Route, Switch} from 'react-router'
import CustomerDetail from './CustomerDetailComponent'
import { Button, Form, Modal, Row, Col } from 'react-bootstrap'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            customers: [],
            transactions: [],
            selectedCustomer: { _id: 0},
            isModalOpen: false,
        }
        this.getData = this.getData.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
    }

    handleTransfer(id) {
        const selectedCustomer = this.state.customers.find((c) => c._id === id)
        this.setState({
            selectedCustomer
        })
        this.toggleModal()
    }

    handleSubmit(e) {
        e.preventDefault()
        if(this.amount.value > this.state.selectedCustomer.balance - 500) {
            window.alert(
                `Amount being transferred must be less than ${this.state.selectedCustomer.balance-500} 
                (500 is the minimum balance)`
            )
        }
        else{ 
            const toName = this.to.value.split(' ')[0]
            const transactionDetails = {
                from: this.state.selectedCustomer.name,
                to: toName,
                amount: Number(this.amount.value)
            }

            fetch(baseUrl + 'new_transaction', {
                method: 'POST',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(transactionDetails)
            }).then(() => this.getData())
            window.alert("Transfer successful")
            this.toggleModal()
        }
    }

    toggleModal() {
        this.setState((prevState) => ({
                isModalOpen: !prevState.isModalOpen
            })
        )
    }

    getData() {
        fetch(baseUrl + 'customers')
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    customers: data
                })
            })
        fetch(baseUrl + 'transactions')
            .then((res) => res.json())
            .then((data) => {
                data.sort((a,b) => a.date > b.date? -1: 1)
                this.setState({
                    transactions: data
                })
            })
    }

    componentDidMount() {
        this.getData()
    }
    render() {
        const options = this.state.customers.filter((c) => c._id !== this.state.selectedCustomer._id).map((c) => {
            const miniId = c._id.substr(-4,4)
            return(<option key={c._id}>{c.name} (ID# {miniId})</option>)
        })
        return(
            <>
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/customers' component={() => <Customers customers={this.state.customers}/> } />
                    <Route path='/transactions' component={() => <Transactions transactions={this.state.transactions}/> } />
                    <Route path='/customer/:id' component={({match}) => <CustomerDetail customer={this.state.customers.find((c) => c._id === match.params.id)} onClick={(id) => this.handleTransfer(id)} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
                <Modal show={this.state.isModalOpen} onHide={this.toggleModal}>
                    <Modal.Header closeButton>
                        <h4>Transfer Money</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={(e) => this.handleSubmit(e)}>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>
                                    From:
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control ref={(input) => this.from = input} type='text' readOnly defaultValue={this.state.selectedCustomer? this.state.selectedCustomer.name: "null"} ></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>
                                    To:
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control ref={(input) => this.to = input} required as='select' custom>
                                        {options}
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>
                                    Amount:
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control required type='number' ref={(input) => this.amount = input}></Form.Control>
                                    <Form.Text muted>(No decimals allowed!)</Form.Text>
                                </Col>
                            </Form.Group>
                            <Button type="submit">Confirm transfer</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default Main