import ButtonSubmit from "../Button/Button";

import Input from "../Input/Input";

const Form = ({ handleEdit, handleChange, handleClick, value }) => {
  return (
    <form>
      <label>
        {/* <Input value={value} handleChange={handleChange} /> */}
        <ButtonSubmit value={value} handleClick={handleClick} />
      </label>
    </form>
  );
};
export default Form;
