import TextField from "@mui/material/TextField";
const Input = ({ value, handleChange }) => {
  //   return <input value={value} onChange={handleChange} />;
  return (
    <TextField
      id="outlined-basic"
      value={value}
      onChange={handleChange}
      label="Add todo"
      variant="outlined"
    />
  );
};
export default Input;
