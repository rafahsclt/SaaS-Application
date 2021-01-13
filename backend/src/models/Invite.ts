import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm'

import User from './User'
import Team from './Team'

@Entity('invites')
class Invite {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    user_id: string

    @Column()
    team_id: string

    @Column()
    email: string

    @OneToMany(() => User, user => user.invites)
    @JoinColumn({ name: 'user_id' })
    user: User

    @OneToMany(() => Team, team => team.invites)
    @JoinColumn({ name: 'team_id' })
    team: Team
}

export default Invite