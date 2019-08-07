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
  zoomFeature: [],
  selectedTool: 'Identify',
  searchLayers: [
    {
      searchName: 'owner',
      layerName: 'Parcels',
      url:
        'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/37/',
      displayFields: ['owner', 'owner2', 'propertyad', 'gislink'],
      outFields: ['*'],
      orderByFields: ['owner'],
      sort: 0,
      pre: '',
      post: '%',
      num: 10
    },
    {
      searchName: 'propertyad',
      layerName: 'Parcels',
      url:
        'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/37/',
      displayFields: ['propertyad', 'owner', 'owner2', 'gislink'],
      outFields: ['*'],
      orderByFields: ['propertyad'],
      sort: 200,
      pre: '%',
      post: '%',
      num: 5
    },
    {
      searchName: 'label',
      layerName: 'Streets',
      url:
        'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/31/',
      displayFields: ['label', 'name', 'alt_name', 'type'],
      outFields: ['*'],
      orderByFields: ['label'],
      sort: 300,
      pre: '',
      post: '%',
      num: 5
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
      sort: 0,
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
      sort: 200,
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
      sort: 300,
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
          visible: false
        },
        {
          id: 17,
          name: 'State Offices',
          visible: false
        },
        {
          id: 18,
          name: 'Places of Worship',
          visible: false
        },
        {
          id: 19,
          name: 'City Offices',
          visible: false
        },
        {
          id: 20,
          name: 'County Offices',
          visible: false
        },
        {
          id: 21,
          name: 'Library',
          visible: false
        },
        {
          id: 22,
          name: 'Post Offices',
          visible: false
        }
      ]
    },
    {
      heading: 'Property Info',
      layers: [
        {
          name: 'Mobile Home Parks',
          id: 34,
          visible: false
        },
        {
          name: 'Address Points',
          id: 35,
          visible: false
        },
        {
          name: 'Vacant Land',
          id: 36,
          visible: false
        },
        {
          name: 'Parcels',
          id: 37,
          visible: true,
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/37/'
        },
        {
          name: 'Subdivision',
          id: 38,
          visible: false
        },
        {
          name: 'ROW',
          id: 39,
          visible: false
        },
        {
          name: 'Index',
          id: 40,
          visible: false
        },
        {
          name: 'Index400',
          id: 41,
          visible: false
        }
      ]
    },
    {
      heading: 'Environment',
      layers: [
        {
          name: 'Major Rivers',
          id: 51,
          visible: false
        },
        {
          name: 'Rivers',
          id: 52,
          visible: false
        },
        {
          name: 'Water Bodies',
          id: 53,
          visible: true
        },
        {
          name: 'River Mile Markers',
          id: 54,
          visible: false
        },
        {
          name: 'Forest',
          id: 55,
          visible: false
        },
        {
          name: 'Soils',
          id: 56,
          visible: false
        },
        {
          name: 'Wetlands',
          id: 57,
          visible: false
        },
        {
          name: 'FEMA Flood',
          id: 46,
          visible: false
        }
      ]
    },
    {
      heading: 'Transportation',
      layers: [
        {
          name: 'Sidewalks',
          id: 26,
          visible: false
        },
        {
          name: 'Railroad',
          id: 27,
          visible: true
        },
        {
          name: 'Major Roads',
          id: 28,
          visible: true
        },
        {
          name: 'Interstate Mile Markers',
          id: 29,
          visible: false
        },
        {
          name: 'Major Streets',
          id: 30,
          visible: true
        },
        {
          name: 'Streets',
          id: 31,
          visible: true
        },
        {
          name: 'Intersections',
          id: 31,
          visible: false
        }
      ]
    },
    {
      heading: 'Election',
      layers: [
        {
          name: 'Polling Places',
          id: 66,
          visible: false
        },
        {
          name: 'City Wards',
          id: 73,
          visible: false
        },
        {
          name: 'County Districts',
          id: 68,
          visible: false
        },
        {
          name: 'School District',
          id: 70,
          visible: false
        },
        {
          name: 'State House District',
          id: 71,
          visible: false
        },
        {
          name: 'State Senate District',
          id: 72,
          visible: false
        },
        {
          name: 'Congressional District',
          id: 67,
          visible: false
        }
      ]
    },
    {
      heading: 'Education',
      layers: [
        {
          name: 'Schools',
          id: 75,
          visible: true
        },
        {
          name: 'Colleges',
          id: 76,
          visible: true
        },
        {
          name: 'Elementary School Boundary',
          id: 77,
          visible: false
        },
        {
          name: 'Middle and High School Boundary',
          id: 78,
          visible: false
        }
      ]
    },
    {
      heading: 'Boundaries',
      layers: [
        {
          name: 'Zoning',
          id: 82,
          visible: false
        },
        {
          name: 'Two Rivers Districts',
          id: 95,
          visible: false
        },
        {
          name: 'Clarksville Boundary',
          id: 96,
          visible: false
        },
        {
          name: 'CDBG Neighborhood',
          id: 97,
          visible: false
        },
        {
          name: 'Ft Campbell Boundary',
          id: 98,
          visible: false
        },
        {
          name: 'Zip Codes',
          id: 99,
          visible: false
        },
        {
          name: 'County Boundary',
          id: 100,
          visible: true
        }
      ]
    },
    {
      heading: 'Base Maps',
      layers: [
        {
          id: '6269388be2b34e989282f09536a602ee',
          name: '2010 Imagery',
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/MCGTN/Mont6InAerial_2010/MapServer',
          visible: false
        },
        {
          id: 'b7f2dd3475f846598241f4376172e534',
          name: '2012 Imagery',
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/MCGTN/Mont6InAerial2012/MapServer',
          visible: false
        },
        {
          id: '57ce2ac183ac4ccba8282cd58adb409f',
          name: '2016 Imagery',
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/MCGTN/MontAerial2016/MapServer',
          visible: false
        },
        {
          id: '26cbc77458254c7fb10e05359e784584',
          name: '2018 Imagery',
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/MCGTN/Orthos_2018/MapServer',
          visible: false
        },
        {
          id: 'f883bd9713e44104ac750665fd9a5b34',
          name: 'Streets',
          url:
            'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Basemaps_2274/MapServer',
          visible: true
        },
        {
          id: 'f883bd9713e44104ac750665fd9a5b32',
          name: 'TN Imagery',
          url:
            'https://tnmap.tn.gov/arcgis/rest/services/BASEMAPS/IMAGERY/MapServer',
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
