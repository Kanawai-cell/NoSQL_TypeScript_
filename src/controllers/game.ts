import { Request, Response } from 'express'
import { GameModel } from '../models/game'

export async function createGame(req: Request, res: Response) {
  console.log('Request to add game :', req.body)

  let gameToCreate = new GameModel(req.body)
  let createdGame = await gameToCreate.save()

  res.json(createdGame)
}
// [ . . . ]
export async function deleteGame(req: Request, res: Response) {
  console.log('Request to delete game by id', req.params.id)

	// Globalement let = var 
  let deletedGame = await GameModel.findByIdAndRemove(req.params.id)

  if (!deletedGame) {
    res.status(404).send()
  } else {
    res.json(deletedGame)
  }
}

export async function getGame(req: Request, res: Response) {
  console.log('Request to list game by id',  req.params.id)
  let gameToList = await GameModel.findOne({ _id: req.params.id })
  res.json(gameToList)
}

export async function updateGame(req: Request, res: Response) {
  console.log('Request to list game by id',  req.body)
  let gameToUpdate = await GameModel.findByIdAndUpdate(req.params.id, { _id: req.params.id }, {
    new: true,
    runValidators: true,
  })

  res.json(gameToUpdate)
}