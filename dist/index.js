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
Object.defineProperty(exports, "__esModule", { value: true });
exports.openFile = void 0;
const chunk_1 = require("./chunk");
const csv_1 = require("./csv");
const json_1 = require("./json");
const xlsx_1 = require("./xlsx");
const readerFn = {
    json: json_1.readJsonFile,
    csv: csv_1.readCsvFile,
    xlsx: xlsx_1.readExcelFile,
};
function openFile({ useChunks = false, chunkSize = 100, mapping, }) {
    return new Promise((resolve) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.xlsx, .json, .csv';
        input.click();
        input.addEventListener('change', (event) => __awaiter(this, void 0, void 0, function* () {
            const file = event.target.files[0];
            const ext = file.name.split('.').reverse()[0].toLowerCase();
            let data = yield readerFn[ext](file);
            if (mapping) {
                const mapped = data.map((item) => {
                    const result = {};
                    for (const key in mapping) {
                        result[mapping[key]] =
                            item[key] instanceof Date ? item[key].toISOString() : item[key];
                    }
                    return result;
                });
                data = mapped;
            }
            resolve(useChunks ? (0, chunk_1.generateChunks)(data, chunkSize) : data);
            return;
        }));
    });
}
exports.openFile = openFile;
