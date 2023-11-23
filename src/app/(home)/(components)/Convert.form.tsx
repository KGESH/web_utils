'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { encodeToBase64 } from '@/services/convert/Base64';
import { copyToClipboard } from '@/services/clipboard/Clipboard';
import { getConvertMode, IMode } from '@/app/(home)/(components)/Mode.cookie';

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

  const onConvertAndCopy: SubmitHandler<ConvertSourceInput> = async (data) => {
    const converted = onConvert(data.source);
    await copyToClipboard(converted);
  };

  const onConvert = (text: string) => {
    const converted = encodeToBase64(text);
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
              Decode & Copy
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
