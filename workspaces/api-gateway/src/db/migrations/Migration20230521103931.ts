import { Migration } from '@mikro-orm/migrations';

export class Migration20230521103931 extends Migration {
  async up(): Promise<void> {
    this.addSql('alter table "bs" drop constraint "bs_a_id_foreign";');

    this.addSql(
      'alter table "bs" add constraint "bs_a_id_foreign" foreign key ("a_id") references "as" ("id") on update cascade on delete cascade;',
    );
  }

  async down(): Promise<void> {
    this.addSql('alter table "bs" drop constraint "bs_a_id_foreign";');

    this.addSql(
      'alter table "bs" add constraint "bs_a_id_foreign" foreign key ("a_id") references "as" ("id") on update cascade on delete set null;',
    );
  }
}
