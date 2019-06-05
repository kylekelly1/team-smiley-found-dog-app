import React from 'react'
import axios from 'axios'
import FoundPetsListItem from './FoundPetsListItem.jsx'

class FoundPetsList extends React.Component {
    constructor() {
        super();
        this.state = {
            foundPets: [],
            found: '',
        }
        this.handleFound = this.handleFound.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFound(event) {
        this.setState({ found: event.target.value })
    }
 
    //request to server to find found pets
    handleSubmit(event) {
        event.preventDefault();
        const params = { found: this.state.found }
        return axios.get('/user', { params })
            .then((results) => this.setState({ foundPets: results.data }))
    }

    render() {
        const { foundPets } = this.state;

        return (
            <div>
                <h1>Found Pets</h1>
                {foundPets.map((foundPet) => {
                    return <FoundPetsListItem foundPet={foundPet}/>
                })}
            </div>
        )
    }
}

export default FoundPetsList;