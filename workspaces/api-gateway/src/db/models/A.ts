import { Entity, OneToOne, Property, Ref } from '@libs/mikro';

import { B } from './B';
import { Base } from './Base';

@Entity()
export class A extends Base {
  @Property()
  title: string;

  @OneToOne({
    entity: () => B,
    mappedBy: 'a',
    ref: true,
    orphanRemoval: true,
  })
  b: Ref<B>;
}
