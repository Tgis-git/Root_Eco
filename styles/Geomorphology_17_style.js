var size = 0;
var placement = 'point';
function categories_Geomorphology_17(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Aeolian dune complex':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(51,102,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Aeolian Interdunal Depression and Playa':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(90,148,16,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Aeolian Plain':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(129,195,31,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Aeolian Sand Dune':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(192,225,118,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Aeolian Sand Sheet':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,255,204,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Alluvial Plain':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(252,239,170,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Anthropogenic terrain':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(250,222,137,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Coastal Plain':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(247,206,103,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Dam and Reservoir':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(244,189,69,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Desert Pavement':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(129,195,62,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Flood Plain':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(102,51,12,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Moderately Dissected Hills and Valleys':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(102,51,6,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pediment Pediplain Complex':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(102,51,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Salt Pan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(140,102,64,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '[\'Waterbody - River\', \'Waterbodies-Other\']':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,20,242,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Geomorphology_17 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("LEGEND_SHO");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Geomorphology_17(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
