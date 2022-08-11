import './App.css';
import Header from './components/header/Header';
import TopForm from './components/topForm/TopForm';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="main">
        <TopForm/>
      </main>
    </div>
  );
}

export default App;