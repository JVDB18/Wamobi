import React from "react";
import L from "leaflet";

let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

const success = pos => {
    console.log(`Latitude: ${pos.coords.latitude}`);
    console.log(`Longitude: ${pos.coords.longitude}`);
};

const error = err => {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
};

navigator.geolocation.watchPosition(success, error, options);

export default class Map extends React.Component {
    componentDidMount() {
        // create map
        this.map = L.map("map", {
            center: [49.8419, 24.0315],
            zoom: 16,
            layers: [
                L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
                    attribution:
                        '&copy; <a href="www.wamobi.be">Wamobi</a> copyright',
                }),
            ],
        });
    }
    render() {
        return <div id="map" />;
    }
}
