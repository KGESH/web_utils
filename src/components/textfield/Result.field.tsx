type Props = {};

export default function ResultField() {
  return (
    <div className="form-control h-full w-full">
      <label className="label">
        <span className="label-text">Convert result</span>
      </label>
      <textarea className="textarea textarea-bordered h-full" placeholder="Bio"></textarea>
    </div>
  );
}
