import './HorizontalTable.css';

function HorizontalTable(props) {

  const getCells = (index) => {
    return props.rows.map(row => {
      return row[index];
    });
  }

  const rows = props.headers.map((header,index) => (
    <tr key={index}>
      <th>{header}</th>
      {getCells(index)}
    </tr>
  ));
  return (
    <table className='HorizontalTable'>
      {rows}
    </table>
  );
}

export default HorizontalTable;
