import './Button.css';

function Button({ label, onClick }) {
  return (
    <button
      type="button"
      className="button"
      onClick={() => {
        onClick(label);
      }}
    >
      {label}
    </button>
  );
}

export default Button;
