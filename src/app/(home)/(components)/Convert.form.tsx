'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { encodeToBase64, decodeFromBase64 } from '@/services/convert/Base64';
import { copyToClipboard } from '@/services/clipboard/Clipboard';
import { getConvertMode, IMode } from '@/app/(home)/(components)/Mode.storage';

type ConvertSourceInput = {
  source: string;
};

type ConvertResultInput = {
  result: string;
};

type Props = {
  // mode: IMode | null;
};

export default function ConvertForm({}: Props) {
  const mode = getConvertMode();

  const source = useForm<ConvertSourceInput>();
  const dest = useForm<ConvertResultInput>();

  const [showToast, setShowToast] = useState(false);

  const onConvertAndCopy: SubmitHandler<ConvertSourceInput> = async (data) => {
    const converted = onConvert(data.source);
    await copyToClipboard(converted);
    setShowToast(true);
  };

  const onConvert = (text: string) => {
    const converted = mode === 'encode' ? encodeToBase64(text) : decodeFromBase64(text);
    dest.setValue('result', converted);

    return converted;
  };

  const renderConvertButton = (mode: IMode | null) => {
    switch (mode) {
      case 'decode':
      case null: // Default mode
        return (
          <>
            <button type="submit" className="btn btn-success">
              Decode & Copy result
            </button>

            <button
              type="button"
              onClick={() => onConvert(source.getValues('source'))}
              className="btn btn-outline btn-success"
            >
              Decode Only
            </button>
          </>
        );

      case 'encode':
        return (
          <>
            <button type="submit" className="btn btn-success">
              Encode & Copy
            </button>

            <button
              type="button"
              onClick={() => onConvert(source.getValues('source'))}
              className="btn btn-outline btn-success"
            >
              Encode Only
            </button>
          </>
        );

      default:
        return <></>;
    }
  };

  useEffect(() => {
    let timerId = setTimeout(() => {
      setShowToast(false);
    }, 3000); // Set this to 5000 for 5 seconds

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [showToast]);

  return (
    <form onSubmit={source.handleSubmit(onConvertAndCopy)} className="flex h-full w-full flex-col space-y-4">
      {/*Source*/}
      <div className="h-1/3 w-full">
        <div className="form-control h-full w-full">
          <label className="label">
            <span className="label-text">Input your source text</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-full"
            placeholder="Input your source text"
            {...source.register('source')}
          />
        </div>
      </div>

      {/*Base 64 Encode Button*/}
      <div className="grid grid-cols-2 gap-4">{renderConvertButton(mode)}</div>

      {/*Copied Toast*/}
      <div
        role="alert"
        // className={`alert ${showToast ? 'visible' : 'invisible'}`}
        className={`alert ${showToast ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-6 w-6 shrink-0 stroke-info"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>Coiped!</span>
      </div>

      {/*Convert Result*/}
      <div className="h-1/3 w-full">
        <div className="form-control h-full w-full">
          <label className="label">
            <span className="label-text">Convert result</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-full"
            placeholder="Convert Result"
            {...dest.register('result')}
          />
        </div>
      </div>
    </form>
  );
}
