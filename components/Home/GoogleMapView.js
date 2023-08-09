import { LoadScript } from '@react-google-maps/api';
import React, { useContext } from 'react';
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { UserLocationContext } from '@/context/UserLocationContext';
import Marker from './Marker';
import { useState } from 'react';
import { SelectedBusinessContext } from '@/context/SelectedBusinessContext';

function GoogleMapView({businessList}) {

    const {userLocation, setUserLocation} = useContext(UserLocationContext)
    const {selectedBusiness,setSelectedBusiness} = useContext(SelectedBusinessContext)

    const containerStyle = {
        width: '100%',
        height: '70vh'
    };
    const center = {
        lat: 23.8103,
        lng: 90.4125
    };
    // console.log(userLocation)

    return (
        <div>
           <LoadScript
                googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}
           >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={selectedBusiness.name?selectedBusiness.geometry.location:userLocation}
                    zoom={12}
                >
                    <MarkerF 
                        position={userLocation}
                        icon={{
                            url: 'user-location.png',
                            scaledSize:{
                                width:50,
                                height:50
                              }
                        }}
                    />
                    {businessList.map((item,index) => (
                        <Marker business={item} key={index}/>
                    ))}
                </GoogleMap>
           </LoadScript>
        </div>
    );
}

export default GoogleMapView;