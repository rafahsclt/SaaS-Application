import {MigrationInterface, QueryRunner, Table} from "typeorm"

export class CreateInvite1610576427415 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'invites',
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
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isNullable: false
                }
            ],
            foreignKeys: [
                {
                    name: 'UserInvite',
                    columnNames: ['user_id'],
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                },
                {
                    name: 'TeamInvite',
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
        await queryRunner.dropTable('invites')
    }

}
