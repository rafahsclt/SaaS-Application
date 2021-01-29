import { Request, Response } from 'express'

import CreateTeamService from '../services/CreateTeamService'

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
}

export default TeamsController