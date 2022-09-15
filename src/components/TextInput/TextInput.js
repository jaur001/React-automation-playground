import { useSelector,useDispatch } from "react-redux";
import StateController from "../../redux/StateController";

import './TextInput.css';

function TextInput(props) {
  const dispatch = useDispatch();
  const value = useSelector(state => StateController.getProperty(props.id,state));
  const updateValueHandler = (evt) => {
    const newValue = evt.target.value;
    StateController.updateProperty(props.id,newValue,dispatch);
  }

  props.function();

  return (
    <div className={`TextInput`}>
      <div className="title">{props.titleToDisplay}</div>
      <input type="text" placeholder={props.placeholder} onChange={updateValueHandler} value={value}/>
    </div>
  );
}

export default TextInput;