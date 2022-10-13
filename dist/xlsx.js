"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readExcelFile = void 0;
const read_excel_file_1 = __importDefault(require("read-excel-file"));
function readExcelFile(file) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield (0, read_excel_file_1.default)(file);
        const headers = data[0];
        const values = data.slice(1);
        const result = [];
        for (let i = 0; i < values.length; i++) {
            const item = {};
            for (let j = 0; j < headers.length; j++) {
                item[headers[j]] = values[i][j];
            }
            result.push(item);
        }
        return result;
    });
}
exports.readExcelFile = readExcelFile;
