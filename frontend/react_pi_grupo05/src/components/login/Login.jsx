import Button from "./Button";
import Input from "./Input";
import Password from "./Password";
import RegisterLink from "./RegisterLink";

const Login = () => {
  return (
    <div className="login-wrapper">
      <h2>Iniciar sesión</h2>
      <Input
        label="Correo electrónico"
        fullWidth
      />
      <Password />
      <Button
        label="Ingresar"
        fullWidth
      />
      <RegisterLink />
    </div>
  )
};

export default Login;