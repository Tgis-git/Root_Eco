var size = 0;
var placement = 'point';
function categories_Geology_18(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Clay-Rich Deposits':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(156,114,73,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Saline or Marine Deposits':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(209,181,133,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Metamorphosed Igneous Rocks':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(199,146,65,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Clastic Sediments':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(238,218,169,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Granite and Gabbro':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(228,228,228,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Marbles & Quartzites':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(172,224,216,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Schists & Gneisses':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(72,164,156,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Carbonate Sediments':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(1,97,88,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Geology_18 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Geology");
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
    
    var style = categories_Geology_18(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
