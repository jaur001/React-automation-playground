import './App.css';
import PageLoader from './components/ReactIOC/PageLoader/PageLoader';
import Box from './components/Box/Box';
import Text from './components/Text/Text';
import TextInput from './components/TextInput/TextInput';
import Table from './components/Table/Table';
import VerticalTable from './components/Table/VerticalTable';

function App() {
  const components = {Box,Text,TextInput,Table,VerticalTable};
  const test = () => {
    console.log(this);
  }
  return (
    <PageLoader path="./pageStructure.json" components={components} functions={{test}} resources={{}}/>
  );
}

export default App;
