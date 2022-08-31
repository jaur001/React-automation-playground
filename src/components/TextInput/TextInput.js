import { useSelector,useDispatch } from "react-redux";
import { reactIocActionNames } from "../../redux/confiReducer/ReactIOCActions";
import { getProperty } from "../../utils/ReduxUtils";

import './TextInput.css';

function TextInput(props) {

  const value = useSelector(state => getProperty(props.id,state));
  const dispatch = useDispatch();

  const updateValueHandler = (evt) => {
    const newValue = evt.target.value;
    dispatch({
      type: reactIocActionNames.updateProperty,
      id: props.id,
      value: newValue,
    });  
  }

  props.function();

  return (
    <div className={`TextInput`}>
      <h4>{props.titleToDisplay}</h4>
      <input className={`textInput`} type="text" placeholder={props.placeholder} onChange={updateValueHandler} value={value}/>
    </div>
  );
}

export default TextInput;