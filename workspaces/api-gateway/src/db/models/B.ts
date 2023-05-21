import { Entity, OneToOne, Property, Ref } from '@libs/mikro';

import { A } from './A';
import { Base } from './Base';

@Entity()
export class B extends Base {
  @Property()
  title: string;

  @OneToOne({
    entity: () => A,
    inversedBy: 'b',
    ref: true,
    nullable: true,
    deleteRule: 'cascade',
  })
  a: Ref<A>;
}
