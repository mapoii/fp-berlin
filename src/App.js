
import Links from './components/Links';
import Header from './components/Header';
import background from './components/background';
import About from './components/About';
import Menu from './components/Menu';
import './App.css';

function App() {
  return (
    <div className="App">
      <Links/>
      <Header/>
      <background/>
      <About/>
      <Menu/>
    </div>
  );
}

export default App;
