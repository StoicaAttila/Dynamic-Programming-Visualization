import { Button, Divider, Drawer, lighten, TextField, Toolbar, Typography } from "@mui/material"
import React from "react"
// @ts-ignore
import visualizeMinCostBottomUpPath from "../solutions/MinCostBottomUpPath.tsx";
// @ts-ignore
import visualizeMinCostUpBottomPath from "../solutions/MinCostUpBottomPath.tsx";
// @ts-ignore
import visualizeMaxCostBottomUpPath from "../solutions/MaxCostBottomUpPath.tsx";
// @ts-ignore
import visualizeMaxCostUpBottomPath from "../solutions/MaxCostUpBottomPath.tsx";

function Options() {

    // const matrix: number[][] = [
    //     [1, 2, 3],
    //     [4, 8, 2],
    //     [1, 5, 3]
    // ];

    const [speed, setSpeed] = React.useState(0)

    function handleMinCostBottomUpPath() {
        return visualizeMinCostBottomUpPath(speed * 1000)
    }

    function handleMinCostUpBottomPath() {
        return visualizeMinCostUpBottomPath(speed * 1000)
    }

    function handleMaxCostBottomUpPath() {
        return visualizeMaxCostBottomUpPath(speed * 1000)
    }

    function handleMaxCostUpBottomPath() {
        return visualizeMaxCostUpBottomPath(speed * 1000)
    }

    return (
        <>
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
                        '& .MuiTextField-root': {
                            margin: "0.5em",
                            pointerEvents: "auto",
                        }
                    }}
                >
                    Select speed:
                    <TextField
                        required
                        label="Speed (sec)"
                        variant="outlined"
                        type="number"
                        sx={{
                            "& .MuiInputLabel-root.Mui-focused": { color: 'black' },
                            "& .MuiOutlinedInput-root.Mui-focused": {
                                "& > fieldset": { borderColor: "black" }
                            },
                            marginBottom: '5px'
                        }}
                        onChange={(e) => { setSpeed(+e?.target.value) }}
                    />
                    Select problem:
                    <Button
                        disabled={speed > 0 ? false : true}
                        sx={{
                            bgcolor: 'transparent',
                            color: 'black',
                            border: '1px solid black',
                            marginBottom: '5px'
                        }}
                        onClick={handleMinCostBottomUpPath}
                    >
                        Minimum cost path bottom-up
                    </Button>
                    <Button
                        disabled={speed > 0 ? false : true}
                        sx={{
                            bgcolor: 'transparent',
                            color: 'black',
                            border: '1px solid black',
                            marginBottom: '5px'
                        }}
                        onClick={handleMinCostUpBottomPath}
                    >
                        Minimum cost path up-bottom
                    </Button>
                    <Button
                        disabled={speed > 0 ? false : true}
                        sx={{
                            bgcolor: 'transparent',
                            color: 'black',
                            border: '1px solid black',
                            marginBottom: '5px'
                        }}
                        onClick={handleMaxCostBottomUpPath}
                    >
                        Maximum cost path bottom-up
                    </Button>
                    <Button
                        disabled={speed > 0 ? false : true}
                        sx={{
                            bgcolor: 'transparent',
                            color: 'black',
                            border: '1px solid black',
                            marginBottom: '5px'
                        }}
                        onClick={handleMaxCostUpBottomPath}
                    >
                        Maximum cost path up-bottom
                    </Button>
                </Typography>
            </Drawer>
        </>
    )
}

export default Options