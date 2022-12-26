/* es-lint-disable - ignore cannot find google error */
import React, { useState} from 'react';
import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import { useParams } from "react-router-dom";

import "../index.css";
let coords = []
const listLibraries = ["places"]

export default function Map_Container(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.API_KEY,
    libraries: listLibraries
  });
  if (!isLoaded) return <p>Loading...</p>;
  return <Map business={props.business} />;
}

function Map(props) {
  const [center, setCenter] = useState({lat: -33.867, lng: 151.195})
  // eslint-disable-next-line
  const [coordsResult, setCoordsResults] = useState([])
  
  let {id} = useParams();
    // id is a string so to get the find function to work updatedID turns it into a number
    let updatedId = id * 1
    const business = props.business.find(b => b.id === updatedId)
  
  const onMapLoad = (map) => {
    let request = {
      query: business.address,
      fields: ["name", "geometry"]
    };

  let service = new window.google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, (results, status) => {
    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        coords.push(results[i]);
      }
    setCenter(results[0].geometry.location)
    setCoordsResults(coords)
    }
  });
}
  return (
    <div>
    <GoogleMap zoom={15} center={center} mapContainerClassName="map" onLoad= {map => onMapLoad(map)}>
      {coordsResult !== [] && coordsResult.map((results, i) => (
                <Marker key={i} position={results.geometry.location}>
                 </Marker>
              ))}
           
    </GoogleMap>
    </div>
  );
}
