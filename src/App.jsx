import axios from 'axios';
import './App.css';
import { useState } from 'react'
import ChessSquare from "/src/components/ChessSquare.jsx"
import QuitButton from "/src/components/QuitButton.jsx"



function App() {

  const [gameState, setGameState] = useState({
    "pieceInHand": false,
    "previousSquare": "25",
    "81": "R",
    "82": "N",
    "83": "B",
    "84": "Q",
    "85": "K",
    "86": "B",
    "87": "N",
    "88": "R",
    "71": "P",
    "72": "P",
    "73": "P",
    "74": "P",
    "75": "P",
    "76": "P",
    "77": "P",
    "78": "P",
    "61": "",
    "62": "",
    "63": "",
    "64": "",
    "65": "",
    "66": "",
    "67": "",
    "68": "",
    "51": "",
    "52": "",
    "53": "",
    "54": "",
    "55": "",
    "56": "",
    "57": "",
    "58": "",
    "41": "",
    "42": "",
    "43": "",
    "44": "",
    "45": "",
    "46": "",
    "47": "",
    "48": "",
    "31": "",
    "32": "",
    "33": "",
    "34": "",
    "35": "",
    "36": "",
    "37": "",
    "38": "",
    "21": "p",
    "22": "p",
    "23": "p",
    "24": "p",
    "25": "p",
    "26": "p",
    "27": "p",
    "28": "p",
    "11": "r",
    "12": "n",
    "13": "b",
    "14": "q",
    "15": "k",
    "16": "b",
    "17": "n",
    "18": "r",
  })

  const [gameOn, setGameOn] = useState(true)

  const images = {}
  {
    images.P = new Image()
    images.P.src = "/src/pieces/pawn.png"
    images.p = new Image()
    images.p.src = "/src/pieces/pawn1.png"
    images.N = new Image()
    images.N.src = "/src/pieces/knight.png"
    images.n = new Image()
    images.n.src = "/src/pieces/knight1.png"
    images.B = new Image()
    images.B.src = "/src/pieces/bishop.png"
    images.b = new Image()
    images.b.src = "/src/pieces/bishop1.png"
    images.R = new Image()
    images.R.src = "/src/pieces/rook.png"
    images.r = new Image()
    images.r.src = "/src/pieces/rook1.png"
    images.K = new Image()
    images.K.src = "/src/pieces/king.png"
    images.k = new Image()
    images.k.src = "/src/pieces/king1.png"
    images.Q = new Image()
    images.Q.src = "/src/pieces/queen.png"
    images.q = new Image()
    images.q.src = "/src/pieces/queen1.png"
  }

  const clickFunc = (e) => {
    console.log(e.target)
    console.log(gameState[e.target.id])
    console.log(images[gameState[e.target.id]])
    let piece = gameState.pieceInHand
    if (piece) {
      setGameState({ ...gameState,
        [e.target.id]: piece,
        pieceInHand: false,
        [gameState.previousSquare]: "",
        previousSquare: e.target.id,

        },)
    } else {
      setGameState({
        ...gameState,
        pieceInHand: gameState[e.target.id],
        previousSquare: e.target.id
      })
    }
  }
  



  if (gameOn) {
    return (
    <>
      <div className="board-container">
        <div className="row">
          <ChessSquare key="11" id="11" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="12" id="12" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="13" id="13" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="14" id="14" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="15" id="15" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="16" id="16" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="17" id="17" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="18" id="18" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
        </div>
        <div className="row">
          <ChessSquare key="21" id="21" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="22" id="22" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="23" id="23" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="24" id="24" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="25" id="25" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="26" id="26" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="27" id="27" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="28" id="28" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
        </div>
        <div className="row">
          <ChessSquare key="31" id="31" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="32" id="32" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="33" id="33" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="34" id="34" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="35" id="35" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="36" id="36" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="37" id="37" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="38" id="38" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
        </div>
        <div className="row">
          <ChessSquare key="41" id="41" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="42" id="42" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="43" id="43" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="44" id="44" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="45" id="45" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="46" id="46" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="47" id="47" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="48" id="48" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
        </div>
        <div className="row">
          <ChessSquare key="51" id="51" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="52" id="52" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="53" id="53" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="54" id="54" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="55" id="55" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="56" id="56" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="57" id="57" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="58" id="58" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
        </div>
        <div className="row">
          <ChessSquare key="61" id="61" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="62" id="62" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="63" id="63" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="64" id="64" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="65" id="65" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="66" id="66" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="67" id="67" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="68" id="68" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
        </div>
        <div className="row">
          <ChessSquare key="71" id="71" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="72" id="72" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="73" id="73" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="74" id="74" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="75" id="75" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="76" id="76" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="77" id="77" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="78" id="78" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
        </div>
        <div className="row">
          <ChessSquare key="81" id="81" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="82" id="82" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="83" id="83" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="84" id="84" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="85" id="85" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="86" id="86" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="87" id="87" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
          <ChessSquare key="88" id="88" gameState={gameState} images={images} clickFunc={clickFunc} setState={setGameState}/>
        </div>
      </div>
      <QuitButton />
    </>
    )
  } else {
    return (
      <SavedGamesTable />
    )
  }
}

export default App
