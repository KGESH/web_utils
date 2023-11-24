'use client';
import { ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { getConvertMode, modeSchema, setConvertMode } from '@/app/(home)/(components)/Mode.storage';

export default function Mode() {
  const router = useRouter();
  const mode = getConvertMode() ?? 'decode';

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
        className="btn join-item"
        type="radio"
        name="options"
        aria-label="Encode"
      />

      <input
        value="decode"
        defaultChecked={mode === 'decode'}
        onChange={handleMode}
        className="btn join-item"
        type="radio"
        name="options"
        aria-label="Decode"
      />
    </div>
  );
}
