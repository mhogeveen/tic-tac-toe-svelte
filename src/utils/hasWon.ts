import type { TileDataInterface } from "../stores/grid"

const winStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const hasWon = (board: TileDataInterface[]) => {
  const crossTiles = board.filter(tile => tile.player !== null && tile.player === 'x').map(tile => tile.index)
  const noughtTiles = board.filter(tile => tile.player !== null && tile.player === 'o').map(tile => tile.index)

  let winningIndices: number[] = []

  winStates.forEach(winState => {
    const crossChecker = winState.every(index => crossTiles.includes(index))
    const noughtChecker = winState.every(index => noughtTiles.includes(index))
    if ((crossChecker || noughtChecker) && !winningIndices.length) {
      winningIndices = winState
    }
  })

  return {
    gameOver: winningIndices.length > 0,
    winningTiles: winningIndices,
  }
}

export default hasWon