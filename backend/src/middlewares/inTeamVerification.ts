import { Request, Response, NextFunction} from 'express'
import { getRepository } from 'typeorm'

import Team from '../models/Team'

export default async function inTeamVerification(request: Request, response: Response, next: NextFunction)  {
    const slug = request.headers.team
    const user_id = request.user.id

    const teamsRepository = getRepository(Team)

    let team = null
    let inTheTeam = false

    if(slug) {
        team = await teamsRepository.findOne({ where: { slug }, relations: ['user_teams'] })

        if(!team) return response.status(401).send()

        inTheTeam = team.user_teams.some(userTeam => userTeam.user_id === user_id)
    } 

    if(!inTheTeam) return response.status(401).send()

    request.team = {
        id: team.id
    }
        
    next()
}