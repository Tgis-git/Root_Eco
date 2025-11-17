var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_EcologicalSustainabilityIndex_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Ecological Sustainability Index<br />\
    <img src="styles/legend/EcologicalSustainabilityIndex_2_0.png" /> Lowest<br />\
    <img src="styles/legend/EcologicalSustainabilityIndex_2_1.png" />  <br />\
    <img src="styles/legend/EcologicalSustainabilityIndex_2_2.png" /> Low<br />\
    <img src="styles/legend/EcologicalSustainabilityIndex_2_3.png" />  <br />\
    <img src="styles/legend/EcologicalSustainabilityIndex_2_4.png" /> Moderate<br />\
    <img src="styles/legend/EcologicalSustainabilityIndex_2_5.png" />  <br />\
    <img src="styles/legend/EcologicalSustainabilityIndex_2_6.png" /> High<br />\
    <img src="styles/legend/EcologicalSustainabilityIndex_2_7.png" />  <br />\
    <img src="styles/legend/EcologicalSustainabilityIndex_2_8.png" /> Highest<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/EcologicalSustainabilityIndex_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7921403.346337, 2730717.833444, 8092385.697995, 2813804.316051]
        })
    });
var lyr_SlopeInDegrees_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Slope (In Degrees)<br />\
    <img src="styles/legend/SlopeInDegrees_3_0.png" /> 0<br />\
    <img src="styles/legend/SlopeInDegrees_3_1.png" /> 10<br />\
    <img src="styles/legend/SlopeInDegrees_3_2.png" /> 20<br />\
    <img src="styles/legend/SlopeInDegrees_3_3.png" /> 30<br />\
    <img src="styles/legend/SlopeInDegrees_3_4.png" /> 45<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SlopeInDegrees_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7918054.523531, 2730530.635886, 8092449.648495, 2813835.826210]
        })
    });
var lyr_LandDegradation_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Land Degradation<br />\
    <img src="styles/legend/LandDegradation_4_0.png" /> Anthropogenic<br />\
    <img src="styles/legend/LandDegradation_4_1.png" /> Salinisation / Alkalisation<br />\
    <img src="styles/legend/LandDegradation_4_2.png" /> Water Erosion<br />\
    <img src="styles/legend/LandDegradation_4_3.png" /> Water logging<br />\
    <img src="styles/legend/LandDegradation_4_4.png" /> Wind Erosion<br />\
    <img src="styles/legend/LandDegradation_4_5.png" /> Others<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LandDegradation_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7917320.864902, 2728131.676169, 8093658.947215, 2816040.034924]
        })
    });
var lyr_SoilType_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Soil Type<br />\
    <img src="styles/legend/SoilType_5_0.png" /> Arenosols<br />\
    <img src="styles/legend/SoilType_5_1.png" /> Calcisols<br />\
    <img src="styles/legend/SoilType_5_2.png" /> Cambisols<br />\
    <img src="styles/legend/SoilType_5_3.png" /> Fluvisols<br />\
    <img src="styles/legend/SoilType_5_4.png" /> Leptosols<br />\
    <img src="styles/legend/SoilType_5_5.png" /> Lixisols<br />\
    <img src="styles/legend/SoilType_5_6.png" /> Luvisols<br />\
    <img src="styles/legend/SoilType_5_7.png" /> Solonchaks<br />\
    <img src="styles/legend/SoilType_5_8.png" /> Solonetz<br />\
    <img src="styles/legend/SoilType_5_9.png" /> Vertisols<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SoilType_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7918526.445095, 2732098.050657, 8091999.318248, 2812925.629346]
        })
    });
var lyr_Landuse2014_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Landuse 2014<br />\
    <img src="styles/legend/Landuse2014_6_0.png" /> 1- Waterbodies<br />\
    <img src="styles/legend/Landuse2014_6_1.png" /> 3- Agriculture<br />\
    <img src="styles/legend/Landuse2014_6_2.png" /> 4- Scrub<br />\
    <img src="styles/legend/Landuse2014_6_3.png" /> 5- Dense Vegetation<br />\
    <img src="styles/legend/Landuse2014_6_4.png" /> 7- Builtup<br />\
    <img src="styles/legend/Landuse2014_6_5.png" /> 9- Barren /Fallow Land<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Landuse2014_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7916606.063518, 2728122.322921, 8093703.418638, 2816078.132939]
        })
    });
var lyr_Landuse2024_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Landuse 2024<br />\
    <img src="styles/legend/Landuse2024_7_0.png" /> Waterbodies<br />\
    <img src="styles/legend/Landuse2024_7_1.png" /> Builtup<br />\
    <img src="styles/legend/Landuse2024_7_2.png" /> Agriculture land<br />\
    <img src="styles/legend/Landuse2024_7_3.png" /> Scrubland<br />\
    <img src="styles/legend/Landuse2024_7_4.png" /> Dense Vegetation/ Forest/ Greenbelt<br />\
    <img src="styles/legend/Landuse2024_7_5.png" /> Barren/Fallow Land<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Landuse2024_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7921403.346337, 2730717.833444, 8092385.697995, 2813804.316051]
        })
    });
var lyr_FaunalKernelDensity_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Faunal Kernel Density<br />\
    <img src="styles/legend/FaunalKernelDensity_8_0.png" /> 0.0000<br />\
    <img src="styles/legend/FaunalKernelDensity_8_1.png" /> 7.0357<br />\
    <img src="styles/legend/FaunalKernelDensity_8_2.png" /> 14.0714<br />\
    <img src="styles/legend/FaunalKernelDensity_8_3.png" /> 21.1071<br />\
    <img src="styles/legend/FaunalKernelDensity_8_4.png" /> 28.1428<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/FaunalKernelDensity_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7931391.316852, 2727874.439862, 8094715.698713, 2817278.698902]
        })
    });
var lyr_FloraKernelDensity_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Flora Kernel Density<br />\
    <img src="styles/legend/FloraKernelDensity_9_0.png" /> 0<br />\
    <img src="styles/legend/FloraKernelDensity_9_1.png" /> 6<br />\
    <img src="styles/legend/FloraKernelDensity_9_2.png" /> 12<br />\
    <img src="styles/legend/FloraKernelDensity_9_3.png" /> 19<br />\
    <img src="styles/legend/FloraKernelDensity_9_4.png" /> 25<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/FloraKernelDensity_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7931391.316852, 2727874.439862, 8093547.190764, 2817258.987579]
        })
    });
var lyr_OverallKernelDensity_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overall Kernel Density<br />\
    <img src="styles/legend/OverallKernelDensity_10_0.png" /> 0<br />\
    <img src="styles/legend/OverallKernelDensity_10_1.png" /> 13<br />\
    <img src="styles/legend/OverallKernelDensity_10_2.png" /> 26<br />\
    <img src="styles/legend/OverallKernelDensity_10_3.png" /> 39<br />\
    <img src="styles/legend/OverallKernelDensity_10_4.png" /> 53<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OverallKernelDensity_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7931391.316852, 2727874.439862, 8094715.698713, 2817278.698902]
        })
    });
var format_BiodiversityRisk_11 = new ol.format.GeoJSON();
var features_BiodiversityRisk_11 = format_BiodiversityRisk_11.readFeatures(json_BiodiversityRisk_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BiodiversityRisk_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BiodiversityRisk_11.addFeatures(features_BiodiversityRisk_11);
var lyr_BiodiversityRisk_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BiodiversityRisk_11, 
                style: style_BiodiversityRisk_11,
                popuplayertitle: 'Biodiversity Risk',
                interactive: true,
    title: 'Biodiversity Risk<br />\
    <img src="styles/legend/BiodiversityRisk_11_0.png" /> High<br />\
    <img src="styles/legend/BiodiversityRisk_11_1.png" /> Moderate<br />\
    <img src="styles/legend/BiodiversityRisk_11_2.png" /> Safe<br />' });
var format_OverallPoints_12 = new ol.format.GeoJSON();
var features_OverallPoints_12 = format_OverallPoints_12.readFeatures(json_OverallPoints_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OverallPoints_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OverallPoints_12.addFeatures(features_OverallPoints_12);
var lyr_OverallPoints_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OverallPoints_12, 
                style: style_OverallPoints_12,
                popuplayertitle: 'Overall Points',
                interactive: true,
                title: '<img src="styles/legend/OverallPoints_12.png" /> Overall Points'
            });
var lyr_GWExtraction2013inMCM_13 = new ol.layer.Image({
        opacity: 1,
        
    title: 'GW Extraction 2013 (in MCM) <br />\
    <img src="styles/legend/GWExtraction2013inMCM_13_0.png" /> <= 7376.0000<br />\
    <img src="styles/legend/GWExtraction2013inMCM_13_1.png" /> 7376.0000 - 15188.0000<br />\
    <img src="styles/legend/GWExtraction2013inMCM_13_2.png" /> > 15188.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/GWExtraction2013inMCM_13.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7918032.879212, 2730511.392891, 8092436.715522, 2813821.708203]
        })
    });
var lyr_GWExtraction2020inMCM_14 = new ol.layer.Image({
        opacity: 1,
        
    title: 'GW Extraction 2020 (in MCM) <br />\
    <img src="styles/legend/GWExtraction2020inMCM_14_0.png" /> <= 2500.0000<br />\
    <img src="styles/legend/GWExtraction2020inMCM_14_1.png" /> 2500.0000 - 5000.0000<br />\
    <img src="styles/legend/GWExtraction2020inMCM_14_2.png" /> 5000.0000 - 7500.0000<br />\
    <img src="styles/legend/GWExtraction2020inMCM_14_3.png" /> 7500.0000 - 10000.0000<br />\
    <img src="styles/legend/GWExtraction2020inMCM_14_4.png" /> > 10000.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/GWExtraction2020inMCM_14.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7918032.879212, 2730511.392891, 8092436.715522, 2813821.708203]
        })
    });
var format_Watershed_15 = new ol.format.GeoJSON();
var features_Watershed_15 = format_Watershed_15.readFeatures(json_Watershed_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Watershed_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Watershed_15.addFeatures(features_Watershed_15);
var lyr_Watershed_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Watershed_15, 
                style: style_Watershed_15,
                popuplayertitle: 'Watershed',
                interactive: true,
    title: 'Watershed<br />\
    <img src="styles/legend/Watershed_15_0.png" /> Mini Watershed<br />\
    <img src="styles/legend/Watershed_15_1.png" /> Micro Watershed<br />\
    <img src="styles/legend/Watershed_15_2.png" /> Milli Watershed<br />\
    <img src="styles/legend/Watershed_15_3.png" /> Sub Watershed<br />\
    <img src="styles/legend/Watershed_15_4.png" /> Macro Watershed<br />' });
var format_StreamNetwork_16 = new ol.format.GeoJSON();
var features_StreamNetwork_16 = format_StreamNetwork_16.readFeatures(json_StreamNetwork_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StreamNetwork_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StreamNetwork_16.addFeatures(features_StreamNetwork_16);
var lyr_StreamNetwork_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StreamNetwork_16, 
                style: style_StreamNetwork_16,
                popuplayertitle: 'Stream Network',
                interactive: true,
    title: 'Stream Network<br />\
    <img src="styles/legend/StreamNetwork_16_0.png" /> 1<br />\
    <img src="styles/legend/StreamNetwork_16_1.png" /> 2<br />\
    <img src="styles/legend/StreamNetwork_16_2.png" /> 3<br />\
    <img src="styles/legend/StreamNetwork_16_3.png" /> 4<br />\
    <img src="styles/legend/StreamNetwork_16_4.png" /> 5<br />\
    <img src="styles/legend/StreamNetwork_16_5.png" /> 6<br />' });
var format_Geomorphology_17 = new ol.format.GeoJSON();
var features_Geomorphology_17 = format_Geomorphology_17.readFeatures(json_Geomorphology_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geomorphology_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geomorphology_17.addFeatures(features_Geomorphology_17);
var lyr_Geomorphology_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geomorphology_17, 
                style: style_Geomorphology_17,
                popuplayertitle: 'Geomorphology',
                interactive: true,
    title: 'Geomorphology<br />\
    <img src="styles/legend/Geomorphology_17_0.png" /> Aeolian dune complex<br />\
    <img src="styles/legend/Geomorphology_17_1.png" /> Aeolian Interdunal Depression and Playa<br />\
    <img src="styles/legend/Geomorphology_17_2.png" /> Aeolian Plain<br />\
    <img src="styles/legend/Geomorphology_17_3.png" /> Aeolian Sand Dune<br />\
    <img src="styles/legend/Geomorphology_17_4.png" /> Aeolian Sand Sheet<br />\
    <img src="styles/legend/Geomorphology_17_5.png" /> Alluvial Plain<br />\
    <img src="styles/legend/Geomorphology_17_6.png" /> Anthropogenic terrain<br />\
    <img src="styles/legend/Geomorphology_17_7.png" /> Coastal Plain<br />\
    <img src="styles/legend/Geomorphology_17_8.png" /> Dam and Reservoir<br />\
    <img src="styles/legend/Geomorphology_17_9.png" /> Desert Pavement<br />\
    <img src="styles/legend/Geomorphology_17_10.png" /> Flood Plain<br />\
    <img src="styles/legend/Geomorphology_17_11.png" /> Moderately Dissected Hills and Valleys<br />\
    <img src="styles/legend/Geomorphology_17_12.png" /> Pediment Pediplain Complex<br />\
    <img src="styles/legend/Geomorphology_17_13.png" /> Salt Pan<br />\
    <img src="styles/legend/Geomorphology_17_14.png" /> Waterbodies<br />' });
var format_Geology_18 = new ol.format.GeoJSON();
var features_Geology_18 = format_Geology_18.readFeatures(json_Geology_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geology_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geology_18.addFeatures(features_Geology_18);
var lyr_Geology_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geology_18, 
                style: style_Geology_18,
                popuplayertitle: 'Geology',
                interactive: true,
    title: 'Geology<br />\
    <img src="styles/legend/Geology_18_0.png" /> Clay-Rich Deposits<br />\
    <img src="styles/legend/Geology_18_1.png" /> Saline or Marine Deposits<br />\
    <img src="styles/legend/Geology_18_2.png" /> Metamorphosed Igneous Rocks<br />\
    <img src="styles/legend/Geology_18_3.png" /> Clastic Sediments<br />\
    <img src="styles/legend/Geology_18_4.png" /> Granite and Gabbro<br />\
    <img src="styles/legend/Geology_18_5.png" /> Marbles & Quartzites<br />\
    <img src="styles/legend/Geology_18_6.png" /> Schists & Gneisses<br />\
    <img src="styles/legend/Geology_18_7.png" /> Carbonate Sediments<br />' });
var format_Lineaments_19 = new ol.format.GeoJSON();
var features_Lineaments_19 = format_Lineaments_19.readFeatures(json_Lineaments_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lineaments_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lineaments_19.addFeatures(features_Lineaments_19);
var lyr_Lineaments_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lineaments_19, 
                style: style_Lineaments_19,
                popuplayertitle: 'Lineaments',
                interactive: true,
    title: 'Lineaments<br />\
    <img src="styles/legend/Lineaments_19_0.png" /> Drainage parallel<br />\
    <img src="styles/legend/Lineaments_19_1.png" /> Fault<br />\
    <img src="styles/legend/Lineaments_19_2.png" /> Joint/Fracture<br />' });
var format_Waterbodies_20 = new ol.format.GeoJSON();
var features_Waterbodies_20 = format_Waterbodies_20.readFeatures(json_Waterbodies_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waterbodies_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterbodies_20.addFeatures(features_Waterbodies_20);
var lyr_Waterbodies_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterbodies_20, 
                style: style_Waterbodies_20,
                popuplayertitle: 'Waterbodies',
                interactive: false,
                title: '<img src="styles/legend/Waterbodies_20.png" /> Waterbodies'
            });
var format_Canals_21 = new ol.format.GeoJSON();
var features_Canals_21 = format_Canals_21.readFeatures(json_Canals_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Canals_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Canals_21.addFeatures(features_Canals_21);
var lyr_Canals_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Canals_21, 
                style: style_Canals_21,
                popuplayertitle: 'Canals',
                interactive: true,
                title: '<img src="styles/legend/Canals_21.png" /> Canals'
            });
var format_Roads_22 = new ol.format.GeoJSON();
var features_Roads_22 = format_Roads_22.readFeatures(json_Roads_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_22.addFeatures(features_Roads_22);
var lyr_Roads_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_22, 
                style: style_Roads_22,
                popuplayertitle: 'Roads',
                interactive: false,
    title: 'Roads<br />\
    <img src="styles/legend/Roads_22_0.png" /> National Highway<br />\
    <img src="styles/legend/Roads_22_1.png" /> State Highway<br />\
    <img src="styles/legend/Roads_22_2.png" /> District Roads<br />' });
var format_Talukas_23 = new ol.format.GeoJSON();
var features_Talukas_23 = format_Talukas_23.readFeatures(json_Talukas_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Talukas_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Talukas_23.addFeatures(features_Talukas_23);
var lyr_Talukas_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Talukas_23, 
                style: style_Talukas_23,
                popuplayertitle: 'Talukas',
                interactive: true,
    title: 'Talukas<br />\
    <img src="styles/legend/Talukas_23_0.png" /> Banaskantha Talukas<br />\
    <img src="styles/legend/Talukas_23_1.png" /> Vav Tharad Talukas<br />' });
var group_Admin = new ol.layer.Group({
                                layers: [lyr_Waterbodies_20,lyr_Canals_21,lyr_Roads_22,],
                                fold: 'close',
                                title: 'Admin'});
var group_Hydrology = new ol.layer.Group({
                                layers: [lyr_Watershed_15,lyr_StreamNetwork_16,],
                                fold: 'close',
                                title: 'Hydrology'});
var group_GW = new ol.layer.Group({
                                layers: [lyr_GWExtraction2013inMCM_13,lyr_GWExtraction2020inMCM_14,],
                                fold: 'close',
                                title: 'GW'});
var group_Biodiversity = new ol.layer.Group({
                                layers: [lyr_FaunalKernelDensity_8,lyr_FloraKernelDensity_9,lyr_OverallKernelDensity_10,lyr_BiodiversityRisk_11,lyr_OverallPoints_12,],
                                fold: 'close',
                                title: 'Biodiversity'});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(false);lyr_EcologicalSustainabilityIndex_2.setVisible(false);lyr_SlopeInDegrees_3.setVisible(false);lyr_LandDegradation_4.setVisible(false);lyr_SoilType_5.setVisible(false);lyr_Landuse2014_6.setVisible(false);lyr_Landuse2024_7.setVisible(false);lyr_FaunalKernelDensity_8.setVisible(false);lyr_FloraKernelDensity_9.setVisible(false);lyr_OverallKernelDensity_10.setVisible(false);lyr_BiodiversityRisk_11.setVisible(false);lyr_OverallPoints_12.setVisible(false);lyr_GWExtraction2013inMCM_13.setVisible(false);lyr_GWExtraction2020inMCM_14.setVisible(false);lyr_Watershed_15.setVisible(false);lyr_StreamNetwork_16.setVisible(false);lyr_Geomorphology_17.setVisible(false);lyr_Geology_18.setVisible(false);lyr_Lineaments_19.setVisible(false);lyr_Waterbodies_20.setVisible(false);lyr_Canals_21.setVisible(false);lyr_Roads_22.setVisible(false);lyr_Talukas_23.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleHybrid_1,lyr_EcologicalSustainabilityIndex_2,lyr_SlopeInDegrees_3,lyr_LandDegradation_4,lyr_SoilType_5,lyr_Landuse2014_6,lyr_Landuse2024_7,group_Biodiversity,group_GW,group_Hydrology,lyr_Geomorphology_17,lyr_Geology_18,lyr_Lineaments_19,group_Admin,lyr_Talukas_23];
lyr_BiodiversityRisk_11.set('fieldAliases', {'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Dist_Id': 'Dist_Id', 'Taluka_Id': 'Taluka_Id', 'Village_Id': 'Village_Id', 'S_Name': 'S_Name', 'Remark': 'Remark', 'GUJ_NAM': 'GUJ_NAM', 'GUJ_NAM2': 'GUJ_NAM2', 'GUJ_NAM_1': 'GUJ_NAM_1', 'Popu_2001': 'Popu_2001', 'Status': 'Status', 'BEAT': 'BEAT', 'ROUND': 'ROUND', 'RANGE': 'RANGE', 'DIVISION': 'DIVISION', 'CIRCLE': 'CIRCLE', 'VILL_TYPE': 'VILL_TYPE', 'FOREST_AR': 'FOREST_AR', 'Risk': 'Risk', });
lyr_OverallPoints_12.set('fieldAliases', {'Sr No': 'Sr No', 'Taluka': 'Taluka', 'Fauna': 'Fauna', 'Type of Fa': 'Type of Fa', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Flora': 'Flora', 'Type of Fl': 'Type of Fl', 'Remark': 'Remark', 'layer': 'layer', 'path': 'path', 'Threat Flo': 'Threat Flo', });
lyr_Watershed_15.set('fieldAliases', {'ID': 'ID', 'VALUE': 'VALUE', 'NAME': 'NAME', 'area': 'area', 'Type': 'Type', });
lyr_StreamNetwork_16.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_Geomorphology_17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_LENG': 'SHAPE_LENG', 'DESCRIPTIO': 'DESCRIPTIO', 'LEGEND_SHO': 'LEGEND_SHO', 'layer': 'layer', 'path': 'path', });
lyr_Geology_18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'INPUT_CENT': 'INPUT_CENT', 'TOPOSHEET_': 'TOPOSHEET_', 'EDITION_NU': 'EDITION_NU', 'GEOMETRY_I': 'GEOMETRY_I', 'AGE': 'AGE', 'SUPERGROUP': 'SUPERGROUP', 'GROUP_NAME': 'GROUP_NAME', 'FORMATION': 'FORMATION', 'MEMBER': 'MEMBER', 'LITHOLOGIC': 'LITHOLOGIC', 'SUB_GROUP': 'SUB_GROUP', 'NEW_GEOM_I': 'NEW_GEOM_I', 'UID_NOTATI': 'UID_NOTATI', 'INTRUSIVE': 'INTRUSIVE', 'SCRIPT': 'SCRIPT', 'NOTATION': 'NOTATION', 'STRATIGRAP': 'STRATIGRAP', 'AREA': 'AREA', 'AREA1': 'AREA1', 'NOTATION12': 'NOTATION12', 'layer': 'layer', 'path': 'path', 'Group': 'Group', 'Geology': 'Geology', });
lyr_Lineaments_19.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LINEAID': 'LINEAID', 'SYMID': 'SYMID', 'L1DESCRIPT': 'Description 1', 'L2DESCRIPT': 'Description 2', });
lyr_Waterbodies_20.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_Canals_21.set('fieldAliases', {'Layer': 'Layer', 'Categories': 'Categories', 'Feature_Co': 'Feature_Co', 'Validation': 'Validation', 'Year_Updat': 'Year_Updat', 'Projtn_Dtm': 'Projtn_Dtm', 'Cont_Offcr': 'Cont_Offcr', 'Cont_No': 'Cont_No', 'Scale_mapi': 'Scale_mapi', 'Data_Sour': 'Data_Sour', 'Proj_code': 'Proj_code', 'Remarks': 'Remarks', });
lyr_Roads_22.set('fieldAliases', {'icon': 'icon', 'CAT': 'CAT', 'NAME': 'NAME', 'FROM_KM': 'FROM_KM', 'TO_KM': 'TO_KM', 'BSSLANE': 'BSSLANE', 'SSLANE': 'SSLANE', 'INTER': 'INTER', 'SDLANE': 'SDLANE', 'SMLTL': 'SMLTL', 'CAR_WIDTH': 'CAR_WIDTH', 'FOR_WIDTH': 'FOR_WIDTH', 'LAND_WIDTH': 'LAND_WIDTH', 'LENGTH_ROA': 'LENGTH_ROA', 'SURFACE': 'SURFACE', 'SP': 'SP', 'REMARK': 'REMARK', 'CAT_SP': 'CAT_SP', 'CAT_SURFAC': 'CAT_SURFAC', 'NEW_SURFAC': 'NEW_SURFAC', 'YEARS': 'YEARS', 'SH_NH_ID': 'SH_NH_ID', 'DISTRICT': 'DISTRICT', });
lyr_Talukas_23.set('fieldAliases', {'Taluka': 'Taluka', 'District': 'District', 'Dist_Id': 'Dist_Id', 'Taluka_Id': 'Taluka_Id', 'NewDist': 'NewDist', 'area': 'area', });
lyr_BiodiversityRisk_11.set('fieldImages', {'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Dist_Id': 'TextEdit', 'Taluka_Id': 'TextEdit', 'Village_Id': 'TextEdit', 'S_Name': 'TextEdit', 'Remark': 'TextEdit', 'GUJ_NAM': 'TextEdit', 'GUJ_NAM2': 'TextEdit', 'GUJ_NAM_1': 'TextEdit', 'Popu_2001': 'TextEdit', 'Status': 'TextEdit', 'BEAT': 'TextEdit', 'ROUND': 'TextEdit', 'RANGE': 'TextEdit', 'DIVISION': 'TextEdit', 'CIRCLE': 'TextEdit', 'VILL_TYPE': 'TextEdit', 'FOREST_AR': 'TextEdit', 'Risk': 'TextEdit', });
lyr_OverallPoints_12.set('fieldImages', {'Sr No': 'TextEdit', 'Taluka': 'TextEdit', 'Fauna': 'TextEdit', 'Type of Fa': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Flora': 'TextEdit', 'Type of Fl': 'TextEdit', 'Remark': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Threat Flo': 'TextEdit', });
lyr_Watershed_15.set('fieldImages', {'ID': 'TextEdit', 'VALUE': 'TextEdit', 'NAME': 'TextEdit', 'area': 'TextEdit', 'Type': 'TextEdit', });
lyr_StreamNetwork_16.set('fieldImages', {'SEGMENT_ID': 'TextEdit', 'NODE_A': 'TextEdit', 'NODE_B': 'TextEdit', 'BASIN': 'TextEdit', 'ORDER': 'TextEdit', 'ORDER_CELL': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_Geomorphology_17.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'LEGEND_SHO': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Geology_18.set('fieldImages', {'OBJECTID': 'TextEdit', 'INPUT_CENT': 'TextEdit', 'TOPOSHEET_': 'TextEdit', 'EDITION_NU': 'Range', 'GEOMETRY_I': 'TextEdit', 'AGE': 'TextEdit', 'SUPERGROUP': 'TextEdit', 'GROUP_NAME': 'TextEdit', 'FORMATION': 'TextEdit', 'MEMBER': 'TextEdit', 'LITHOLOGIC': 'TextEdit', 'SUB_GROUP': 'TextEdit', 'NEW_GEOM_I': 'TextEdit', 'UID_NOTATI': 'TextEdit', 'INTRUSIVE': 'TextEdit', 'SCRIPT': 'TextEdit', 'NOTATION': 'TextEdit', 'STRATIGRAP': 'TextEdit', 'AREA': 'TextEdit', 'AREA1': 'TextEdit', 'NOTATION12': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Group': 'TextEdit', 'Geology': 'TextEdit', });
lyr_Lineaments_19.set('fieldImages', {'OBJECTID': 'TextEdit', 'LINEAID': 'TextEdit', 'SYMID': 'TextEdit', 'L1DESCRIPT': 'TextEdit', 'L2DESCRIPT': 'TextEdit', });
lyr_Waterbodies_20.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_Canals_21.set('fieldImages', {'Layer': 'TextEdit', 'Categories': 'TextEdit', 'Feature_Co': 'TextEdit', 'Validation': 'TextEdit', 'Year_Updat': 'TextEdit', 'Projtn_Dtm': 'TextEdit', 'Cont_Offcr': 'TextEdit', 'Cont_No': 'TextEdit', 'Scale_mapi': 'TextEdit', 'Data_Sour': 'TextEdit', 'Proj_code': 'TextEdit', 'Remarks': 'TextEdit', });
lyr_Roads_22.set('fieldImages', {'icon': 'TextEdit', 'CAT': 'TextEdit', 'NAME': 'TextEdit', 'FROM_KM': 'TextEdit', 'TO_KM': 'TextEdit', 'BSSLANE': 'TextEdit', 'SSLANE': 'TextEdit', 'INTER': 'TextEdit', 'SDLANE': 'TextEdit', 'SMLTL': 'TextEdit', 'CAR_WIDTH': 'TextEdit', 'FOR_WIDTH': 'TextEdit', 'LAND_WIDTH': 'TextEdit', 'LENGTH_ROA': 'TextEdit', 'SURFACE': 'TextEdit', 'SP': 'TextEdit', 'REMARK': 'TextEdit', 'CAT_SP': 'TextEdit', 'CAT_SURFAC': 'TextEdit', 'NEW_SURFAC': 'TextEdit', 'YEARS': 'TextEdit', 'SH_NH_ID': 'TextEdit', 'DISTRICT': 'TextEdit', });
lyr_Talukas_23.set('fieldImages', {'Taluka': 'TextEdit', 'District': 'TextEdit', 'Dist_Id': 'TextEdit', 'Taluka_Id': 'TextEdit', 'NewDist': 'TextEdit', 'area': 'TextEdit', });
lyr_BiodiversityRisk_11.set('fieldLabels', {'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'Dist_Id': 'hidden field', 'Taluka_Id': 'hidden field', 'Village_Id': 'hidden field', 'S_Name': 'hidden field', 'Remark': 'hidden field', 'GUJ_NAM': 'hidden field', 'GUJ_NAM2': 'hidden field', 'GUJ_NAM_1': 'hidden field', 'Popu_2001': 'hidden field', 'Status': 'hidden field', 'BEAT': 'hidden field', 'ROUND': 'hidden field', 'RANGE': 'hidden field', 'DIVISION': 'hidden field', 'CIRCLE': 'hidden field', 'VILL_TYPE': 'hidden field', 'FOREST_AR': 'hidden field', 'Risk': 'inline label - always visible', });
lyr_OverallPoints_12.set('fieldLabels', {'Sr No': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Fauna': 'inline label - always visible', 'Type of Fa': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Flora': 'inline label - always visible', 'Type of Fl': 'inline label - always visible', 'Remark': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Threat Flo': 'hidden field', });
lyr_Watershed_15.set('fieldLabels', {'ID': 'hidden field', 'VALUE': 'hidden field', 'NAME': 'hidden field', 'area': 'hidden field', 'Type': 'inline label - always visible', });
lyr_StreamNetwork_16.set('fieldLabels', {'SEGMENT_ID': 'hidden field', 'NODE_A': 'hidden field', 'NODE_B': 'hidden field', 'BASIN': 'hidden field', 'ORDER': 'inline label - always visible', 'ORDER_CELL': 'hidden field', 'LENGTH': 'inline label - always visible', });
lyr_Geomorphology_17.set('fieldLabels', {'OBJECTID': 'hidden field', 'SHAPE_LENG': 'hidden field', 'DESCRIPTIO': 'hidden field', 'LEGEND_SHO': 'inline label - always visible', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Geology_18.set('fieldLabels', {'OBJECTID': 'hidden field', 'INPUT_CENT': 'hidden field', 'TOPOSHEET_': 'hidden field', 'EDITION_NU': 'hidden field', 'GEOMETRY_I': 'hidden field', 'AGE': 'hidden field', 'SUPERGROUP': 'hidden field', 'GROUP_NAME': 'hidden field', 'FORMATION': 'hidden field', 'MEMBER': 'hidden field', 'LITHOLOGIC': 'inline label - always visible', 'SUB_GROUP': 'hidden field', 'NEW_GEOM_I': 'hidden field', 'UID_NOTATI': 'hidden field', 'INTRUSIVE': 'hidden field', 'SCRIPT': 'hidden field', 'NOTATION': 'hidden field', 'STRATIGRAP': 'hidden field', 'AREA': 'hidden field', 'AREA1': 'hidden field', 'NOTATION12': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Group': 'hidden field', 'Geology': 'inline label - always visible', });
lyr_Lineaments_19.set('fieldLabels', {'OBJECTID': 'hidden field', 'LINEAID': 'hidden field', 'SYMID': 'hidden field', 'L1DESCRIPT': 'inline label - always visible', 'L2DESCRIPT': 'inline label - always visible', });
lyr_Waterbodies_20.set('fieldLabels', {'osm_id': 'hidden field', 'code': 'hidden field', 'fclass': 'hidden field', 'name': 'hidden field', });
lyr_Canals_21.set('fieldLabels', {'Layer': 'hidden field', 'Categories': 'inline label - always visible', 'Feature_Co': 'hidden field', 'Validation': 'hidden field', 'Year_Updat': 'hidden field', 'Projtn_Dtm': 'hidden field', 'Cont_Offcr': 'hidden field', 'Cont_No': 'hidden field', 'Scale_mapi': 'hidden field', 'Data_Sour': 'hidden field', 'Proj_code': 'hidden field', 'Remarks': 'hidden field', });
lyr_Roads_22.set('fieldLabels', {'icon': 'hidden field', 'CAT': 'inline label - always visible', 'NAME': 'hidden field', 'FROM_KM': 'hidden field', 'TO_KM': 'hidden field', 'BSSLANE': 'hidden field', 'SSLANE': 'hidden field', 'INTER': 'hidden field', 'SDLANE': 'hidden field', 'SMLTL': 'hidden field', 'CAR_WIDTH': 'hidden field', 'FOR_WIDTH': 'hidden field', 'LAND_WIDTH': 'hidden field', 'LENGTH_ROA': 'hidden field', 'SURFACE': 'hidden field', 'SP': 'hidden field', 'REMARK': 'hidden field', 'CAT_SP': 'hidden field', 'CAT_SURFAC': 'hidden field', 'NEW_SURFAC': 'hidden field', 'YEARS': 'hidden field', 'SH_NH_ID': 'hidden field', 'DISTRICT': 'hidden field', });
lyr_Talukas_23.set('fieldLabels', {'Taluka': 'inline label - always visible', 'District': 'hidden field', 'Dist_Id': 'hidden field', 'Taluka_Id': 'hidden field', 'NewDist': 'inline label - always visible', 'area': 'hidden field', });
lyr_Talukas_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});