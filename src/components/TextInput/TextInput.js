import { useSelector,useDispatch } from "react-redux";
import ReactIocRedux from "../../ReactIocRedux";

import './TextInput.css';

function TextInput(props) {

  const value = useSelector(state => ReactIocRedux.getProperty(props.id,state));
  const dispatch = useDispatch();

  const updateValueHandler = (evt) => {
    const newValue = evt.target.value;
    dispatch({
      type: ReactIocRedux.actionNames.updateProperty,
      id: props.id,
      value: newValue,
    });  
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