import L from 'leaflet';

const mapMarker = new L.Icon({
    iconUrl: require('./custom-marker.svg'),
    iconRetinaUrl: require('./custom-marker.svg'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export { mapMarker };