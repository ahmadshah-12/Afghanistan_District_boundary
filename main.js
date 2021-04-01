window.onload = init;
function init(){
    const map = new ol.Map({
        view: new ol.View({
            center: ol.proj.fromLonLat([67.71 , 33.94]),
            zoom: 6
        }),
        layers:[
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target:'map'
    })
    var afghanistan = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: 'https://geonode.wfp.org/geoserver/ows?SERVICE=WMS&',
            params: {
                LAYERS: 'afg_bnd_admin2_cso',
            }
        })
    });
    map.addLayer(afghanistan);
}