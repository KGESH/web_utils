'use client';
import { ChangeEvent } from 'react';
import { modeSchema, setConvertMode } from '@/app/(home)/(components)/Mode.cookie';
import { useRouter } from 'next/navigation';
import { getConvertMode, IMode } from '@/app/(home)/(components)/Mode.cookie';

export default function Mode() {
  const router = useRouter();
  const mode =  getConvertMode()

  const handleMode = (e: ChangeEvent<HTMLInputElement>) => {
    const mode = modeSchema.parse(e.target.value);
    setConvertMode(mode);
    router.refresh();
  };

  return (
    <div className="join">
      <input
        value="encode"
        defaultChecked={mode === 'encode'}
        onChange={handleMode}
        className="join-item btn"
        type="radio"
        name="options"
        aria-label="Encode"
      />

      <input
        value="decode"
        defaultChecked={mode === 'decode'}
        onChange={handleMode}
        className="join-item btn"
        type="radio"
        name="options"
        aria-label="Decode"
      />
    </div>
  );
}
