import { Request, Response } from 'express'


import AuthenticateUserService from '../services/AuthenticateUserService'

class SessionsController {
    public async create(request: Request, response: Response) {
        const { email, password } = request.body

        const authenticateUser = new AuthenticateUserService()

        const { user } = await authenticateUser.execute({ email, password })

        delete user.password

        return response.json({ email, password })
    }
}

export default SessionsController