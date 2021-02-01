import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'

import Invite from './Invite'
import Team from './Team'
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

    @OneToMany(() => Team, team => team.user)
    teams: Team[]

    @OneToMany(() => Invite, invite => invite.user)
    invites: Invite[]

    @OneToMany(() => UserTeam, userTeam => userTeam.user, { cascade: true })
    user_teams: UserTeam[]
}

export default User