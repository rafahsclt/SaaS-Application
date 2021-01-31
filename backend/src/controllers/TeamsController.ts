import { Request, Response } from 'express'

import CreateTeamService from 'services/CreateTeamService'
import ShowTeamService from 'services/ShowTeamService'

class TeamsController {
    public async create(request: Request, response: Response) {
        try {
            const { user_id, name, slug } = request.body
    
            const createTeam = new CreateTeamService()
    
            const { team } = await createTeam.execute({ user_id, name, slug })
    
            return response.status(200).json(team)
        } catch(err) {
            return response.status(400).json({ error: err.message })
        }
    }

    public async show(request: Request, response: Response) {
        try {
            const { team_id } = request.params

            const showTeam = new ShowTeamService()

            const { team } = await showTeam.execute({ team_id })

            return response.status(200).json(team)
        } catch(err) {
            return response.status(400).json({ error: err.message })
        }
    }
}

export default TeamsController