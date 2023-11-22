import './App.css';
import { React } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import icon from './placeholder.png';


function App() {
  const data = [
  {
    id: 1,
      name: 'Buriganga',
      position: [23.746215,90.4902],
     WL: 24.4,
      DWL: 34.5
  },
  {
    id: 2,
    name: 'Buriganga',
    position: [23.826215,90.5902 ],
    WL: 24.4,
    DWL: 34.5
  },
  {
    id: 3,
    name: 'Buriganga',
    position: [23.926215, 90.6902 ],
    WL: 24.4,
    DWL: 34.5
  }
];

  const customIcon = new Icon({
    iconUrl: `${icon}`,
    iconSize: [35,35]
  });

  return (
    <div className='mapContainer'>
      <MapContainer
        center={[23.726215, 90.3902]}
        zoom={10}
        scrollWheelZoom={false}
        style={{ width: '1000px', height: '800px' }}
      >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
        
        {
          data.map((data) => (
            <Marker key={data.id} position={data.position} icon={customIcon}>
              <Popup>
                {data.name}
              </Popup>
            </Marker>
          ))
        }

          {/* <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker> */}
      </MapContainer>

    </div>
  );
}

export default App;
