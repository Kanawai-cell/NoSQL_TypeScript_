import { Router } from 'express'
import { createGame, deleteGame, getGame, updateGame } from '../controllers/game'
import { createUser, deleteUser } from '../controllers/user'

export const router = Router()
// Pour les Jeux 
router.post('/games', createGame)
router.delete('/games/:id', deleteGame)
router.get('/games/:id', getGame)
router.put('/games/:id', updateGame)

//Pour les Users
router.post('/users', createUser)
router.delete('/users/:id', deleteUser)