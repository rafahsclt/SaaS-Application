import { Request, Response } from 'express'

import InviteToTeamService from '../services/InviteToTeamService'


class InvitesController {
    public async create(request: Request, response: Response) {
        try {
            const { invites } = request.body
            const user_id = request.user.id 
            const team_id = '8a9d58bc-d6bf-4ab8-a456-c71ecf13b28d'
    
            const inviteToTeam = new InviteToTeamService()
    
            const data = await inviteToTeam.execute({ user_id, team_id, emailArray: invites })
    
            return response.status(204).send()
        } catch(err) {
            return response.status(401).json({ error: err.message })
        }
    }
}

export default InvitesController