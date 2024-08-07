import PropTypes from "prop-types";

export default function Child({ name, age, children }) {
  return (
    <div>
      <strong>Name: </strong> {name}
      <br />
      <strong>Age: </strong> {age}
      <br />
      <strong> Age (in 10 years):</strong> {age + 10}
      <p>{children}</p>
    </div>
  );
}

Child.propTypes = {
  progress: PropTypes.exact({
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }),
  status: PropTypes.oneOf(["LOADING", "ERROR"]),
  address: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  children: PropTypes.node,
};
