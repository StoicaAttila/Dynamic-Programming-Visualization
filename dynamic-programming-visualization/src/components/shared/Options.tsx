import { Button, Divider, Drawer, lighten, Toolbar, Typography } from "@mui/material"
import React from "react"
// @ts-ignore
import visualizeMinCostPath from "../solutions/MinCostPath.tsx";
// @ts-ignore
import visualizeMaxCostPath from "../solutions/MaxCostPath.tsx";

function Options() {

    // const matrix: number[][] = [
    //     [1, 2, 3],
    //     [4, 8, 2],
    //     [1, 5, 3]
    // ];

    function handleMinCostPath() {
        return visualizeMinCostPath()
    }

    function handleMaxCostPath() {
        return visualizeMaxCostPath()
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
                    Select problem:
                    <Button
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
                </Typography>
            </Drawer>
        </>
    )
}

export default Options