import { Router } from 'express'
import { createGame, deleteGame, getGame, updateGame } from '../controllers/game'
import { createUser, deleteUser, getUser, updateUser } from '../controllers/user'

export const router = Router()
// Pour les Jeux 
router.post('/games', createGame)
router.delete('/games/:id', deleteGame)
router.get('/games/:id', getGame)
router.patch('/games/:id', updateGame)

//Pour les Users
router.post('/users', createUser)
router.delete('/users/:id', deleteUser)
router.get('/users/:id', getUser)
router.patch('/users/:id', updateUser)
