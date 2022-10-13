"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readCsvFile = void 0;
function readCsvFile(file) {
    return new Promise((resolve) => {
        const fileReader = new FileReader();
        fileReader.readAsText(file);
        fileReader.onloadend = () => {
            const chunk = fileReader.result;
            const lines = chunk.split('\n');
            const headers = lines[0].split(',');
            const values = lines.slice(1, lines.length - 1);
            const result = [];
            for (let i = 0; i < values.length; i++) {
                const item = {};
                for (let j = 0; j < headers.length; j++) {
                    item[headers[j]] = values[i].split(',')[j];
                }
                result.push(item);
            }
            resolve(result);
        };
    });
}
exports.readCsvFile = readCsvFile;
