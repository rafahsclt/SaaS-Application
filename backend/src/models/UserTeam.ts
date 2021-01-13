import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm"

import User from './User'
import Team from './Team'

@Entity('user_teams')
class UserTeam {
    @PrimaryGeneratedColumn('uuid')
    public user_team_id!: string

    @Column()
    public user_id!: string

    @Column()
    public team_id!: string

    @ManyToOne(() => User, user => user.user_teams)
    @JoinColumn({ name: 'user_id' })
    public user!: User

    @ManyToOne(() => Team, team => team.user_teams)
    @JoinColumn({ name: 'team_id' })
    public team!: Team
}

export default UserTeam