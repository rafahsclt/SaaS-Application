import { getRepository } from 'typeorm'
import slug from 'slug'

import User from '../../models/User'
import Team from '../../models/Team'

const DatabaseSeed = async () => {
    const usersRepository = getRepository(User)
    const teamsRepository = getRepository(Team)

    const data = await usersRepository.find()

    if (data.length === 0) {
        const userData = usersRepository.create(
            { name: 'Rafael Leonen', password: '121212', email: 'rafah.sclt@gmail.com' }
        )

        await usersRepository.save(userData)

        const user = await usersRepository.findOne({ where: { name: 'Rafael Leonen' } })

        const user_teams = [{
            user_id: user.id
        }]

        const teamData = teamsRepository.create(
            {
                name: 'Round Dev',
                slug: slug('Round Dev'),
                user: user,
                user_teams: user_teams
            }
        )

        await teamsRepository.save(teamData)
    }
}

export default DatabaseSeed