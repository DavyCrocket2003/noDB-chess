



function SavedGamesTable({allGamesData, deleteFunc, loadFunc, newFunc}) {

  // Check if allGamesData is null or undefined
  if (allGamesData === null || allGamesData === undefined) {
    return <div>Loading...</div>
  }

  // Check for unique IDs
  const uniqueIds = new Set(allGamesData.map((gameObj) => gameObj.id));
  if (uniqueIds.size !== allGamesData.length) {
    console.error('Duplicate or missing IDs found:', allGamesData);
  }

    let allRows = []
    for (let gameObj of allGamesData) {
        allRows.push(<tr key={gameObj.id}>
            <td>
                <button id={gameObj.id} onClick={() => deleteFunc(gameObj)}>Delete</button>
                <button onClick={() => loadFunc(gameObj)}>Load</button>
            </td>
            <td>{gameObj.id}</td>
            <td>{gameObj.name}</td>
        </tr>)
    }
    // console.log(JSON.stringify(allRows, null, 2))






    return (

        <table>
            <thead>
                <tr>
                    <td></td>
                    <td>Game ID</td>
                    <td>Name</td>
                </tr>
            </thead>
            <tbody>
                {allRows}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={3} onClick={newFunc}><button>New Game</button></td>
                </tr>
            </tfoot>
        </table>

    )




}
















export default SavedGamesTable