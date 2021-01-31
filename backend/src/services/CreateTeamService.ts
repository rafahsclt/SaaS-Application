import { getRepository } from 'typeorm'

import Team from 'models/Team'

interface IRequest {
    user_id: string
    name: string
    slug: string
}

interface IResponse {
    team: Team
}

class CreateTeamService {
    public async execute({ user_id, name, slug }: IRequest): Promise<IResponse> {
        const teamsRepository = getRepository(Team)

        const checkSlugExist = await teamsRepository.findOne({
            where: { slug }
        })

        if(checkSlugExist) throw new Error("Slug already used")

        const team = teamsRepository.create({
            user_id,
            name,
            slug
        })

        await teamsRepository.save(team)

        return { team }
    }
}

export default CreateTeamService