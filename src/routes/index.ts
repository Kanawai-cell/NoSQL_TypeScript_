import { Router } from 'express'
import { createGame, deleteGame, getGame, updateGame, findGames, findLastGames, filtreGames, findListGamesNumPage, findListGamesUser, AddCaracGames } from '../controllers/game'
import { createUser, deleteUser, getUser, updateUser, findUser, listUserNbGames } from '../controllers/user'

export const router = Router()
// Pour les Jeux

router.get('/games', findGames)
router.post('/games', createGame)
router.get('/games/last', findLastGames)
router.get('/games/games/by-title', filtreGames)
router.get('/games/paginated', findListGamesNumPage)
router.get('/games/by-user/:userId', findListGamesUser)
router.post('/games/:id', AddCaracGames)
router.delete('/games/:id', deleteGame)
router.get('/games/:id', getGame)
router.patch('/games/:id', updateGame)

//Pour les Users
router.get('/users/stats', listUserNbGames)
router.get('/games', findUser)
router.post('/users', createUser)
router.delete('/users/:id', deleteUser)
router.get('/users/:id', getUser)
router.patch('/users/:id', updateUser)
