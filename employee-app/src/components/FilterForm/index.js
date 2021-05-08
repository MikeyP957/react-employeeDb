import React from 'react'
import './style.css'

const UsaState = [
    'Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

const FilterForm = (props) => {
    return (
        <form className="search">
          <div className="form-group">
            <label htmlFor="State">State Name:</label>
            <input
              value={props.search}
              onChange={props.handleInputChange}
              name="UsaState"
              list="UsaState"
              type="text"
              className="form-control"
              placeholder="Type in a US State or Territory to begin"
              id="UsaState"
            />
            <datalist id="UsaState">
              {UsaState.map(UsaState => (
                <option value={UsaState} key={UsaState} />
              ))}
            </datalist>
            <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
              Search
            </button>
          </div>
        </form>
      );
}

export default FilterForm;