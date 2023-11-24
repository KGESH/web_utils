'use client';
import { z } from 'zod';
import LocalStorage from '@/services/localstorage/LocalStorage';

export const modeSchema = z.union([z.literal('decode'), z.literal('encode')]);

export type IMode = z.infer<typeof modeSchema>;

export const getConvertMode = (): IMode | null => {
  const mode = LocalStorage.getItem('mode');

  const { success } = modeSchema.safeParse(mode);

  if (!success) return null;

  return modeSchema.parse(mode);
};

export const setConvertMode = (mode: IMode) => {
  LocalStorage.setItem('mode', mode);
};
