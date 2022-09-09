
function Text(props) {
  return (
    <div style={{fontSize: props.fontSize, fontWeight: "bold"}}>
      {props.children}
    </div>
  );
}

export default Text;
