"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quiz014 = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Quiz014 = class Quiz014 extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Quiz014.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Quiz014.prototype, "title", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Quiz014.prototype, "content", void 0);
Quiz014 = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Quiz014);
exports.Quiz014 = Quiz014;
//# sourceMappingURL=quiz014.model.js.map