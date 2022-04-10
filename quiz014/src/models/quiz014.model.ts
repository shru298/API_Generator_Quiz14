import {Entity, model, property} from '@loopback/repository';

@model()
export class Quiz014 extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  content?: string;


  constructor(data?: Partial<Quiz014>) {
    super(data);
  }
}

export interface Quiz014Relations {
  // describe navigational properties here
}

export type Quiz014WithRelations = Quiz014 & Quiz014Relations;
