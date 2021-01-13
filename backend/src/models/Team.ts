import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm'

import Invite from './Invite'
import Project from './Project'
import UserTeam from './UserTeam'

@Entity('teams')
class Team {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string
    
    @Column()
    slug: string

    @ManyToOne(() => Invite, invite => invite.team)
    invites: Invite[]

    @OneToMany(() => Project, project => project.team)
    projects: Project[]

    @OneToMany(() => UserTeam, userTeam => userTeam.team)
    public user_teams!: UserTeam[]
}

export default Team