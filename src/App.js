import './App.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AppRouter from './components/AppRouter/AppRouter';

function App() {
  return (
    <Router>
      <div className="container">
        <Link to="/">
          <h1 className="title">React Fitness App</h1>
        </Link>
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;
