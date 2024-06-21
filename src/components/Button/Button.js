import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
const ButtonSubmit = ({ editId, value, handleClick }) => {
  return (
    <Button
      disabled={!value}
      onClick={handleClick}
      variant="contained"
      endIcon={!editId && <AddIcon />}
    >
      {editId ? "Edit todo" : "Add todo"}
    </Button>
  );
};
export default ButtonSubmit;
