import { Alert, Button, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { useState } from 'react';
import { signUp } from "./../../db/firebaseConfig";
import { useHistory } from "react-router-dom";

function SignupView(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const history = useHistory();
  const { toggleView } = props;

  const redirecionarParaHome = () => {
    history.push("/geral");
  }

  const mostrarErro = (erro) => {
    setErro(erro);
  }

  const cadastrarUser = () => {
    signUp(username, email, senha, redirecionarParaHome, mostrarErro);
  }

  return (
    <div>
        <h2>Faça seu cadastro</h2>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Username</InputGroupText>
          </InputGroupAddon>
          <Input onChange={(e) => { setUsername(e.target.value) }} />
        </InputGroup>
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

        <Button color="link" onClick={toggleView}>Já tenho cadastro</Button>

        <Button color="primary" onClick={cadastrarUser}>Cadastrar</Button>
        {erro && <Alert color="danger">{erro}</Alert>}
      </div>
  )
}

export default SignupView;
