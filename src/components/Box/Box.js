import Text from "../Text/Text";

function Box(props) {
  const items = props.items;
  const renderItems = () => {
    return items.map((Item,index) => <Item key={index} parentId={props.id}/>);
  }
  return (
    <div>
      <Text fontSize={25}>Box</Text>
      {renderItems()}
    </div>
  );
}

export default Box;
