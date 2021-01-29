import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'
import User from '../models/User'

interface IRequest {
    name: string
    email: string
    password: string
}

interface IResponse {
    user: User
}

class CreateUserService {
    public async execute({ name, email, password }: IRequest): Promise<IResponse> {
        const usersRepository = getRepository(User)

        const checkEmailExist = await usersRepository.findOne({
            where: { email }
        })

        if(checkEmailExist) throw new Error("Email already used!")

        const hashedPassword = await hash(password, 8)

        const user = usersRepository.create({
            name,
            email,
            password: hashedPassword
        })

        await usersRepository.save(user)

        return { user }
    }
}

export default CreateUserService