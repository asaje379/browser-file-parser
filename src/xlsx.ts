import readXlsxFile from 'read-excel-file';

export async function readExcelFile(file: File) {
  const data = await readXlsxFile(file);
  const headers = data[0];
  const values = data.slice(1);

  const result = [];
  for (let i = 0; i < values.length; i++) {
    const item: any = {};

    for (let j = 0; j < headers.length; j++) {
      item[headers[j] as string] = values[i][j];
    }
    result.push(item);
  }

  return result;
}
