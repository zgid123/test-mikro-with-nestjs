import { Migration } from '@mikro-orm/migrations';

export class Migration20230521093759 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "as" ("id" serial primary key, "created_at" timestamptz not null, "updated_at" timestamptz not null, "title" varchar(255) not null);',
    );

    this.addSql(
      'create table "bs" ("id" serial primary key, "created_at" timestamptz not null, "updated_at" timestamptz not null, "title" varchar(255) not null, "a_id" int not null);',
    );
    this.addSql(
      'alter table "bs" add constraint "bs_a_id_unique" unique ("a_id");',
    );

    this.addSql(
      'create table "tests" ("id" serial primary key, "created_at" timestamptz not null, "updated_at" timestamptz not null);',
    );

    this.addSql(
      'alter table "bs" add constraint "bs_a_id_foreign" foreign key ("a_id") references "as" ("id") on update cascade;',
    );
  }

  async down(): Promise<void> {
    this.addSql('alter table "bs" drop constraint "bs_a_id_foreign";');

    this.addSql('drop table if exists "as" cascade;');

    this.addSql('drop table if exists "bs" cascade;');

    this.addSql('drop table if exists "tests" cascade;');
  }
}
