const importAll = (files: any) => {
  let elements: any = {};
  files.keys().forEach((item: any, index: any) => {
    elements[item.replace("./", "")] = files(item);
  });
  return elements;
};

export { importAll };
