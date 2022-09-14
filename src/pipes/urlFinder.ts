//REGEX PATTERN TO EXTRACT URL LINKS FROM THE GIVEN TEXTS
const regexPattern: any =
  /([\w+]+\:\/\/)?([\w\d-]+\.)*[\w-]+[\.\:]\w+([\/\?\=\&\#\.]?[\w-]+)*\/?/gm;

export const urlCleaner = (text: string) => {
  let link: any = text.match(regexPattern);
  return text.replace(link, '');
};

export const urlFinder = (text: string): any => {
  return text.match(regexPattern);
};
