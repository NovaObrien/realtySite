import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  // NOTE basic outline for houses, you will be able to seach and sort these if all the requirments are filled out
  listings: [{
    id: 0,
    price: 'FREE',
    title: 'Test Home',
    beds: 4,
    bath: 3,
    description: 'Test description will go here on how greate the test home is',
    location: ' 1090 W Ave, Cascade Id 83611',
    tags: ['Cascade', 'HorseTheif']
  },
  {
    id: 1,
    price: '$195,000.00',
    title: 'Little Red Cabin',
    beds: 'NA',
    bath: 'NA',
    description: 'Zoned Commercial with a CUP for a commercial business with residential use. Recently remodeled, nice kitchen with granite counter tops, utility room, washer & dryer, tiled shower, showroom and Main Street frontage. Located on the corner of Main Street & Payette Street gives you good visibility with side street parking. The opportunities abound. ',
    tags: ['Cascade', '']
  }]
})
