import { Box, TextField, Button, makeStyles } from '@material-ui/core'
import React,{useEffect, useState} from 'react'
import { getData } from '../service/api'
import Information from './Information'

const useStyle = makeStyles({
    input :{
        color: "red",
        marginRight : 15,

    },
    component:{
        padding : 10,
        background : "lightgreen"
    },
    button :{
        width : 150,
        height : 40,
        background : "blue",
        color : "white",
        marginTop : 5
    }
})

function Form() {
    const classes = useStyle()
    const [data, getWeatherData] = useState()
    const [city, setCity] = useState("")
    const [country, setCountry]  = useState("")
    const [click, HandleClick] = useState(false)
    
    useEffect( ()=> {
        console.log(data)

        const getWeather = async ()=>{    
        city && await getData(city, country).then( response =>{
        getWeatherData(response.data)
          console.log(response.data)
        })
    }  
        getWeather()
        HandleClick(false)
    },[click])

    const handleCityChange = value =>{
        setCity(value)
    }

    const handleCountryChange =value =>{
        setCountry(value)
    }

    return (
        <div>
            <Box className={classes.component}>
            <TextField label="City" onChange={e=> handleCityChange(e.target.value)} className={classes.input} inputProps={{className: classes.input}}/>
            <TextField label="Country" onChange={e=> handleCountryChange(e.target.value)} className={classes.input} inputProps={{className: classes.input}}/>
            <Button className={classes.button} onClick={()=>HandleClick(true)} variant="contained"> Get</Button>
            </Box>
            <Information datal={data}/>
        </div>
    )
}

export default Form
