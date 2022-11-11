import express from 'express'
import routeSwapi from '../api/swapi/routeSwapi'
import routeStarShips from '../api/starships/routeStarShips'
const router = express.Router()

router.use(routeSwapi)
router.use(routeStarShips)

export default router
