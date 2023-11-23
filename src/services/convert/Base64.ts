import { Base64 } from 'js-base64';

export const encodeToBase64 = (source: string) => {
  return Base64.encode(source);
};

export const decodeFromBase64 = (source: string) => {
  return Base64.decode(source);
};
