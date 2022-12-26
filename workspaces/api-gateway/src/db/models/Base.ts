import { Entity, PrimaryKey, Property } from '@libs/mikro';

@Entity({ abstract: true })
export abstract class Base {
  @PrimaryKey()
  id: number;

  @Property()
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
