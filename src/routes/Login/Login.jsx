import { useState } from 'react';
import LoginView from './LoginView';
import SignupView from './SignupView';

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleView = () => {
    setIsLogin(!isLogin);
  }

  return (
    <>
      {isLogin && <LoginView toggleView={toggleView} />}
      {!isLogin && <SignupView toggleView={toggleView} />}
    </>
  )
}

export default Login;
