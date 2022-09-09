import './VerticalTable.css';

function VerticalTable(props) {
  const headers = props.headers.map((header,index) => (
    <th key={index}>{header}</th>
  ));
  const rows = props.rows.map((row,index) => (
    <tr key={index+1}>{row}</tr>
  ));
  rows.unshift(<tr key={0}>{headers}</tr>);
  return (
    <table className='VerticalTable'>
      {rows}
    </table>
  );
}

export default VerticalTable;
