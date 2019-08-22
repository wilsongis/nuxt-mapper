export default () => ({
  drawer: null,
  color: 'info',
  layerTransparency: 0,
  defaultExtent: {
    container: 'viewDiv', // Reference to the scene div
    zoom: 11, // Sets zoom level based on level of detail (LOD)
    center: [1565311, 796308], // Sets center point of view using longitude,latitude
    xmin: 1478123,
    ymin: 711689,
    xmax: 1650380,
    ymax: 854727,
    spatialReference: 102736
  },
  layerCount: 53,
  layersList: [],
  layerToggle: null,
  layerLabel: [],
  zoomFeature: [],
  searchInfo: [],
  selectedTool: 'Identify',
  searchLayers: [
    {
      searchName: 'owner',
      layerName: 'Parcels',
      url:
        'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Zoom/MapServer/5/',
      displayFields: ['owner', 'owner2', 'propertyad', 'gislink'],
      outFields: 'objectid, owner, owner2, propertyad, gislink',
      orderByFields: 'owner',
      pre: '%27',
      post: '%25%27',
      num: 10
    },
    {
      searchName: 'propertyad',
      layerName: 'Parcels',
      url:
        'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Zoom/MapServer/5/',
      displayFields: ['propertyad', 'owner', 'owner2', 'gislink'],
      outFields: 'objectid, propertyad, owner, owner2, gislink',
      orderByFields: 'propertyad',
      pre: '%27%25',
      post: '%25%27',
      num: 10
    },
    {
      searchName: 'subdivisio',
      layerName: 'Parcels',
      url:
        'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Zoom/MapServer/5/',
      displayFields: ['subdivisio', 'owner', 'owner2', 'gislink'],
      outFields: 'objectid, subdivisio, owner, owner2, gislink',
      orderByFields: 'subdivisio',
      pre: '%27%25',
      post: '%25%27',
      num: 10
    },
    {
      searchName: 'label',
      layerName: 'Streets',
      url:
        'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Zoom/MapServer/3/',
      displayFields: ['label', 'name', 'alt_name', 'type'],
      outFields: 'objectid, label, name, alt_name, type',
      orderByFields: 'label',
      pre: '%27%25',
      post: '%25%27',
      num: 10
    }
  ],
  nearmeLayers: [
    {
      nearmeName: 'owner',
      layerName: 'Parcels',
      url:
        'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/37/',
      displayFields: ['owner', 'owner2', 'propertyad', 'gislink'],
      outFields: ['*'],
      orderByFields: ['owner'],
      pre: '',
      post: '%',
      num: 10
    },
    {
      nearmeName: 'propertyad',
      layerName: 'Parcels',
      url:
        'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/37/',
      displayFields: ['propertyad', 'owner', 'owner2', 'gislink'],
      outFields: ['*'],
      orderByFields: ['propertyad'],
      pre: '%',
      post: '%',
      num: 5
    },
    {
      nearmeName: 'label',
      layerName: 'Streets',
      url:
        'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/31/',
      displayFields: ['label', 'name', 'alt_name', 'type'],
      outFields: ['*'],
      orderByFields: ['label'],
      pre: '',
      post: '%',
      num: 5
    }
  ],
  // Array of Layers loaded into the map
  defaultLayers: [
    {
      heading: 'Points of Interest',
      layers: [
        {
          id: 16,
          name: 'Landfill',
          transparency: false,
          icon: 'Point',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/16'
        },
        {
          id: 17,
          name: 'State Offices',
          icon: 'Point',
          transparency: false,
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/17'
        },
        {
          id: 18,
          name: 'Places of Worship',
          transparency: false,
          icon: 'Point',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/18'
        },
        {
          id: 19,
          name: 'City Offices',
          transparency: false,
          icon: 'Point',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/19'
        },
        {
          id: 20,
          name: 'County Offices',
          transparency: false,
          icon: 'Point',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/20'
        },
        {
          id: 21,
          name: 'Library',
          transparency: false,
          icon: 'Point',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/21'
        },
        {
          id: 22,
          name: 'Post Offices',
          transparency: false,
          icon: 'Point',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/22'
        }
      ]
    },
    {
      heading: 'Property Info',
      layers: [
        {
          name: 'Mobile Home Parks',
          id: 34,
          transparency: true,
          icon: 'Polygon',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/34'
        },
        {
          name: 'Address Points',
          id: 35,
          transparency: false,
          icon: 'Point',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/35'
        },
        {
          name: 'Vacant Land',
          id: 36,
          transparency: true,
          icon: 'Polygon',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/36'
        },
        {
          name: 'Parcels',
          id: 37,
          transparency: true,
          icon: 'Polygon',
          labels: ['owner', 'propertyad'],
          visible: true,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/37'
        },
        {
          name: 'Subdivision',
          id: 38,
          transparency: true,
          icon: 'Polygon',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/38'
        },
        {
          name: 'ROW',
          id: 39,
          transparency: true,
          icon: 'Polygon',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/39'
        },
        {
          name: 'Index',
          id: 40,
          transparency: true,
          icon: 'Polygon',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/40'
        },
        {
          name: 'Index400',
          id: 41,
          transparency: true,
          icon: 'Polygon',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/41'
        }
      ]
    },
    {
      heading: 'Environment',
      layers: [
        {
          name: 'Major Rivers',
          id: 51,
          transparency: false,
          icon: 'Line',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/51'
        },
        {
          name: 'Rivers',
          id: 52,
          icon: 'Line',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/52'
        },
        {
          name: 'Water Bodies',
          id: 53,
          transparency: true,
          icon: 'Polygon',
          visible: true,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/53'
        },
        {
          name: 'River Mile Markers',
          id: 54,
          transparency: false,
          icon: 'Point',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/54'
        },
        {
          name: 'Forest',
          id: 55,
          transparency: true,
          icon: 'Polygon',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/55'
        },
        {
          name: 'Soils',
          id: 56,
          transparency: true,
          icon: 'Polygon',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/56'
        },
        {
          name: 'Wetlands',
          id: 57,
          transparency: true,
          icon: 'Polygon',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/57'
        },
        {
          name: 'FEMA Flood',
          id: 46,
          transparency: true,
          icon: 'Polygon',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/46'
        }
      ]
    },
    {
      heading: 'Transportation',
      layers: [
        {
          name: 'Sidewalks',
          id: 26,
          transparency: false,
          icon: 'Line',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/26'
        },
        {
          name: 'Railroad',
          id: 27,
          transparency: false,
          icon: 'Line',
          visible: true,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/27'
        },
        {
          name: 'Major Roads',
          id: 28,
          transparency: false,
          icon: 'Line',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/28'
        },
        {
          name: 'Interstate Mile Markers',
          id: 29,
          transparency: false,
          icon: 'Point',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/29'
        },
        {
          name: 'Major Streets',
          id: 30,
          transparency: false,
          icon: 'Line',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/30'
        },
        {
          name: 'Streets',
          id: 31,
          transparency: false,
          icon: 'Line',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/31'
        },
        {
          name: 'Intersections',
          id: 32,
          transparency: false,
          icon: 'Point',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/32'
        }
      ]
    },
    {
      heading: 'Election',
      layers: [
        {
          name: 'Polling Places',
          id: 66,
          transparency: false,
          icon: 'Point',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/66'
        },
        {
          name: 'City Wards',
          id: 73,
          transparency: true,
          icon: 'Polygon',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/73'
        },
        {
          name: 'County Districts',
          id: 68,
          transparency: true,
          icon: 'Polygon',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/68'
        },
        {
          name: 'School District',
          id: 70,
          transparency: true,
          icon: 'Polygon',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/70'
        },
        {
          name: 'State House District',
          id: 71,
          transparency: true,
          icon: 'Polygon',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/71'
        },
        {
          name: 'State Senate District',
          id: 72,
          transparency: true,
          icon: 'Polygon',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/72'
        },
        {
          name: 'Congressional District',
          id: 67,
          transparency: true,
          icon: 'Polygon',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/67'
        }
      ]
    },
    {
      heading: 'Education',
      layers: [
        {
          name: 'Schools',
          id: 75,
          transparency: false,
          icon: 'Point',
          visible: true,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/75'
        },
        {
          name: 'Colleges',
          id: 76,
          transparency: false,
          icon: 'Point',
          visible: true,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/76'
        },
        {
          name: 'Elementary School Boundary',
          id: 77,
          transparency: true,
          icon: 'Polygon',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/77'
        },
        {
          name: 'Middle and High School Boundary',
          id: 78,
          transparency: true,
          icon: 'Polygon',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/78'
        }
      ]
    },
    {
      heading: 'Boundaries',
      layers: [
        {
          name: 'Zoning',
          id: 82,
          transparency: true,
          icon: 'Polygon',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/82'
        },
        {
          name: 'Two Rivers Districts',
          id: 95,
          transparency: true,
          icon: 'Polygon',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/95'
        },
        {
          name: 'Clarksville Boundary',
          id: 96,
          transparency: true,
          icon: 'Polygon',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/96'
        },
        {
          name: 'CDBG Neighborhood',
          id: 97,
          transparency: true,
          icon: 'Polygon',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/97'
        },
        {
          name: 'Ft Campbell Boundary',
          id: 98,
          transparency: true,
          icon: 'Polygon',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/98'
        },
        {
          name: 'Zip Codes',
          id: 99,
          transparency: true,
          icon: 'Polygon',
          visible: false,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/99'
        },
        {
          name: 'County Boundary',
          id: 100,
          transparency: true,
          icon: 'Polygon',
          visible: true,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/100'
        }
      ]
    },
    {
      heading: 'Base Maps',
      layers: [
        {
          id: '6269388be2b34e989282f09536a602ee',
          name: '2010 Imagery',
          icon: 'Image',
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/MCGTN/Mont6InAerial_2010/MapServer',
          visible: false
        },
        {
          id: 'b7f2dd3475f846598241f4376172e534',
          name: '2012 Imagery',
          icon: 'Image',
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/MCGTN/Mont6InAerial2012/MapServer',
          visible: false
        },
        {
          id: '57ce2ac183ac4ccba8282cd58adb409f',
          name: '2016 Imagery',
          icon: 'Image',
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/MCGTN/MontAerial2016/MapServer',
          visible: false
        },
        {
          id: '26cbc77458254c7fb10e05359e784584',
          name: '2018 Imagery',
          icon: 'Image',
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/MCGTN/Orthos_2018/MapServer',
          visible: false
        },
        {
          id: 'f883bd9713e44104ac750665fd9a5b34',
          name: 'CMC Base',
          icon: 'Image',
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Basemaps_2274/MapServer',
          visible: true
        },
        {
          id: 'f883bd9713e44104ac750665fd9a5b32',
          name: 'TN Imagery',
          icon: 'Image',
          url:
            'https://tnmap.tn.gov/arcgis/rest/services/BASEMAPS/IMAGERY/MapServer',
          visible: false
        }
      ]
    },
    {
      heading: 'Zoom',
      layers: [
        {
          id: '0',
          name: 'Polling Zoom',
          icon: 'Point',
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Zoom/MapServer/0',
          visible: false
        },
        {
          id: '1',
          name: 'School Zoom',
          icon: 'Point',
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Zoom/MapServer/1',
          visible: false
        },
        {
          id: '2',
          name: 'College Zoom',
          icon: 'Point',
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Zoom/MapServer/2',
          visible: false
        },
        {
          id: '3',
          name: 'Street Zoom',
          icon: 'Line',
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Zoom/MapServer/3',
          visible: false
        },
        {
          id: '4',
          name: 'Park Zoom',
          icon: 'Polygon',
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Zoom/MapServer/4',
          visible: false
        },
        {
          id: '5',
          name: 'Parcel Zoom',
          icon: 'Polygon',
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Zoom/MapServer/5',
          visible: false
        },
        {
          id: '6',
          name: 'District Zoom',
          icon: 'Polygon',
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Zoom/MapServer/6',
          visible: false
        },
        {
          id: '7',
          name: 'ward Zoom',
          icon: 'Polygon',
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Zoom/MapServer/7',
          visible: false
        },
        {
          id: '8',
          name: 'Elementary Zoom',
          icon: 'Polygon',
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Zoom/MapServer/8',
          visible: false
        },
        {
          id: '9',
          name: 'Middle High Zoom',
          icon: 'Polygon',
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Zoom/MapServer/9',
          visible: false
        },
        {
          id: '10',
          name: 'County Zoom',
          icon: 'Polygon',
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Zoom/MapServer/10',
          visible: false
        }
      ]
    }
  ],
  parcelPopup: {
    // autocasts as new PopupTemplate()
    title: 'Parcel Attributes:',
    content: [
      {
        // It is also possible to set the fieldInfos outside of the content
        // directly in the popupTemplate. If no fieldInfos is specifically set
        // in the content, it defaults to whatever may be set within the popupTemplate.
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'owner',
            label: 'Owner Name'
          },
          {
            fieldName: 'owner2',
            label: 'Owner2 Name'
          },
          {
            fieldName: 'propertyad',
            label: 'Property Address'
          },
          {
            fieldName: 'proptype',
            label: 'Property Type'
          },
          {
            fieldName: 'salesdate',
            label: 'Sale Date'
          },
          {
            fieldName: 'salesprice',
            label: 'Sale Price',
            format: {
              digitSeparator: true,
              places: 0
            }
          },
          {
            fieldName: 'cmap',
            label: 'Map'
          },
          {
            fieldName: 'gp',
            label: 'Group'
          },
          {
            fieldName: 'parcel',
            label: 'Parcel Number'
          }
        ]
      },
      {
        // Autocasts as new MediaContent()
        type: 'media',
        mediaInfos: [
          {
            title: '<b>Property Image</b>',
            type: 'image', // Autocasts as new ImageMediaInfo()
            caption: 'Property Image',
            // Autocasts as new ImageMediaInfoValue()
            value: {
              sourceURL: '{imgpath}'
            }
          },
          {
            title: '<b>Property Sketch</b>',
            type: 'image', // Autocasts as new ImageMediaInfo()
            caption: 'Sketch',
            // Autocasts as new ImageMediaInfoValue()
            value: {
              sourceURL: '{sketchpath}'
            }
          }
        ]
      }
    ]
  } // End Parcel Popup
})
