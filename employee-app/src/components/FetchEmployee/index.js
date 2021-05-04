import React from 'react';

export default class FetchEmployee extends React.Component {

    state = {
        loading: true,
        person: null,
    }

   async componentDidMount() {
    const url = 'https://randomuser.me/api/';
    const response = await fetch(url);

    const data = await response.json()

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