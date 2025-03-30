import App from "./App"
import "./App.css"
import { useState } from "react"
import Dice1 from "./Dices/Dice1"
import Dice2 from "./Dices/Dice2"
import Dice3 from "./Dices/Dice3"
import Dice4 from "./Dices/Dice4"
import Dice5 from "./Dices/Dice5"
import Dice6 from "./Dices/Dice6"


function Dice({setStatus}) {
    const placeHolder = 0;
    const [diceList, setDiceList] = useState([])
    const [numberOfDices, setNumberOfDices] = useState(0)

    const randomize = () => {
        const newDices = []
        for (let i = 0; i < numberOfDices; i++) {
            newDices.push(Math.floor(Math.random() * 6) + 1)
        }


        const newSetDiceList = newDices.map((dice, index) => {
            if (dice === 1) return <Dice1 key={index} />
            if (dice === 2) return <Dice2 key={index} />
            if (dice === 3) return <Dice3 key={index} />
            if (dice === 4) return <Dice4 key={index} />
            if (dice === 5) return <Dice5 key={index} />
            if (dice === 6) return <Dice6 key={index} />
        })
        setDiceList(newSetDiceList)
    }

    const goBack = () => {
        setStatus(false)
    }

    return (
        <>
            <div className="w-full h-full flex flex-col items-center font-mono">
                <div className="border-black border-2 mt-30 rounded-2xl p-3 flex flex-col items-center bg-gray-400 shadow-lg shadow-black mb-10">
                    <h1 className="text-4xl font-bold mt-6 mb-3">Roll a dice</h1>
                    <p className="text-4xl">How many dices do you want to roll?</p>
                    <input type="number" className="border-black border-b-1 w-[80px] text-center text-2xl mt-3 mb-3" name="guessedNumber" onChange={(e) => setNumberOfDices(parseInt(e.target.value, 10))} placeholder={placeHolder}/>
                    <button onClick={randomize} className="bg-amber-500 text-white border-black border-1 w-[140px] p-0.5 font-bold text-xl mt-2">Roll</button>
                    <button onClick={goBack} className="bg-red-500 text-white border-black border-1 w-[140px] p-0.5 font-bold text-xl mt-2">Go back</button>
                    <div className="flex flex-wrap justify-center  w-[1000px]">
                        {diceList}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dice