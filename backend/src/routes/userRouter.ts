import { Router } from 'express'

const userRouter = Router()

userRouter.post('/', (request, response) => {
    const { name, email, password } = request.body

    return response.json({ name, email, password })
})

export default userRouter