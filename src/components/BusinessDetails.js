import React, {useEffect} from 'react'
import { Container} from '@mui/material';
import { useParams } from "react-router-dom";
import MapContainer from '../containers/Map Container';

const BusinessDetails = (props) => {
    //getting the Id from the Params in React v6
    let {id} = useParams();
    // id is a string so to get the find function to work updatedID turns it into a number
    let updatedId = id * 1
    const business = props.business.find(b => b.id === updatedId)
 

    useEffect(
        () => {
          console.log('Hello Things have changed');
          console.log(props.business)
        },
        // eslint-disable-next-line
        [props]
      );
    return (
        <Container maxWidth="sm" className="car-container">
            <h1>{business.name}</h1>
            <h2>{business.address}</h2>
            <h2>{business.hours}</h2>
            <p>{business.description}</p>
            <MapContainer/>
        </Container>
    )
}
  

export default BusinessDetails
