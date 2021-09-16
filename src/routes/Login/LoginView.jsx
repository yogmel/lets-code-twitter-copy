import { Alert, Button, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { signInWithGoogle, loginWithEmailAndPassword } from './../../db/firebaseConfig';
import { useHistory } from 'react-router-dom'
import { useState } from 'react';

function LoginView(props) {
  const { toggleView } = props;
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const history = useHistory();

  const redirecionarParaHome = () => {
    history.push("/geral");
  }

  const mostrarErro = (erro) => {
    setErro(erro);
  }

  const entrarComGoogle = () => {
    signInWithGoogle(redirecionarParaHome, mostrarErro);
  }

  const entrarComEmailSenha = () => {
    loginWithEmailAndPassword(email, senha, redirecionarParaHome, mostrarErro);
  }

  return (
    <div className="container">
      <h2>Faça seu login</h2>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Email</InputGroupText>
        </InputGroupAddon>
        <Input onChange={(e) => { setEmail(e.target.value) }} />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Senha</InputGroupText>
        </InputGroupAddon>
        <Input type="password" onChange={(e) => { setSenha(e.target.value) }} />
      </InputGroup>

      <Button color="link" onClick={toggleView}>Não possuo cadastro ainda</Button>

      <Button color="danger" className="my-3" onClick={entrarComGoogle}>Entrar com o Google</Button>
      <Button color="primary" onClick={entrarComEmailSenha}>Entrar</Button>

      {erro && <Alert color="danger">{erro}</Alert>}
    </div>
  )
}

export default LoginView;
