import React from 'react';
import { Marker as MarkerF, OverlayView } from '@react-google-maps/api';
import BusinessItem from './BusinessItem';
import { useContext } from 'react';
import { SelectedBusinessContext } from '@/context/SelectedBusinessContext';

function Marker({business}) {
    const {selectedBusiness,setSelectedBusiness} = useContext(SelectedBusinessContext)

    return (
        <div>
            <MarkerF
                position={business.geometry.location}
                icon={{
                    url: 'circle.png',
                    scaledSize:{
                        width:10,
                        height:10
                    }
                }}
                onClick={() => {
                    setSelectedBusiness(business)
                }}
            >
                {selectedBusiness.reference === business.reference ?
                    <OverlayView 
                        position={business.geometry.location}
                        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                    >
                        <div className='ml-[-90px] mt-[-200px]'>
                            <BusinessItem business={business} showDir={true}/>
                        </div>
                    </OverlayView>
                :null}
                </MarkerF>
        </div>
    );
}

export default Marker;