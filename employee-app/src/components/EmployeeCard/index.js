import React from 'react';
import API from '../../utils/API';

export default class EmployeeCard extends React.Component {

    state = {
        loading: true,
        person: null,
    }

   async componentDidMount() {
    const { data } = await API.getRandomEmployees();

    this.setState({person: data.results[0], loading: false})
    //logs the first person
    console.log(data.results[0]);
   }

   render() {
       return (
           <div>
               {
               this.state.loading || !this.state.person ? 
               <div>loading... </div> : 
               <div>
                   <div>{this.state.person.name.first} </div>
                   <div>{this.state.person.name.last} </div>
                   <div>{this.state.person.dob.age} </div>
               </div>
                }
           </div>
       )
   }

}
