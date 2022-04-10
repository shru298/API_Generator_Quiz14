import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Quiz014 } from '../models';
import { Quiz014Repository } from '../repositories';
export declare class Quiz014Controller {
    quiz014Repository: Quiz014Repository;
    constructor(quiz014Repository: Quiz014Repository);
    create(quiz014: Omit<Quiz014, 'id'>): Promise<Quiz014>;
    count(where?: Where<Quiz014>): Promise<Count>;
    find(filter?: Filter<Quiz014>): Promise<Quiz014[]>;
    updateAll(quiz014: Quiz014, where?: Where<Quiz014>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Quiz014>): Promise<Quiz014>;
    updateById(id: string, quiz014: Quiz014): Promise<void>;
    replaceById(id: string, quiz014: Quiz014): Promise<void>;
    deleteById(id: string): Promise<void>;
}
