import React, {useState, useEffect, Component} from 'react'
import API from '../utils/API'
import Wrapper from '../components/Wrapper'
import Card from '../components/Card'
import FilterForm from '../components/FilterForm'
import Col from '../components/Col'
import Row from '../components/Row'
import Container from '../components/Container'



class Filter extends Component {

    state = {
        loading: true,
        person: null,
        location: ''
    }
   
   async componentDidMount() {
    const { data } = await API.getRandomEmployees();
        //map here  
        this.setState({person: data.results, loading: false})
    
    console.log(data.results);
   }

   handleInputChange = event => {
    this.setState({ location: event.target.value });
  };

  

render() {
    if(this.state.loading || !this.state.person) {
        return(
         <div>loading... </div> 
        )
    }
    else {
    return (
        <Wrapper>
                <Row>
                    <Col size= "md-12">
                         <FilterForm
                             handleFormSubmit={this.handleFormSubmit}
                             handleInputChange={this.handleInputChange}
                         />
                    </Col>
                </Row>
            <Container>
            <Row>    
            {this.state.person.filter((employee) => employee.location.state === this.state.location)
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

     </Wrapper>
    )}
}
}

export default Filter

// const [employee, setEmployee] = useState([]);
// const [loading, setLoading] = useState(true);

// useEffect(() => {
//     const fetchEmployee = async () =>{
//         const result = await API.getRandomEmployees()



//         setEmployee(result.data.results)
//         setLoading(false)
//     }
//     fetchEmployee()
    
// },[])
// return (
//     <div>
//         <EmployeeCard loading={loading} employee={employee}/>
//     </div>
// )


// import React, {Component} from 'react';
// import API from '../../utils/API';
// import Card from '../Card'
// import Col from '../Col'
// import Container from '../Container'
// import Row from '../Row'
// import Wrapper from '../Wrapper'

// export default class EmployeeCard extends Component {

//     state = {
//         loading: true,
//         person:null
//     }
   
//    async componentDidMount() {
//     const { data } = await API.getRandomEmployees();
//         //map here  
//         this.setState({person: data.results, loading: false})
    
//     console.log(data.results);
//    }

//    render() {
    //    if(this.state.loading || !this.state.person) {
    //        return(
    //         <div>loading... </div> 
    //        )
    //    }
    //    else {
//         return (
            // <Wrapper>
            //     {this.state.person.filter((employee) => employee.location.state === "Ohio")
            //     .map((employees) => (
            //         <Card
            //         key = {employees.login.uuid}
            //         image= {employees.picture.large} 
            //         text1= {employees.name.first} 
            //         text2= {employees.name.last} 
            //         text3= {employees.dob.age} 
            //         text4= {employees.location.state} 
            //         />
            //     ))}
            // </Wrapper>
            
//         )
//         }
//        }

// }


