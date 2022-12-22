import { red } from "@material-ui/core/colors";
import { createTheme } from "@mui/material";

const theme = createTheme({
    palette : {
        primary : {
            main: "#0000ff4d",
            light : "#0000ff4d"
        },
        secondary :{
            main: "#0000ff4d",
            light : "#0000ff4d"
        },
        other: 
        {
            main: red,
            light : "#0000ff4d"
        }
    }
})

export default theme;