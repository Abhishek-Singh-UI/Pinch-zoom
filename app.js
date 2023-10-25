import PinchZoom from './library/pinch-zoom.js';
var myElement = document.getElementById("img-one");
let pz = new PinchZoom(myElement, {
    draggableUnzoomed: false,
    minZoom: 1,
    onZoomStart: function(object, event){
        // Do something on zoom start
        // You can use any Pinchzoom method by calling object.method()
    },
    onZoomEnd: function(object, event){
        // Do something on zoom end
    }
});