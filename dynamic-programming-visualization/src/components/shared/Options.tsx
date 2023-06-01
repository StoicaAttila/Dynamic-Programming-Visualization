import { Button, Divider, Drawer, lighten, TextField, Toolbar, Typography } from "@mui/material"
import React from "react"
// @ts-ignore
import visualizeMinCostPath from "../solutions/MinCostPath.tsx";
// @ts-ignore
import visualizeMaxCostPath from "../solutions/MaxCostPath.tsx";
// @ts-ignore
import visualizeFibonacci from "../solutions/Fibonacci.tsx";
// @ts-ignore
import visualizeCatalan from "../solutions/Catalan.tsx";

function Options() {

    // const matrix: number[][] = [
    //     [1, 2, 3],
    //     [4, 8, 2],
    //     [1, 5, 3]
    // ];

    const [speed, setSpeed] = React.useState(0)

    function handleMinCostPath() {
        return visualizeMinCostPath(speed * 1000)
    }

    function handleMaxCostPath() {
        return visualizeMaxCostPath(speed * 1000)
    }

    function handleFibonacci() {
        visualizeFibonacci(speed * 1000)
    }

    function handleCatalan() {
        visualizeCatalan(speed * 1000)
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
                        onClick={handleMinCostPath}
                    >
                        Minimum cost path
                    </Button>
                    <Button
                        disabled={speed > 0 ? false : true}
                        sx={{
                            bgcolor: 'transparent',
                            color: 'black',
                            border: '1px solid black',
                            marginBottom: '5px'
                        }}
                        onClick={handleMaxCostPath}
                    >
                        Maximum cost path
                    </Button>
                    <Button
                        disabled={speed > 0 ? false : true}
                        sx={{
                            bgcolor: 'transparent',
                            color: 'black',
                            border: '1px solid black',
                            marginBottom: '5px'
                        }}
                        onClick={handleFibonacci}
                    >
                        Fibonacci
                    </Button>
                    <Button
                        disabled={speed > 0 ? false : true}
                        sx={{
                            bgcolor: 'transparent',
                            color: 'black',
                            border: '1px solid black',
                            marginBottom: '5px'
                        }}
                        onClick={handleCatalan}
                    >
                        Catalan
                    </Button>
                </Typography>
            </Drawer>
        </>
    )
}

export default Options