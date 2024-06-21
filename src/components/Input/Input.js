import TextField from "@mui/material/TextField";
const Input = ({ editId, value, handleChange }) => {
  return (
    <TextField
      className="modal__input"
      id="outlined-basic"
      value={value}
      onChange={handleChange}
      label={editId ? "changed todo`s title" : "Add todo`s title"}
      variant="outlined"
    />
  );
};
export default Input;
