import { getRepository } from 'typeorm'

import Team from 'models/Team'

interface IRequest {
    team_id: string
    name: string
    slug: string
}

interface IResponse {
    team: Team
}

class UpdateTeamService {
    public async execute({ team_id, name, slug }: IRequest): Promise<IResponse> {
        const teamsRepository = getRepository(Team)

        const team = await teamsRepository.findOne({
            where: { team_id }
        })

        if(!team) throw new Error('This team does not exist')
        
        return { team }
    }
}

export default UpdateTeamService