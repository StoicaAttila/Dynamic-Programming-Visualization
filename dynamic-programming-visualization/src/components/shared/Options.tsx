import { Divider, Drawer, lighten, TextField, Toolbar, Typography } from "@mui/material"
import React from "react"
// @ts-ignore
import Grid from "../Grid.tsx"

function Options() {

    const [row, setRow] = React.useState(0)
    const [column, setColumn] = React.useState(0)

    React.useEffect(() => {

    }, [row, column])

    return (
        <>
            <Grid rows={row} columns={column} />
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
                        label="Row"
                        variant="outlined"
                        type="number"
                        InputProps={{
                            inputProps: {
                                min: 0,
                                max: 8
                            }
                        }}
                        sx={{
                            "& .MuiInputLabel-root.Mui-focused": { color: 'black' },
                            "& .MuiOutlinedInput-root.Mui-focused": {
                                "& > fieldset": { borderColor: "black" }
                            }
                        }}
                        onChange={(e) => { setRow(+e?.target.value < 9 && +e?.target.value > 0 ? +e?.target.value : 0) }}
                    />
                    <TextField
                        required
                        label="Column"
                        variant="outlined"
                        type="number"
                        InputProps={{
                            inputProps: {
                                min: 0,
                                max: 12
                            }
                        }}
                        sx={{
                            "& .MuiInputLabel-root.Mui-focused": { color: 'black' },
                            "& .MuiOutlinedInput-root.Mui-focused": {
                                "& > fieldset": { borderColor: "black" }
                            }
                        }}
                        onChange={(e) => { setColumn(+e?.target.value < 13 && +e?.target.value > 0 ? +e?.target.value : 0) }}
                    />
                </Typography>
            </Drawer>
        </>
    )
}

export default Options