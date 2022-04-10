import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Quiz014, Quiz014Relations } from '../models';
export declare class Quiz014Repository extends DefaultCrudRepository<Quiz014, typeof Quiz014.prototype.id, Quiz014Relations> {
    constructor(dataSource: DbDataSource);
}
