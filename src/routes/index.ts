import { Router } from 'express'
import { createGame, deleteGame, getGame, updateGame, findGames, findLastGames, filtreGames, findListGamesNumPage, findListGamesUser, AddCaracGames } from '../controllers/game'
import { createUser, deleteUser, getUser, updateUser, findUser, listUserNbGames } from '../controllers/user'

export const router = Router()
// Pour les Jeux 
router.get('/games', findGames)
router.post('/games', createGame)
router.delete('/games/:id', deleteGame)
router.get('/games/:id', getGame)
router.patch('/games/:id', updateGame)
router.get('/games/:id', findLastGames)
router.get('/games/:id', filtreGames)
router.get('/games/:id', findListGamesNumPage)
router.get('/games/:id', findListGamesUser)
router.post('/games/:id', AddCaracGames)

//Pour les Users
router.get('/games', findUser)
router.post('/users', createUser)
router.delete('/users/:id', deleteUser)
router.get('/users/:id', getUser)
router.patch('/users/:id', updateUser)
router.patch('/users/:id', listUserNbGames)