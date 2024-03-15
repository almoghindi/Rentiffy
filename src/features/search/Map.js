import React, { useEffect, useRef } from "react";

function MyMapComponent({ center, zoom }) {
  const ref = useRef();

  useEffect(() => {
    if (navigator.geolocation) {
      // Get the user's current location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const userLocation = { lat: latitude, lng: longitude };

          // Create the map centered on the user's location
          new window.google.maps.Map(ref.current, {
            center: userLocation,
            zoom,
          });
        },
        (error) => {
          console.error("Error getting user's location:", error);
          // Default to the provided center if there's an error
          new window.google.maps.Map(ref.current, {
            center,
            zoom,
          });
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser.");
      // Default to the provided center if geolocation is not supported
      new window.google.maps.Map(ref.current, {
        center,
        zoom,
      });
    }
  }, [center, zoom]);

  return <div style={{ width: "100%", height: "1000px" }} ref={ref} id="map" />;
}

export default MyMapComponent;
