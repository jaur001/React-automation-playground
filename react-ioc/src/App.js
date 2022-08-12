import './App.css';
import PageLoader from './components/ReactIOC/PageLoader/PageLoader';
import Box from './components/Box/Box';
import Text from './components/Text/Text';
import TextInput from './components/TextInput/TextInput'

function App() {
  const components = {Box,Text,TextInput};
  return (
    <PageLoader path="./pageStructure.json" components={components} functions={[]} resources={[]}/>
  );
}

export default App;
