import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Quiz014} from '../models';
import {Quiz014Repository} from '../repositories';

export class Quiz014Controller {
  constructor(
    @repository(Quiz014Repository)
    public quiz014Repository : Quiz014Repository,
  ) {}

  @post('/quiz014s')
  @response(200, {
    description: 'Quiz014 model instance',
    content: {'application/json': {schema: getModelSchemaRef(Quiz014)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Quiz014, {
            title: 'NewQuiz014',
            exclude: ['id'],
          }),
        },
      },
    })
    quiz014: Omit<Quiz014, 'id'>,
  ): Promise<Quiz014> {
    return this.quiz014Repository.create(quiz014);
  }

  @get('/quiz014s/count')
  @response(200, {
    description: 'Quiz014 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Quiz014) where?: Where<Quiz014>,
  ): Promise<Count> {
    return this.quiz014Repository.count(where);
  }

  @get('/quiz014s')
  @response(200, {
    description: 'Array of Quiz014 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Quiz014, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Quiz014) filter?: Filter<Quiz014>,
  ): Promise<Quiz014[]> {
    return this.quiz014Repository.find(filter);
  }

  @patch('/quiz014s')
  @response(200, {
    description: 'Quiz014 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Quiz014, {partial: true}),
        },
      },
    })
    quiz014: Quiz014,
    @param.where(Quiz014) where?: Where<Quiz014>,
  ): Promise<Count> {
    return this.quiz014Repository.updateAll(quiz014, where);
  }

  @get('/quiz014s/{id}')
  @response(200, {
    description: 'Quiz014 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Quiz014, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Quiz014, {exclude: 'where'}) filter?: FilterExcludingWhere<Quiz014>
  ): Promise<Quiz014> {
    return this.quiz014Repository.findById(id, filter);
  }

  @patch('/quiz014s/{id}')
  @response(204, {
    description: 'Quiz014 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Quiz014, {partial: true}),
        },
      },
    })
    quiz014: Quiz014,
  ): Promise<void> {
    await this.quiz014Repository.updateById(id, quiz014);
  }

  @put('/quiz014s/{id}')
  @response(204, {
    description: 'Quiz014 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() quiz014: Quiz014,
  ): Promise<void> {
    await this.quiz014Repository.replaceById(id, quiz014);
  }

  @del('/quiz014s/{id}')
  @response(204, {
    description: 'Quiz014 DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.quiz014Repository.deleteById(id);
  }
}
