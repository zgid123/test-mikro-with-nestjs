import { Migration } from '@mikro-orm/migrations';

export class Migration20230521094940 extends Migration {
  async up(): Promise<void> {
    this.addSql('alter table "bs" drop constraint "bs_a_id_foreign";');

    this.addSql(
      'alter table "bs" alter column "a_id" type int using ("a_id"::int);',
    );
    this.addSql('alter table "bs" alter column "a_id" set not null;');
    this.addSql(
      'alter table "bs" add constraint "bs_a_id_foreign" foreign key ("a_id") references "as" ("id") on update cascade;',
    );
  }

  async down(): Promise<void> {
    this.addSql('alter table "bs" drop constraint "bs_a_id_foreign";');

    this.addSql(
      'alter table "bs" alter column "a_id" type int using ("a_id"::int);',
    );
    this.addSql('alter table "bs" alter column "a_id" drop not null;');
    this.addSql(
      'alter table "bs" add constraint "bs_a_id_foreign" foreign key ("a_id") references "as" ("id") on update cascade on delete set null;',
    );
  }
}
