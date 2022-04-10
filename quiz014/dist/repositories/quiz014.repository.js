"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quiz014Repository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let Quiz014Repository = class Quiz014Repository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Quiz014, dataSource);
    }
};
Quiz014Repository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.db')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource])
], Quiz014Repository);
exports.Quiz014Repository = Quiz014Repository;
//# sourceMappingURL=quiz014.repository.js.map