import { Request, Response, NextFunction} from 'express'
import { verify } from 'jsonwebtoken'

import authConfig from '../config/auth'

interface TokenPayload {
    sub: string
    exp: string
    iat: string
}

export default function ensureAuthenticated(request: Request, response: Response, next: NextFunction)  {
    const authHeader = request.headers.authorization

    if(!authHeader) throw new Error("JWT Token is missing")

    const [type, token] = authHeader.split(' ')

    try {
        const { secret } = authConfig.jwt
        const decoded = verify(token, secret)

        const { sub } = decoded as TokenPayload

        request.user = {
            id: sub
        }

        next()
    }
    catch {
        throw new Error("Invalid JWT Token")
    }
}