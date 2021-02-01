import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm"

import User from './User'
import Team from './Team'

@Entity('user_teams')
class UserTeam {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    user_id: string

    @Column()
    team_id: string

    @ManyToOne(() => User, user => user.user_teams)
    @JoinColumn({ name: 'user_id' })
    user: User

    @ManyToOne(() => Team, team => team.user_teams)
    @JoinColumn({ name: 'team_id' })
    team: Team
}

export default UserTeam