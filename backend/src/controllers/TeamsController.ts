import { Request, Response } from 'express'

import CreateTeamService from '../services/CreateTeamService'
import ShowTeamService from '../services/ShowTeamService'
import UpdateTeamService from '../services/UpdateTeamService'
import DeleteTeamService from '../services/DeleteTeamService'

class TeamsController {
    public async create(request: Request, response: Response) {
        try {
            const user_id = request.user.id
            const { name, slug } = request.body
    
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

    public async update(request: Request, response: Response) {
        try {
            const { team_id } = request.params
            const { name, slug } = request.body

            const updateTeam = new UpdateTeamService()

            const { team } = await updateTeam.execute({ team_id, name, slug })

            return response.status(200).json(team)
        } catch(err) {
            return response.status(400).json({ error: err.message })
        }
    }

    public async destroy(request: Request, response: Response) {
        try {
            const { team_id } = request.params

            const deleteTeam = new DeleteTeamService()

            const { team } = await deleteTeam.execute({ team_id })

            return response.status(200).json(team)
        } catch(err) {
            return response.status(400).json({ error: err.message })
        }
    }
}

export default TeamsController