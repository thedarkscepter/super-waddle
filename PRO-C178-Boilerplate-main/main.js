let latitude = 27.2046, longitude = 77.4977

mapboxgl.accessToken = 'pk.eyJ1IjoibWFuaXQyMzc1ODQzNjU5ODIiLCJhIjoiY2wydmlqZ3ExMDAzdzNrbXZwbGJxZWt4bCJ9.QqKYuHNt_SZuTf2kxHTbtw'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [latitude, longitude],
    zoom: 0,
    
});

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true 
    })
);

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    'top-left'
)