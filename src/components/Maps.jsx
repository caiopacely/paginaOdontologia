import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const position = [-3.412512906114378, -39.02900829440335];
function Maps(props){

    return (
    <MapContainer center={props.cordenadas} zoom={16} style={{ height: '300px', width: '340px', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={props.cordenadas}>
        <Popup>
          {props.local}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Maps