import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm'

import Invite from './Invite'
import UserTeam from './UserTeam'

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string
    
    @Column()
    password: string
    
    @Column()
    email: string

    @ManyToOne(() => Invite, invite => invite.user)
    invites: Invite[]

    @OneToMany(() => UserTeam, userTeam => userTeam.user)
    public user_teams!: UserTeam[]
}

export default User