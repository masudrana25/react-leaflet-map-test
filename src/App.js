import './App.css';
import { React } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import icon from './placeholder.png';
import MarkerClusterGroup from 'react-leaflet-cluster';


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
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png">
        </TileLayer>

        {/* <TileLayer
            attribution='Stamen Terrain Background'
            url="https://tiles.stadiamaps.com/tiles/stamen_terrain_background/{z}/{x}/{y}{r}.png">
        </TileLayer> */}

        {/* API NEED as it is premium */}
        {/* <TileLayer
            attribution='Stamen Terrain Background'
            url="https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png">
        </TileLayer> */}

        {/* <TileLayer
            attribution='World_Street_Map'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}">
        </TileLayer> */}

         {/* API NEED as it is premium */}
         {/* <TileLayer
            attribution='landscape'
            url="https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png">
        </TileLayer> */}

         {/* API NEED as it is premium */}
         {/* <TileLayer
            attribution='landscape'
            url="https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png">
        </TileLayer> */}
        
        <MarkerClusterGroup chunkedLoading >
          {
            data.map((data) => (
              <Marker key={data.id} position={data.position} icon={customIcon}>
                {/* <Popup>
                  {data.name}
                </Popup> */}

                {/* Marker popup with large scale or div */}
                <Popup>
                  <div className='popupDetails'>Marker popup with large scale or div</div>
                </Popup>
                <Tooltip>Tooltip for Marker</Tooltip>
                

              </Marker>
            ))
          }
        </MarkerClusterGroup>

      </MapContainer>

    </div>
  );
}

export default App;
