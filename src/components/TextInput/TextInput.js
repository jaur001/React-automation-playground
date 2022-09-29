import { useSelector,useDispatch } from "react-redux";

import './TextInput.css';

function TextInput(props) {
  const dispatch = useDispatch();
  const value = useSelector(state => props.getStateProp(state));
  const updateValueHandler = (evt) => {
    const newValue = evt.target.value;
    dispatch({
      type: "setStateProp",
      setStateProp: props.setStateProp,
      value: newValue
    });
  }

  return (
    <div className={`TextInput`}>
      <div className="title">{props.titleToDisplay}</div>
      <input type="text" placeholder={props.placeholder} onChange={updateValueHandler} value={value}/>
    </div>
  );
}

export default TextInput;