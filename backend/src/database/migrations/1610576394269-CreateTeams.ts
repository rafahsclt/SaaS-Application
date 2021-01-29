import {MigrationInterface, QueryRunner, Table} from "typeorm"

export class CreateTeams1610576394269 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'teams',
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
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'slug',
                    type: 'varchar',
                    isUnique: true
                }
            ],
            foreignKeys: [
               {
                   name: 'OwnerTeam',
                   columnNames: ['user_id'],
                   referencedTableName: 'users',
                   referencedColumnNames: ['id'],
                   onDelete: 'CASCADE',
                   onUpdate: 'CASCADE'
               } 
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('teams')
    }

}
