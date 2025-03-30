import App from "./App"
import "./App.css"
import { useState } from "react"


function Guess({setStatus}) {
    const [number, setNumber] = useState(0)
    const [guessedNumber, setGuessedNumber] = useState(0)
    const [isGuessedNumber, setIsGuessedNumber] = useState(false)
    const [message, setMessage] = useState("Game not started yet")
    const checkGuessedNumber = () => {
        if (guessedNumber === number) {
            setMessage("Congratulations!")
            setIsGuessedNumber(true)
        } else if(guessedNumber > number) {
            setMessage(`${guessedNumber} is too high!`)
        } else if(guessedNumber < number) {
            setMessage(`${guessedNumber} is too low!`)
        }
    }
    const randomize = () => {
        setNumber(Math.floor(Math.random() * 100) + 1)
        console.log(number)
        setMessage("What's your guess?")
        
    }
    const goBack = () => {
        setNumber(0)
        setGuessedNumber(0)
        setIsGuessedNumber(false)
        setMessage("Game not started yet")
        setStatus(false);
    }
    return (
        
        <div className="w-full h-full flex flex-col items-center font-mono">
           <div className="border-black border-2 mt-30 rounded-2xl p-3 flex flex-col items-center bg-gray-400 shadow-lg shadow-black">
            <h1 className="text-4xl font-bold mt-6 mb-3">Guess the number between 1 and 100</h1>
                <button onClick={randomize} className="bg-amber-500 text-white border-black border-1 w-[140px] p-0.5 font-bold text-xl mt-2">Randomize</button>
                <p className="text-4xl">{message}</p>
                {isGuessedNumber && (
                    <>
                    <p className="text-4xl">The number was: {number}</p>
                    </>
                    
                )}

                {number !== 0 && (
                    <>
                    <input type="number" className="border-black border-b-1 w-[80px] text-center text-2xl mt-3 mb-3" name="guessedNumber" onChange={(e) => setGuessedNumber(parseInt(e.target.value, 10))} placeholder="0"/>
                    <button onClick={checkGuessedNumber} className="bg-blue-400 text-white border-black border-1 w-[140px] p-0.5 font-bold text-xl mt-2">Check Guess</button>
                    </>
                )}

                <button onClick={goBack} className="bg-red-500 text-white border-black border-1 w-[140px] p-0.5 font-bold text-xl mt-2">Go back</button>
           </div>
        </div>
    )
}

export default Guess