"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateChunks = void 0;
function generateChunks(data, size = 100) {
    const result = [];
    for (let i = 0; i < data.length; i += size) {
        result.push(data.slice(i, i + size));
    }
    return result;
}
exports.generateChunks = generateChunks;
