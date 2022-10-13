export function generateChunks(data: any[], size: number = 100): Array<any[]> {
  const result = [];
  for (let i = 0; i < data.length; i += size) {
    result.push(data.slice(i, i + size));
  }
  return result;
}
