
import './App.css';
import {FormattedMessage} from 'react-intl'
import Header from './component/main/Header'
import Footer from './component/main/Footer'

function App() {
  return (
    <div className="App">
  <header className="App-header">
  <Header/>

  </header>
  <main>
    content
  </main>
  <footer className="App-header">
    <Footer/>
  </footer>
  
    </div>
  );
}

export default App;
