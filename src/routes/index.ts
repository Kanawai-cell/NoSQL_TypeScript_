import { Router } from 'express'
import { createGame, deleteGame } from '../controllers/game'
import { createUser, deleteUser } from '../controllers/user'

export const router = Router()
// Pour les Jeux 
router.post('/games', createGame)
router.delete('/games/:id', deleteGame)
//Pour les Users
router.post('/users', createUser)
router.delete('/users/:id', deleteUser)