import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'

import Team from './Team'

@Entity('projects')
class Project {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @Column()
    team_id: string

    @ManyToOne(() => Team, team => team.projects)
    @JoinColumn({ name: 'team_id' })
    team: Team
}

export default Project