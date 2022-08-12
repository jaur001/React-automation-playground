
function Box(props) {
  const items = props.items;
  const renderItems = () => {
    return items.map(item => item.render(item,props.id));
  }
  return (
    <div>
      <h2>Box Component</h2>
      {renderItems()}
    </div>
  );
}

export default Box;
