import './VerticalTable.css';

function VerticalTable(props) {
  const headers = props.headers.map(header => (
    <td>{header}</td>
  ));
  const rows = props.rows.map(row => (
    <tr>{row[0]}</tr>
  ));
  rows.unshift(headers);
  return rows;
}

export default VerticalTable;
