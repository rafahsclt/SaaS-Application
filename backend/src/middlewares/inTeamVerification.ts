import { Request, Response, NextFunction} from 'express'
import { getRepository } from 'typeorm'

import Team from '../models/Team'

export default async function inTeamVerification(request: Request, response: Response, next: NextFunction)  {
    const slug = request.headers.team
    const user_id = request.user.id

    const teamsRepository = getRepository(Team)

    if(slug) {
        const team = await teamsRepository.findOne({ where: { slug } })

        console.log(team.user)
    } 
        
    next()
}