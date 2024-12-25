var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Boundry_1 = new ol.format.GeoJSON();
var features_Boundry_1 = format_Boundry_1.readFeatures(json_Boundry_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundry_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundry_1.addFeatures(features_Boundry_1);
var lyr_Boundry_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Boundry_1, 
                style: style_Boundry_1,
                interactive: true,
                title: '<img src="styles/legend/Boundry_1.png" /> Boundry'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Boundry_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Boundry_1];
lyr_Boundry_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Boundry_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Boundry_1.set('fieldLabels', {'id': 'inline label', 'Name': 'inline label', });
lyr_Boundry_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});