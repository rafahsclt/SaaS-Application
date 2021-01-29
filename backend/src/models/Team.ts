import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm'

import Invite from './Invite'
import Project from './Project'
import User from './User'
import UserTeam from './UserTeam'

@Entity('teams')
class Team {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string
    
    @Column()
    slug: string

    @Column()
    user_id: string

    @ManyToOne(() => User, user => user.teams)
    @JoinColumn({ name: 'user_id' })
    user: User

    @OneToMany(() => Invite, invite => invite.team)
    invites: Invite[]

    @OneToMany(() => Project, project => project.team)
    projects: Project[]

    @OneToMany(() => UserTeam, userTeam => userTeam.team)
    public user_teams!: UserTeam[]
}

export default Team