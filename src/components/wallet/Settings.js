import React from 'react';
import ReactJson from 'react-json-view';

import Navigation from './Navigation';

import {Row, Col, Container, Button, Table} from 'react-bootstrap';


export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };



    }

    async componentDidMount() {
        console.log("load settings");
        console.log(this.props.history);


    };

    render() {
        let txn_history_table_data = this.props.history.map((txn, key) => {
            console.log(txn);
            return (
                <tr key={key}>
                    <td>{txn.id}</td>
                    <td>{txn.direction}</td>
                    <td>{txn.pending}</td>
                    <td>{txn.amount / 10000000000}</td>
                    <td>{txn.fee}</td>
                    <td>{txn.blockHeight}</td>
                    <td>{txn.confirmations}</td>
                </tr>
            )
        });
        console.log(txn_history_table_data);
        return (
            <div style={{position: 'relative'}}>
                <Container>

                    <Row>
                        <Col>
                        </Col>
                        <Col>
                        </Col>

                    </Row>


                    <Row>
                        <Table>
                            <thead>
                            <tr>
                                <th>txid</th>
                                <th>in/out</th>
                                <th>pending?</th>
                                <th>amount</th>
                                <th>fee</th>
                                <th>blockheight</th>
                                <th>confirmations</th>
                            </tr>
                            </thead>

                            <tbody>
                                {txn_history_table_data}
                            </tbody>
                        </Table>
                    </Row>
                </Container>

            </div>
        );
    }


}