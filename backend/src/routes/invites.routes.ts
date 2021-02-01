import { Router } from 'express'
import InvitesController from '../controllers/InvitesController'

import ensureAuthenticated from '../middlewares/ensureAuthenticated'
import inTeamVerification from '../middlewares/inTeamVerification'

const invitesRouter = Router()

invitesRouter.use(ensureAuthenticated)
invitesRouter.use(inTeamVerification)

const invitesController = new InvitesController()

invitesRouter.post('/', invitesController.create)

export default invitesRouter