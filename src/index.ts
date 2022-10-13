import { generateChunks } from './chunk';
import { readCsvFile } from './csv';
import { readJsonFile } from './json';
import { readExcelFile } from './xlsx';

const readerFn: any = {
  json: readJsonFile,
  csv: readCsvFile,
  xlsx: readExcelFile,
};

export type OpenFileArgs = {
  useChunks?: boolean;
  chunkSize?: number;
  mapping?: Record<string, any>;
};

export function openFile({
  useChunks = false,
  chunkSize = 100,
  mapping,
}: OpenFileArgs) {
  return new Promise((resolve) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.xlsx, .json, .csv';

    input.click();

    input.addEventListener('change', async (event: any) => {
      const file: File = event.target.files[0];

      const ext = file.name.split('.').reverse()[0].toLowerCase();
      let data = await readerFn[ext](file);

      if (mapping) {
        const mapped = data.map((item: any) => {
          const result: Record<string, any> = {};
          for (const key in mapping) {
            result[mapping[key]] =
              item[key] instanceof Date ? item[key].toISOString() : item[key];
          }
          return result;
        });
        data = mapped;
      }

      resolve(useChunks ? generateChunks(data, chunkSize) : data);
      return;
    });
  });
}
