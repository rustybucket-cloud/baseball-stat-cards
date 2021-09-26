import Header from './components/Header';
import CardsList from './components/CardsList';
import { useSelector } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Header />
      <CardsList />
    </div>
  );
}

export default App;
