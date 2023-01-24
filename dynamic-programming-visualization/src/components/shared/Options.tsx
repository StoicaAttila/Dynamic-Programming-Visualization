import { Divider, Drawer, lighten, TextField, Toolbar, Typography } from "@mui/material"
import React from "react"

function Options() {

    const [width, setWidth] = React.useState(0)
    const [height, setHeight] = React.useState(0)

    console.log(width + "and" + height)

    return (
        <Drawer
            variant="permanent"
            anchor="right"
            sx={{
                width: "14em",
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: "14em",
                    boxSizing: 'border-box',
                    boxShadow: "2em 2em 2em 2em",
                    backgroundColor: lighten("#80806b", 0.4),
                    zIndex: -1
                }
            }}
        >
            <Toolbar
                sx={{
                    height: "6em"
                }}
            />
            <Divider />
            <Typography
                variant="subtitle1"
                display="flex"
                flexDirection="column"
                sx={{
                    margin: "1em",
                    pointerEvents: "none",
                    '& .MuiTextField-root': {
                        margin: "0.5em",
                        pointerEvents: "auto",
                    }
                }}
            >
                Select grid size:
                <TextField
                    required
                    label="Width"
                    variant="outlined"
                    type="number"
                    InputProps={{
                        inputProps: {
                            min: 0,
                            max: 16
                        }
                    }}
                    onChange={(e) => { setWidth(+e?.target.value) }}
                />
                <TextField
                    required
                    label="Height"
                    variant="outlined"
                    type="number"
                    InputProps={{
                        inputProps: {
                            min: 0,
                            max: 16
                        }
                    }}
                    onChange={(e) => { setHeight(+e?.target.value) }}
                />
            </Typography>
        </Drawer>
    )
}

export default Options