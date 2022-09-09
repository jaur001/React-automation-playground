import './App.css';
import ReactIoc from "./ReactIoc";
import Box from './components/Box/Box';
import Text from './components/Text/Text';
import StyleText from './components/StyleText/StyleText';
import TextInput from './components/TextInput/TextInput';
import Table from './components/Table/Table';
import VerticalTable from './components/Table/VerticalTable';
import HorizontalTable from './components/Table/HorizontalTable';

function App() {
  const components = {Box,Text,StyleText,TextInput,Table,VerticalTable,HorizontalTable};
  const test = () => {
    console.log("test");
  }
  return (
    <ReactIoc.PageLoader path="./pageStructure1.json" components={components} resources={{test}}/>
  );
}

export default App;
