
import './App.css';
import PayrollForm from './components/PayrollForm/PayrollForm';
import { Switch, Router, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <PayrollForm />
    </div>
  );
}


export default App;
