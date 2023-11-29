import './App.css';
import { React } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import icon from './placeholder.png';
import { popupContent, popupHead, popupText, okText  } from './popupStyle';
import stationData from './water_level_station_BD.json';

function App() {

  const customIcon = new Icon({
    iconUrl: `${icon}`,
    iconSize: [25,25]
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
        
        
          {
            stationData?.map((data) => (
              <Marker position={[data.latitude, data.longitude]} icon={customIcon}>
                
                {/* Marker popup with large scale or div */}
                <Popup className='request-popup'>
                  {/*here, className has no working value */}
                  <div style={popupContent}>
                    
                    <div className="m-2" style={popupHead}>
                      Station Name :  {data.stationName}
                    </div>
                    <span style={popupText}>
                      Station Id : {data.stationID} <br />
                      River Name : {data.riverName} <br />
                      District : {data.district} <br />
                      Upazila : {data.upazila} <br />

                    </span>
                    <div className="m-2" style={okText}>
                      Okey
                    </div>
                  </div>
                </Popup>

                <Tooltip>{data.stationName}</Tooltip>
              </Marker>
            ))
          }

      </MapContainer>

    </div>
  );
}

export default App;
