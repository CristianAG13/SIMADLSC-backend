"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Departamentos = void 0;
const typeorm_1 = require("typeorm");
const Profesores_1 = require("./Profesores");
let Departamentos = class Departamentos {
};
exports.Departamentos = Departamentos;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id_Departamento" }),
    __metadata("design:type", Number)
], Departamentos.prototype, "idDepartamento", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "nombre_departamento", length: 100 }),
    __metadata("design:type", String)
], Departamentos.prototype, "nombreDepartamento", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "id_Profesor" }),
    __metadata("design:type", Number)
], Departamentos.prototype, "idProfesor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Profesores_1.Profesores, (profesores) => profesores.departamentos, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "id_Profesor", referencedColumnName: "idProfesor" }]),
    __metadata("design:type", Profesores_1.Profesores)
], Departamentos.prototype, "idProfesor2", void 0);
exports.Departamentos = Departamentos = __decorate([
    (0, typeorm_1.Index)("id_Profesor", ["idProfesor"], {}),
    (0, typeorm_1.Entity)("departamentos", { schema: "simadlsc" })
], Departamentos);
//# sourceMappingURL=Departamentos.js.map