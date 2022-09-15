import './App.css';
import PageLoader from './components/PageLoader';
import Box from './components/Box/Box';
import Text from './components/Text/Text';
import StyleText from './components/StyleText/StyleText';
import TextInput from './components/TextInput/TextInput';
import Table from './components/Table/Table';
import VerticalTable from './components/Table/VerticalTable';
import HorizontalTable from './components/Table/HorizontalTable';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const components = {Box,Text,StyleText,TextInput,Table,VerticalTable,HorizontalTable};
  const test = () => {
    console.log("test");
  }
  const resources = {test}
  return (
    <PageLoader path="./pageStructure1.json" components={components} resources={resources} dispatch={dispatch}/>
  );
}

export default App;
