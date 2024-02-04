import express from 'express';
import morgan from 'morgan';
import ViteExpress from 'vite-express';
import handlerFunctions from './controller.js';

const app = express();
const port = '8888';

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

ViteExpress.config({ printViteDevServerHost: true });



// Routes go here
// Route 1 get all saved chess games
app.get("/games", handlerFunctions.getGames)

// Route 2 post a saved game
app.post("/games", handlerFunctions.saveGame)

// Route 3 delete a saved game
app.delete("/games/:id", handlerFunctions.deleteGame)

// Route 4 overwrite an existing saved game
app.put("/games", handlerFunctions.overwriteGame)



ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));