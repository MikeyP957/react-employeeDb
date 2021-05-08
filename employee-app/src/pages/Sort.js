import React, { Component, useState, useEffect } from 'react';
import Container from '../components/Container'
import Row from '../components/Row'
import API from '../utils/API';


const Sort = () => {
    const [employee, setEmployee] = useState([])
    const [isLoading, setIsLoading]
}

export default Sort;













// class Selection extends Component {
//     state= {
//         sortType: 'asc',
//         employeeList: []
//     }
//     onSort = sortType => {
//         this.setState({sortType})
//     }

//     render() {
//         const {employeeList, sortType } = this.state;
//         const sorted = employeeList.sort((a,b) => {
        
//             const isReversed = (sortType === 'asc') ? 1 : -1
//             return isReversed*a.name.localCompare(b.name)})
        
//         return(
//             <div>
//                 <Container>
//                     <Row>
//                         <Col>
//                         <button onClick= {()=> this.onSort('asc')}> Sort name by asc</button>
//                         <button onClick= {()=> this.onSort('desc')}> Sort name by desc</button>
//                         </Col>
//                     </Row>
//                     <Row>
//                         {
//                          sorted.map((employee, index) => {
//                              return this.renderEmployee( employee, index);
//                          })
//                         }
//                     </Row>
//                 </Container>
//             </div>
//         )
//     }
// }

