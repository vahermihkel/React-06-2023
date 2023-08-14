import React, { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../store/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { setLoggedIn } = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const login = () => {
    if (passwordRef.current.value === "123") {
      setLoggedIn(true);
      navigate("/admin");
    } else {
      setMessage("Parool ei ole korrektne!");
    }
  }

  return (
    <div>
      <div>{message}</div>
      <label>E-mail</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <label>Parool</label> <br />
      <input ref={passwordRef} type="text" /> <br />
      <button onClick={login}>Logi sisse</button> <br />
    </div>
  )
}

export default Login