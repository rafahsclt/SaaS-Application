import { getRepository } from 'typeorm'
import slug from 'slug'

import User from 'models/User'
import Team from 'models/Team'

const DatabaseSeed = async () => {
    const userRepository = getRepository(User)
    const teamRepository = getRepository(Team)

    const data = await userRepository.find()

    if(data.length === 0) {
        await userRepository.insert([
            { name: 'Rafael Leonen', password: '121212', email: 'rafah.sclt@gmail.com' }
        ])

        await teamRepository.insert([
            { name: 'Round Dev', slug: slug('Round Dev') }
        ])
    }
}

export default DatabaseSeed