import React, { useContext, useState} from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CoordinatesContext } from '../contexts/Coordinates.context';
import { MapContext } from '../contexts/Map.context';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = (props) => {

    const { currentPosition } = useContext(CoordinatesContext);
    const { setMap } = useContext(MapContext);

       //Center of Poland as a default location
    const [defaultPosition, setDefaultPosition] = useState([
        52.04,
        19.28
    ]);

    return (
        <div>
            <MapContainer 
                center={currentPosition || defaultPosition}
                zoom={7}
                scrollWheelZoom={true}
                whenCreated={setMap}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {currentPosition ? <Marker position={currentPosition}/> : null}
            </MapContainer>
        </div>
    );
}

export default Map;