import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 12,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/noravec98/cku2rumq21sq018p5xjd7r1e8"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>

          {/* Popup when we click on a push pin */}

          {selectedLocation.long === result.long ? (
            <Popup
              className="p-1 z-50 pt-3 px-3 rounded-2xl bg-red-400"
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              <div className="flex z-50 rounded-full text-sm">
                {result.title}
              </div>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
