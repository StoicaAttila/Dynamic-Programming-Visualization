import { AppBar } from "@mui/material"
import React from "react"
import { Image } from "mui-image"
import { Typography } from '@mui/material';

function Header() {
    return (
        <header>
            <AppBar
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "1em",
                    backgroundColor: "#80806b",
                    height: "6em",
                    ".logo": {
                        marginTop: "4.5em"
                    }
                }}
            >
                <Image
                    className="logo"
                    src={require("../../images/logo192.png")}
                    width="11em"
                    height="11em"
                    bgColor="transparent"
                />
                <Typography
                    variant="h4"
                    color="#fbfaf9"
                    sx={{
                        pointerEvents: "none",
                        alignSelf: "flex-end",
                        marginBottom: "0.3em"
                    }}
                >
                    Dynamic Programming Visualization
                </Typography>
            </AppBar>
        </header >

    )
}

export default Header