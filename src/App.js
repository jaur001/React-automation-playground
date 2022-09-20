import './App.css';
import Box from './components/Box/Box';
import Button from "./components/Button/Button"
import Text from './components/Text/Text';
import StyleText from './components/StyleText/StyleText';
import TextInput from './components/TextInput/TextInput';
import Table from './components/Table/Table';
import VerticalTable from './components/Table/VerticalTable';
import HorizontalTable from './components/Table/HorizontalTable';
import { useDispatch } from 'react-redux';
import {PageHandler} from 'react-automation';

function App() {
  const dispatch = useDispatch();
  const components = {Box,Text,StyleText,TextInput,Table,VerticalTable,HorizontalTable,Button};
  const test = () => {
    console.log("test");
  }
  const resources = {test};
  return (
    <PageHandler path="./pages.json" components={components} resources={resources} dispatch={dispatch}/>
  );
}

export default App;
