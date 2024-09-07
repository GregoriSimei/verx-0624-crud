import { MigrationInterface, QueryRunner } from "typeorm";

export class UserTable1725735714092 implements MigrationInterface {
    name = 'UserTable1725735714092'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "verx-crud"."users" ("id" SERIAL NOT NULL, "externalId" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "pass" character varying NOT NULL, "birthday" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a97c84d6e346eb4f13df471e0d9" PRIMARY KEY ("id", "externalId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "verx-crud"."users"`);
    }

}
