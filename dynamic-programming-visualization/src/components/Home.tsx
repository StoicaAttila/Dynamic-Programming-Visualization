import React from "react"
// @ts-ignore
import Header from "./shared/Header.tsx"
// @ts-ignore
import Options from "./shared/Options.tsx"

function Home() {
    return (
        <div className="home">
            <Header />
            <Options />
        </div>
    )
}

export default Home