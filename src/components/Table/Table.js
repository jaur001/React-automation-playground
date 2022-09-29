function Table(props) {
  const rows = props.rows.map((row,i) => {
    return row.map((cell,j) => (
      <td key={i+"-"+j}>{cell}</td>
    ));
  });
  const TableImpl = props.TableImpl;
  return (<TableImpl headers={props.headers} rows={rows} />);
}

export default Table;
