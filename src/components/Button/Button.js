import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
const ButtonSubmit = ({ value, handleClick }) => {
  //   return <button onClick={handleClick}>Add todo</button>;
  return (
    <Button
      disabled={!value}
      onClick={handleClick}
      variant="contained"
      endIcon={<AddIcon />}
    >
      Add Todo
    </Button>
  );
};
export default ButtonSubmit;
