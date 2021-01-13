import {MigrationInterface, QueryRunner, Table} from "typeorm"

export class CreateUserTeam1610576418304 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'user_teams',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                }, 
                {
                    name: 'user_id',
                    type: 'uuid'
                },
                {
                    name: 'team_id',
                    type: 'uuid'
                }
            ],
            foreignKeys: [
                {
                    name: 'UserTeamsUser',
                    columnNames: ['user_id'],
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                },
                {
                    name: 'UserTeamsTeam',
                    columnNames: ['team_id'],
                    referencedTableName: 'teams',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user_teams')
    }

}
