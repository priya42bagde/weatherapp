import { Box, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import OpacityIcon from '@material-ui/icons/Opacity';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import DehazeIcon from '@material-ui/icons/Dehaze';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';

const useStyle = makeStyles({
    component: {
        margin: 50,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    },
    rows: {
        display: "flex",
        flexWrap : "wrap",
        padding: 10,
        fontSize: 20,
        letterSpacing: 2
    },
    value: {
        color: "blue",
        marginLeft : 5
    },
    icons: {
        marginRight: 15,
        color: "red"
    }
})

function Information({ datal }) {
    const classes = useStyle()
    return (
        datal ?
            <div>
                <Box className={classes.component}>
                    <Typography className={classes.rows} > <LocationOnIcon className={classes.icons} /> Location <Box className={classes.value} component="span">{datal.name}, {datal.sys.country}</Box> </Typography>
                    <Typography className={classes.rows}> <Brightness2Icon className={classes.icons} /> Temperature <Box className={classes.value} component="span">{datal.main.temp}°C</Box> </Typography>
                    <Typography className={classes.rows}> <OpacityIcon className={classes.icons} /> Humidity <Box className={classes.value} component="span">{datal.main.humidity}%</Box> </Typography>
                    <Typography className={classes.rows}> <Brightness5Icon className={classes.icons} /> Sun Rise <Box className={classes.value} component="span">{new Date(datal.sys.sunrise * 1000).toLocaleTimeString()}</Box> </Typography>
                    <Typography className={classes.rows}><Brightness4Icon className={classes.icons} /> Sun Set <Box className={classes.value} component="span">{new Date(datal.sys.sunset * 1000).toLocaleTimeString()}</Box> </Typography>
                    <Typography className={classes.rows}><DehazeIcon className={classes.icons} /> Condition<Box className={classes.value} component="span"> {datal.weather[0].main}</Box> </Typography>
                    <Typography className={classes.rows}><FilterDramaIcon className={classes.icons} /> Clouds <Box className={classes.value} component="span"> {datal.clouds.all}% </Box> </Typography>
                </Box>
            </div>
            : ''
    )
}

export default Information
