import { Router } from 'express'
import { createGame, deleteGame, getGame, updateGame, findGames } from '../controllers/game'
import { createUser, deleteUser, getUser, updateUser, findUser } from '../controllers/user'

export const router = Router()
// Pour les Jeux 
router.get('/games', findGames)
router.post('/games', createGame)
router.delete('/games/:id', deleteGame)
router.get('/games/:id', getGame)
router.patch('/games/:id', updateGame)

//Pour les Users
router.get('/games', findUser)
router.post('/users', createUser)
router.delete('/users/:id', deleteUser)
router.get('/users/:id', getUser)
router.patch('/users/:id', updateUser)
