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
                    name: 'name',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'slug',
                    type: 'varchar',
                    isNullable: false,
                    isUnique: true
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('teams')
    }

}
