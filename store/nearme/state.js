export default () => ({
  nearmePoint: [],
  // TODO: add more layers
  nearmeLayers: [
    {
      searchName: 'school',
      layerName: 'Elementary School Boundary',
      label: 'Elementary School Zone',
      url:
        'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/77/',
      displayFields: ['school', 'address', 'phone', 'web'],
      outFields: ['*'],
      orderByFields: ['school'],
      distance: false
    },
    {
      searchName: 'layer',
      layerName: 'Middle and High School Boundary',
      label: 'Middle and High School Zone',
      url:
        'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/78/',
      displayFields: ['school', 'address', 'phone', 'web'],
      outFields: ['*'],
      orderByFields: ['layer'],
      distance: false
    },
    {
      searchName: 'zoning',
      layerName: 'Zoning',
      label: 'Zoning',
      url:
        'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/82/',
      displayFields: ['zoning', 'id', 'acres', 'perimeter'],
      outFields: ['*'],
      orderByFields: ['zoning'],
      distance: false
    },
    {
      searchName: 'fld_zone',
      layerName: 'FEMA Flood',
      label: 'FEMA Flood Zones',
      url:
        'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/46/',
      displayFields: ['fld_zone', 'floodway', 'source_cit', 'fld_ar_id'],
      outFields: ['*'],
      orderByFields: ['fld_zone'],
      distance: false
    },
    {
      searchName: 'district',
      layerName: 'City Wards',
      label: 'City Wards',
      url:
        'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/73/',
      displayFields: ['district', 'totalpop', 'council', 'pic_links'],
      outFields: ['*'],
      orderByFields: ['district'],
      distance: false
    },
    {
      searchName: 'district',
      layerName: 'County District',
      label: 'County District',
      url:
        'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/68/',
      displayFields: ['district', 'totalpop', 'commission', 'pic_links'],
      outFields: ['*'],
      orderByFields: ['district'],
      distance: false
    }
  ]
})
