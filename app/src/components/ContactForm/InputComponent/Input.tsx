import "./Input.css";

type inputProps = {
  type: "email" | "text" | "textarea";
  id: string;
  placeholder: string;
  label: string;
  changeHandler?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

function Input({ type, id, placeholder, label, changeHandler }: inputProps) {
  return (
    <div className="input-container">
      <label htmlFor={id}>
        {label}
        {type === "textarea" ? (
          <textarea
            id={id}
            placeholder={placeholder}
            onChange={changeHandler}
            required
          />
        ) : (
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            onChange={changeHandler}
            required
          />
        )}
      </label>
    </div>
  );
}

export default Input;
