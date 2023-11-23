import { Base64 } from 'js-base64';

export const encodeToBase64 = (source: string) => {
  return Base64.btoa(source);
};

export const decodeFromBase64 = (source: string) => {
  return Base64.atob(source);
};
