import { Entity } from '@loopback/repository';
export declare class Quiz014 extends Entity {
    id?: string;
    title: string;
    content?: string;
    constructor(data?: Partial<Quiz014>);
}
export interface Quiz014Relations {
}
export declare type Quiz014WithRelations = Quiz014 & Quiz014Relations;
