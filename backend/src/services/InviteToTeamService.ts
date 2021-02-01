import { getRepository } from 'typeorm'

import Invite from '../models/Invite'

interface IRequest {
    user_id: string
    team_id: string
    emailArray: string[]
}

interface IResponse {
    user_id: string
    team_id: string
    email: string
}

class InviteToTeamService {
    public async execute({ user_id, team_id, emailArray }: IRequest): Promise<IResponse[]> {
        const invitesRepository = getRepository(Invite)
        
        const data = emailArray.map(email => ({
            email,
            user_id,
            team_id
        }))

        data.forEach(async (invite) => {
            const inv = invitesRepository.create(invite)

            // await invitesRepository.save(inv)
            console.log(inv)
        })

        return data
    }
}

export default InviteToTeamService