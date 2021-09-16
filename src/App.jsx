import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import { Login } from './routes/Login';

function App() {
  return (
    <>
      <Route path="/login">
        <Login />
      </Route>

      <Route path="/geral">
        <div>ROTA GERAL</div>
      </Route>

      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>
    </>
  );
}

export default App;
