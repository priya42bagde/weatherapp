import axios from "axios"

const URL ='https://api.openweathermap.org/data/2.5/weather'
const API_KEY ='e96caa4cc66d36ef7a741bcf2b26b416'

export const getData = async (city, country) =>{
    return await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)

}

