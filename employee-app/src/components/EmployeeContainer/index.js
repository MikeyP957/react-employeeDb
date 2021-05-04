import React, { Component } from "react";
import API from '..//..//utils/API'
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';
import Card from '../Card';
// import SearchForm from '';
import EmployeeDetail from '../EmployeeDetail'

class EmployeeContainer extends Component {
    state = {
        result: {},
        search: ""
    };

    searchEmployees = () => {
        API.getAllEmployees()
         .then(res => this.setState({
             result: res.data
         })
         .catch(err => console.log(err)));
    }

    render() {
        return (
            <Container>
            <Row>
                <Col size="md-8">
                <Card>
                    <EmployeeDetail
                    FirstName= {this.state.result.name.first}
                    LastName= {this.state.result.name.last}
                    email= {this.state.result.email}
                    Age= {this.state.result.dob.age}
                    City = {this.state.result.location.city}
                    State = {this.state.result.location.state}
                    />
                </Card>
                </Col>
            </Row>
        </Container>
        )
        
    }
}

export default EmployeeContainer;
