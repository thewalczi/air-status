import React, { useContext, useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CoordinatesContext } from '../contexts/Coordinates.context';
import { MapContext } from '../contexts/Map.context';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const Map = (props) => {

    const { currentPosition } = useContext(CoordinatesContext);
    const { setMap } = useContext(MapContext);

    return (
        <div>
            {currentPosition ? 
            <MapContainer 
                center={currentPosition}
                zoom={6}
                scrollWheelZoom={true}
                whenCreated={setMap}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={currentPosition}>
                    {/* <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup> */}
                </Marker>
            </MapContainer> : null}
        </div>
    );
}

// function LocationMarker() {
//     const [position, setPosition] = useState(null)
//     const map = useMapEvents({
//       click() {
//         map.locate()
//       },
//       locationfound(e) {
//         setPosition(e.latlng)
//         map.flyTo(e.latlng, map.getZoom())
//       },
//     })
  
//     return position === null ? null : (
//       <Marker position={position}>
//         <Popup>You are here</Popup>
//       </Marker>
//     )
//   }

export default Map;