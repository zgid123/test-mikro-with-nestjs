import type { MikroORM, EntityName, RequiredEntityData } from '@libs/mikro';

export function create<T extends object>(
  orm: MikroORM,
  entityClass: EntityName<T>,
  params: RequiredEntityData<T>,
): T {
  const repo = orm.em.getRepository<T>(entityClass);
  const record = repo.create(params);

  repo.persist(record);

  return record;
}
