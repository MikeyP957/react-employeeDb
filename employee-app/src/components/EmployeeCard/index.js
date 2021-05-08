import React, {Component} from 'react';
import API from '../../utils/API';
import Card from '../Card'
import Col from '../Col'
import Container from '../Container'
import Row from '../Row'
import Wrapper from '../Wrapper'

export default class EmployeeCard extends Component {

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
            <Wrapper>
                {this.state.person.filter((employee) => employee.location.state === "Ohio")
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
            </Wrapper>
            
        )
        }
       }

}


