// Each saved game has id, name, and state
let GAME_DATA = [
    {
        id: 1,
        name: "Scotch",
        state: {
            "pieceInHand": false,
            "previousSquare": "25",
            "81": "R",
            "82": "N",
            "83": "B",
            "84": "Q",
            "85": "K",
            "86": "B",
            "87": "",
            "88": "R",
            "71": "P",
            "72": "P",
            "73": "P",
            "74": "",
            "75": "",
            "76": "P",
            "77": "P",
            "78": "P",
            "61": "",
            "62": "",
            "63": "",
            "64": "",
            "65": "",
            "66": "N",
            "67": "",
            "68": "",
            "51": "",
            "52": "n",
            "53": "",
            "54": "P",
            "55": "P",
            "56": "",
            "57": "",
            "58": "",
            "41": "",
            "42": "",
            "43": "",
            "44": "",
            "45": "p",
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
            "25": "",
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
          }
    },
    {
        id: 2,
        name: "Open Sicilian",
        state: {
            "pieceInHand": false,
            "previousSquare": "25",
            "81": "R",
            "82": "",
            "83": "B",
            "84": "Q",
            "85": "K",
            "86": "B",
            "87": "",
            "88": "R",
            "71": "P",
            "72": "P",
            "73": "P",
            "74": "",
            "75": "",
            "76": "P",
            "77": "P",
            "78": "P",
            "61": "",
            "62": "",
            "63": "N",
            "64": "",
            "65": "",
            "66": "N",
            "67": "",
            "68": "",
            "51": "",
            "52": "",
            "53": "",
            "54": "N",
            "55": "P",
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
            "31": "p",
            "32": "",
            "33": "",
            "34": "p",
            "35": "",
            "36": "n",
            "37": "",
            "38": "",
            "21": "",
            "22": "p",
            "23": "",
            "24": "",
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
            "17": "",
            "18": "r",
          }
    },
    {
        id: 3,
        name: "Caro-Kann Defense",
        state: {
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
            "74": "",
            "75": "",
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
            "54": "P",
            "55": "P",
            "56": "",
            "57": "",
            "58": "",
            "41": "",
            "42": "",
            "43": "p",
            "44": "p",
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
            "23": "",
            "24": "",
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
          }
    }
]
let globalId = GAME_DATA.length + 1





const handlerFunctions = {
    getGames: (req, res) => {
        res.send({
            message: "Here are all the games",
            allGames: GAME_DATA
        })
        console.log("getGames called")
    },
    saveGame: (req, res) => {
        const gameId = globalId++
        console.log(req.body)
        GAME_DATA.push({
            id: gameId,
            name: req.body.name,
            state: req.body.state
        })
        console.log(GAME_DATA)
        res.send(`Game ${req.body.name} saved successfully!`)
    },
    deleteGame: (req, res) => {
        GAME_DATA = GAME_DATA.filter((gameObj) => gameObj.id !== +req.params.id)
        res.send(`Game ${req.params.id} deleted!`)
        console.log(GAME_DATA)
        
    },
    overwriteGame: (req, res) => {
        const gameId = +req.body.id
        const idx = GAME_DATA.findIndex((gameObj) => gameObj.id === gameId)
        GAME_DATA[idx] = req.body
        console.log(req.body)
        res.send(`${req.body.name} has been overwritten.`)
    }

}
















export default handlerFunctions