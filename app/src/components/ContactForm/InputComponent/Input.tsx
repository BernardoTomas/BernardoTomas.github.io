import "./Input.css";

type inputProps = {
  type: "email" | "text" | "textarea";
  id: string;
  label: string;
  changeHandler?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

function Input({ type, id, label, changeHandler }: inputProps) {
  return (
    <div className="input-container">
      <label htmlFor={id}>
        <span>{label}</span>
        <div className="input-border">
          {type === "textarea" ? (
            <textarea id={id} onChange={changeHandler} required />
          ) : (
            <input type={type} id={id} onChange={changeHandler} required />
          )}
        </div>
      </label>
    </div>
  );
}

export default Input;
