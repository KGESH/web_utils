'use client';

import { ChangeEvent } from 'react';
import { modeSchema, setConvertMode } from '@/app/(home)/(components)/Mode.cookie';

export default function Mode() {
  const handleMode = (e: ChangeEvent<HTMLInputElement>) => {
    const mode = modeSchema.parse(e.target.value);
    setConvertMode(mode);
  };

  return (
    <div className="join">
      <input
        value="encode"
        onChange={handleMode}
        className="join-item btn"
        type="radio"
        name="options"
        aria-label="Encode"
      />

      <input
        value="decode"
        onChange={handleMode}
        className="join-item btn"
        type="radio"
        name="options"
        aria-label="Decode"
      />
    </div>
  );
}
