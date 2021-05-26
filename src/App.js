import {useEffect} from 'react';
import Notes from './pages/Notes';
import GlobalStyles from './components/GlobalStyle';
//Easybase
import {EasybaseProvider, useEasybase} from 'easybase-react';
import ebconfig from './ebconfig';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <EasybaseProvider ebconfig={ebconfig}>
        <Notes/>
      </EasybaseProvider>
    </div>
  );
}

export default App;