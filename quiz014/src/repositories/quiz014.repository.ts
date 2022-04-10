import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Quiz014, Quiz014Relations} from '../models';

export class Quiz014Repository extends DefaultCrudRepository<
  Quiz014,
  typeof Quiz014.prototype.id,
  Quiz014Relations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Quiz014, dataSource);
  }
}
