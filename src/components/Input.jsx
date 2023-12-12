import PropTypes from "prop-types";

function Input({ name, value, onChange }) {
  return (
    <label>
      {name}:
      <input type="text" name={name} value={value} onChange={onChange} />
    </label>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
