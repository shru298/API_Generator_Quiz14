"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quiz014Controller = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let Quiz014Controller = class Quiz014Controller {
    constructor(quiz014Repository) {
        this.quiz014Repository = quiz014Repository;
    }
    async create(quiz014) {
        return this.quiz014Repository.create(quiz014);
    }
    async count(where) {
        return this.quiz014Repository.count(where);
    }
    async find(filter) {
        return this.quiz014Repository.find(filter);
    }
    async updateAll(quiz014, where) {
        return this.quiz014Repository.updateAll(quiz014, where);
    }
    async findById(id, filter) {
        return this.quiz014Repository.findById(id, filter);
    }
    async updateById(id, quiz014) {
        await this.quiz014Repository.updateById(id, quiz014);
    }
    async replaceById(id, quiz014) {
        await this.quiz014Repository.replaceById(id, quiz014);
    }
    async deleteById(id) {
        await this.quiz014Repository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/quiz014s'),
    (0, rest_1.response)(200, {
        description: 'Quiz014 model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Quiz014) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Quiz014, {
                    title: 'NewQuiz014',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Quiz014Controller.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/quiz014s/count'),
    (0, rest_1.response)(200, {
        description: 'Quiz014 model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Quiz014)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Quiz014Controller.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/quiz014s'),
    (0, rest_1.response)(200, {
        description: 'Array of Quiz014 model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Quiz014, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Quiz014)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Quiz014Controller.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/quiz014s'),
    (0, rest_1.response)(200, {
        description: 'Quiz014 PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Quiz014, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Quiz014)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Quiz014, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Quiz014Controller.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/quiz014s/{id}'),
    (0, rest_1.response)(200, {
        description: 'Quiz014 model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Quiz014, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Quiz014, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Quiz014Controller.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/quiz014s/{id}'),
    (0, rest_1.response)(204, {
        description: 'Quiz014 PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Quiz014, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Quiz014]),
    tslib_1.__metadata("design:returntype", Promise)
], Quiz014Controller.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/quiz014s/{id}'),
    (0, rest_1.response)(204, {
        description: 'Quiz014 PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Quiz014]),
    tslib_1.__metadata("design:returntype", Promise)
], Quiz014Controller.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/quiz014s/{id}'),
    (0, rest_1.response)(204, {
        description: 'Quiz014 DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], Quiz014Controller.prototype, "deleteById", null);
Quiz014Controller = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.Quiz014Repository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.Quiz014Repository])
], Quiz014Controller);
exports.Quiz014Controller = Quiz014Controller;
//# sourceMappingURL=quiz014.controller.js.map