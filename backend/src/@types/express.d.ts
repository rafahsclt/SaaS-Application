declare namespace Express {
    export interface Request {
        user: {
            id: string
        }
        team: {
            id: string
        }
    }
}