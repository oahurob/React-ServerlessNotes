import {useEffect} from 'react';
import Container from './pages/Container';
import GlobalStyles from './components/GlobalStyle';
//Easybase
import {EasybaseProvider, useEasybase} from 'easybase-react';
import ebconfig from './ebconfig';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <EasybaseProvider ebconfig={ebconfig}>
        <Container/>
      </EasybaseProvider>
    </div>
  );
}

export default App;