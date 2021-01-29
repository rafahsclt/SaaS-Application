import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import User from '../models/User'

interface IRequest {
    email: string
    password: string
}

interface IResponse {
    user: User
    token: string
}

class AuthenticateUserService {
    public async execute({ email, password }: IRequest): Promise<IResponse> {
        const usersRepository = getRepository(User)

        const user = await usersRepository.findOne({
            where: { email }
        })

        if(!user) throw new Error("Incorrect email/password combination")

        const passwordMatched = compare(password, user.password)

        const token = sign({}, 'saas', {
            subject: user.id,
            expiresIn: '1d'
        })

        if(!passwordMatched) throw new Error("Incorrect email/password combination")

        return { user, token }
    }
}

export default AuthenticateUserService