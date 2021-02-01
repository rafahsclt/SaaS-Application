import { getRepository } from 'typeorm'

import Team from '../models/Team'

interface IRequest {
    team_id: string
}

interface IResponse {
    team: Team
}

class DeleteTeamService {
    public async execute({ team_id }: IRequest): Promise<IResponse> {
        const teamsRepository = getRepository(Team)

        const team = await teamsRepository.findOne({
            where: { team_id }
        })

        if(!team) throw new Error('This team does not exist')

        await teamsRepository.delete(team)
        
        return { team }
    }
}

export default DeleteTeamService