import { useState } from "react";
import AuthContextModule from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const { register } = AuthContextModule.useAuth();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    try {
      const { success, message } = await register(nombre, email, password);
      if (success) {
        navigate("/login", { state: { successMessage: 'Registro éxitoso, ahora puede loguearte' } });
      } else {
        setError(message);
      }
    } catch (err) {
      setError("Error en el registro: " + err.message);
    }
  };

  return (
    <div className="register-main-wrapper">
      <div className="login-container">
        <h2>Registrar cuenta</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="input-container">
            <h4>Nombre:</h4>
            <input
              className="input-register"
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <h4>Email:</h4>
            <input
              className="input-register"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <h4>Contraseña:</h4>
            <input
              className="input-register"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <h4>Confirmar contraseña:</h4>
            <input
              className="input-register"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn-primary" type="submit">
            Registrarse
          </button>
          <Link to="/login" className="link-to">¿Ya tienes cuenta? ¡Conéctate aquí!</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
