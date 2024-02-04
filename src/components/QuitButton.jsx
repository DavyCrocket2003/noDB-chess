function QuitButton({gameState, saveFunc, setGameOn}) {





    return (
        <button onClick={() => {
            let response = prompt("Would you like to save the game? Y or N").toUpperCase()
            if (response === "Y") {
                saveFunc(gameState)
            } else {
                setGameOn(false)
            }

        }}>Quit</button>
    )
}




export default QuitButton