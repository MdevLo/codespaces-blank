import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlacesData = async (sw, ne) => {
    try {
      const { data: { data } } = await axios.get(URL, {
  
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lat,
          tr_longitude: ne.lat,
         
        },
        headers: {
          'X-RapidAPI-Key': 'affcd4e7ddmshb4e19fac8e5f25cp1420eajsn4747384341c1',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      })
       return data
        
    } catch (error) {
        console.log('error')
    }
}