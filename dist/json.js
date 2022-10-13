"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readJsonFile = void 0;
function readJsonFile(file) {
    return new Promise((resolve) => {
        const fileReader = new FileReader();
        fileReader.readAsText(file);
        fileReader.onloadend = () => {
            resolve(JSON.parse(fileReader.result));
        };
    });
}
exports.readJsonFile = readJsonFile;
