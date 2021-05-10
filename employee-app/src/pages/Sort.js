import React, { Component } from 'react'
import API from "../utils/API"
import Card from '../components/Card'
import Container from '../components/Container'
import Row from '../components/Row'


 class Sort extends Component {
    state = {
        loading: true,
        person:null
    }
   
   async componentDidMount() {
    const { data } = await API.getRandomEmployees();
        //map here  
        this.setState({person: data.results, loading: false})
    
    console.log(data.results);
   }
    render() {
        if(this.state.loading || !this.state.person) {
            return(
             <div>loading... </div> 
            )
        }
        else {
        return (
            <div>
                <Container>
                    <Row>    
                    {this.state.person
                    .map((employees) => (
                        <Card
                        key = {employees.login.uuid}
                        image= {employees.picture.large} 
                        text1= {employees.name.first} 
                        text2= {employees.name.last} 
                        text3= {employees.dob.age} 
                        text4= {employees.location.state} 
                        />
                    ))}
            </Row>
            </Container>
            </div>
        )
    }
}
}
export default Sort