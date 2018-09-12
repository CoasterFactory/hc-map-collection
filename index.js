// index.js

import usaAndCanada from './usa-and-canada'

var hcMaps = {
  'custom/usa-and-canada': usaAndCanada
}

console.log('hcMaps', hcMaps)

export default function (Highcharts, maps) {
  console.log('hc-map-collection', Highcharts, maps)
}