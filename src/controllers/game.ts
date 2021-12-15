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

export async function findGames(req: Request, res: Response) {
  console.log('Request to list game by id',  req.body)
  let gameToUpdate = await GameModel.find()
  res.json(gameToUpdate)
}
// New
export async function findLastGames(req: Request, res: Response) {
  console.log('Request the latest list game by id',  req.body)
  let gameToUpdate = await GameModel.find().sort({_id:-1}).limit(1)
  res.json(gameToUpdate)
}

export async function filtreGames(req: Request, res: Response) {
  console.log('Request the latest list game by id',  req.body)
  var title = String(req.query.title)
  var sort = Number(req.query.sort)
  if (sort == null) {
    sort = 10;  
  }
  let gameToUpdate = await GameModel.find( { title : title } ).sort({_id:-1}).limit(sort)
  res.json(gameToUpdate)
}

export async function findListGamesNumPage(req: Request, res: Response) {
  console.log('Request the latest list game by id',  req.body)
  var title = String(req.query.title)
  var sort = Number(req.query.sort)
  if (sort == null) {
    sort = 10;  
  }
  let gameToUpdate = await GameModel.find( { title : title } ).sort({_id:-1}).limit(sort)
  res.json(gameToUpdate)
}

export async function findListGamesUser(req: Request, res: Response) {
  console.log('Request to list game by id user')
  var id = String(req.query.id)
  let page = Number(req.query.p)
  let gameToUpdate = await GameModel.find( { _addedBy: id } ).skip(page)
  res.json(gameToUpdate)
}

export async function AddCaracGames(req: Request, res: Response) {
  console.log('Request to list game by id user',  req.body)
  let info = req.body.info
  var gameUpdate = { 
    info: info
  };

  let gameToUpdate = await GameModel.findOneAndUpdate(
      { _id: req.query.id }, 
      { $push: { infos: gameUpdate  } }
    )

  res.json(gameToUpdate)
}

export async function UpdateCaracGames(req: Request, res: Response) {
  console.log('Request to list game by id user',  req.body)

  let release = req.body.release
  let pegi = req.body.pegi
  let metacritic = req.body.metacritic
  let genres = req.body.genres

  var gameUpdate = { 
    release: release,
    pegi:pegi,
    metacritic : metacritic,
    genres: [ genres ]
  };

  let gameToUpdate = await GameModel.findOneAndUpdate(
      { _id: req.body.id }, 
      { $push: { infos: gameUpdate } }
    )

  res.json(gameToUpdate)
}