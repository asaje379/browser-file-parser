export function readJsonFile(file: File) {
  return new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.readAsText(file);

    fileReader.onloadend = () => {
      resolve(JSON.parse(fileReader.result as string));
    };
  });
}
