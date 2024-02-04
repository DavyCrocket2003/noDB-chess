import './ChessSquare.css'
import { useState, useEffect, useRef } from "react"


function ChessSquare({id, images, gameState, setState, clickFunc}) {

    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = ((+id[0] + +id[1])%2===0) ? "#2B751E" : "#FFFFFF"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        if (gameState.state[id]) {
            ctx.drawImage(images[gameState.state[id]],0,0)
        }

    }, [gameState.state[id]])




    return (
        <canvas
            ref={canvasRef}
            id={id}
            width="50px"
            height="50px"
            style={{ border: '1px solid black'}}
            onClick={clickFunc}
        />
    )
}















export default ChessSquare