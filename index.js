// index.js

import usaAndCanada from './usa-and-canada'
import world from './world'

var hcMaps = {
  'custom/usa-and-canada': usaAndCanada,
  'custom/world': world
}

export default function (Highcharts, maps) {
  maps.forEach(function (map) {
    console.log(map)

    // Highcharts.maps[map] = hcMaps[map] || world
  })
}