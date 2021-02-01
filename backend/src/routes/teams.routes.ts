import { Router } from 'express'

import TeamsController from '../controllers/TeamsController'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const teamsRouter = Router()
const teamsController = new TeamsController()

teamsRouter.use(ensureAuthenticated)

teamsRouter.post('/', teamsController.create)
teamsRouter.get('/:id', teamsController.show)
teamsRouter.patch('/:id', teamsController.update)
teamsRouter.delete('/:id', teamsController.destroy)

export default teamsRouter