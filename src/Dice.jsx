import App from "./App"
import "./App.css"
import { useState } from "react"


function Dice({setStatus}) {
    return (
        <>
            <div className="w-18 h-18 bg-amber-300 flex justify-center items-center">
                <div className="rounded-[50%] bg-black size-6"></div>
            </div>
        </>
    )
}

export default Dice