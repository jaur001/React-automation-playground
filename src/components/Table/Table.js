function Table(props) {
  props.rows.map(row => {
    return row.map(cell => (
      <td>{cell}</td>
    ));
  });
  return (
  <table>
    {props.tableImpl.render("","",{headers:props.headers,rows:props.rows})}
  </table>
  );
}

export default Table;
