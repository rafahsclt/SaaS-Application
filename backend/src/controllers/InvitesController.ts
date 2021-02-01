import { Request, Response } from 'express'

import InviteToTeamService from '../services/InviteToTeamService'


class InvitesController {
    public async create(request: Request, response: Response) {
        try {
            const { invites } = request.body
            const user_id = request.user.id 
            const team_id = request.team.id
    
            const inviteToTeam = new InviteToTeamService()
    
            const data = await inviteToTeam.execute({ user_id, team_id, emailArray: invites })
    
            return response.status(204).send()
        } catch(err) {
            return response.status(401).json({ error: err.message })
        }
    }
}

export default InvitesController