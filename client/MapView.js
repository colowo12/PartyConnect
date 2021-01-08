import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { connect } from "react-redux";
import loadedLocations from "./store";

// const mymap = L.map("mapid").setView([40.73061, -73.935242], 13);

// L.tileLayer(
//   "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
//   {
//     attribution:
//       'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: "mapbox/streets-v11",
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken:
//       "pk.eyJ1IjoiY29tZmVlMDEwMSIsImEiOiJja2h1dDkzb3cwd3lyMnF0OW4zZjVlYTlrIn0.jkiQMVW6ideM0A5rOMHVmQ",
//   }
// ).addTo(mymap);

class MapView extends React.Component {
  componentDidMount() {
    loadedLocations();
  }

  render() {
    return (
      <div>
        <h1>*******This is the homepage*****</h1>
        {/* <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "100vh" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer> */}
      </div>
    );
  }
}

mapState = (state) => {
  return {
    locations: state.locations,
  };
};

mapDispatch = (dispatch) => {
  return {
    loadedLocations: () => {
      dispatch(loadedLocations());
    },
  };
};

export default connect(mapState, mapDispatch)(MapView);
