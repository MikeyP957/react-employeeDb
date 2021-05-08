import React, {useState} from 'react'

export const Search = ({getQuery}) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <section>
            <form>
                <input 
                 type="text" 
                 className="form-control" 
                 placeholder='Search Employees'
                 onChange= {(e) => onChange(e.target.value)}
                />
            </form>
        </section>
    )
}


















// import React, { Component } from 'react';
// import API from '../utils/API';
// import Container from '../components/Container';
// import SearchForm from '../components/SearchForm';
// import SearchResults from '../components/SearchResults'
// import Alert from '../components/Alert'

// class Search extends Component {
//     state = {
//         search: '',
//         UsaState: [
//             'Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'
//         ],
//         employees: null,
//         error: "",
//     };


//     handleInputChange = event => {
//         this.setState({ search: event.target.value });
//     };


//     async handleFormSubmit (event) {
//         event.preventDefault();
//         const { data } = await API.getRandomEmployees();
//         console.log(data.results);

//     };

//     render() {
//         return (
//             <div>
//                 <Container style={{ minHeight: "80%" }}>

//                 <SearchForm 
//                  handleFormSubmit= {this.handleFormSubmit}
//                  handleInputChange= {this.handleInputChange}
//                 />
                
//                 </Container>
//             </div>
//         )
//     }
// }

export default Search;