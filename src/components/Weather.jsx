import React from 'react'
import {Box, makeStyles} from "@material-ui/core"
import Front from "../images/front.JPG"
import Form from "./Form"
const useStyle = makeStyles({
    copmonent:{
     height : "100vh",
     width :"85%",
     margin: "0 auto",
     display: "flex",
     alignItems : "center"
    },
    leftContainer :{
        display: "flex",
        alignItems : "center",
        backgroundImage : `url(${Front})`,
        objectFit: "contain",
        height: "80%",
        width : "55%",
        backgroundSize : "cover",
        borderRadius: "20px 0px 0px 20px",
    }, 
    rightContainer :{
        height: "80%",
        width : "75%",
        background: "linear-gradient(to top, skyblue , yellow)"

    }
})


function Weather() {
    const classes = useStyle()
    return (
        <div>
        <Box className={classes.copmonent}>
            <Box className={classes.leftContainer}></Box>
            <Box className={classes.rightContainer}>
                <Form />
            </Box>
        </Box>
        </div>
    )
}

export default Weather
